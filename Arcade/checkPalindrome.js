// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

var input = "helleh";

function checkPalindrome(inputString) {
	var newInputString = inputString.split("").reverse().join("");
	if 	(inputString == newInputString) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}

checkPalindrome(input);


/*function checkPalindrome2(inputString) {
for (i=0; i >= 0; i++) {
	var endChar = inputString.charAt(inputString.length-i-1);
	console.log(endChar);
}
}

checkPalindrome2(input);*/