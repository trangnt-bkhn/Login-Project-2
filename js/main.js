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
	console.log(this.value);
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
	
	//Check Password and show alert
	for (var people of objectPeople) {
		if (username == people.username && password == people.password) {
			document.getElementById("forgotUS").classList.remove("forgot");
			document.getElementById("one").classList.remove("forgot");
			document.getElementById("forgotP").classList.remove("forgot");
			document.getElementById("pass").classList.remove("forgot");

			alert("Username: " + username + " with password: " + password + " is logged in successfully!");
			return;
		}

		if (username == "") {
			document.getElementById("forgotUS").innerHTML="Enter an username!";
			document.getElementById("forgotUS").classList.add("forgot");
			document.getElementById("one").classList.add("forgot");
		} else if (username != people.username) {
			document.getElementById("forgotUS").innerHTML="Invalid username";
			document.getElementById("forgotUS").classList.add("forgot");
			document.getElementById("one").classList.add("forgot");
		} else if (username == people.username) {
			document.getElementById("forgotUS").classList.remove("forgot");
			document.getElementById("one").classList.remove("forgot");
		}

		if (password == "") {
			document.getElementById("forgotP").innerHTML="Enter a password!";
			document.getElementById("forgotP").classList.add("forgot");
			document.getElementById("pass").classList.add("forgot");
		} else if (password != people.password) {
			document.getElementById("forgotP").innerHTML="Wrong password!";
			document.getElementById("forgotP").classList.add("forgot");
			document.getElementById("pass").classList.add("forgot");
		} else if (password == people.password) {
			document.getElementById("forgotP").classList.remove("forgot");
			document.getElementById("pass").classList.remove("forgot");
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

