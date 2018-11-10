var a ={a:1,b:2,d:3};
var b ={a:1,b:2,c:3};

function compare(a,b){
	var aKeys = Object.keys(a);
	var bKeys = Object.keys(b);
	for (var i = 0; i < aKeys.length; i++) {
		if(aKeys[i]!=bKeys[i])
			return false;
	}
		for (var i = 0; i < aKeys.length; i++) {
			console.log(a[aKeys[i]]);
			console.log(b[bKeys[i]]);
		if(a[aKeys[i]]!=b[bKeys[i]])
			return false;
	}

	return true;

}

console.log(compare(a,b));