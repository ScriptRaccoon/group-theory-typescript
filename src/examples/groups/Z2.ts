import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";

export const Zmod2 = new Group<number>({
	set: new SetWithEquality([0, 1]),
	unit: 0,
	compose: (a, b) => (a == b && a == 1 ? 0 : a + b),
	inverse: (a) => a,
});
