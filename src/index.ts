import { S } from "./examples/groups/sign-group";
console.assert(S.isCommutative === true);
console.assert(S.order === 2);
console.assert(S.compose(-1, -1) === 1);

import { Zmod2 } from "./examples/groups/Z2";
console.assert(Zmod2.isCommutative === true);
console.assert(Zmod2.compose(1, 1) === 0);

import { additiveGroupModulo } from "./examples/groups/modulo-group";
const Zmod7 = additiveGroupModulo(7);
console.assert(Zmod7.order === 7);
console.assert(Zmod7.compose(5, 3) === 1);
console.assert(Zmod7.isCommutative === true);

import { symmetricGroup } from "./examples/groups/symmetric-group";
const S3 = symmetricGroup(3);
console.assert(S3.isCommutative === false);
console.assert(S3.order === 6);
console.assert(S3.set.equal(S3.inverse([1, 2, 0]), [2, 0, 1]));
console.assert(S3.elementOrder(S3.unit) === 0);
console.assert(S3.elementOrder([1, 0, 2]) === 2);
console.assert(S3.maximalElementOrder === 3);

import { KleinFourGroup } from "./examples/groups/klein-four-group";
console.assert(KleinFourGroup.order === 4);
console.assert(KleinFourGroup.isCommutative === true);
console.assert(KleinFourGroup.compose("a", "b") === "c");
console.assert(KleinFourGroup.maximalElementOrder === 2);

import { GL2_F2 } from "./examples/groups/GL2F2";
console.assert(GL2_F2.order === 6);
console.assert(GL2_F2.isCommutative === false);

import { productOfGroups } from "./constructions/products-of-groups";
const Zmod7_x_S3 = productOfGroups(Zmod7, S3);
console.assert(Zmod7_x_S3.isCommutative === false);
console.assert(Zmod7_x_S3.order === 42);
console.assert(Zmod7_x_S3.maximalElementOrder === 21);

import { signum } from "./examples/homomorphisms/signum";
console.assert(signum.isHomomorphism === true);
console.assert(
	S3.elements.filter((a) => signum.map(a) === S.unit).length === 3
);
console.assert(signum.isInjective === false);
console.assert(signum.isSurjective === true);
console.assert(signum.isIsomorphism === false);

import { isom } from "./examples/homomorphisms/isom-GL2-S3";
console.assert(isom.isIsomorphism);
