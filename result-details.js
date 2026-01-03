const id = new URLSearchParams(location.search).get("id");

fetch("/jobs.json?v=" + Date.now())
.then(r => r.json())
.then(d => {

  const j = d[id];
  if (!j || j.type !== "result") return;

  document.getElementById("details").innerHTML = `
    <h1>${j.title}</h1>

    <p><b>Result Date:</b> ${j.resultDate}</p>

    <h3>Result Details (English)</h3>
    <p>
      The result has been officially declared.
      Candidates should check the result only
      from the official website.
    </p>

    <h3>ফলাফল সংক্রান্ত তথ্য (বাংলা)</h3>
    <p>
      ফলাফল অফিসিয়াল ওয়েবসাইটে প্রকাশিত হয়েছে।
      অফিসিয়াল ওয়েবসাইট দেখে ফলাফল যাচাই করুন।
    </p>

    <p>
      <a href="${j.link}" target="_blank">Check Result</a> |
      <a href="${j.website}" target="_blank">Official Website</a>
    </p>
  `;
});
