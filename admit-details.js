const id = new URLSearchParams(location.search).get("id");

fetch("/jobs.json?v=" + Date.now())
  .then(res => res.json())
  .then(data => {

    const ad = data[id];
    if (!ad || ad.type !== "admit") return;

    document.getElementById("details").innerHTML = `
      <h1>${ad.title}</h1>

      <p><b>Exam Date:</b> ${ad.examDate}</p>

      <h3>Admit Card Information (English)</h3>
      <p>
        Admit card has been officially released.
        Candidates are advised to download the admit card
        only from the official website before the examination.
      </p>

      <h3>অ্যাডমিট কার্ড সংক্রান্ত তথ্য (বাংলা)</h3>
      <p>
        অ্যাডমিট কার্ড অফিসিয়াল ওয়েবসাইটে প্রকাশিত হয়েছে।
        পরীক্ষার আগে অফিসিয়াল ওয়েবসাইট থেকে অ্যাডমিট কার্ড
        ডাউনলোড করার জন্য অনুরোধ করা হচ্ছে।
      </p>

      <p>
        <a href="${ad.link}" target="_blank">Download Admit Card</a> |
        <a href="${ad.website}" target="_blank">Official Website</a>
      </p>
    `;
  });
