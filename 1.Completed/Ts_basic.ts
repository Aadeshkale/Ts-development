// Hello Message

let greeting:string='Hello The world of TypeScript'
console.log(greeting)
document.querySelector("#display").textContent=greeting

// variable creation
let str:string='welcome'
let no:number=200
let flag:boolean=true
console.log(str +" "+no+" "+flag)

// function declaration

function fun(name:string,roll_no:number){
    console.log(name+"->"+roll_no)
}
fun('Shivam',20)