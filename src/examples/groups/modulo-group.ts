import { Group } from "../../concepts/group";
import { SetWithEquality } from "../../concepts/set";
import { interval } from "../../utils";

export function additiveGroupModulo(
	n: number
): Group<number> | undefined {
	if (n <= 0) {
		console.error(
			"Error: Only positive numbers are allowed for Z/nZ"
		);
		return undefined;
	}

	if (n != Math.ceil(n)) {
		console.error(
			"Error: Only whole numbers are allowed for Z/nZ"
		);
		return undefined;
	}

	return new Group<number>({
		set: new SetWithEquality(interval(n)),
		unit: 0,
		inverse: (a) => (a === 0 ? 0 : n - a),
		compose: (a, b) => (a + b >= n ? a + b - n : a + b),
	});
}
