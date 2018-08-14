// number
let a:number=100
console.log(`Number Type:${a}`)

//string
let s:string='Welcome'
console.log(`String Type:${s}`)

// boolean
let b:boolean=true
console.log(`Boolean type:${b}`)

//any
let c:any=true
console.log(`Any type:${c}`)
let d:any=12
console.log(`Any type:${d}`)

//Array
let arr:Array<string>=['abc','def']
console.log(`Array type:${arr}`)

// enum

let abc={
    jan:'Jan',
    feb:'Feb'
}
console.log(`Enum type: ${abc.jan} -> ${abc.feb}`)

abc.jan='absc'
console.log(`Enum type: ${abc.jan} -> ${abc.feb}`)