import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";
import { interval, mod, squareOfArray } from "../../utils";

// all matrices here are defined over the field F_2

const matrices = squareOfArray(squareOfArray(interval(2)));

const invertibleMatrices = matrices.filter(
	([[a, b], [c, d]]) => mod(a * d - b * c, 2) !== 0
);

class SetOfMatrices extends SetWithEquality<number[][]> {
	equal(a: number[][], b: number[][]): boolean {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			const row_a = a[i];
			const row_b = b[i];
			if (row_a.length !== row_b.length) return false;
			for (let j = 0; j < row_a.length; j++) {
				if (mod(row_a[j], 2) !== mod(row_b[j], 2))
					return false;
			}
		}
		return true;
	}
}

export const GL2_F2 = new Group<number[][]>({
	set: new SetOfMatrices(invertibleMatrices),
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
