import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";
import {
	equalTuples,
	interval,
	listOfPermutations,
} from "../../utils";
SetWithEquality;
export function symmetricGroup(n: number): Group<number[]> {
	if (n < 0) throw "Only non-negative numbers are allowed";
	if (n != Math.ceil(n)) throw "Only whole numbers are allowed";

	return new Group<number[]>({
		set: new SetWithEquality(listOfPermutations(n), equalTuples),
		unit: interval(n),
		inverse: (a) =>
			interval(n).map((y) => a.findIndex((_y) => _y === y)),
		compose: (a, b) => b.map((y) => a[y]),
	});
}
