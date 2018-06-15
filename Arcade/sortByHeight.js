/*Some people are standing in a row in a park. There are trees between them
which cannot be moved. Your task is to rearrange the people by their heights
in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

let input = [4, 2, 9, 11, 2, 16]

function sortByHeight(a) {
	let heights = [];
	let heightIndexes = [];
	for(i=0; i<a.length; i++){
		if(a[i]!=-1) {
			heights.push(a[i]);
			heightIndexes.push(i);
		}
	}

	heights = heights.sort(sortNumber);
	for(i=0; i<heights.length; i++) {
		a.splice(heightIndexes[i],1,heights[i]);
	}
	console.log(a);
	return a;
}
function sortNumber(a,b) {
    return a - b;
}

sortByHeight(input);