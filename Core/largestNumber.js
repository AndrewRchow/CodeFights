/*Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be largestNumber(n) = 99.
*/

let input = 3;

function largestNumber(n) {
	return parseInt("9".repeat(n));
};

console.log(largestNumber(input));
