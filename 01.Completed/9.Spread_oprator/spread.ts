// Spread oprator in TypeScript


// adding content to another content
let l=[10,20,30]
let l2=[...l,40,50,60]
console.log('L2:'+l2)

// array expression input to another function

let list=[12,20,20,30]
let maximum=Math.max(...list)  // max(list[0],list[1],list[2],list[3],list[4])
console.log(`Maximum:${maximum}`)


// for copy conent
let car1=['Audi',2018,'red']
let car2=[...car1]
if(car1===car2){
    console.log('Both are equal')
}
else{
    console.log('Both are not equal')
}