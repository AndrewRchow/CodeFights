/*Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.*/

function variableName(name) {
    if(!isNaN(name[0])) return false;
    for(var i = 0; i<name.length; i++){
        if("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_".indexOf(name[i])==-1){
             return false;
        }
    }
    return true;
}
