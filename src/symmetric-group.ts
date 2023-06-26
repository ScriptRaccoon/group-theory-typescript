import { Group } from "./group";
import { SetOfTuples } from "./set";
import { interval, listOfPermutations } from "./utils";

export function symmetricGroup(n: number): Group<number[]> {
	if (n < 0) throw "Only non-negative numbers are allowed";
	if (n != Math.ceil(n)) throw "Only whole numbers are allowed";

	return new Group<number[]>({
		set: new SetOfTuples(listOfPermutations(n)),
		unit: interval(n),
		inverse: (a) =>
			interval(n).map((val) =>
				a.findIndex((_val) => _val === val)
			),
		compose: (a, b) => a.map((c) => b[c]),
	});
}
