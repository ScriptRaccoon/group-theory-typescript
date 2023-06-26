import { Group } from "./group";
import { ProductOfSets } from "./set";

export function productOfGroups<S, T>(
	A: Group<S>,
	B: Group<T>
): Group<[S, T]> {
	return new Group<[S, T]>({
		set: ProductOfSets(A.set, B.set),
		unit: [A.unit, B.unit],
		inverse: ([a, b]) => [A.inverse(a), B.inverse(b)],
		compose: ([a1, b1], [a2, b2]) => [
			A.compose(a1, a2),
			B.compose(b1, b2),
		],
	});
}
