import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { additiveGroupModulo } from "../groups/modulo-group";

const Zmod2 = additiveGroupModulo(2);
const Zmod4 = additiveGroupModulo(4);

export const emb = new HomomorphismOfGroups({
	source: Zmod2,
	target: Zmod4,
	map: (a) => 2 * a,
});
