import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";
import {
	equalTuples,
	interval,
	listOfPermutations,
} from "../../utils";

export function symmetricGroup(
	n: number
): Group<number[]> | undefined {
	if (n < 0) {
		console.error(
			"Error: Only non-negative numbers are allowed for S_n"
		);
		return undefined;
	}
	if (n != Math.ceil(n)) {
		console.error(
			"Error: Only whole numbers are allowed for S_n"
		);
		return undefined;
	}

	const permutations = listOfPermutations(n);
	if (!permutations) return undefined;

	return new Group<number[]>({
		set: new SetWithEquality(permutations, equalTuples),
		unit: interval(n),
		inverse: (a) =>
			interval(n).map((y) => a.findIndex((_y) => _y === y)),
		compose: (a, b) => b.map((y) => a[y]),
	});
}
