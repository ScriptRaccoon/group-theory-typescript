import { Group } from "../../concepts/group";
import { HomomorphismOfGroups } from "../../concepts/homomorphism";

export function trivialHom<X, Y>(G: Group<X>, H: Group<Y>) {
	return new HomomorphismOfGroups({
		source: G,
		target: H,
		map: (a) => H.unit,
	});
}
