import { SetWithEquality } from "../../concepts/set";

export class SetOfNumbers extends SetWithEquality<number> {
	equal(a: number, b: number): boolean {
		return a === b;
	}
}

export class SetOfTuples extends SetWithEquality<number[]> {
	equal(a: number[], b: number[]): boolean {
		return (
			a.length === b.length &&
			a.every((element, index) => element === b[index])
		);
	}
}

export class SetOfStrings extends SetWithEquality<string> {
	equal(a: string, b: string): boolean {
		return a === b;
	}
}
