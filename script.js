function verifyCertificate() {

let cert = document.getElementById("cert").value;

if(cert === "ACA123") {

document.getElementById("result").innerHTML = "Certificate Valid";

}

else {

document.getElementById("result").innerHTML = "Certificate Not Found";

}

}


function submitForm(){

alert("Admission Form Submitted Successfully");

}
