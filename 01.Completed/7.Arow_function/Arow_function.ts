
// Simple Function
let greet =  function () {
    return 'Good Morning ! have a nice day :)'
}
console.log(greet())

// Arrow function

let greetMsg = () => 'This is a Arrow funtion in TS'
console.log(greetMsg())

// simple function with parameter

let student=function (name:string,roll:number) {
    return 'Hello '+name+' your new roll no is:'+roll
}
console.log(student('Shivam',12))


// Arrow function with parameters
let add =(a,b) => a+b
console.log("Sum of no:"+add(10,32))

