// example of a set with equality
import { SetWithEquality } from "./concepts/set";
import { equalTuples } from "./utils";
const M = new SetWithEquality([[0, 1]], equalTuples);
console.assert(M.contains([0, 1]));
console.assert(!M.has([0, 1]));

// tests for the group {+1,-1} with multiplication
import { SignGroup } from "./examples/groups/sign-group";
console.assert(SignGroup.isGroup);
console.assert(SignGroup.isCommutative);
console.assert(SignGroup.order === 2);
console.assert(SignGroup.compose(-1, -1) === 1);

// tests for the group Z/7Z
import { additiveGroupModulo } from "./examples/groups/modulo-group";
const Zmod7 = additiveGroupModulo(7)!;
console.assert(Zmod7.isGroup);
console.assert(Zmod7.isCommutative);
console.assert(Zmod7.order === 7);
console.assert(Zmod7.compose(5, 3) === 1);

// tests for the symmetric group S_3
import { symmetricGroup } from "./examples/groups/symmetric-group";
const S3 = symmetricGroup(3)!;
console.assert(S3.isGroup);
console.assert(!S3.isCommutative);
console.assert(S3.order === 6);
console.assert(S3.set.equal(S3.inverse([1, 2, 0]), [2, 0, 1]));

// tests for Klein Four Group
import { KleinFourGroup } from "./examples/groups/klein-four-group";
console.assert(KleinFourGroup.isGroup);
console.assert(KleinFourGroup.isCommutative);
console.assert(KleinFourGroup.order === 4);
console.assert(KleinFourGroup.compose("a", "b") === "c");

// tests for GL_2(IF_2)
import { GL2_F2 } from "./examples/groups/GL2F2";
console.assert(GL2_F2.isGroup);
console.assert(GL2_F2.order === 6);
console.assert(!GL2_F2.isCommutative);

// tests for the product Z/7Z x S_3
import { productOfGroups } from "./constructions/products-of-groups";
const Zmod7_x_S3 = productOfGroups(Zmod7, S3);
console.assert(Zmod7_x_S3.isGroup);
console.assert(!Zmod7_x_S3.isCommutative);
console.assert(Zmod7_x_S3.order === 42);

// tests for element orders
console.assert(S3.elementOrder(S3.unit) === 0);
console.assert(S3.elementOrder([1, 0, 2]) === 2);
console.assert(S3.maximalElementOrder === 3);
console.assert(KleinFourGroup.maximalElementOrder === 2);
console.assert(Zmod7_x_S3.maximalElementOrder === 21);

// tests for cyclic groups
const Zmod6 = additiveGroupModulo(6)!;
console.assert(Zmod6.isCyclic);
console.assert(!S3.isCyclic);
console.assert(!productOfGroups(Zmod6, Zmod6).isCyclic);
console.assert(productOfGroups(Zmod6, Zmod7).isCyclic);

// tests for signum homomorphism S_3 ---> {+1,-1}
import { signum } from "./examples/homomorphisms/signum";
console.assert(signum.isHomomorphism);
console.assert(!signum.isInjective);
console.assert(signum.isSurjective);
console.assert(!signum.isIsomorphism);
console.assert(signum.kernel.order === 3);
console.assert(signum.kernel.isCyclic);
console.assert(signum.image.order === 2);

// tests for the embedding Z/2Z ---> Z/4Z
import { emb } from "./examples/homomorphisms/embedding";
console.assert(emb.isHomomorphism);
console.assert(!emb.isSurjective);
console.assert(emb.isInjective);
console.assert(emb.kernel.isTrivial);
console.assert(emb.image.order == 2);

// tests for the isomorphism Z/2Z ---> {+1,-1}
import { isomZmod2 } from "./examples/homomorphisms/isom-Zmod2";
console.assert(isomZmod2.isIsomorphism);

// tests for the isomorphism S_3 ---> GL_2(IF_2)
import { isomGL2 } from "./examples/homomorphisms/isom-GL2-S3";
console.assert(isomGL2.isIsomorphism);
console.assert(isomGL2.kernel.isTrivial);
console.assert(isomGL2.image.order === 6);

// tests for generated subgroups
console.assert(Zmod6.subgroupGeneratedBy([]).isTrivial);
console.assert(Zmod6.subgroupGeneratedBy([1]).order === 6);
console.assert(Zmod6.subgroupGeneratedBy([2]).order === 3);
console.assert(Zmod6.subgroupGeneratedBy([3]).order === 2);
console.assert(Zmod6.subgroupGeneratedBy([4]).order === 3);
console.assert(
	KleinFourGroup.subgroupGeneratedBy(["a", "b"]).order == 4
);
console.assert(S3.subgroupGeneratedBy([[1, 0, 2]]).order == 2);
console.assert(S3.subgroupGeneratedBy([[0, 2, 1]]).order == 2);
console.assert(S3.subgroupGeneratedBy([[1, 2, 0]]).order == 3);
console.assert(S3.subgroupGeneratedBy([[1, 2, 0]]).isCommutative);
console.assert(
	S3.subgroupGeneratedBy([
		[1, 0, 2],
		[0, 2, 1],
	]).order == 6
);

// tests for element powers
console.assert(Zmod6.power(2, 0) === 0);
console.assert(Zmod6.power(2, 1) === 2);
console.assert(Zmod6.power(2, -1) === 4);
console.assert(KleinFourGroup.power("a", 2) === "e");
console.assert(S3.set.equal(S3.power([2, 0, 1], 3), [0, 1, 2]));
console.assert(
	S3.elements.every((a) =>
		S3.set.equal(S3.inverse(a), S3.power(a, -1))
	)
);
console.assert(
	S3.elements.every((a) =>
		S3.set.equal(
			S3.compose(S3.inverse(a), S3.inverse(a)),
			S3.power(a, -2)
		)
	)
);

// tests for the homomorphisms Z/nZ ---> G
import { homFromTorsion } from "./examples/homomorphisms/hom-from-Zmodn";
const f = homFromTorsion(3, Zmod6, 2);
console.assert(f != undefined);
console.assert(f?.isHomomorphism);
console.assert(f?.isInjective);

const g = homFromTorsion([2, 0, 1], S3, 3);
console.assert(g != undefined);
console.assert(g?.isHomomorphism);
console.assert(g?.isInjective);
