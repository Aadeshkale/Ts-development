// js oject creation
var car = {
    name: 'Audi',
    model: 2018,
    color: "red"
};
// by using js approach
var content = "<div>" +
    "<h2>Name:" + car.name + "</h2>" +
    "<h2>Model:" + car.model + "</h2>" +
    "<h2>Year:" + car.color + "</h2>"
    + "</div>";
document.querySelector('#containor').innerHTML = content;
// by using ts approach with `` oprator
var temp = "<div style=\"background-color: lightblue\">\n    <h2>Name:" + car.name + "</h2>\n    <h2>Model:" + car.model + "</h2>\n    <h2>Color:" + car.color + "</h2>\n</div>";
document.querySelector("#containor").innerHTML = temp;
