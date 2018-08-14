// destructing is used to assign a variable to array element

let student=['Sachin',12,'comp']

let [ sname,sage,ssub]=student
console.log(`Name:${sname} Age:${sage} Subject:${ssub}`)

// Destructor for swapping

let a=10 ;
let b=20 ;
[a , b]=[ b , a]
console.log(`a:${a} b:${b}`)

// Destructor with object

let car={
    name:'Audi',
    model:'2018',
    color:'red'
}

let { name: cname,
    model: cmodel,
    color:ccolor
} = car

console.log(`name:${cname} model:${cmodel} color:${ccolor}`)