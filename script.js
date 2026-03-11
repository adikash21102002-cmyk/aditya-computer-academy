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
// Generate Resume HTML
function makeResume(){
let name=document.getElementById("rname").value
let dob=document.getElementById("rdob").value
let address=document.getElementById("raddress").value
let phone=document.getElementById("rphone").value
let email=document.getElementById("remail").value
let career=document.getElementById("rcareer").value
let education=document.getElementById("reducation").value
let skills=document.getElementById("rskills").value
let languages=document.getElementById("rlanguages").value
let hobbies=document.getElementById("rhobbies").value
let experience=document.getElementById("rexperience").value

document.getElementById("resumeview").innerHTML=
`<h2 style="text-align:center;">${name}</h2>
<p><strong>Date of Birth:</strong> ${dob}</p>
<p><strong>Address:</strong> ${address}</p>
<p><strong>Phone:</strong> ${phone} | <strong>Email:</strong> ${email}</p>
<hr>
<h3>Career Objective</h3>
<p>${career}</p>
<hr>
<h3>Education</h3>
<p>${education.replace(/\n/g,"<br>")}</p>
<hr>
<h3>Skills</h3>
<p>${skills}</p>
<hr>
<h3>Languages Known</h3>
<p>${languages}</p>
<hr>
<h3>Hobbies</h3>
<p>${hobbies}</p>
<hr>
<h3>Work Experience / Projects</h3>
<p>${experience.replace(/\n/g,"<br>")}</p>`
}

// Download Resume as PDF
function downloadResume(){
let element=document.getElementById("resumeview")
let opt={margin:0.5,filename:"Resume.pdf",html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}}
html2pdf().set(opt).from(element).save()
}
