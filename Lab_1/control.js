let age=15;

if(age>=18){
    console.log("Adult");
}else if(age>=13){
    console.log("Teenager");
}else{
    console.log("Minor");
}

let status;
switch(true){
    case age>=18:
        status="Adult";
        break;
    case age>=13:
        status="Teenager";
        break;
    default:
        status="Minor";
}
console.log(status);

let x=['a','b','c'];
for(let i=0;i<3;i++){
    console.log(x[i]);
}
let i=0;
while(i<3){
    console.log(x[i]);
    i++;
}
let j=0;
do{
    console.log(x[j]);
    j++;
}while(j<3);

for(let k in x){
    console.log(x[k]);
}
for(let l of x){
    console.log(x[l]);
}
