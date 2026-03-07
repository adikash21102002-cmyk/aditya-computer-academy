<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aditya Computer Academy</title>
<style>
body{
    font-family: Arial, sans-serif;
    margin:0;
    background:#f0f2f5;
}
header{
    background:#0d6efd;
    color:white;
    padding:25px;
    text-align:center;
}
nav{
    background:#111;
    text-align:center;
    padding:12px;
}
nav a{
    color:white;
    margin:15px;
    text-decoration:none;
    font-weight:bold;
}
.banner{
    background:#0d6efd;
    color:white;
    padding:60px;
    text-align:center;
}
section{
    padding:40px;
}
.title{
    text-align:center;
    margin-bottom:30px;
}
.courses{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
}
.card{
    background:white;
    padding:20px;
    width:220px;
    border-radius:10px;
    box-shadow:0 3px 10px rgba(0,0,0,0.1);
    text-align:center;
}
.card:hover{
    transform:scale(1.05);
    transition:0.3s;
}
form{
    max-width:500px;
    margin:auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 3px 10px rgba(0,0,0,0.1);
}
input,select{
    width:100%;
    padding:10px;
    margin:10px 0;
}
button{
    background:#0d6efd;
    color:white;
    padding:12px;
    border:none;
    width:100%;
    font-size:16px;
    cursor:pointer;
}
button:hover{
    opacity:0.9;
}
footer{
    background:#111;
    color:white;
    text-align:center;
    padding:20px;
    margin-top:40px;
}
.tools-section{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
}
.tool-card{
    background:white;
    padding:20px;
    width:250px;
    border-radius:10px;
    box-shadow:0 3px 10px rgba(0,0,0,0.1);
    text-align:center;
}
img{
    width:100%;
    border-radius:10px;
}
</style>
</head>
<body>

<header>
<h1>Aditya Computer Academy</h1>
<p>Kotwa, Varanasi | 📞 9305066046</p>
</header>

<nav>
<a href="#">Home</a>
<a href="#courses">Courses</a>
<a href="#admission">Admission</a>
<a href="#tools">Tools</a>
<a href="#contact">Contact</a>
</nav>

<div class="banner">
<h2>Learn Computer – Build Your Future</h2>
<p>Best Computer Education in Kotwa Varanasi</p>
<img src="https://via.placeholder.com/1200x300.png?text=Institute+Banner" alt="Banner Image">
</div>

<section id="courses">
<h2 class="title">Our Courses</h2>
<div class="courses">
<div class="card">ADCA</div>
<div class="card">DCA</div>
<div class="card">CCC</div>
<div class="card">Tally Prime</div>
<div class="card">MS Office</div>
<div class="card">Typing</div>
</div>
</section>

<section id="admission">
<h2 class="title">Student Admission Form</h2>
<form>
<input type="text" placeholder="Student Name" required>
<input type="text" placeholder="Father Name" required>
<input type="text" placeholder="Mobile Number" required>
<select>
<option>Select Course</option>
<option>ADCA</option>
<option>DCA</option>
<option>CCC</option>
<option>Tally Prime</option>
<option>MS Office</option>
<option>Typing</option>
</select>
<label>Aadhaar Card</label>
<input type="file">
<label>High School Marksheet</label>
<input type="file">
<label>Inter Marksheet</label>
<input type="file">
<label>Photo Upload</label>
<input type="file">
<button type="submit">Submit Admission</button>
</form>
</section>

<section id="tools">
<h2 class="title">Tools for Students</h2>
<div class="tools-section">

<div class="tool-card">
<h3>Calculator</h3>
<input type="number" id="calc1" placeholder="First Number">
<input type="number" id="calc2" placeholder="Second Number">
<button onclick="document.getElementById('calcResult').innerHTML=Number(document.getElementById('calc1').value)+Number(document.getElementById('calc2').value)">Add</button>
<p id="calcResult"></p>
</div>

<div class="tool-card">
<h3>Typing Speed Test</h3>
<img src="https://via.placeholder.com/250x150.png?text=Typing+Test" alt="Typing Test">
<p>Practice story typing or game typing.</p>
<button onclick="alert('Typing Test Coming Soon!')">Start Test</button>
</div>

<div class="tool-card">
<h3>Resume Maker</h3>
<img src="https://via.placeholder.com/250x150.png?text=Resume+Maker" alt="Resume Maker">
<p>Fill your info and download resume.</p>
<button onclick="alert('Resume Maker Coming Soon!')">Create Resume</button>
</div>

<div class="tool-card">
<h3>Photo Editing</h3>
<img src="https://via.placeholder.com/250x150.png?text=Photo+Edit" alt="Photo Edit">
<p>Resize, crop, rotate photos.</p>
<button onclick="alert('Photo Editing Tool Coming Soon!')">Open Tool</button>
</div>

<div class="tool-card">
<h3>PDF Tools</h3>
<img src="https://via.placeholder.com/250x150.png?text=PDF+Tools" alt="PDF Tools">
<p>Merge, Split or View PDFs.</p>
<button onclick="alert('PDF Tools Coming Soon!')">Open PDF Tools</button>
</div>

<div class="tool-card">
<h3>Course Notes</h3>
<img src="https://via.placeholder.com/250x150.png?text=Notes" alt="Course Notes">
<p>Download ADCA, DCA, CCC, Tally, MS Office notes.</p>
<button onclick="alert('Notes Download Coming Soon!')">Download Notes</button>
</div>

<div class="tool-card">
<h3>Certificate Verification</h3>
<img src="https://via.placeholder.com/250x150.png?text=Certificate" alt="Certificate">
<p>Enter certificate ID to verify.</p>
<input type="text" placeholder="Certificate ID">
<button onclick="alert('Verification Coming Soon!')">Verify</button>
</div>

</div>
</section>

<section id="contact">
<h2 class="title">Contact Us</h2>
<p style="text-align:center;">
Aditya Computer Academy<br>
Kotwa, Varanasi<br>
📞 9305066046
</p>
</section>

<footer>
© 2026 Aditya Computer Academy
</footer>

</body>
</html>
