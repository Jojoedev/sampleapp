

const ubaaccountNumberDatabase = [];
const gtbaccountNumberDatabase = [];
const fbnaccountNumberDatabase = [];
const phoneNumberDatabase = [];

const statements = {
	firstName: "Peter",
	lastName: "Luke",
	acctBal: 30000,
};

const geneStatements = [
{
	acctBal: 25000,
	pin: 2222,
}
];
//geneStatements[0].pin

// enter codes that specifies if the transaction was successful or not in the array besides the alert function
var terms = document.getElementById("terms");

terms.addEventListener("click", function(){
alert("West Bank shall not be held liable for any fraudulent transactions carried out on your account. Therefore safeguard your details from unauthorised persons.");

});

var button = document.getElementById("btn");

btn.addEventListener("click", function() {
alert("You\'re welcome!, press ok to continue");

var number = prompt("1 > Check account balance, 2 > Buy airtime, 3 > Transfer");
if(number == 0 || number > 3) { alert("Incorrect input"); return;}

 else {
 if (number == 1)
verify();

} 

if(number == 2)
 {
	var airtime1 = prompt("1 > MTN, 2 > Airtel, 3 > GLO");
	if(airtime1 == 0 || airtime1 > 3) { alert("Incorrect input");}
	else 
	{
	var chooseNumber = prompt("1 > Self, 2 > other");
	if (chooseNumber == 1) 
						{
						airtimeAmt1();
						return;
						} 
						if (chooseNumber == 2)
						 { 
							thirdPartyAirtimePurchase(); return;
						};
	} 

};

if(number == 3) 
{
transferAmt();

}

});


//functions for dry are below

//Checking for account balance



const verify = () => {
pinconfirmation = prompt("Enter your 4 digit PIN");
if(pinconfirmation.valueOf() == geneStatements[0].pin) { alert(` ${dateFull} account balance is ${geneStatements[0].acctBal}`); return;} 
else { alert("Invalid PIN");};
return;
};

//Generic function
const userCheck = () => prompt("1 > To continue, 2 > To cancel");

//Third party recharge
//Process four
const check2 = () => {
	var toContinue = userCheck();
	//if (toContinue == 1)
		toContinue == 1 ? pinVerify() : alert("Transaction was cancelled");
		//pinVerify();
};

//Process three
const airtimeAmtForThirdParty = () => { rechargeAmt = prompt("Enter amount");
if(rechargeAmt < 100 || rechargeAmt > 10000) { alert("You can\'t buy airtime less than N100 or more than N10000");
return;
} else {
		var detailConfirmation1 = alert(`You are about to buy ${rechargeAmt} airtime to ${telephoneNumber}`);
		check2();
		};
		};

//Process two
const telephoneNum = () => {
telephoneNumber = prompt("Enter telephone number");
if(telephoneNumber.length !== 11) {
alert("The phone number must be 11 digits");
} else { airtimeAmtForThirdParty()};

};

//Process one
const thirdPartyAirtimePurchase = () => 
telephoneNum();

//Process five
const pinVerify = () => {
if(geneStatements[0].acctBal < rechargeAmt * 1.075) {alert("Insufficient funds"); return;} else {
pinCheck = prompt("Enter your 4 digit PIN");

if(pinCheck.valueOf() == geneStatements[0].pin) { alert(`The purchase of ${rechargeAmt} airtime was successful`);
//var openingBalance = geneStatements[0].acctBal;
//console.log(`${dateFull} Opening account balance ${openingBalance}`);
//console.log(`${dateFull} Transaction for airtime purchase to ${telephoneNumber} :  ${-rechargeAmt}`);
//var bal = geneStatements[0].acctBal-= rechargeAmt;
//console.log(`${dateFull} Your account balance is ${bal}`); //statements.acctBal
selfrechargeStatements();
//alert(`Your account balance is now ${bal}`);		
		
} else { alert("Your PIN is Invalid"); return;}
};
};

//Generic function
const airtimeAmt = () => { rechargeAmt = prompt("Enter amount");
if(rechargeAmt < 100 || rechargeAmt > 10000) { alert("You can\'t buy airtime less than N100 or N10000");
return;
} else {
		var detailConfirmation = alert(`You are about to buy ${rechargeAmt} airtime`);
		check2();
		};
};

