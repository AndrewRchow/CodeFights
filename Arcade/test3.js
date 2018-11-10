// var fullname = 'John'
// var obj = {
// 	fullname:'colin',
// 	prop: {
// 		fullname: 'Aurelioo',
// 		getFullname:function() {
// 			return this.fullname;
// 		}
// 	}
// };
// console.log(obj.prop.getFullname());
// var test = obj.prop.getFullname;
// console.log(test());


/*
String.prototype.ree = function(numberR) {
	var box = [];
	for(var i = 0; i<numberR; i++){
		box.push(this);
	}
	return box;
}

console.log('hello'.ree(3));
*/

/*var a = {
	i:1,
	toString:function(){
		return this.i++;
	}
}
if(a==1 && a==2 && a==3){
	console.log(true);
}
*/
/*var aﾠ = 1;
var a = 2;
var ﾠa = 3;
if(aﾠ==1 && a== 2 &&ﾠa==3) {
    console.log("Why hello there!")
}*/

function create(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const error = false;
			if(error){
				resolve('good');
			}else {
				reject('wrong');
			}
		},2000);
	})
}

async function init() {
	await create();
	console.log('hi');
}