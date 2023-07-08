import { Group } from "../../concepts/group";
import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { productOfGroups } from "../../constructions/products-of-groups";

export function isomSwap<X, Y>(A: Group<X>, B: Group<Y>) {
	return new HomomorphismOfGroups<[X, Y], [Y, X]>({
		source: productOfGroups(A, B),
		target: productOfGroups(B, A),
		map: ([a, b]) => [b, a],
	});
}
