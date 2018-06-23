// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be addTwoDigits(n) = 11.

let input = 39;

function addTwoDigits(n) {
	let stringInput = n.toString();
	return parseInt(stringInput[0]) + parseInt(stringInput[1]);
};

console.log(addTwoDigits(input));
