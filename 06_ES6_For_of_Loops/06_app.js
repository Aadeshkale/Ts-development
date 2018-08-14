/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
// Usage of for...in loop from ES5
var out = '';
var lang = ['html', 'css', 'js', 'typescript'];
for (var index in lang) {
    var val = lang[index];
    out += " " + val;
    // out += `${val},`
}
console.log(out);
// Usage of for...of loop from ES6
out = '';
for (var _i = 0, lang_1 = lang; _i < lang_1.length; _i++) {
    var value = lang_1[_i];
    out += value + ' ';
}
console.log(out);
// for each loop
out = '';
lang.forEach(function (element) {
    out += element + ' ';
});
console.log(out);
