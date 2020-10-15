
//Task
//1:2s student getRollNo
//2:2s name and age
//3:after 2 sec tell gender

const getRollNo=()=>{
    setTimeout(()=>{
        console.log("getting rollno after 2s");
        let rollno=[1,2,3,4];
        console.log(rollno);
        setTimeout((/*the argument passed in sTimeout i.e rollno[2] can be access here     */ rollnos)=>{
            console.log("getting name and age of rollno after 2 sec     "+rollnos);
            const biodata={
                name:"Priya",
                age:26,gender:"female"
            }
            console.log(`${biodata.name}  ${biodata.age}`)

            setTimeout((biodatas)=>{
                console.log(`gender is ${biodatas.gender}`)

            },2000,biodata)


        },2000,rollno[2])


    },2000)

}
getRollNo()

//So we use Promise to resolve this callback hell(nested callbacks) complecated logic