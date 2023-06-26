import { Group } from "./group";
import { SetOfNumbers } from "./set";
import { interval } from "./utils";

export function additiveGroupModulo(n: number): Group<number> {
	if (n <= 0) throw "Only positive numbers are allowed";
	if (n != Math.ceil(n)) throw "Only whole numbers are allowed";

	return new Group<number>({
		set: new SetOfNumbers(interval(n)),
		unit: 0,
		inverse: (a) => (a === 0 ? 0 : n - a),
		compose: (a, b) => (a + b >= n ? a + b - n : a + b),
	});
}
