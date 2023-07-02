import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { Zmod2 } from "../groups/Zmod2";
import { SignGroup } from "../groups/sign-group";

export const isomZmod2 = new HomomorphismOfGroups({
	source: Zmod2,
	target: SignGroup,
	map: (a) => (a === 0 ? 1 : -1),
});
