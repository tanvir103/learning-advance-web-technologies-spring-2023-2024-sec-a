function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(10, 25));
var addition = function (a, b) { return a + b; };
console.log(addition(21, 9));
//optional paremeter
function addnew(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(addnew(5, 6));
//default Parameter
function multiplication(a, b, c) {
    if (c === void 0) { c = 1; }
    return a * b * c;
}
console.log(multiplication(5, 7));
