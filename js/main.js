const inputs = document.querySelectorAll(".input");


var objectPeople = [
	{
		username: "son",
		password: "xauxi"
	},
	{
		username: "trang",
		password: "xinhgai"
	}
]

function addcl(){
	//console.log(this);
	var parent = this.parentNode.parentNode;
	parent.classList.add("focus");
	//console.log(this.value);
	// When 
	// if(this.value != "") {
	// 	parent.classList.remove("forgot");
	// }
	//console.log("addcl");
	//console.log(parent.classList);
}

//addcl();

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
	// console.log("remcl");
}

function showAlert() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var textus = document.getElementById("forgotUS");
	var usern = document.getElementById("one");
	var textpass = document.getElementById("forgotP");
	var passw = document.getElementById("pass");

	//Check Password and show alert
	for (var people of objectPeople) {
		if (username == people.username && password == people.password) {
			var forgotEle = document.querySelectorAll(".forgot");
			forgotEle.forEach(ele=>ele.classList.remove("forgot"));

			// document.getElementById("forgotUS").classList.remove("forgot");
			// document.getElementById("one").classList.remove("forgot");
			// document.getElementById("forgotP").classList.remove("forgot");
			// document.getElementById("pass").classList.remove("forgot");

			setTimeout(function(){ alert("Username: " + username + " with password: " + password + " is logged in successfully!")
; }, 300);
			return;
		}

		if (username == "") {
			textus.innerHTML="Enter an username!";
			textus.classList.add("forgot");
			usern.classList.add("forgot");
		} else if (username != people.username) {
			textus.innerHTML="Invalid username";
			textus.classList.add("forgot");
			usern.classList.add("forgot");
		} else if (username == people.username) {
			textus.classList.remove("forgot");
			usern.classList.remove("forgot");
		}

		if (password == "") {
			textpass.innerHTML="Enter a password!";
			textpass.classList.add("forgot");
			passw.classList.add("forgot");
		} else if (password != people.password) {
			textpass.innerHTML="Wrong password!";
			textpass.classList.add("forgot");
			passw.classList.add("forgot");
		} else if (password == people.password) {
			textpass.classList.remove("forgot");
			passw.classList.remove("forgot");
		}
	}
	// alert("Username: " + username + " or password: " + password + " is incorrect!");
}

// function checkPass() {
	
// }

// remcl();


// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });




//inputs.forEach(register);
function register(input) {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
}

for (var input of inputs) {
	//console.log(this);
	
	// console.log("1");
	// console.log(input);
	register(input);
}

