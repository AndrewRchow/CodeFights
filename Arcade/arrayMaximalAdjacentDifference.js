/*Given an array of integers, find the maximal absolute difference between any
two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
	let max = 0;
	for(let i = 1; i<inputArray.length; i++) {
		let difference = Math.abs(inputArray[i]-inputArray[i-1])
		max = difference > max ? difference : max;
	}
	return max;
}

console.log(arrayMaximalAdjacentDifference([2,4,1,0]));

