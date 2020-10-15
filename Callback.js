//We can assign function to variable
//same way we can pass a function in argument also
//A callback is function that is to be executed after completion of another function
//js is an event driven language.This means instead of waiting for response before moving on,js will keep executing while listening for other events
//so that's why we need callback function.Callbacks are a way to make sure certain code doesn't execute until other code has already 
//finshed execution
//when we use seTimeout as setTimeout being async ,it will execute another function which we we wanted to execute after setTimecompletion
//that's to stop this call back came
//Problem:
/*const a=function(){
    setTimeout(()=>{},3000);
}
a()
b()*/
//Solution :

/*const a=function(b){
    setTimeout(()=>{},3000);
    b()
}
a(b)*/





/*
const perOne=(friend)=>{
    console.log(`I am busy I'm taking to ${friend} will call u back`)
    callfrnd()
}

const pertwo=()=>{
    console.log("hey i called u back");

}

perOne("Priya")
pertwo()*/







const perOne=(friend,callfrnd)=>{
    console.log(`I am busy I'm taking to ${friend} will call u back`)
    callfrnd()
}

const pertwo=()=>{
    console.log("hey i called u back");

}

perOne("Priya",pertwo)
