
var Submit = document.getElementById("submit");

Submit.addEventListener("mouseover", function() {
	console.log("mouseover")
});

var slideIndex = 0;
showSlides();
function showSlides(){
	var i;
	var slides = document.getElementByClassName("mySlides");
	var dots = document.getElementByClassName("dot");
	for(var i= 0; i < slides.length; i++){
	slides[i].style.display ="none";

	}
slide++;
if(slideIndex > slides.length) {slideIndex = 1}
for(i = 0; i < dots.length; i++){
dots[i].className = dots[i].className.replace("active", "");

}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += "active";
setTimeout(showSlides, 2000);


}

























/* Loopin */

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study js",
	"eat healthy",
];

/*for loop*/

for(var i =0; i < todos.length; i++) {
	console.log(i); /* this is logging indexes, while console.log(todos[i]) would log the todos list*/
}

/*forEach loop*/
todos.forEach(function(i) {
	console.log(i);
})

/*todos.push("drink"); this adds "drink" to the list above, while todos.pop() removes last item on the list */

/*while loop */

var counterOne = 0;
while (counterOne < 10){
	console.log(counterOne);
	counterOne++
}










 /* Write the switch statement here */
function moveCommand(direction){
	var whatHappens;
	switch (direction){
		case "forward": 
		whatHappens= "You encounter a monster";
		break;
		case "back":
		whatHappens= "You arrived home";
		break;
		case "right":
		whatHappens= "you found a river";
		break;
		case "left":
		whatHappens= "You run into a troll";
		break;
		default:
		whatHappens="Pls enter a valid direction";

	}
	return whatHappens;
}

// 

/* Don't use var again, use let instead. const is used for a variable that would remain constant*/

const name ="Nkem";
const age =24;
const pet ="Dog";

const greetingBest = `Hello ${name} you seem to be ${age-4}, What a a lovely ${pet} you have`;

/* this is same as above */
function greet(name='Peter', age=34, pet='dog'){
	return `Hello ${name} you seem to be ${age-10}, What a lovely ${pet} you have`;
}

function buy(name = 'Jonas', Vehicle = 'Lexus 450 car', house ='bungalow') {
return `Hello ${name} you have a  ${Vehicle} and lovely ${house}`;
}

/*point to note symbol ` is not same as '. always use ` instead of ' to avoid error of expected identifier*/


/*arrow function*/

function add(a, b){
	return a + b;
}

/*is the same as below*/

const add2 = (a, b) => a + b;

/*Ternary operator*/
function isUserValid(bool){
	return bool;
}
var answer = isUserValid(true) ? "You say enter" : "Access denied";

/* Advanced Arrays*/
 const array = [2, 4, 6, 10];
 const double = []
 const newArray = array.forEach((num) =>{
 	double.push(num * 2);
 })

 console.log('forEach', double);

 /* Using Map map and filter return value */

 const mapArray = array.map((num) => {
 	return num * 2
 });

 console.log('map', mapArray);

/* Filter */

const filterArray = array.filter((num) => {
	return num === 5
});
console.log('filter', filterArray);

/*Reduce */

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);

console.log('reduce', reduceArray);


/*Advanced function */

const first = () => {

};

/* Closures */

/*Currying. a process of converting which takes multiple argumnts into a function that takes them one at a time*/

const multiply = (a, b) => a + b;
const curriedMultiply = (a) => (b) => a + b;
curriedMultiply(3)(4);

/* Compose  This is the art of putting two functions together to form a third function 
where the output of one function is input of another*/

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);


























