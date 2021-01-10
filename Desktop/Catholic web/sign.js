var input = document.getElementById("input");
var button = document.getElementById("button");
var password = document.getElementById("password");
var register= document.getElementById("register");
var terms = document.getElementById("terms");
//const array = [];
const newArray = [
{
username: "Joey",
password: 1234,
},

{
username: "John",
password: 1111,
},

{
username: "Jerry",
password: 2222,
},

{
username: "James",
password: 3333,
}

];

const users = [
{
username: "Terry",
timelines:"Lockdown continues!!!"
},

{
username: "Shelly",
timelines:"Covid 19 is losing its grip on humanity!!!"
},
{
username: "Toochukwu",
timelines:"Happy Anniversary!!!!"
},
{
username: "Peter",
timelines:"Keep safe guys!!!!"
},

{
username: "Osy",
timelines:"Birthday loading!!!!"
}


];

const checkUser = () => {
	var isValid = false;
   
	for (var i = 0; i <= newArray.length -1;  i++) {
		if(newArray[i].username == input.value && newArray[i].password == password.value){
			isValid = true;
		}
	}

	if(isValid){
		//alert("Yay! is valid")
		//console.log("true");
		setTimeout(() => { 
		for (var i = 0; i <= users.length -1;  i++) {
		console.log(users[i])};

		}, 3000);

		


		//alert(users[i].timelines) users[1].timelines
	}
	else{
		alert("wrong username and password")
		console.log("false");
	}

};

button.addEventListener("click", function() {
console.log("click!!") 
checkUser();

input.value="";
password.value="";
//array.splice(0,1);

});

password.addEventListener("keypress", function(event){
if(event.keyCode === 13) {
checkUser();
input.value="";
password.value="";
}


});

input.addEventListener("keypress", function(event){
if(event.keyCode === 13) {
checkUser();
input.value="";
password.value="";
}


});

register.addEventListener("click", function(){
console.log("working");

username = prompt("{Enter your username}");
password = prompt("Enter your password"); 

for (var i =0; i <= newArray.length -1; i++){

if(newArray[i].username === username && newArray[i].password == password || username == null || password == null) {

alert("This account exists"); return;} 
}
{
newArray.push({username, password});
console.log(newArray);
alert("Registration was successful!"); return; }


});

terms.addEventListener("click", function(){
alert("By signing up, you implicitly agreed to abide by the policies of XYZ.");

});
