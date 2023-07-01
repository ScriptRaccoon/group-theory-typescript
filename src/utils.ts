// reference for cartesian: https://stackoverflow.com/questions/65025411

type MapCartesian<T extends any[][]> = {
	[P in keyof T]: T[P] extends Array<infer U> ? U : never;
};
export const cartesian = <T extends any[][]>(
	...arr: T
): MapCartesian<T>[] =>
	arr.reduce(
		(a, b) => a.flatMap((c) => b.map((d) => [...c, d])),
		[[]]
	) as MapCartesian<T>[];

export function squareOfArray<X>(A: X[]): [X, X][] {
	return cartesian(A, A);
}

export function cubeOfArray<X>(A: X[]): [X, X, X][] {
	return cartesian(A, A, A);
}

export function listOfPermutations(n: number): number[][] {
	if (n < 0) throw "Only non-negative numbers are allowed";
	if (n != Math.ceil(n)) throw "Only whole numbers are allowed";

	if (n == 0) {
		return [[]];
	}

	const list = listOfPermutations(n - 1);

	const result: number[][] = [];

	for (const perm of list) {
		for (let index = 0; index < n; index++) {
			result.push([
				...perm.slice(0, index),
				n - 1,
				...perm.slice(index, perm.length),
			]);
		}
	}
	return result;
}

export function interval(n: number): number[] {
	return new Array(n).fill(0).map((_, i) => i);
}

export function mod(a: number, r: number) {
	return ((a % r) + r) % r;
}

export function equalTuples<T>(a: T[], b: T[]): boolean {
	return (
		a.length === b.length &&
		a.every((_, index) => a[index] === b[index])
	);
}

export function equalMatrices<T>(a: T[][], b: T[][]): boolean {
	return (
		a.length === b.length &&
		a.every((_, index) => equalTuples(a[index], b[index]))
	);
}
