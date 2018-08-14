// destructing is used to assign a variable to array element
var student = ['Sachin', 12, 'comp'];
var sname = student[0], sage = student[1], ssub = student[2];
console.log("Name:" + sname + " Age:" + sage + " Subject:" + ssub);
// Destructor for swapping
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a:" + a + " b:" + b);
// Destructor with object
var car = {
    name: 'Audi',
    model: '2018',
    color: 'red'
};
var cname = car.name, cmodel = car.model, ccolor = car.color;
console.log("name:" + cname + " model:" + cmodel + " color:" + ccolor);
var _a;
