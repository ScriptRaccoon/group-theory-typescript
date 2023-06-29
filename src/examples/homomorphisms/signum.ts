import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { additiveGroupModulo } from "../groups/modulo-group";
import { S } from "../groups/sign-group";
import { symmetricGroup } from "../groups/symmetric-group";

const S3 = symmetricGroup(3);

export const signum = new HomomorphismOfGroups({
	source: S3,
	target: S,
	map: (a) => {
		const fixedPoints = [0, 1, 2].filter((i) => a[i] === i);
		return fixedPoints.length === 1 ? -1 : 1;
	},
});
