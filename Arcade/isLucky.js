/*Ticket numbers usually consist of an even number of digits. A ticket number is
considered lucky if the sum of the first half of the digits is equal to the
sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be isLucky(n) = true; For n = 239017, the
output should be isLucky(n) = false.
*/

input = 1230

function isLucky(n) {
	let stringInput = n.toString();
	let totalLength = stringInput.length
	let halfLength = totalLength/2;
	let leftTotal = 0;
	let rightTotal = 0;

	for (i=0; i<halfLength; i++) {
		leftTotal +=  parseInt(stringInput.substring(i,i+1));

	}

	for (i=halfLength; i<totalLength; i++) {
		rightTotal +=  parseInt(stringInput.substring(i,i+1));

	}
	if(leftTotal===rightTotal) {
		return true;
	} else {
		return false;
	}

}

isLucky(input)