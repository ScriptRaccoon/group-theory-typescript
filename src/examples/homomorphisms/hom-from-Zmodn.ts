import { Group } from "../../concepts/group";
import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { additiveGroupModulo } from "../groups/modulo-group";

export function homFromTorsion<X>(
	a: X,
	G: Group<X>,
	n: number
): HomomorphismOfGroups<number, X> | undefined {
	const Zmodn = additiveGroupModulo(n);
	if (!Zmodn) {
		console.error("Error: Z/nZ is not defined");
		return undefined;
	}

	const power = G.power(a, n);
	if (!G.set.equal(power, G.unit)) {
		console.error("Error: The element is not n-torsion.");
		return undefined;
	}

	return new HomomorphismOfGroups({
		source: Zmodn,
		target: G,
		map: (k) => G.power(a, k),
	});
}
