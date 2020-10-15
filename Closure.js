/*The closure is combination of a function and the lexical env  within which that function was declared
closure in action that is inner function can have access to the outer function var/parametrsas well as all the global 
variables
return statement does not execute the function ,and function is only executed when it is followed by ()*/

/*const outerFun=(a)=>{
    let b=10; //b is stored in execution context/stack call of function outerFun //every function hs its own execution context
    const innerFun=()=>{
        console.log(`${a+b}`)

    }
    innerFun()//u have to call inner function also
}
outerFun(5)*/
//The above example is of lexical scoping also but below one is not example of lexical scoping
const outerFun=(a)=>{
    let b=10; //b is stored in execution context/stack call of function outerFun //every function hs its own execution context
    const innerFun=()=>{
        console.log(`${a+b}`)

    }
    //innerFun()//instead of calluing innerFiun ,we have to return innerFun
    return innerFun;//return statement does 
    //not execute the function ,and function is only executed when it is followed by ()
}
let inner=outerFun(5)
console.dir(inner)//returning inner function //this inner is having closure inside see in browser
inner()

//When we called outer function,then it's own execution context get created and when outer function returned inner function
//at that moment only the outer function context is popped out from memory  or over or removed from stack memory but still 
//inner function ableto access variables of outer function so it means somewhere in the meory
//is stored in closure so that this inner funcion access(closure will only bre created if function has inner function)

//The above example  is of pure closure unlike previous one because even after vanishing of outer function's
//scope ,inner function able to access outer function variables