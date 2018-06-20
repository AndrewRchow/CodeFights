// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

let input = ["abc",
           "ded"];

function addBorder(picture) {
	let arrayWidth = picture[0].length + 2;
	let topAndBot = "*".repeat(arrayWidth);
	for (i=0; i<picture.length; i++) {
		picture[i] = "*" + picture[i] + "*";
	}
	picture.unshift(topAndBot);
	picture.push(topAndBot);
	console.log(picture);
	return picture;
}

addBorder(input)
