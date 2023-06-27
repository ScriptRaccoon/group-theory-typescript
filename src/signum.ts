import { HomomorphismOfGroups } from "./homomorphism";
import { additiveGroupModulo } from "./modulo-group";
import { S } from "./sign-group";
import { symmetricGroup } from "./symmetric-group";

const S3 = symmetricGroup(3);

export const signum = new HomomorphismOfGroups({
	source: S3,
	target: S,
	map: (a) => {
		const fixedPoints = [0, 1, 2].filter((i) => a[i] === i);
		return fixedPoints.length === 1 ? -1 : 1;
	},
});
