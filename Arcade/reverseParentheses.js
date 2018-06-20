/*You have a string s that consists of English letters, punctuation marks,
whitespace characters, and brackets. It is guaranteed that the parentheses in
s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching
parentheses, starting from the innermost pair. The results string should not
contain any parentheses.

Example

For string s = "a(bc)de", the output should be reverseParentheses(s) =
"acbde".
*/

let input = "a(bc)de"

function reverseParentheses(s) {
	let inParens = false;
	let valuesInParens = "";
	let stringOutput = "";

	for (let i=0; i<s.length; i++) {
		if (s[i]=="(") {
			inParens = true;
			continue;
		} else if (s[i]==")") {
			inParens=false;
			valuesInParens = valuesInParens.split("").reverse().join("");
			stringOutput += valuesInParens;
			valuesInParens = "";
			continue;
		}

		if(inParens) {
			valuesInParens += s[i];
		} else {
			stringOutput += s[i];
		}
	}
	console.log(stringOutput);
}

reverseParentheses(input)
