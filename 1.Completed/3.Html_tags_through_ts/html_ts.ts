// js oject creation
var car={
   name:'Audi',
   model:2018,
   color:"red"
}

// by using js approach
let content=
    "<div>"+

    "<h2>Name:"+car.name+"</h2>"+
    "<h2>Model:"+car.model+"</h2>"+
    "<h2>Year:"+car.color+"</h2>"

    +"</div>"

document.querySelector('#containor').innerHTML=content

// by using ts approach with `` oprator

let temp=`<div style="background-color: lightblue">
    <h2>Name:${car.name}</h2>
    <h2>Model:${car.model}</h2>
    <h2>Color:${car.color}</h2>
</div>`


document.querySelector("#containor").innerHTML=temp