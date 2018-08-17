/*Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.*/

function evenDigitsOnly(n) {
	var stringInput = n.toString();
	for(var i=0; i<stringInput.length; i++){
		if(stringInput[i]%2!=0){
			return false;
		}
	}
	return true;
}

evenDigitsOnly(234);
