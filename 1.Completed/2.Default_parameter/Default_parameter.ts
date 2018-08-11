

function greet(name:string='people ',age:number=0):string{
   let greetMsg='hello '+name+ ' your age is: '+age
    return greetMsg
}
let msg=greet() // default parameters
document.querySelector("#display").textContent=msg

let msg2=greet('Shivam',22)
document.querySelector("#display").textContent=msg2