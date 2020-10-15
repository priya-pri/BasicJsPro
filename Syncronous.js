const func2=()=>{
    console.log('fun 2 is running');
}
const func1=()=>{
    console.log('func1 is running');
    func2();
    console.log('func1 is ending');
}
func1();


//----Example of login form---------------------------
const wait=()=>{
    console.log('js part is waiting')
    let start=new Date().getTime();
    console.log(new Date().getTime()-start);
    while(new Date().getTime()-start>5000);
    console.log('all right donne');
}
btn.addEventListener('click',wait);