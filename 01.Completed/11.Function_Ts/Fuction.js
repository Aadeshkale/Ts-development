// simple function
function greet() {
    return 'Welcome to the world of Ts';
}
console.log(greet());
// adding two number
function add(a, b) {
    return a + b;
}
console.log(add(20, 30));
// problem solution
function sum(a, b) {
    if (typeof (b) === 'number') {
        return a + b;
    }
    else if (typeof (b) === 'string') {
        if (isNaN(parseInt(b))) {
            return parseInt(b) + a;
        }
        else {
            return b;
        }
    }
    else {
        return b;
    }
}
console.log(sum(10, '20'));
console.log(sum(20, 'abc'));
function findMax(a, b, c) {
    // for parameter a
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
//console.log(`Max : 0-param ${findMax()}`);
console.log("Max : 1-param " + findMax(10));
console.log("Max : 2-param " + findMax(10, 20));
console.log("Max : 3-param " + findMax(10, 20, 30));
//console.log(`Max : 4-param ${findMax(10,20,30,40)}`);
