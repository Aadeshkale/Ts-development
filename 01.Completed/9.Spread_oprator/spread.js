// Spread oprator in TypeScript
// adding content to another content
var l = [10, 20, 30];
var l2 = l.concat([40, 50, 60]);
console.log('L2:' + l2);
// array expression input to another function
var list = [12, 20, 20, 30];
var maximum = Math.max.apply(Math, list); // max(list[0],list[1],list[2],list[3],list[4])
console.log("Maximum:" + maximum);
// for copy conent
var car1 = ['Audi', 2018, 'red'];
var car2 = car1.slice();
if (car1 === car2) {
    console.log('Both are equal');
}
else {
    console.log('Both are not equal');
}
