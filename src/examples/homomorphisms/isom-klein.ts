import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { productOfGroups } from "../../constructions/products-of-groups";
import { KleinFourGroup } from "../groups/klein-four-group";
import { additiveGroupModulo } from "../groups/modulo-group";

const Zmod2 = additiveGroupModulo(2)!;

const table: Record<string, [number, number]> = {
	e: [0, 0],
	a: [1, 0],
	b: [0, 1],
	c: [1, 1],
};

export const isomKlein = new HomomorphismOfGroups({
	source: KleinFourGroup,
	target: productOfGroups(Zmod2, Zmod2),
	map: (x) => table[x],
});
