import { Group } from "./group";
import { squareOfArray } from "../utils";

interface HomomorphismOfGroupsData<X, Y> {
	source: Group<X>;
	target: Group<Y>;
	map: (x: X) => Y;
}

export class HomomorphismOfGroups<X, Y>
	implements HomomorphismOfGroupsData<X, Y>
{
	public source: Group<X>;
	public target: Group<Y>;
	public map: (x: X) => Y;

	constructor(data: HomomorphismOfGroupsData<X, Y>) {
		const { source, target, map } = data;
		this.source = source;
		this.target = target;
		this.map = map;
		if (!this.isHomomorphism) {
			console.error(
				"Error: Homomorphism property is not satisfied"
			);
		}
	}

	get isClosed(): boolean {
		return this.source.elements.every((a) =>
			this.target.set.contains(this.map(a))
		);
	}

	isHomomorphicPair([a, b]: [X, X]): boolean {
		return this.target.set.equal(
			this.map(this.source.compose(a, b)),
			this.target.compose(this.map(a), this.map(b))
		);
	}

	get isHomomorphism(): boolean {
		const pairs = squareOfArray(this.source.elements);
		return (
			this.isClosed &&
			pairs.every(this.isHomomorphicPair.bind(this))
		);
	}

	get isInjective(): boolean {
		const pairs = squareOfArray(this.source.elements);
		return pairs.every(
			([a, b]) =>
				this.source.set.equal(a, b) ||
				!this.target.set.equal(this.map(a), this.map(b))
		);
	}

	get isSurjective(): boolean {
		return this.target.elements.every((b) =>
			this.source.elements.some((a) =>
				this.target.set.equal(this.map(a), b)
			)
		);
	}

	get isIsomorphism(): boolean {
		return this.isInjective && this.isSurjective;
	}

	get kernel(): Group<X> {
		const elements = this.source.elements.filter((a) =>
			this.target.set.equal(this.map(a), this.target.unit)
		);
		return this.source.subgroupOfList(elements);
	}

	get image(): Group<Y> {
		const elements = this.target.elements.filter((b) =>
			this.source.elements.some((a) =>
				this.target.set.equal(this.map(a), b)
			)
		);
		return this.target.subgroupOfList(elements);
	}
}
