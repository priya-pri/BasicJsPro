const func2=()=>{
    //anonymous function we have created in first arg of setTimeout
    setTimeout( ()=>{
        console.log('fun 2 is running');
    },3000);
    //setTimeout(function which needs to be called, after how much time the mentioned function needs to be called);
    
}
const func1=()=>{
    console.log('func1 is running');
    func2();
    console.log('func1 is ending');
}
func1();

//In syncronous file ,we have seen ,line12 will not be executed before finishing of line11
//in asyncronous ,there is no such dependency and setTimeout(),ajax api calls is part of 
//asyncrounous functionality
//callback function example:btn.addEventListener('click',wait)


const wait=()=>{
    console.log('js part is waiting')
    setTimeout(()=>{
        console.log('all done');

    },5000)
}
btn.addEventListener('click',wait);