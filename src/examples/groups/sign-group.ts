import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";

export const SignGroup = new Group<number>({
	set: new SetWithEquality([-1, 1]),
	unit: 1,
	compose: (a, b) => a * b,
	inverse: (a) => 1 / a,
});
