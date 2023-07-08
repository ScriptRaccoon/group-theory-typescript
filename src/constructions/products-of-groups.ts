import { Group } from "../concepts/group";
import { ProductOfSets } from "./products-of-sets";

export function productOfGroups<X, Y>(
	A: Group<X>,
	B: Group<Y>
): Group<[X, Y]> {
	return new Group<[X, Y]>({
		set: ProductOfSets(A.set, B.set),
		unit: [A.unit, B.unit],
		inverse: ([a, b]) => [A.inverse(a), B.inverse(b)],
		compose: ([a1, b1], [a2, b2]) => [
			A.compose(a1, a2),
			B.compose(b1, b2),
		],
	});
}
