import { HomomorphismOfGroups } from "./homomorphism";
import { additiveGroupModulo } from "./modulo-group";
import { symmetricGroup } from "./symmetric-group";

const S3 = symmetricGroup(3);
const Zmod2 = additiveGroupModulo(2);

export const signum = new HomomorphismOfGroups({
	source: S3,
	target: Zmod2,
	map: (a) => {
		const fixedPoints = [0, 1, 2].filter((i) => a[i] === i);
		return fixedPoints.length === 1 ? 1 : 0;
	},
});
