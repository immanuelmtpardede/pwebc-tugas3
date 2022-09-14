function signin(){
	const USERNAME = document.getElementById("username").value;
	const PASSWORD = document.getElementById("password").value;


	if(USERNAME.length <= 0){
		alert("Isi username-mu!");
		return;
	}
	if(PASSWORD.length <= 0){
		alert("Isi password-mu!");
		return;
	}
	alert("Sign in successfully");
}

function signup(){
	const USERNAME = document.getElementById("username").value;
	const EMAIL = document.getElementById("email").value;
	const PASSWORD = document.getElementById("password").value;
	const CPASSWORD = document.getElementById("cpassword").value;

	if(USERNAME.length <= 0){
		alert("Isi username-mu!");
		return;
	}
	if(EMAIL.length <= 0){
		alert("Isi email-mu!");
		return;
	}
	if(PASSWORD.length <= 0){
		alert("Isi password-mu!");
		return;
	}
	if(CPASSWORD.length <= 0){
		alert("Isi confirmation password-mu!");
		return;
	}
	if(PASSWORD != CPASSWORD){
		alert("Cek lagi confirmation password-mu");
		return;
	}
	alert("Sign up successfully");
}

function gotosu(){
	window.location = "signup.html";
}

function gotosi(){
	window.location = "index.html";
}