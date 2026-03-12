// IMAGE SLIDER

let photos=[
"1738496830107.jpg",
"1757075756800.jpg",
"1757086969129.jpg"
]

let x=0

setInterval(function(){

x++

if(x>=photos.length){
x=0
}

document.getElementById("slider").src=photos[x]

},3000)


// ADMISSION

function submitForm(){

alert("Admission Submitted")

}


// CERTIFICATE

function verify(){

let n=document.getElementById("certno").value

if(n=="ACA001"){

document.getElementById("certresult").innerHTML="Certificate Valid"

}else{

document.getElementById("certresult").innerHTML="Certificate Not Found"

}

}


// RESULT

function result(){

let r=document.getElementById("roll").value

if(r=="101"){

document.getElementById("resultshow").innerHTML="PASS"

}else{

document.getElementById("resultshow").innerHTML="Result Not Found"

}

}


// TYPING TEST

function checkTyping(){

let text=document.getElementById("text").innerText
let typed=document.getElementById("typingbox").value

if(text==typed){

document.getElementById("resulttyping").innerHTML="Correct Typing"

}else{

document.getElementById("resulttyping").innerHTML="Typing Mistake"

}

}


// LOGIN

function login(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

if(u=="student" && p=="1234"){

document.getElementById("loginresult").innerHTML="Login Successful"

}else{

document.getElementById("loginresult").innerHTML="Wrong Login"

}

}


// EXAM

function checkExam(a){

if(a=="a"){

document.getElementById("examresult").innerHTML="Correct Answer"

}else{

document.getElementById("examresult").innerHTML="Wrong Answer"

}

}


// RESUME

function makeResume(){

let name=document.getElementById("rname").value
let skills=document.getElementById("rskills").value

document.getElementById("resumeview").innerHTML=

"<h2>"+name+"</h2><p>"+skills+"</p>"

}

function downloadResume(){

let element=document.getElementById("resumeview")

html2pdf().from(element).save()

}


// ID CARD

function makeID(){

let name=document.getElementById("sname").value
let course=document.getElementById("course").value
let sid=document.getElementById("sid").value
let photo=document.getElementById("photo").files[0]

document.getElementById("showname").innerHTML="Name: "+name
document.getElementById("showcourse").innerHTML="Course: "+course
document.getElementById("showsid").innerHTML="ID: "+sid

let reader=new FileReader()

reader.onload=function(e){

document.getElementById("showphoto").src=e.target.result

}

reader.readAsDataURL(photo)

}

function downloadID(){

let element=document.getElementById("card")

html2pdf().from(element).save()

}
