//var is function scoped and let,const are block scoped
//let behaves exactly as var but with block scope and const will behave as constant value with block scope

/*var whowillwin="India"

if(true){
    var whowillwin="NewZealand"
    console.log(whowillwin);
}
console.log(whowillwin);*/

/*let whowillwin="India"

if(true){
   let whowillwin="NewZealand"  //if use whowillwin without let then it means u are using the global declared variable in that case ,newzealand,newzealand will come as o/p
    console.log(whowillwin);
}
console.log(whowillwin);*/



const whowillwin="India"

if(true){
   const whowillwin="NewZealand"
    console.log(whowillwin);
}
console.log(whowillwin);