// for self airtime
const pinVerify1 = () => {
if(geneStatements[0].acctBal < rechargeAmt * 1.075) {alert("Insufficient funds"); return;} else {
var pinCheck = prompt("Enter your 4 digit PIN");

if(pinCheck.valueOf() == geneStatements[0].pin) { alert(`The purchase of ${rechargeAmt} airtime was successful`);
//var openingBalance = (geneStatements[0].acctBal);
//console.log(`${dateFull} opening balance is ${openingBalance}`);
//console.log(`${dateFull} Transaction for airtime purchase for self :  ${-rechargeAmt}`);
//var bal = geneStatements[0].acctBal-= rechargeAmt;
//console.log(`${dateFull} Your account balance is ${bal}`); //statements.acctBal
rechargeStatements();
//alert(`Your account balance is now ${bal}`);
		
		
} else { alert("Your PIN is Invalid"); return;}
};
};

const check1 = () => {
	var toContinue = userCheck();
	//if (toContinue == 1)
		toContinue == 1 ? pinVerify1() : alert("Transaction was cancelled");
		//pinVerify();
};

const airtimeAmt1 = () => { rechargeAmt = prompt("Enter amount");
if(rechargeAmt < 100 || rechargeAmt > 10000) { alert("You can\'t buy airtime less than N100 or more than N10000");
return;
} else {
		var detailConfirmation = alert(`You are about to buy ${rechargeAmt} airtime for self`);
		check1();
		};
		
		
	};


//code for transfer

const bankDetails = () => {
	bankName = prompt("1 > GTB, 2 > UBA, 3 > FBN, 4 > Fidelity, 5 > Zenith");
	 
	//this switches the beneficiary's bank name in order to feature in the bank statement as a trail.
	if(bankName == 1){
		bankName = "GTB"} 
	else if (bankName == 2){
		bankName = "UBA"}
	if(bankName == 3){
		bankName="FBN"}
	if(bankName == 4){
		bankName="Fidelity"}
		if(bankName == 5){
		bankName="Zenith"}

if(bankName == null) {alert("Invalid input")};	
return;
};



const transferAmt = () => {
	 amountt = prompt("Enter amount");
	//This is to check against overdrawing account

	if (amountt >= 500 && amountt * 1.075 < geneStatements[0].acctBal) { 
		bankDetails();
	if(bankName == 0 || bankName > 5) {alert("Wrong input");
	return;} else {
		if(bankName == 1 || 2 || 3 || 4 || 5) {
		nameGene();
	}
	}
	} 
	else { alert("Your can\'t transfer amount less than N500 or Insufficient funds"); return;}
	};

const nameGene = () => {

accountNumber = prompt("Enter beneficiary's account number");
if(accountNumber == null){alert("invalid input"); return};
if(accountNumber.length !== 10) { alert("Account number must be 10 digits"); return;} 
else {


var isValid = false;

for (var i = 0; i <= newArray.length -1;  i++) {
		if(accountNumber == newArray[i].acctNum && accountNumber !== newArray[i].firstName && accountNumber !== newArray[i].firstName){ 
		isValid = true; //{alert(newArray[i].firstName)}; {alert(newArray[i].lastName)};
		{alert(newArray[i].pin)};
		b = newArray[i].firstName;
		a = newArray[i].lastName;
		//c = newArray[i].pin;
}
}
if(isValid) { alert(`You are about to transfer ${amountt} to ${b}, ${a} with account number ${accountNumber} in ${bankName}`);
	
	checkForTransfer();
	
} else {alert("Account number is invalid"); return;}
};
};
//Math.floor(Math.random()

const rechargeStatements = () => {
openingBalance = (geneStatements[0].acctBal);
vat = rechargeAmt * 0.075;
console.log(`${timeNow} ${dateFull} Opening balance is ${openingBalance}`);
console.log(`${timeNow} ${dateFull} Transaction for airtime purchase for self :  ${-rechargeAmt}`);
console.log(`${timeNow} ${dateFull} VAT on airtime of ${rechargeAmt} : ${-vat}`)
var bal = geneStatements[0].acctBal= geneStatements[0].acctBal - rechargeAmt - vat;
console.log(`${timeNow} ${dateFull} Your account balance : ${bal}`); //statements.acctBal
alert(`Your account balance is now ${bal*Math.floor(Math.random())}`);
};

