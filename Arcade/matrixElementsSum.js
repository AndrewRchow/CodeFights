// After they became famous, the CodeBots all decided to move to a new building
// and live together. The building is represented by a rectangular matrix of
// rooms. Each cell in the matrix contains an integer that represents the price
// of the room. Some rooms are free (their cost is 0), but that's probably
// because they are haunted, so all the bots are afraid of them. That is why any
// room that is free or is located anywhere below a free room in the same column
// is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for
// them.

input = [[0, 1, 1, 2], 
[0, 5, 0, 0], 
[2, 0, 3, 3]];

function matrixElementsSum(matrix) {
	let total = 0;
	let hauntedIndexes = [];

	for (i=0; i<matrix.length; i++){
		for (j=0; j<matrix[0].length; j++){
			if(matrix[i][j]==0) {
				hauntedIndexes.push(j);
			} else if (!hauntedIndexes.includes(j)) {
				total+=matrix[i][j];
			}
		}
	}

	console.log(total);
	return total;
}

matrixElementsSum(input);