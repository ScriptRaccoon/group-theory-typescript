import { SetWithEquality } from "../concepts/set";

export function ProductOfSets<X, Y>(
	A: SetWithEquality<X>,
	B: SetWithEquality<Y>
): SetWithEquality<[X, Y]> {
	let product = new Set<[X, Y]>();
	for (const a of A) {
		for (const b of B) {
			product.add([a, b]);
		}
	}

	class HelperClass extends SetWithEquality<[X, Y]> {
		equal([a1, b1]: [X, Y], [a2, b2]: [X, Y]): boolean {
			return A.equal(a1, a2) && B.equal(b1, b2);
		}
	}

	return new HelperClass(product);
}
