export function productOfTwoArrays<X, Y>(A: X[], B: Y[]): [X, Y][] {
	let result: [X, Y][] = [];
	for (const a of A) {
		for (const b of B) {
			result.push([a, b]);
		}
	}
	return result;
}

export function productOfThreeArrays<X, Y, Z>(
	A: X[],
	B: Y[],
	C: Z[]
): [X, Y, Z][] {
	let result: [X, Y, Z][] = [];
	for (const a of A) {
		for (const b of B) {
			for (const c of C) {
				result.push([a, b, c]);
			}
		}
	}
	return result;
}

export function squareOfArray<X>(A: X[]): [X, X][] {
	return productOfTwoArrays(A, A);
}

export function cubeOfArray<X>(A: X[]): [X, X, X][] {
	return productOfThreeArrays(A, A, A);
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
