let images=[
"https://via.placeholder.com/800x250",
"https://via.placeholder.com/800x250/ff0000",
"https://via.placeholder.com/800x250/00ff00"
]

let i=0

setInterval(function(){

i++

if(i>=images.length){
i=0
}

document.getElementById("slide").src=images[i]

},3000)

function verify(){

let n=document.getElementById("certno").value

if(n=="ACA001"){

document.getElementById("certresult").innerHTML="Certificate Valid"

}

else{

document.getElementById("certresult").innerHTML="Certificate Not Found"

}

}

function result(){

let r=document.getElementById("roll").value

if(r=="101"){

document.getElementById("resultshow").innerHTML="Result: PASS"

}

else{

document.getElementById("resultshow").innerHTML="Result Not Found"

}

}

function submitForm(){

alert("Admission Submitted")

}

function makeResume(){

let name=document.getElementById("rname").value
let q=document.getElementById("rqual").value
let s=document.getElementById("rskill").value

document.getElementById("resumeview").innerHTML=

"<h3>"+name+"</h3><p>"+q+"</p><p>"+s+"</p>"

}

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
