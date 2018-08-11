/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
for (var i = 10; i <= 10; i++) {
}
console.log(i); //we cannot access i because it's var
for (var j = 0; i <= 10; i++) {
}
// console.log(j)  we cannot access j because it's let
// Usage of let vs var inside if block
var model = 'bmw';
if (model === 'bmw') {
    var color = 'red';
}
console.log(color); // we can access the color because of var
if (model === 'bmw') {
    var color2 = 'green';
}
//console.log(color2) // we can not access the color because of let
// Usage Const variable creation
var APP_NAME = 'TS App';
// APP_NAME = 'TS App' // reassignment is not supported because of constant
