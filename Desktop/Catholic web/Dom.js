




var button = document.getElementById("game");

//number = Math.floor(Math.random() * 8) + 1

button.style.color = "blue"
button.style.background = "gold"

button.addEventListener("click", function(){

alert(Math.floor(Math.random() * 8) + 1
);

})
/*


if (number == 2){
var airtime1 = prompt("1 > MTN, 2 > Airtel, 3 > GLO");
if (airtime1 > 3) { alert("Wrong input"); return;} else {

var chooseNumber = prompt("1 > Self, 2 > Other");
if (chooseNumber == 2) {

var telephoneNumber = prompt("Enter telephone number");
if (telephoneNumber.length !== 11) {
alert("The phone number must be 11 digits");
return;
}
else {
	phoneNumberDatabase.push(telephoneNumber);
	console.log(phoneNumberDatabase);
	var rechargeAmt = prompt("Enter amount");
	if (rechargeAmt <= 100) { alert("You can't buy airtime less than N100"); return;}
	else {

	var detailConfirmation = alert(`You are about to buy ${rechargeAmt} airtime to ${telephoneNumber}`);

	var toContinue =  userCheck(); //prompt("1 > To continue, 2 > To cancel");


if (toContinue == 1) {
	var pinCheck = prompt("Enter your 4 digit PIN");
	if(pinCheck.length == 4) { alert(`The purchase of ${rechargeAmt} airtime to ${telephoneNumber} was successful`)

		
	var bal = (statements.acctBal-= rechargeAmt);
	alert(`Your account balance is now ${bal}`);
		
	console.log(`Airtime purchase to phone number ${telephoneNumber} for the sum of ${-rechargeAmt}`);
	var stat = (`Airtime purchase to phone number ${telephoneNumber} :  ${-rechargeAmt}`);
	console.log(geneStatements.push(stat));	
	console.log(geneStatements.push(`Your account balance is now ${bal}`));
	

}

else {alert("Invalid PIN, PIN must be 4 digits")};
 return;
}
if (toContinue ==2) {alert("Transaction was cancelled"); return;}; 
};
}

};

if (chooseNumber == 1) {
var rechargeAmt = prompt("Enter amount");
if(rechargeAmt <= 100) { alert("You can't buy airtime less than N100"); return;}
else {

var detailConfirmation = alert(`You are about to buy ${rechargeAmt} airtime`);

var toContinue = userCheck(); //prompt("1 > To continue, 2 > To cancel");
if (toContinue == 1) {
var pinCheck = prompt("Enter your 4 digit PIN");
if(pinCheck.length == 4) { alert(`The purchase of ${rechargeAmt} airtime was successful`)
		var bal = (statements.acctBal-= rechargeAmt);
		alert(`Your account balance is now ${bal}`);
		
		console.log(`Airtime purchase for self for the sum of ${-rechargeAmt}`);
		var stat = (`Airtime purchase for self :  ${-rechargeAmt}`);
		console.log(geneStatements.push(stat));	
		console.log(geneStatements.push(`Your account balance is now ${bal}`));
	
}
else {alert("Invalid PIN, PIN must be 4 digits")};
 return;
}
if (toContinue ==2) {alert("Transaction was cancelled"); return;}; 
};
}
}
}

*/