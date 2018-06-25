/*Given a string, find out if its characters can be rearranged to form a
palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
	let dictionary = {};
	let oddCount = 0;
    for(let i = 0; i<inputString.length; i++) {
    	if(dictionary.hasOwnProperty(inputString[i])) {
    		dictionary[inputString[i]] ++;
    	} else {
    		dictionary[inputString[i]] = 1;
    	}
    }
    for(let letter in dictionary) {
    	if(letter/2!=0){
    		oddCount++;
    	}
    }
    return dictionary;
    return oddCount<2;
}

console.log(palindromeRearranging("aabb"));