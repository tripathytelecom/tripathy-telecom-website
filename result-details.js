fetch("jobs.json").then(r=>r.json()).then(d=>{
const j=d[id];
details.innerHTML=`
<h1>${j.title}</h1>
<p><b>Result Date:</b> ${j.resultDate}</p>

<h3>Result Info (English)</h3>
<p>The result has been officially released. Please check the result from official website.</p>

<h3>ফলাফল তথ্য (বাংলা)</h3>
<p>ফলাফল অফিসিয়াল ওয়েবসাইটে প্রকাশিত হয়েছে। অফিসিয়াল ওয়েবসাইট থেকে ফলাফল দেখুন।</p>

<a href="${j.link}">Check Result</a> |
<a href="${j.website}">Official Website</a>
`;
});
