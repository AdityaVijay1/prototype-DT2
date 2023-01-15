function validateForm() { 
	let name = document.getElementById("name").value;
  	let email = document.getElementById("email").value;
	let phone = document.getElementById("numb").value;
  	let message = document.getElementById("message").value;
	var phoneRegex = /\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/;
  	if (name == "") { 
		alert("Name must be filled out"); 
		return false; 
		}
	if (email == "") { 
		alert("Email must be filled out"); 
		return false; 
        }
	if(!phone.match(phoneRegex)){
		alert('Enter a valid phone number');
		return false;
	}
  	if(message == ""){
		alert("Message must be filled out"); 
		return false; 
}
}



