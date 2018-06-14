// Given an array of strings, return another array containing all of its longest
// strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

input = ["aba", "aa", "ad", "vcd", "aba"];

function allLongestStrings(inputArray) {
	let longestLength = 0;
	for(i=0; i<inputArray.length; i++) {
		if(longestLength<inputArray[i].length){
			longestLength=inputArray[i].length;
		}
	}

	let output=[];
	for(i=0; i<inputArray.length; i++) {
		if(longestLength==inputArray[i].length){
			output.push(inputArray[i]);
		}
	}

	console.log(output);
	return output;
}

allLongestStrings(input);