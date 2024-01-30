function greet(name){
    console.log(`Hello,${name}!`);
}

greet("Tanvir");


function sum(a,b){
    return a+b;
}
let result=sum(5,6);
console.log(result);

const greetnew=function(name){
    console.log(`Hello, ${name}!`);
};
greetnew("Fahim");


function operationOnNumber(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
function multiply(x,y){
    return x*y;
}

let resultadd=operationOnNumber(5,9,add);
let resultmulitiplication=operationOnNumber(5,9,multiply);
console.log(resultadd);
console.log(resultmulitiplication);
