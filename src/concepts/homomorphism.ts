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
		if (!this.isHomomorphism || !this.isClosed)
			throw "Homomorphic property is not satisfied";
	}

	isHomomorphicPair([a, b]: [X, X]): boolean {
		return this.target.set.equal(
			this.map(this.source.compose(a, b)),
			this.target.compose(this.map(a), this.map(b))
		);
	}

	get isHomomorphism(): boolean {
		const pairs = squareOfArray(this.source.elements);
		return pairs.every(this.isHomomorphicPair.bind(this));
	}

	get isClosed(): boolean {
		return this.source.elements.every((a) =>
			this.target.set.contains(this.map(a))
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
}
