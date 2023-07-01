export class SetWithEquality<X> extends Set<X> {
	public equal: (a: X, b: X) => boolean;

	constructor(elements: X[], equal?: (a: X, b: X) => boolean) {
		super(elements);
		this.equal = equal ?? ((a, b) => a === b);
	}

	contains(a: X): boolean {
		return Array.from(this).some((b) => this.equal(a, b));
	}
}
