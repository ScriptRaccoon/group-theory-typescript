import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";
import {
	equalMatrices,
	interval,
	mod,
	squareOfArray,
} from "../../utils";

// all matrices here are defined over the field IF_2

type matrix = number[][];

const matrices: matrix[] = squareOfArray(squareOfArray(interval(2)));

const invertibleMatrices: matrix[] = matrices.filter(
	([[a, b], [c, d]]) => mod(a * d - b * c, 2) !== 0
);

export const GL2_F2 = new Group<matrix>({
	set: new SetWithEquality(invertibleMatrices, equalMatrices),
	unit: [
		[1, 0],
		[0, 1],
	],
	inverse: ([[a, b], [c, d]]) => [
		[mod(d, 2), mod(-b, 2)],
		[mod(-c, 2), mod(a, 2)],
	],
	compose: ([[a, b], [c, d]], [[p, q], [r, s]]) => [
		[mod(a * p + b * r, 2), mod(a * q + b * s, 2)],
		[mod(c * p + d * r, 2), mod(c * q + d * s, 2)],
	],
});
