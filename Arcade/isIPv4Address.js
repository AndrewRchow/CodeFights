/*An IP address is a numerical label assigned to each device (e.g., computer,
printer) participating in a computer network that uses the Internet Protocol
for communication. There are two versions of the Internet protocol, and thus
two versions of addresses. One of them is the IPv4 address.

IPv4 addresses are represented in dot-decimal notation, which consists of four
decimal numbers, each ranging from 0 to 255 inclusive, separated by dots,
e.g., 172.16.254.1.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/

function isIPv4Address(inputString) {
	let dotIndexes = [];
	for(let i = 0; i<inputString.length; i++) {
		if(inputString[i]==".") {
			dotIndexes.push(i);
		}
	}
	if(dotIndexes.indexOf(0)!=-1){
		return false;
	}
	console.log("hi");
	if(dotIndexes.indexOf(inputString.length-1)!=-1){
		return false;
	}
		console.log("hi2");

	if(dotIndexes.length!=3){
		return false;
	}
	console.log("hi3");

	if(isNaN(inputString.substring(0,dotIndexes[0])) || isNaN(inputString.substring(dotIndexes[0]+1,dotIndexes[1])) || isNaN(inputString.substring(dotIndexes[1]+1,dotIndexes[2])) || isNaN(inputString.substring(dotIndexes[2]+1,inputString.length))) {
		return false;
	}
	console.log("hi4");

	let first = parseInt(inputString.substring(0,dotIndexes[0]));
	let second = parseInt(inputString.substring(dotIndexes[0]+1,dotIndexes[1]));
	let third = parseInt(inputString.substring(dotIndexes[1]+1,dotIndexes[2]));
	let fourth = parseInt(inputString.substring(dotIndexes[2]+1,inputString.length));

	return ((first > -1 && first < 256) && (second > -1-1 && second < 256) && (third > -1 && third < 256) && (fourth > -1 && fourth < 256))

}

console.log(isIPv4Address("0.254.255.0"));

