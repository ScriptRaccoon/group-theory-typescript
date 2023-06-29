import { Group } from "../../concepts/group";
import { interval, listOfPermutations } from "../../utils";
import { SetOfTuples } from "../sets/index";

export function symmetricGroup(n: number): Group<number[]> {
	if (n < 0) throw "Only non-negative numbers are allowed";
	if (n != Math.ceil(n)) throw "Only whole numbers are allowed";

	return new Group<number[]>({
		set: new SetOfTuples(listOfPermutations(n)),
		unit: interval(n),
		inverse: (a) =>
			interval(n).map((y) => a.findIndex((_y) => _y === y)),
		compose: (a, b) => b.map((y) => a[y]),
	});
}
