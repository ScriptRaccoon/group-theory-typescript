import { Group } from "./group";
import { SetOfStrings } from "./set";

export const KleinFourGroup = new Group<string>({
	set: new SetOfStrings(["e", "a", "b", "c"]),
	unit: "e",
	inverse: (x) => x,
	compose: (x, y) => {
		if (x === "e") return y;
		if (y === "e") return x;
		if (x === y) return "e";
		return ["a", "b", "c"].find((u) => u !== x && u !== y)!;
	},
});
