/*Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 1000.

[output] string

The result string after replacing all of its characters.*/

function alphabeticShift(inputString) {
    inputString = inputString.split("");
    var dictionary = "abcdefghijklmnopqrstuvwxyza";
    var nextChar;
    for(var i=0; i<inputString.length; i++){
        nextChar = dictionary[dictionary.indexOf(inputString[i])+1];
        inputString.splice(i,1,nextChar); 
        
    }
    inputString = inputString.join("");
    return inputString;
}
