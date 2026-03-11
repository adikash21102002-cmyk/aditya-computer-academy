<!DOCTYPE html>
<html>
<head>
<title>Aditya Computer Academy</title>

<style>

body{
font-family: Arial;
margin:0;
background:#f2f2f2;
}

header{
background:#0033cc;
color:white;
padding:20px;
text-align:center;
}

nav{
background:black;
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
padding:20px;
}

.box{
background:white;
padding:20px;
margin:20px;
box-shadow:0 0 10px gray;
}

footer{
background:#0033cc;
color:white;
text-align:center;
padding:10px;
}

input,button{
padding:10px;
margin:5px;
width:90%;
}

</style>
</head>

<body>

<header>
<h1>Aditya Computer Academy</h1>
<p>Shivpur, Varanasi | 6391264205</p>
</header>

<nav>
<a href="#home">Home</a>
<a href="#course">Courses</a>
<a href="#admission">Admission</a>
<a href="#verify">Certificate</a>
<a href="#contact">Contact</a>
</nav>

<section id="home">
<div class="box">
<h2>Welcome</h2>
<p>Welcome to Aditya Computer Academy. Best Computer Training Institute in Shivpur Varanasi.</p>
</div>
</section>

<section id="course">
<div class="box">
<h2>Our Courses</h2>
<ul>
<li>CCC</li>
<li>O Level</li>
<li>ADCA</li>
<li>DCA</li>
<li>Tally</li>
<li>Basic Computer</li>
</ul>
</div>
</section>

<section id="admission">
<div class="box">
<h2>Online Admission</h2>

<input type="text" placeholder="Student Name">
<input type="text" placeholder="Mobile Number">
<input type="text" placeholder="Course Name">

<button>Submit</button>

</div>
</section>

<section id="verify">
<div class="box">
<h2>Certificate Verification</h2>

<input type="text" placeholder="Enter Certificate Number">

<button onclick="verify()">Verify</button>

<p id="result"></p>

</div>
</section>

<section>
<div class="box">

<h2>YouTube Videos</h2>

<iframe width="100%" height="315"
src="https://www.youtube.com/embed/dQw4w9WgXcQ">
</iframe>

</div>
</section>

<section id="contact">
<div class="box">

<h2>Contact Us</h2>

<p>Aditya Computer Academy</p>
<p>Shivpur, Varanasi</p>
<p>Phone: 6391264205</p>

</div>
</section>

<footer>
© 2026 Aditya Computer Academy
</footer>

<script>

function verify(){

let number=document.querySelector("#verify input").value

if(number=="12345"){

document.getElementById("result").innerHTML="Certificate Valid"

}

else{

document.getElementById("result").innerHTML="Certificate Not Found"

}

}

</script>

</body>
</html>
