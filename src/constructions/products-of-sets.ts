import { SetWithEquality } from "../concepts/set";
import { cartesian } from "../utils";

export function ProductOfSets<X, Y>(
	A: SetWithEquality<X>,
	B: SetWithEquality<Y>
): SetWithEquality<[X, Y]> {
	const product: [X, Y][] = [];
	for (const a of A) {
		for (const b of B) {
			product.push([a, b]);
		}
	}

	return new SetWithEquality<[X, Y]>(
		product,
		([a1, b1], [a2, b2]) => A.equal(a1, a2) && B.equal(b1, b2)
	);
}
