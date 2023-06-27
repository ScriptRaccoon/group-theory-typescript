import { Group } from "./group";
import { SetOfNumbers } from "./set";

export const S = new Group<number>({
	set: new SetOfNumbers([-1, 1]),
	unit: 1,
	compose: (a, b) => a * b,
	inverse: (a) => 1 / a,
});
