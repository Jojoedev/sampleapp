<script>
let body = document.getElementById("body");
let profile = document.getElementById("profile");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let projects = document.getElementById("projects");
let list = document.getElementById("listItem");
let image = document.getElementById("image");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");
let more = document.getElementById("more");
let readlesstext = document.getElementsByClassName("readlesstext");
let test = document.getElementById("test");
time = 3000;
document.addEventListener("DOMContentLoaded", function(){
btn1.style.display ="none";
btn1.innerHTML = "";
})



btn.addEventListener("click", function(){
more.style.display = "inline";
btn.style.display = "none";
btn.innerHTML= "";
btn1.style.display ="block";
btn1.innerHTML = "Read less!!";


btn1.onclick = () => {
more.style.display = "none";
btn1.style.display ="none";
btn1.innerHTML ="";
btn.style.display ="block";
btn.innerHTML = "Read more!!"


}


//setTimeout(function(){
//body.style.background="linear-gradient(to right, blue, black)";
//});
});


//var today = new Date()
//hour = today.getHours();
//min = today.getMinutes();
//sec = today.getSeconds();
//timeNow =(`${hour}:${min}:${sec}`);

var today = new Date()
hour = today.getHours();
let timeOfDay
if(hour >= 12 && hour <= 17){
	timeOfDay = "afternoon";
 }
 else if (hour >= 17) {
 	timeOfDay = "evening";
 }

 else if(hour >= 0 && hour < 12) {
 	timeOfDay = "morning";
}

greeting.innerHTML=`Good ${timeOfDay}!`

setTimeout(function(){
greeting.style.color="green"
}, 8000)



 </script>