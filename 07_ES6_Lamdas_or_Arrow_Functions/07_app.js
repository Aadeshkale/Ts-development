/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal No-args function , same Arrow Function
var greetNormal = function () {
    return 'Good morning';
};
console.log(greetNormal());
// Normal function with Args and Arrow Function
var greetArgs = function () { return 'Greet Arrow function'; };
console.log(greetArgs());
// normal function 2
var greetArg = function (name, rollno) {
    return name + "->" + rollno;
};
console.log(greetArg("sachin", 10));
// arrow   with args
var greetArow = function (name, no) { return name + "->" + no; };
console.log(greetArow('Shivam', 20));
// Normal function to find the sum of two numbers with Arrow Function
var sum = function (a, b) {
    return a + b;
};
console.log("sum:" + sum(10, 20));
var sumArow = function (a, b) { return a + b; };
console.log("ArowSum:" + sumArow(20, 30));
// Normal function to find the length of an array with Arrow Function
var movie = ['bhaubali', 'Drishyam', 'dangle'];
var movielength = movie.map(function (movie) {
    return movie.length;
});
console.log("movie;" + movielength);
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
// Arrow Function for the above example
