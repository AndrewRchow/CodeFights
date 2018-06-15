// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

let input1 = "aabcc"
let input2 = "adcaa"

function commonCharacterCount(s1, s2) {
	let checkArray = s1.split("");
	let count = 0;

	for (i=0; i<s2.length; i++) {
		if(checkArray.indexOf(s2[i])!=-1) {
			count++;
				checkArray.splice(checkArray.indexOf(s2[i]),1);
		}
	}
	console.log(count);
	return count;
}

commonCharacterCount(input1, input2)