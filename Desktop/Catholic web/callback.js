//First Class functions using callback functions


var years = [1990, 1994, 1986, 1999, 1945];

function calcuAge(arr, fn) {
var very = [];

for (var i =0; i < arr.length; i++) {
very.push(fn(arr[i]));
}
return very;
};

function mainCalcu(veb) {
return 2020- veb;
}

function ab(veb) {
return veb >= 30 
}

var ages = calcuAge(years, mainCalcu);
var fullAge = calcuAge(ages, ab);

console.log(ages);
console.log(fullAge);