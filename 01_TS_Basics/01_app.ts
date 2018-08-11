// Hello World App
let greeting:string = 'good morning'
console.log(greeting)
document.querySelector('#display').textContent=greeting



// Variables Creation in TypeScript

function greetMsg(name:string,age:number ):string{
    let greeting:string='hello '+name+' you age '+age+' year old'
    return greeting
}

let greetMessage:string = greetMsg('sachin',40)
console.log(greetMessage)