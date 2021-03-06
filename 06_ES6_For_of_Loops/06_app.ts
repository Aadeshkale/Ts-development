/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let out=''
let lang=['html','css','js','typescript']
for ( let index in lang){
    let val=lang[index]
    out+=" "+val
    // out += `${val},`
}
console.log(out)

// Usage of for...of loop from ES6
out=''
for (let value of lang){
    out+=value+' '
}
console.log(out)

// for each loop
out=''
lang.forEach(function (element) {
    out+=element+' '

})
console.log(out)








