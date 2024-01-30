let number=[1,2,3,4,];
let list=["Tanvir","Rian","Ratul"];
let mixed=[1,"Hello",{country:"Bangladesh"},[11,12,13]];

let first=number[1];
let secondname=list[1];
let third=mixed[2];

number.push(9);
list.pop();
list.unshift("Fahim");
number.shift();

number.forEach(function(number){
    console.log(number);
});

let double=number.map(function(number){
    return number*2;
});

double.forEach(function(double){
    console.log(double);
});

const newNuber=[5,8,9,10,11];
const even=newNuber.filter(function(newNuber){
    return newNuber %2 ===0;
});
console.log(even);