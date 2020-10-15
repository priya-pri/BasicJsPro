//Destructuring with arrays
//Earlier we use to access arrays as arr[0] ,arr[1] what if I can access it in one line like
//let {top1,top2}=arr then top1 will automatically equal to first element of array

//Destructuring in Objects
//In object we use to access like biodata.name biodata.class instead we can access it as let {name,class}=biodata
//then name attribute of biodata object will go in name variable and class attribute ogf biodata object will go in variable
//class (But keep in ming name of variables should be same attribute names defined in an object)

//Destructuring means to unpack values from arrays ,or properties from objects into distinct variables
//es5
const mylang=["php","java","js"];
//var top1=mylang[0];
//var top2=mylang[1];
//console.log(`my langs are ${top1} && ${top2}`);

//es6
//let [top1,top2,top3]=mylang;
//console.log(`my langs are ${top1} && ${top3}&& ${mylang.length}`);

let[top1,,top3]=mylang//u can skip values with delimiter as ,
console.log(`my langs are ${top1} && ${top3}&& ${mylang.length}`);




//u can swap values without using third variable in one line
let a=10
let b=20
//[a,b]=[b,a]
console.log(`${a}   ${b}`)

//Object destructing
/*const biodata={
    name:"Priya",
    classi:"High",
    Life:":)"
}*/
//console.log(`${biodata.name}   ${biodata.classi}    ${biodata.Life}`);
//by destructuring
//let {name,classi,Life}=biodata;//u have to give same name of property if u want to access property value
//console.log(`${name}  ${classi}  ${Life}`);

//or
//let {name:myname,classi,Life}=biodata
//console.log(`${myname}  ${classi}  ${Life}`);//if u want to use different name

const biodata={
    name:"Priya",
    classi:"High",
    Life:":)",
    hobbies:{
        first:"play"
    }
}

console.log(`${biodata.name}  ${biodata.classi}  ${biodata.Life}  ${biodata.hobbies.first}`);
let {name:myname,classi,Life,hobbies}=biodata
console.log(`${myname}  ${classi}  ${Life} ${hobbies.first}`);



