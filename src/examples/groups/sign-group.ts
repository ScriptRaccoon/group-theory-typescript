import { Group } from "../../concepts/group";
import { SetOfNumbers } from "../sets/index";

export const S = new Group<number>({
	set: new SetOfNumbers([-1, 1]),
	unit: 1,
	compose: (a, b) => a * b,
	inverse: (a) => 1 / a,
});
