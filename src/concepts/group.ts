import { SetWithEquality } from "./set";
import { cartesian, cubeOfArray, squareOfArray } from "../utils";

interface GroupData<X> {
	set: SetWithEquality<X>;
	unit: X;
	inverse: (a: X) => X;
	compose: (a: X, b: X) => X;
}

export class Group<X> implements GroupData<X> {
	public set: SetWithEquality<X>;
	public unit: X;
	public inverse: (a: X) => X;
	public compose: (a: X, b: X) => X;

	constructor(data: GroupData<X>) {
		const { set, unit, inverse, compose } = data;
		this.set = set;
		this.unit = unit;
		this.inverse = inverse;
		this.compose = compose;

		if (!this.isGroup) {
			console.error("Error: Group axioms are not satisfied");
		}
	}

	get elements(): X[] {
		return Array.from(this.set);
	}

	isAssociativeTriple([a, b, c]: [X, X, X]): boolean {
		return this.set.equal(
			this.compose(this.compose(a, b), c),
			this.compose(a, this.compose(b, c))
		);
	}

	get isAssociative(): boolean {
		const triples = cubeOfArray(this.elements);
		return triples.every(this.isAssociativeTriple.bind(this));
	}

	respectsUnit(a: X): boolean {
		return (
			this.set.equal(this.compose(a, this.unit), a) &&
			this.set.equal(this.compose(this.unit, a), a)
		);
	}

	get hasUnit(): boolean {
		return this.elements.every(this.respectsUnit.bind(this));
	}

	hasInverseElement(a: X): boolean {
		return (
			this.set.equal(
				this.compose(this.inverse(a), a),
				this.unit
			) &&
			this.set.equal(
				this.compose(a, this.inverse(a)),
				this.unit
			)
		);
	}

	get hasInverseElements(): boolean {
		return this.elements.every(this.hasInverseElement.bind(this));
	}

	get isClosedUnderUnit(): boolean {
		return this.set.contains(this.unit);
	}

	get isClosedUnderComposition(): boolean {
		return squareOfArray(this.elements).every(([a, b]) =>
			this.set.contains(this.compose(a, b))
		);
	}

	get isClosedUnderInverses(): boolean {
		return this.elements.every((a) =>
			this.set.contains(this.inverse(a))
		);
	}

	get isClosed(): boolean {
		return (
			this.isClosedUnderUnit &&
			this.isClosedUnderComposition &&
			this.isClosedUnderInverses
		);
	}

	get isGroup(): boolean {
		return (
			this.isClosed &&
			this.isAssociative &&
			this.hasUnit &&
			this.hasInverseElements
		);
	}

	isCommutingPair([a, b]: [X, X]) {
		return this.set.equal(this.compose(a, b), this.compose(b, a));
	}

	get isCommutative(): boolean {
		const pairs = squareOfArray(this.elements);
		return pairs.every(this.isCommutingPair.bind(this));
	}

	get order(): number {
		return this.set.size;
	}

	get isTrivial(): boolean {
		return this.order === 1;
	}

	elementOrder(a: X): number {
		if (this.set.equal(a, this.unit)) return 0;
		let order = 1;
		let power = a;
		while (!this.set.equal(power, this.unit)) {
			order++;
			power = this.compose(power, a);
		}
		return order;
	}

	get maximalElementOrder(): number {
		let maximalElementOrder = 0;
		for (const a of this.elements) {
			maximalElementOrder = Math.max(
				maximalElementOrder,
				this.elementOrder(a)
			);
		}
		return maximalElementOrder;
	}

	get isCyclic(): boolean {
		return this.maximalElementOrder === this.order;
	}

	subgroupOfList(list: X[]): Group<X> {
		return new Group<X>({
			set: this.set.subset(list),
			unit: this.unit,
			compose: this.compose,
			inverse: this.inverse,
		});
	}

	subgroupGeneratedBy(generators: X[]): Group<X> {
		let elements = [this.unit];
		let done = false;

		const getNewElements = (): X[] => {
			const newElements = [];
			for (const element of elements) {
				for (const generator of generators) {
					const product = this.compose(element, generator);
					const isOld = elements
						.concat(newElements)
						.some((s) => this.set.equal(s, product));
					if (!isOld) newElements.push(product);
				}
			}
			return newElements;
		};

		while (!done) {
			const newElements = getNewElements();
			done = newElements.length === 0;
			elements = elements.concat(newElements);
		}

		return new Group<X>({
			set: this.set.subset(elements),
			unit: this.unit,
			compose: this.compose,
			inverse: this.inverse,
		});
	}
}
