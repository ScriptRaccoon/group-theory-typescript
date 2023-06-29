export abstract class SetWithEquality<T> extends Set<T> {
	abstract equal(a: T, b: T): boolean;

	contains(a: T): boolean {
		return Array.from(this).some((b) => this.equal(a, b));
	}
}
