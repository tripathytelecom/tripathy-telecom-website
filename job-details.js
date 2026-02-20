const id = new URLSearchParams(location.search).get("id");

fetch("/jobs.json?v=" + Date.now())
  .then(r => r.json())
  .then(d => {

    const j = d[id];
    if (!j || j.type !== "job") return;

    document.getElementById("details").innerHTML = `
    <h1>${j.title}</h1>

    <div style="color: red; font-weight: bold; margin-bottom: 20px; border: 1px solid red; padding: 10px; border-radius: 5px; background: #fff5f5;">
      🔴 বিশেষ ঘোষণা: আবেদন করার আগে অফিসিয়াল নোটিফিকেশন ভালো করে দেখে আবেদন করবেন।<br>
      (Important: Please read the official notification carefully before applying.)
    </div>

    <p><b>Updated:</b> ${j.updateDate}</p>
    <p><b>Total Vacancy:</b> ${j.vacancy}</p>
    <p><b>Qualification:</b> ${j.qualification}</p>
    <p><b>Age Limit:</b> ${j.age}</p>
    <p><b>Application Fee:</b> ${j.fee}</p>
    <p><b>Last Date:</b> ${j.lastDate}</p>

    <h3>Job Description (English)</h3>
    <p>
      ${j.descriptionEn || `This recruitment has been officially released. Candidates are advised to apply after reading the official notification from the official website.`}
    </p>

    <h3>চাকরির বিবরণ (বাংলা)</h3>
    <p>
      ${j.descriptionBn || `এই নিয়োগটি অফিসিয়াল ওয়েবসাইটে প্রকাশিত হয়েছে। অফিসিয়াল নোটিফিকেশন ও ওয়েবসাইট দেখে আবেদন করুন।`}
    </p>

    <p>
      <a href="${j.applyLink}" target="_blank">Apply Online</a> |
      <a href="${j.notification}" target="_blank">Notification</a> |
      <a href="${j.website}" target="_blank">Official Website</a>
    </p>
  `;
  });
