// Hello World App
var greeting = 'good morning';
console.log(greeting);
document.querySelector('#display').textContent = greeting;
// Variables Creation in TypeScript
function greetMsg(name, age) {
    var greeting = 'hello ' + name + ' you age ' + age + ' year old';
    return greeting;
}
var greetMessage = greetMsg('sachin', 40);
console.log(greetMessage);
