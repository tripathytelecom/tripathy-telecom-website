const id=new URLSearchParams(location.search).get("id");

fetch("jobs.json").then(r=>r.json()).then(d=>{
const j=d[id];
details.innerHTML=`
<h1>${j.title}</h1>
<p><b>Updated:</b> ${j.updateDate}</p>
<p><b>Vacancy:</b> ${j.vacancy}</p>
<p><b>Qualification:</b> ${j.qualification}</p>
<p><b>Age:</b> ${j.age}</p>
<p><b>Fee:</b> ${j.fee}</p>
<p><b>Last Date:</b> ${j.lastDate}</p>

<h3>Job Description (English)</h3>
<p>This recruitment is announced by ${j.website}. Eligible candidates should apply online before the last date.</p>

<h3>চাকরির বিবরণ (বাংলা)</h3>
<p>এই নিয়োগটি অফিসিয়াল ওয়েবসাইট ${j.website} এ প্রকাশিত হয়েছে। অফিসিয়াল নোটিফিকেশন দেখে আবেদন করুন।</p>

<a href="${j.applyLink}">Apply Online</a> |
<a href="${j.notification}">Notification</a> |
<a href="${j.website}">Official Website</a>
`;
});
