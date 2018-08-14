// var scope

for (var i=1;i<=10;i++){

}
console.log('We can acess var i value outside for loop:' +i)  // because of var

if(true){
    var msg ="welcome"
}

console.log('We can acess var msg value outside if loop:' +msg) // because of var

// let Scope

for (let i=1;i<=10;i++){

}
// console.log(i) //  because of let we can not access value outside of loops
if(true){
    let msg1='welcome'
}
// console.log(msg1) //   because of let we can not access value outside of loops

// const example
const greet='Good Morning'
//  greet =  'Good Night'  // greet is const so it is not support reassignment