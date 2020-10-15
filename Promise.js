//Keeps on tracking your function or event and after it's completion it will give u it's output
//Promise 3 stages
//1:pending
//2:fullfill
//3:reject
//Through Promise we can better write the callback hell

//Task
//1:2s roll no
//2:2s name and age

//We can create promise using promise constructor or using promise object
//When u create Promise object with new keyword ,u have to call  function called executor(resolve,reject)
//promise object two methods:then and catch

//using promise constructor
//Here we are producing promise
const pobj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4];
        resolve(roll_no);//resolve:-use this when ur condition fullfiled
        //reject('Error');//if promise fails //catch to catch error thrown by this clause

    },2000)
});

//usine promise object
const getBiodata =(indexdata)=>{/*take every task as promise ,means u have to create this as promise*/
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{

            let biodata={
                name:"Priya",
                age:"25"
            }
            resolve(`${indexdata}  ${biodata.name} ${biodata.age}`)

        },2000,indexdata)

    })

}
//Here we are consuming promise
/*pobj1.then((rollno)=>{//we will use to show output of resolve and it acceses resolve parameters
console.log(rollno)
getBiodata(rollno[1]).then((result)=>{
    console.log(result);
})
}).catch((error)=>{
    console.log(error)
})*/

//or
/*pobj1.then((rollno)=>{//we will use to show output of resolve and it acceses resolve parameters
    console.log(rollno)
   return  getBiodata(rollno[1])
    }).then((result)=>{
        console.log(result);
    })
     .catch((error)=>{
        console.log(error)
    })*/



    //Convert above try and catch in async await form 
    //To make any function async ,put prefix async before function
    //the word async before function means that function will always returns a promise
    //So the async keyword is added to functions to tell them to return a promise rather than directly 
    //returning a value


    //So promise  will either give us data or not, and we  fetched that data earlier with help of then catch
    //let's say pobj1 is returning data rollno array [promise returns data ]
    async function getData(){

      const rollnodata=  await pobj1;// we are fetching data from this promise 
        //why await :to tell function to wait some sec as we are getting data from promise obj after some sec i.e 2 sec
        //now the moment data will come ,it will get stored in rollnodata
        console.log(rollnodata);
        const biodatas=await getBiodata(rollnodata);
        return biodatas
   
    }

    //Earlier first promise was ependent on second promise  but now using async wait we can remove that ependency
   const getData1= getData().then((biodata)=>{
       console.log(biodata)

   })//as async functions always returns promise and we can fetch promise
   //using then