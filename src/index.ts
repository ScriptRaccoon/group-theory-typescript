import { SetWithEquality } from "./concepts/set";
import { equalTuples } from "./utils";
const M = new SetWithEquality([[0, 1]], equalTuples);
console.assert(M.contains([0, 1]));
console.assert(!M.has([0, 1]));

import { SignGroup } from "./examples/groups/sign-group";
console.assert(SignGroup.isGroup);
console.assert(SignGroup.isCommutative);
console.assert(SignGroup.order === 2);
console.assert(SignGroup.compose(-1, -1) === 1);

import { Zmod2 } from "./examples/groups/Zmod2";
console.assert(Zmod2.isGroup);
console.assert(Zmod2.isCommutative);
console.assert(Zmod2.compose(1, 1) === 0);

import { additiveGroupModulo } from "./examples/groups/modulo-group";
const Zmod7 = additiveGroupModulo(7)!;
console.assert(Zmod7.order === 7);
console.assert(Zmod7.compose(5, 3) === 1);
console.assert(Zmod7.isCommutative);

import { symmetricGroup } from "./examples/groups/symmetric-group";
const S3 = symmetricGroup(3)!;
console.assert(!S3.isCommutative);
console.assert(S3.order === 6);
console.assert(S3.set.equal(S3.inverse([1, 2, 0]), [2, 0, 1]));
console.assert(S3.elementOrder(S3.unit) === 0);
console.assert(S3.elementOrder([1, 0, 2]) === 2);
console.assert(S3.maximalElementOrder === 3);
console.assert(
	S3.subgroup([
		[0, 1, 2],
		[1, 0, 2],
	]).isGroup
);
console.assert(
	S3.subgroup([
		[0, 1, 2],
		[2, 0, 1],
		[1, 2, 0],
	]).isGroup
);

import { KleinFourGroup } from "./examples/groups/klein-four-group";
console.assert(KleinFourGroup.order === 4);
console.assert(KleinFourGroup.isCommutative);
console.assert(KleinFourGroup.compose("a", "b") === "c");
console.assert(KleinFourGroup.maximalElementOrder === 2);
console.assert(KleinFourGroup.subgroup(["e", "a"]).isGroup);

import { GL2_F2 } from "./examples/groups/GL2F2";
console.assert(GL2_F2.isGroup);
console.assert(GL2_F2.order === 6);
console.assert(!GL2_F2.isCommutative);

import { productOfGroups } from "./constructions/products-of-groups";
const Zmod7_x_S3 = productOfGroups(Zmod7, S3);
console.assert(!Zmod7_x_S3.isCommutative);
console.assert(Zmod7_x_S3.order === 42);
console.assert(Zmod7_x_S3.maximalElementOrder === 21);

import { signum } from "./examples/homomorphisms/signum";
console.assert(signum.isHomomorphism);
console.assert(!signum.isInjective);
console.assert(signum.isSurjective);
console.assert(!signum.isIsomorphism);
console.assert(signum.kernel.order === 3);
console.assert(signum.image.order === 2);

import { emb } from "./examples/homomorphisms/embedding";
console.assert(emb.isHomomorphism);
console.assert(!emb.isSurjective);
console.assert(emb.isInjective);
console.assert(emb.kernel.isTrivial);
console.assert(emb.image.order == 2);

import { isomZmod2 } from "./examples/homomorphisms/isom-Zmod2";
console.assert(isomZmod2.isIsomorphism);

import { isomGL2 } from "./examples/homomorphisms/isom-GL2-S3";
console.assert(isomGL2.isIsomorphism);
console.assert(isomGL2.kernel.isTrivial);
console.assert(isomGL2.image.order === 6);

const Zmod6 = additiveGroupModulo(6)!;
console.assert(Zmod6.subgroup([0]).isGroup);
console.assert(Zmod6.subgroup([0, 2, 4]).isGroup);
console.assert(Zmod6.subgroup([0, 3]).isGroup);
console.assert(Zmod6.subgroup([0, 1, 2, 3, 4, 5]).isGroup);
