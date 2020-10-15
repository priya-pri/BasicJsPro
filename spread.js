//spread replace apply() method

//es5
/*function sum(a,b,c){
    console.log(a+b+c);
}
var arr=[1,2,3]
sum.apply(null,arr);*/

//spreadoperator
function sum(a,b,c){
    console.log(a+b+c);
}
var arr=[1,2,3]
sum(...arr)

//difference bet rest and spread
//we write rest parameter in function defination pparameters and it convert incoming args from function call 
//to array
//we write spread parameter in function call arguments which send array as value and this array will breakdown into separate values in function defination

//sum(a,b)--here a abd b are function args as they are in function call
//sum(a,b){}--here a and b are function parameters as they are part of function definition

//spread operator replace concat
/*let arr1=[1,2,3]
let arr2=[5,6,7]
console.log(arr.concat(arr2));
arr1=[...arr1,...arr2]
console.log(arr1)*/


//spread operator replaces copy 
let arrc1=[1,2,3]
//let arrc2=arrc1;
//arrc2.push(4,5);
//console.log(arrc2);
//console.log(arrc1);//problem arrc1 also changing so spread is resolution
let arrc2=[...arrc1,4,5];
console.log(arrc2);
console.log(arrc1);




