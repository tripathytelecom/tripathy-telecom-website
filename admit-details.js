fetch("jobs.json").then(r=>r.json()).then(d=>{
const j=d[id];
details.innerHTML=`
<h1>${j.title}</h1>
<p><b>Exam Date:</b> ${j.examDate}</p>

<h3>Admit Card Info (English)</h3>
<p>Admit card is released. Download it from official website.</p>

<h3>অ্যাডমিট কার্ড তথ্য (বাংলা)</h3>
<p>অ্যাডমিট কার্ড প্রকাশিত হয়েছে। অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোড করুন।</p>

<a href="${j.link}">Download Admit Card</a> |
<a href="${j.website}">Official Website</a>
`;
});
