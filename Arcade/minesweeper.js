var test = [[true, false, false],
          [false, true, false],
          [false, false, false]];

function minesweeper(input){
	var width = input[0].length;
	var height = input.length;
	var count = 0;
	var code = "";
	var output = [];

	for(var i = 0; i< height; i++) {

		output.push([]);

		for(var j = 0; j< width; j++) {

			count = 0;

			if(i==0 && j==0){
				code = "5689";
			} else if (i==0 && j ==width-1){
				code = "4578";
			} else if (i==height-1 && j ==0){
				code = "2356";
			}else if (i==height-1 && j ==width-1){
				code = "1245";
			}else if (i==0){
				code = "456789";
			}else if (j==0){
				code = "235689";
			}else if (j==width-1){
				code = "124578";
			}else if (i==height-1){
				code = "123456";
			}else {
				code = "123456789";
			}
	
			if(code.match(/1.*/)) if(input[i-1][j-1]==true) count++;
			if(code.match(/2.*/)) if(input[i-1][j]==true) count++;
			if(code.match(/3.*/)) if(input[i-1][j+1]==true) count++;
			if(code.match(/4.*/)) if(input[i][j-1]==true) count++;
			//if(code.match(/5.*/)) if(input[i][j]==true) count++;
			if(code.match(/6.*/)) if(input[i][j+1]==true) count++;
			if(code.match(/7.*/)) if(input[i+1][j-1]==true) count++;
			if(code.match(/8.*/)) if(input[i+1][j]==true) count++;
			if(code.match(/9.*/)) if(input[i+1][j+1]==true) count++;

		output[i].push(count);
		}
	}
	return(output);
}
