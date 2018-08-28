/*var test = {b:1, a:2, 1:1};
var test2 = {a:1, b:2};



function check(a,b){
  aKeys = Object.keys(a);
  bKeys = Object.keys(b);
  aValues = Object.values(a);
  aValues = Object.values(b);


*/


var passed = 3;

var addTo = function () {
  var inner = 2;
  return passed + inner;
};

console.log(addTo())


passed = 4;
console.log(addTo())
