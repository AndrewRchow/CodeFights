let matrix = [[1, 0, 1, 0, 0], 
              [1, 1, 0, 0, 1], 
              [1, 0, 0, 1, 2], 
              [0, 1, 0, 1, 0], 
              [1, 0, 1, 0, 1]];

function islands(matrix) {
  var check = []
  for(var k = 0; k<matrix.length;k++){
    check[k]=new Array(matrix.length);
  }
  let count = 0;

  for(let i =0; i<matrix.length; i++){
      for(let j =0; j<matrix[0].length; j++){
        if(matrix[i][j]==1){
          count++;
          matrix = spread(matrix, i,j);
        }
      }
  }
  return count;
}

function spread(matrix, i, j){
  if(i<0 || i >= matrix.length || j < 0 || j >=matrix[0].length || matrix[i][j]==0)
    return;
  matrix[i][j]=0;
  spread(matrix, i-1,j-1);
  spread(matrix, i,j-1);
  spread(matrix,i+1,j-1);
  
  spread(matrix, i-1,j);
  spread(matrix, i,j);
  spread(matrix, i+1,j);

  spread(matrix, i-1,j+1);
  spread(matrix, i,j+1);
  spread(matrix, i+1,j+1);

  return matrix;
}

console.log(islands(matrix));