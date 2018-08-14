// Simple Function
var greet = function () {
    return 'Good Morning ! have a nice day :)';
};
console.log(greet());
// Arrow function
var greetMsg = function () { return 'This is a Arrow funtion in TS'; };
console.log(greetMsg());
// simple function with parameter
var student = function (name, roll) {
    return 'Hello ' + name + ' your new roll no is:' + roll;
};
console.log(student('Shivam', 12));
// Arrow function with parameters
var add = function (a, b) { return a + b; };
console.log("Sum of no:" + add(10, 32));