const selfrechargeStatements = () => {
openingBalance = (geneStatements[0].acctBal);
vat = rechargeAmt * 0.075;
console.log(`${timeNow} ${dateFull} Opening balance is ${openingBalance}`);
console.log(`${timeNow} ${dateFull} Transaction for airtime purchase to ${telephoneNumber} :  ${-rechargeAmt}`);
console.log(`${timeNow} ${dateFull} VAT on airtime of ${rechargeAmt} : ${-vat}`)
var bal = geneStatements[0].acctBal= geneStatements[0].acctBal - rechargeAmt - vat;
console.log(`${timeNow} ${dateFull} Your account balance : ${bal}`); //statements.acctBal
alert(`Your account balance is now ${bal*Math.floor(Math.random())}`);
};


const statementsGene = () => {

vatOnTrf = amountt * 0.075;
openingBalance = (geneStatements[0].acctBal);
console.log(`${timeNow} ${dateFull} opening balance is ${openingBalance}`);
//console.log(`${dateFull} Transaction for airtime purchase for self :  ${-rechargeAmt}`);
console.log(`${timeNow} ${dateFull} VAT on transfer of ${amountt} : ${-vatOnTrf}`);
console.log(`${timeNow} ${dateFull} Transfer to ${bankName} ifo ${b}, ${a} with account number ${accountNumber}:  ${-amountt}`);
var bal = geneStatements[0].acctBal= geneStatements[0].acctBal - amountt - vatOnTrf;
console.log(`${timeNow} ${dateFull} Your account balance : ${bal}`); //statements.acctBal
alert(`Your account balance is now ${bal*Math.floor(Math.random())}`);

};


const checkForTransfer = () => {
	var toContinue = userCheck();
	//This is to obtain confirmation and approval to proceed with transaction
	toContinue == 1 ? pinVerifyForTransfer() : alert("Transaction was cancelled");
		
	};


const newArray = [
{
acctNum: 1005564740,
firstName:"Philip",
lastName: "Eze",
pin: 1111
},

{
acctNum: 6011126666,
firstName:"Segun",
lastName: "Akande",
pin: 1112
},

{
acctNum: 1234567890,
firstName:"Joy",
lastName: "Oche",
pin: 1111
}

];
//password == null



const pinVerifyForTransfer = () => {
	//This is to validate PIN and to generate account statements.
	
	var pinCheck = prompt("Enter your 4 digit PIN");
	//link PIN to database pinCheck.length ==4
	//if(pinCheck.valueOf() === `${c}`)
	if(pinCheck.valueOf() == geneStatements[0].pin) { alert(`The transfer of ${amountt} was successful`);
	//var openingBalance =(`${dateFull}   geneStatements[0].acctBal`);
	//console.log(`Opening account balance is ${openingBalance}`);
	//console.log(`${dateFull} Transfer to ${bankName} ifo ${b}, ${a} with account number ${accountNumber}:  ${-amountt}`);
	//var bal = geneStatements[0].acctBal-= amountt;
	//console.log(`${dateFull} account balance is ${bal}`); //statements.acctBal
	statementsGene();
	//alert(`${dateFull} Your account balance is now ${bal}`);
			
	} else { alert("Your PIN is Invalid"); return;}

	};


var today = new Date()
year = today.getFullYear();
month = today.getMonth();
day = today.getDate();
var dateFull =(`${day} - ${month} - ${year}`);



var today = new Date()
hour = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();
timeNow =(`${hour}:${min}:${sec}`);




//The end. To God be the glory!!!

//if(pinCheck.valueOf() == geneStatements[0].pin) { alert(`The purchase of ${rechargeAmt} airtime was successful`);









//geneStatements[0].acctBal < 100 ? alert("Insufficient funds") : 





//Code for airtime processes


