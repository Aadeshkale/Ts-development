// for loop in js
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
// for loop in TS for in loop
var fruits = ['mango', 'apple', 'pineapple', 'orange', 'grapes'];
for (var i in fruits) {
    console.log(fruits[i]);
}
// for loop with of
console.log('\n');
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var i = fruits_1[_i];
    console.log(i);
}
