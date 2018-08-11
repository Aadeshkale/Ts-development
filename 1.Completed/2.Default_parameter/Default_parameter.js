function greet(name, age) {
    if (name === void 0) { name = 'people '; }
    if (age === void 0) { age = 0; }
    var greetMsg = 'hello ' + name + ' your age is: ' + age;
    return greetMsg;
}
var msg = greet(); // default parameters
document.querySelector("#display").textContent = msg;
var msg2 = greet('Shivam', 22);
document.querySelector("#display").textContent = msg2;
