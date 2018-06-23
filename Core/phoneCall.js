/*Some phone usage rate may be described as follows:

first minute of a call costs min1 cents, each minute from the 2nd up to 10th
(inclusive) costs min2_10 cents each minute after 10th costs min11 cents. You
have s cents on your account before the call. What is the duration of the
longest call (in minutes rounded down to the nearest integer) you can have?

Example

For min1 = 3, min2_10 = 1, min11 = 2 and s = 20, the output should be
phoneCall(min1, min2_10, min11, s) = 14.
*/

function phoneCall(min1, min2_10, min11, s) {
	let time = 0;
	s -= min1;
	time = 1;
	if(s==0) {
		return time;
	} else if (s<0) {
		time -= 1;
		return time;
	}
	for(let i=1; i<10; i++) {
		s -= min2_10;
		time += 1
		if(s==0) {
			return time;
		} else if (s<0) {
			time -= 1;
			return time;
		}
	}
	while(s>0) {
		s -= min11;
		time += 1
		if(s==0) {
			return time;
		} else if (s<0) {
			time -= 1;
			return time;
		}
	}
}

console.log(phoneCall(3, 1, 2, 20));
