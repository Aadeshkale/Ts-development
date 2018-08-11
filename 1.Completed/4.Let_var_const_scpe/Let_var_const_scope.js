// var scope
for (var i = 1; i <= 10; i++) {
}
console.log('We can acess var i value outside for loop:' + i); // because of var
if (true) {
    var msg = "welcome";
}
console.log('We can acess var msg value outside if loop:' + msg); // because of var
// let Scope
for (var i_1 = 1; i_1 <= 10; i_1++) {
}
// console.log(i) //  because of let we can not access value outside of loops
if (true) {
    var msg1 = 'welcome';
}
// console.log(msg1) //   because of let we can not access value outside of loops
// const example
var greet = 'Good Morning';
//  greet =  'Good Night'  // greet is const so it is not support reassignment 
