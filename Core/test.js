/*function person() {
	var name = "andrew"
	this.getName = function(){
		return name;
	}
}

var me = new person();

console.dir(me.getName);*/

/*function test(input) {
	var dict = {};

	var maj = input.length/2;

	for (var i = 0; i<input.length; i++) {
		if(dict[input[i]]==undefined) {
			dict[input[i]]=1;
			console.log('hi');
		} else {
			dict[input[i]]++;
		}

		if(dict[input[i]] >= maj){
			return input[i];
		}

	}

	return dict;
}
*/
/*
(function() {
	var a = b = 100;
})();
console.log(b);
console.log(NaN===NaN);*/


/*var addTo = function(passed){
	var name = "andrew";

	return name;
}
*/

/*function reverseWords(array1, number){
 var difference;

 for(var i = 0; i<array1.length; i++){
 	difference = (number-array1[i]);
 	console.log(array1[i]);
 	console.log(difference);
 	if(array1.indexOf(difference)!==-1 && array1.indexOf(difference)!==i){
 		return true;
 	}
 }
 return false;
}
console.log(reverseWords([6,4,3,2,1,7], 9));
*/

/*function fact(number) {
	if (number == 1 ){
		return number;
	}

	return number*fact(number-1);
}

console.log(fact(2));*/

/*var test = "bleh";
test=test.replace("b",2);
console.log(test);*/

function foo() {
	var a;

	console.log( a ); // undefined

	a = 2;
}

console.log(-3/0);