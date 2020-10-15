//es5

function sum(a,b){
    console.log(`${a+b}`)
}
sum(1,2,3,4);

//rest parameter will halp u to send infinite no of arguments

function sum(...input){//... will make paased arguments in array
    console.log(input)  //[ 1, 2, 3 ]
    console.log(...input)// 1 2 3
    let total=0;
    for( i of input){
        total+=i;
    }
    console.log(total)
}
sum(1,2,3)//rest will make thses passed args as array