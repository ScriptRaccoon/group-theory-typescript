import { HomomorphismOfGroups } from "../../concepts/homomorphism";
import { GL2_F2 } from "../groups/GL2F2";
import { symmetricGroup } from "../groups/symmetric-group";

const S3 = symmetricGroup(3)!;

// this is an isomorphism from S3 to GL_2(IF_2)
export const isom = new HomomorphismOfGroups({
	source: S3,
	target: GL2_F2,
	map: (a) => [
		[Number(a[0] !== 1), Number(a[1] !== 1)],
		[Number(a[0] > 0), Number(a[1] > 0)],
	],
});
