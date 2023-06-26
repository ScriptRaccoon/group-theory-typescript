import { partialZ } from "./additive-group";
const G = partialZ(10);
console.assert(G.isClosed === false);
console.assert(G.isCommutative === true);
console.assert(G.compose(1, 2) === 3);
console.assert(G.order === 10);

import { additiveGroupModulo } from "./modulo-group";
const Zmod7 = additiveGroupModulo(7);
console.assert(Zmod7.isClosed === true);
console.assert(Zmod7.isCommutative === true);
console.assert(Zmod7.compose(5, 3) == 1);

import { symmetricGroup } from "./symmetric-group";
const S3 = symmetricGroup(3);
console.assert(S3.isCommutative === false);
console.assert(S3.isClosed === true);
console.assert(S3.order === 6);
console.assert(S3.set.equal(S3.inverse([1, 2, 0]), [2, 0, 1]));
console.assert(S3.elementOrder(S3.unit) === 0);
console.assert(S3.elementOrder([1, 0, 2]) === 2);
console.assert(S3.maximalElementOrder === 3);

import { productOfGroups } from "./products-of-groups";
const Zmod7_x_S3 = productOfGroups(Zmod7, S3);
console.assert(Zmod7_x_S3.isCommutative === false);
console.assert(Zmod7_x_S3.isClosed === true);
console.assert(Zmod7_x_S3.order === 42);
console.assert(Zmod7_x_S3.maximalElementOrder === 21);
