let name;
console.log(name);
name="hello";
console.log(name);
const interestRate=0.4;
console.log(interestRate);

//String,Number,boolean,undefined
let selectedColor ='null';

//static languaage that cant be changed to
//dynamic language -can change in runtime
name=57;
console.log(name+" name type changed");

//Objects =key:value
let person = {
    oName:'Mosh',
    age:30
};
//Dot Notation 
person.oNamename="jon";
//bracket Notiation
person['oName']='nike';
console.log(person.oName+"=Name");
console.log(person);

//Arrays
let selectedColors =['red','blye'];
console.log(selectedColors[1]);
selectedColors[3]='green';
console.log(selectedColors);

//fuctions
function greet(name,ex){
    console.log(name+" function have to greet"+ex);
}
greet('mena',6);
function iS(interestRate,time,principal){
    return (interestRate*time*principal)/100;
}
console.log("Is the Si : "+iS(interestRate,3,2000));

