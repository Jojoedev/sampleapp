let age = document.getElementById("input");
let button = document.getElementById("button");

const a = () => { return 2020 }
const long = () => {return input.value.length};

button.addEventListener("click", function(){
console.log("click!!!");
/*
if(long() > 4) {
	alert("Please enter a valid year of birth!!")}
*/
if(long() < 4) {
	alert("Please, year of birth must be 4 digits!!")
} 
if(input.value > a()) {
	alert("The year of birth cannot be in the future!!");
return;
}

else {
	if(long() === 4) {
	const jo = () => {alert('You are ' + (a() - age.value + ' years old!!'))};
	jo();
	
	}

}
input.value = "";

})

age.addEventListener("keypress", function(event){
if(input.value > a()  && event.keyCode === 13) {


	alert("The year of birth cannot be in the future!!!!");

input.value = "";
return;
};

if(long() === 4  && event.keyCode === 13) {

const jo = () => {alert('You are ' + (a() - age.value + ' years old!!'));
};
	jo();

input.value = "";
return;
}
else {
if(long() < 4  && event.keyCode === 13) {
alert("Please, year of birth must be 4 digits!!");

input.value="";
return;
}

if(input.value === a() && event.keyCode === 13){
const jo = () => {alert('You are ' + (a() - age.value + ' years old!!'))};
	jo();
input.value = "";
return;
};

}
});





/*

if(long()('You are ' + (a() - age.value + ' years old!!!'))
cd();

if(input.value > a()) {
	alert("The year of birth cannot be in the future!!")
};

} 
else {
if(long() > 4) {
	alert("Please year of birth must be 4 digits!!")
input.value = "";
}


}
 
});

*/

/*
input.addEventListener("keypress", function(event){
	if (input.value.length > 0 && event.keyCode === 13) {
	var 
	
const cd = () => { alert ("you are great") };

	

	const bc = () => { alert('You are ' + (a() - age.value + ' years old!!!'))
input.value = "";
} 
*/