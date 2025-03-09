//function in js are objects we can use the instance of the objects by bind method

//arrow function
const square=(num)=>{
    num*num;
}
const jobs=[
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false},
]
const activeJobs =jobs.filter(job=>job.isActive);

/*
const person ={
    talk(){
        //hence we will use the command to set global to local object
        var self =this;
        setTimeout(function(){

            console.log("this",this);//returning the global variable 
            console.log("this",self);
        },1000);
    }
};
*/
const person ={
    talk(){
        //arrow function don't rebind the this keyword
        setTimeout(()=>{
            console.log("this",this);
        },1000);
    }
};
person.talk();

//mapping
const colors =['red','green','blue'];
const item=colors.map((color)=>{
    return `<li>${color}</li>`;
});
console.log(item);

//object disstructoring
const address ={
    street:'',
    city:'',
    country:''
};
const {street,city,country:loc}=address;

//spread operator
const first=[1,2,3];
const second=[4,5,6];
//const combined =first.concat(second);
const combined =[...first,'a',...second,'n'];

//class
class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
let per=new Person("hero");

//inheritence
class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log(this.name,"teaches",this.degree);
    }
}
per=new Teacher("hero","bTech   ");
per.walk();
per.teach();