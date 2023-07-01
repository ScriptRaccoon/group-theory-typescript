export class SetWithEquality<T> extends Set<T> {
	public equal: (a: T, b: T) => boolean;

	constructor(elements: T[], equal?: (a: T, b: T) => boolean) {
		super(elements);
		this.equal = equal ?? ((a, b) => a === b);
	}

	contains(a: T): boolean {
		return Array.from(this).some((b) => this.equal(a, b));
	}
}
