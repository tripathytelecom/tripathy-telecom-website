const id = new URLSearchParams(window.location.search).get("id");

fetch("jobs.json?v=" + Date.now())
  .then(res => res.json())
  .then(data => {

    const r = data[id];
    if (!r || r.type !== "result") return;

    document.getElementById("details").innerHTML = `
      <h1>${r.title}</h1>

      <p><b>Result Date:</b> ${r.resultDate}</p>

      <h3>Result Information (English)</h3>
      <p>
        The examination result has been officially released.
        Candidates are advised to check the result only
        from the official website.
      </p>

      <h3>ফলাফল সংক্রান্ত তথ্য (বাংলা)</h3>
      <p>
        পরীক্ষার ফলাফল অফিসিয়াল ওয়েবসাইটে প্রকাশিত হয়েছে।
        শুধুমাত্র অফিসিয়াল ওয়েবসাইট দেখে ফলাফল যাচাই করুন।
      </p>

      <p>
        <a href="${r.link}" target="_blank">Check Result</a> |
        <a href="${r.website}" target="_blank">Official Website</a>
      </p>
    `;
  });
