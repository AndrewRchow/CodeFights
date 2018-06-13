/*Given an array of integers, find the pair of adjacent elements that has the
largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

input = [3, 6, -2, -5, 7, 3]

function adjacentElementsProduct(inputArray) {
	var product;
	var greatestProduct = inputArray[0] * inputArray[1];

	for(i=0; i<inputArray.length; i++) {
		product = inputArray[i] * inputArray[i+1];
		if (product > greatestProduct) {
			greatestProduct = product;
		}
	}
	console.log(greatestProduct);
	return greatestProduct;
}

adjacentElementsProduct(input)