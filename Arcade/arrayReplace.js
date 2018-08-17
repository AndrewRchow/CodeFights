/*Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].*/

var inputArray = [1, 2, 1];
var elemToReplace = 1;
var substitutionElem = 3

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
	for(var i = 0; i<inputArray.length; i++){
		if(inputArray[i]==elemToReplace){
			inputArray.splice(i,1,substitutionElem)
		}
	}

	return inputArray;
}

console.log(arrayReplace(inputArray, elemToReplace, substitutionElem));

