/*function count(arrayOfWords){
    var result = {}
    var current_count = -1;
    var current_word = undefined;
    for (var i = 0; i result[current_word]){
            result[current_word] = current_count
        }
        console.log(result);
    return result;
}

var a = ["book", "book", "hello", "job", "job", "job", "hello", "hello"] ;
count(a);*/

debugger;   
var input = ["book", "book", "hello", "job", "job", "job", "hello", "hello", "hello", "hello","whack","boy","boy"];

function long(n) {
  var output = {};
  var current;
  var count;

  for(var i=0; i<n.length; i++){
    if(i==0){
      current = n[i];
      count=1;
    }
    else{
      if(n[i]==current){
        count++;

      }else{
        if(current in output){
          if(output[current]<count){
            output[current]=count;
          }
        }else{
          output[current]=count;
        }

        current = n[i];
        count=1;
      }
    }

    if(i==n.length-1){
       if(current in output){
          if(output[current]<count){
            output[current]=count;
          }
        }else{
          output[current]=count;
        }
    }

    
  }

  return(output);
}

console.log(long(input));

/*var a ={a:undefined};

console.log(a.hasOwnProperty("a"));*/