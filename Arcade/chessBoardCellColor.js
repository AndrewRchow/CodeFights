function chessBoardCellColor(cell1, cell2) {
    var letters = "ACEG";
    var numbers = "1357";
    
    var cell1Letter = cell1[0];
    var cell1Number = cell1[1];
    
    var cell2Letter = cell2[0];
    var cell2Number = cell2[1];
    
    if(letters.indexOf(cell1Letter)!=-1){
        if(letters.indexOf(cell2Letter)!=-1){
            if(cell1Number%2!=cell2Number%2){
	/*			console.log(false);*/
                return false;
            } else {
/*				console.log(false);*/
                return true;
            }
            
        }
        if(letters.indexOf(cell2Letter)==-1){
            if(cell1Number%2!=cell2Number%2){
                return true;
            } else {
                return false;
            }
            
        }
    }
    
     if(letters.indexOf(cell1Letter)==-1){
        if(letters.indexOf(cell2Letter)==-1){
            if(cell1Number%2!=cell2Number%2){
                return false;
            } else {
                return true;
            }
            
        }
        if(letters.indexOf(cell2Letter)!=-1){
            if(cell1Number%2!=cell2Number%2){
                return true;
            } else {
                return false;
            }
            
        }
    }
    
    
}
console.log(chessBoardCellColor("A1", "H3"));