/*

if(number == 2){
var airtime1 = prompt("1 > MTN, 2 > Airtel, 3 > GLO");
if(airtime1 > 3) { alert("Wrong input"); return;} else {
if(airtime1 == 0) { alert("Wrong input"); return;} else {
var chooseNumber = prompt("1 > Self, 2 > other");
if (chooseNumber == 2) {

var telephoneNumber = prompt("Enter telephone number");
if(telephoneNumber.length !== 11) {
alert("The phone number must be 11 digits");
return;
}
else {
phoneNumberDatabase.push(telephoneNumber);
console.log(phoneNumberDatabase);
var rechargeAmt = prompt("Enter amount");
if(rechargeAmt <= 100) { alert("You can't buy airtime less than N100"); return;}
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
};
}
}
//else { alert("Incorrect PIN"); return;}
}

//codes for the transfer processes.


if(number == 3){
	//var acctNum = prompt("Enter your account number");
	
	var amountt = prompt("Enter amount");

	if (amountt >= 500) {
	var bankName = prompt("1 > GTB, 2 > UBA, 3 > FBN");

	if(bankName == 1){
		var GTB = prompt("Enter beneficiary's account number");
		if(GTB.length !== 10) { alert("Account number must be 10 digits")
		return;
		}

		else 

		{ 	gtbaccountNumberDatabase.push(GTB);
			console.log(gtbaccountNumberDatabase);
		
			var purpose = prompt("Narration");
			alert(`You are about to transfer ${amountt} to account number ${GTB}`) };
		
		var toContinue = userCheck();    //prompt("1 > To continue, 2 > To cancel");
		if (toContinue == 1)  {
		var pin1 = prompt("Enter your 4 digit PIN");
		if(pin1.length == 4) {
		alert(`Your transfer of ${amountt} was successful`);
		
		var bal = (statements.acctBal-= amountt);
		alert(`Your account balance is now ${bal}`);
		
		console.log(`Transfer to account number ${GTB} ${purpose}  ${-amountt}`);
		var stat = (`Transfer to account number ${GTB} ${purpose} :  ${-amountt}`);
		console.log(geneStatements.push(stat));	
		console.log(geneStatements.push(`Your account balance is now ${bal}`));
		
		return;
	
		} else 
		{
		alert("Invalid PIN, PIN must be 4 digits") };
		}
		if (toContinue ==2) { alert("Transaction was cancelled")}
			
	}

if(bankName == 2){
		var UBA = prompt("Enter beneficiary's account number");
		if(UBA.length !== 10) { alert("Account number must be 10 digits")
		return;
		}

		else 

		{ 	ubaaccountNumberDatabase.push(UBA);
			var purpose = prompt("Narration");
			console.log(ubaaccountNumberDatabase);

			alert(`You are about to transfer ${amountt} to account number ${UBA}`) };
		
		var toContinue1 =  userCheck();  //prompt("1 > To continue, 2 > To cancel");
		if (toContinue1 == 1)  {
		var pin2 = prompt("Enter your 4 digit PIN");
		if(pin2.length == 4) {
		alert(`Your transfer of ${amountt} was successful`);
		var bal = (statements.acctBal-= amountt);
		alert(`Your account balance is now ${bal}`);
		
		console.log(`Transfer to account number ${UBA} ${purpose} ${-amountt}`);
		var stat = (`Transfer to account number ${UBA} ${purpose} :  ${-amountt}`);
		console.log(geneStatements.push(stat));	
		console.log(geneStatements.push(`Your account balance is now ${bal}`));
		
		return;
		} else 
		{
		alert("Invalid PIN, PIN must be 4 digits") };
		}
		if (toContinue1 ==2) { alert("Transaction was cancelled")}
	};

if(bankName == 3){
		var FBN = prompt("Enter beneficiary's account number");
		if(FBN.length !== 10) { alert("Account number must be 10 digits")
		return;
		}

		else 

		{ 	fbnaccountNumberDatabase.push(FBN);
			
			var purpose = prompt("Narration");
			console.log(fbnaccountNumberDatabase);

			alert(`You are about to transfer ${amountt} to account number ${FBN}`) };
		
		var toContinue2 =  userCheck();   //prompt("1 > To continue, 2 > To cancel");
		if (toContinue2 == 1)  {
		var pin = prompt("Enter your 4 digit PIN");
		if(pin.length == 4) {
		alert(`Your transfer of ${amountt} was successful`);
		var bal = (statements.acctBal-= amountt);
		alert(`Your account balance is now ${bal}`);
		
		console.log(`Transfer to account number ${FBN}  ${purpose}  ${-amountt}`);
		var stat = (`Transfer to account number ${FBN}  ${purpose} :  ${-amountt}`);
		console.log(geneStatements.push(stat));	
		console.log(geneStatements.push(`Your account balance is now ${bal}`));	
		
		return;
		} else 
		{
		alert("Invalid PIN, PIN must be 4 digits") };
		}
	if (toContinue2 ==2) { alert("Transaction was cancelled")}
	};
	}

	else { alert("You can\'t transfer amount less than N500")}
	};


*/
