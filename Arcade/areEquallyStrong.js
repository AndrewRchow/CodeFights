/*Call two arms equally strong if the heaviest weights they each are able to
lift are equal.

Call two people equally strong if their strongest arms are equally strong (the
strongest arm can be both the right and the left), and so are their weakest
arms.

Given your and your friend's arms' lifting capabilities find out if you two
are equally strong.
*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	let yourStrongest = (yourLeft > yourRight) ? yourLeft : yourRight;
	let friendsStrongest = (friendsLeft > friendsRight) ? friendsLeft : friendsRight;
	return(yourLeft + yourRight == friendsLeft + friendsRight && yourStrongest == friendsStrongest);
}	

console.log(areEquallyStrong(16,10,9,15));
