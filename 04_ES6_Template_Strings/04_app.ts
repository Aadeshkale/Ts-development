/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/



/*
Create a Car Object and prepares a Template String using
String Concatenation and Template String.
 */



let car ={
    model:'Audi',
    year:'2K18',
    color:'white'
}

    // logest way
let strConcat = "<div style='background-color: orangered'>" +
                   "<h3> Model:"+car.model +"</h3>"+
                    "<h3> Year:"+car.year +"</h3>"+
                     "<h3> Color:"+car.color +"</h3>"

                + "</div>"


document.querySelector("#container").innerHTML=strConcat

let templetStr = `<div style="background-color: #0d5fe6">
                   <h3>Model:${car.model}</h3>           
                    <h3>Year:${car.year}</h3>
                    <h3>Color:${car.color}</h3>
                    </div>`

document.querySelector("#container").innerHTML=templetStr
