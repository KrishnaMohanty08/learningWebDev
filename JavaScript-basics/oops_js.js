//object
const circleC1 = {
    radius :1,
    location:{
        x:1,
        y:1
    },
};

/*
object litrals // often used as

let x={};//let x=new Object();
new String(); //'',"",``
new Boolean();//true,false
new Number();//1,2,3, ...
*/

//Factory Function
function createCircle(radius){
    const circle = {
        radius,
        draw:function(){
            console.log('draw');
        }
    };
    return circle;
}

//Constructor function
function Circle(radius){
    //console.log('this',this);

    this.radius =radius;
    this.draw= function(){
        console.log('draw');
    }
}

//execution
const circleC2 = createCircle(2); // Using the factory function
circleC2.draw(); // Call the draw method on the created circle

const anotherCircle = new Circle(1); // Using the constructor function
anotherCircle.draw(); // Call the draw method on the created circle


console.log(Circle.name); // The .name property returns the name of the function as a string.

console.log(Circle.length); // The .length property returns the number of parameters the function expects.
// In this case, Circle expects one parameter (radius).

Circle.apply({}, [1,4,7]); 
// The apply() method calls the Circle function with a specified `this` value (an empty object in this case)
// and an array of arguments. Here, it sets `this.radius` to 1 on the empty object.
// The first argument is the context (the object to bind `this` to), and the second argument is an array of arguments.

// Using call() method
Circle.call({}, 1, 2, 3); 
// The call() method is similar to apply(), but it takes arguments separately instead of as an array.
// Here, it sets `this.radius` to 1 on the empty object, and the additional arguments (2, 3) are ignored
// because the Circle function only expects one argument (radius). 

console.log("****Primitives are copied by value. Objects are copied by their reference types****");
let x=10;
let y=x;
x=20;
console.log('x: '+x+' y: '+y);

//now a is a object and value edits the value stored in a 
let a={value:10};
let b=a;
a.value=20;
console.log('x: '+a.value+' y: '+b.value);

//eg:2
let number =10;
let obj={value:3};

function increase(number){
    number++;
    obj.value++;
    console.log("inside "+number);
    console.log("inside obj"+obj.value);
}
increase(obj);increase(number);
console.log(number);console.log(obj);

//dynamic adding new property to an existing object Circle
anotherCircle.location={x:1};

//dynamic delete
delete anotherCircle.location;
//enum
for( let key in anotherCircle ){
    if(typeof anotherCircle[key] !=='function')
    console.log(key,anotherCircle[key]);
}

//abstraction
function Box(side){

    this.side=side;
    //this.defaultSize={x:0,y:0}; 
    // can be accessable from outside to make it private we will make the fuction a variable type so that the scope dies outside 
    
    let defaultLocation={x:0,y:0};
    let computeLocation =function(factor){
        //...
    };
    this.draw=function(){
        //javaScript have closure determine what varible can be defined here and parent function
        //unlike scopes the closure values are preserved outside the scope also but can't be accessed

        computeLocation(0,1);
        console.log('draw box');
    }
    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defaultLocation;
        },set:function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid');
            defaultLocation=value;
        }
    });
};
const box =new Box(19);
box.defaultLocation=1;
box.draw();
