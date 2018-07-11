
function clear(n){
	
	var output = 1;

	while(n>1){
		output = output * n;
		n-=1; 
	}

	return output
}


console.log(clear(5));
