import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { additiveGroupModulo } from "../groups/modulo-group";
import { SignGroup } from "../groups/sign-group";

const Zmod2 = additiveGroupModulo(2)!;

export const isomZmod2 = new HomomorphismOfGroups({
	source: Zmod2,
	target: SignGroup,
	map: (a) => (a === 0 ? 1 : -1),
});
