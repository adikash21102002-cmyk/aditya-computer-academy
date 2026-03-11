<!DOCTYPE html>
<html>
<head>

<title>Aditya Computer Academy</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<style>

body{
font-family:Arial;
margin:0;
background:#f2f2f2;
}

header{
background:#0d6efd;
color:white;
text-align:center;
padding:30px;
}

nav{
background:#222;
padding:10px;
text-align:center;
}

nav a{
color:white;
margin:15px;
text-decoration:none;
font-weight:bold;
}

section{
padding:40px;
}

.courses{
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content:center;
}

.card{
background:white;
padding:20px;
width:200px;
border-radius:10px;
box-shadow:0 5px 10px rgba(0,0,0,0.2);
text-align:center;
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:15px;
}

.gallery img{
width:100%;
border-radius:10px;
}

.tool{
background:white;
padding:20px;
margin:20px auto;
max-width:600px;
border-radius:10px;
box-shadow:0 5px 10px rgba(0,0,0,0.2);
}

input,textarea,select{
width:100%;
padding:10px;
margin:10px 0;
}

button{
padding:10px;
background:#0d6efd;
color:white;
border:none;
cursor:pointer;
}

footer{
background:#222;
color:white;
text-align:center;
padding:20px;
}

</style>

</head>

<body>

<header>

<h1>Aditya Computer Academy</h1>
<p>Kotwa Varanasi | 9305066046</p>

</header>

<nav>

<a href="#">Home</a>
<a href="#courses">Courses</a>
<a href="#gallery">Gallery</a>
<a href="#tools">Tools</a>
<a href="#contact">Contact</a>

</nav>

<section id="courses">

<h2 align="center">Our Courses</h2>

<div class="courses">

<div class="card">ADCA</div>
<div class="card">DCA</div>
<div class="card">CCC</div>
<div class="card">Tally Prime</div>
<div class="card">MS Office</div>
<div class="card">Typing</div>

</div>

</section>

<section id="gallery">

<h2 align="center">Institute Gallery</h2>

<div class="gallery">

<img src="photo1.jpg">
<img src="photo2.jpg">
<img src="photo3.jpg">
<img src="photo4.jpg">

</div>

</section>

<section id="tools">

<h2 align="center">Student Tools</h2>

<div class="tool">

<h3>Calculator</h3>

<input type="number" id="n1" placeholder="First number">
<input type="number" id="n2" placeholder="Second number">

<button onclick="calc()">Add</button>

<p id="result"></p>

</div>

<div class="tool">

<h3>Typing Speed Test</h3>

<select id="language" onchange="changeText()">

<option value="english">English</option>
<option value="hindi">Hindi</option>

</select>

<p id="text">
Computer education is very important in today's digital world.
</p>

<textarea id="typingInput"></textarea>

<button onclick="startTest()">Start</button>
<button onclick="checkSpeed()">Check Speed</button>

<p id="speed"></p>

</div>

<div class="tool">

<h3>Resume Maker</h3>

<input type="text" id="name" placeholder="Name">
<input type="text" id="phone" placeholder="Mobile">
<input type="text" id="edu" placeholder="Education">
<input type="text" id="skill" placeholder="Skills">

<button onclick="resume()">Generate Resume</button>

<div id="resumeOutput"></div>

</div>

</section>

<section id="contact">

<h2 align="center">Contact</h2>

<p align="center">

Aditya Computer Academy<br>
Kotwa Varanasi<br>
Phone: 9305066046

</p>

</section>

<footer>

© Aditya Computer Academy

</footer>

<script>

function calc(){

let a=document.getElementById("n1").value;
let b=document.getElementById("n2").value;

document.getElementById("result").innerHTML=Number(a)+Number(b);

}

let startTime;

function startTest(){

startTime=new Date().getTime();

}

function checkSpeed(){

let endTime=new Date().getTime();

let total=(endTime-startTime)/1000;

let text=document.getElementById("typingInput").value;

let words=text.split(" ").length;

let speed=Math.round((words/total)*60);

document.getElementById("speed").innerHTML="Speed: "+speed+" WPM";

}

function changeText(){

let lang=document.getElementById("language").value;

if(lang=="hindi"){

document.getElementById("text").innerHTML=
"कंप्यूटर शिक्षा आज के समय में बहुत महत्वपूर्ण है।";

}else{

document.getElementById("text").innerHTML=
"Computer education is very important in today's digital world.";

}

}

function resume(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let edu=document.getElementById("edu").value;
let skill=document.getElementById("skill").value;

document.getElementById("resumeOutput").innerHTML=

"<h3>"+name+"</h3>"+
"<p>Mobile: "+phone+"</p>"+
"<p>Education: "+edu+"</p>"+
"<p>Skills: "+skill+"</p>";

}

</script>

</body>
</html>
