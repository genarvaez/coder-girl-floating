//constructor de usuarios
function Costumers (name, email, subjet, message)
{
	this.name = name;
	this.email = email;
	this. subjet = subjet;
	this. message = message;
}
var costumerArr = [];

// boton de contacto
var button = document.getElementById("button");
//evento de contacto con usuario
button.addEventListener("click", function(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subjet = document.getElementById("subjet").value;
	var message = document.getElementById("message").value;
	if(name == ""|| email == "" || subjet == "" || message == ""){
		alert("CAN'T HAVE EMPTY FIELDS")
	}
	else if(name.charAt(0) != name.charAt(0).toUpperCase()){
		alert("Nombre no válido");
	}
	else if(!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email))){
		alert("E-mail no válido")
	}
	else if(message.lenght > 100){
		alert("El mensaje debe tener menos 100 caracteres")
	}
	else{
	costumerArr.push(new Costumers(name, email, subjet, message))
	alert("Thanks, we'll contact you soon")
	}
	document.getElementById("name").value ="";
	document.getElementById("email").value ="";
	document.getElementById("subjet").value = "";
	document.getElementById("message").value = "";
})	

