import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { productOfGroups } from "../../constructions/products-of-groups";

export function pairHom<X, Y, Z>(
	f: HomomorphismOfGroups<Z, X>,
	g: HomomorphismOfGroups<Z, Y>
) {
	if (f.source !== g.source) {
		console.error("Error: Sources do not match");
		return undefined;
	}

	return new HomomorphismOfGroups<Z, [X, Y]>({
		source: f.source,
		target: productOfGroups(f.target, g.target),
		map: (c) => [f.map(c), g.map(c)],
	});
}
