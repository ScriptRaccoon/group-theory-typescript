import { Group } from "./group";
import { SetOfNumbers } from "./set";
import { interval } from "./utils";

export function partialZ(n: number) {
	return new Group<number>({
		set: new SetOfNumbers(interval(n)),
		unit: 0,
		inverse: (a) => -a,
		compose: (a, b) => a + b,
	});
}
