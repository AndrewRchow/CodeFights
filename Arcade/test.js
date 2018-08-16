function test(a,b){
	var isPrime = true;

	for (var i = a; i < b; i++) {
		for (var j = 2; j < i; j++) {
			if(i%j==0){
				isPrime = false;
				break;
			}
			isPrime = true;;
		}
		if(isPrime) console.log(i);
	}
}

test(1,100);

function fizzbuzz(n)
{
	for (var i = 1; i < n; i++) {
		if(i%15==0){
			console.log("fizzbuzz");
		} else if (i%5==0){
			console.log("buzz");
		} else if (i%3==0){
			console.log("fizz");
		} else {
			console.log(i);
		}
	}
}

function reverse(n) {
	var output = ""
	for(i=n.length-1; i>=0; i--){
		output += n[i];
	}
	return output;
}
console.log(reverse("hello there"));

