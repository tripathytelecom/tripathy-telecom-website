const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("jobs.json?v=" + new Date().getTime())
.then(res => res.json())
.then(data => {

  const j = data[id];
  const box = document.getElementById("details");

  if (!j) {
    box.innerHTML = "Invalid details.";
    return;
  }

  const postedDate = new Date(j.date).toDateString();

  /* ================= JOB ================= */
  if (j.type === "job") {

    box.innerHTML = `
      <h1>${j.job}</h1>
      <div class="date">Job Update Date: ${postedDate}</div>

      <div class="section"><h3>Total Vacancy</h3><p>${j.vacancy || "As per notification"}</p></div>
      <div class="section"><h3>Qualification</h3><p>${j.qua}</p></div>
      <div class="section"><h3>Age Limit</h3><p>${j.age}</p></div>
      <div class="section"><h3>Application Fee</h3><p>${j.fee || "As per rules"}</p></div>
      <div class="section"><h3>Last Date</h3><p>${j.last}</p></div>

      <div class="section">
        <h3>AI Job Description (English)</h3>
        <p>
          ${j.org} has released an official notification for the recruitment of
          <b>${j.job}</b>. Candidates who fulfill the eligibility criteria such as
          qualification and age limit can apply online before <b>${j.last}</b>.
          Applicants are advised to carefully read the official notification
          and visit the official website before applying.
        </p>
        <p><b>Apply only after checking the official website and notification.</b></p>
      </div>

      <div class="section">
        <h3>AI চাকরির বিবরণ (বাংলা)</h3>
        <p>
          <b>${j.org}</b> কর্তৃপক্ষ <b>${j.job}</b> পদে নিয়োগের জন্য বিজ্ঞপ্তি প্রকাশ করেছে।
          যোগ্যতা ও বয়সসীমা পূরণকারী প্রার্থীরা <b>${j.last}</b> তারিখের মধ্যে আবেদন করতে পারবেন।
          আবেদন করার আগে অবশ্যই অফিসিয়াল ওয়েবসাইট ও বিজ্ঞপ্তি ভালোভাবে পড়ে নিন।
        </p>
        <p><b>অফিসিয়াল নোটিফিকেশন ও ওয়েবসাইট দেখে আবেদন করুন।</b></p>
      </div>

      <a class="apply" href="${j.link}" target="_blank">Apply Online</a><br><br>
      <a class="apply" href="${j.website || j.link}" target="_blank">Official Website</a>
      <br><br>
      <a class="back" href="jobs.html">← Back to Jobs</a>
    `;
  }

  /* ================= RESULT ================= */
  else if (j.type === "result") {

    box.innerHTML = `
      <h1>${j.job}</h1>
      <div class="date">Result Date: ${j.last}</div>

      <div class="section"><h3>Official Website</h3><p>${j.org}</p></div>

      <div class="section">
        <h3>AI Result Description (English)</h3>
        <p>
          ${j.org} has officially declared the result for
          <b>${j.job}</b>. Candidates who appeared in the examination
          can now check or download their result using the link below.
        </p>
      </div>

      <div class="section">
        <h3>AI ফলাফল বিবরণ (বাংলা)</h3>
        <p>
          <b>${j.org}</b> কর্তৃপক্ষ <b>${j.job}</b> পরীক্ষার ফলাফল প্রকাশ করেছে।
          পরীক্ষায় অংশগ্রহণকারী প্রার্থীরা নিচের লিঙ্ক থেকে ফলাফল দেখতে পারবেন।
        </p>
      </div>

      <a class="apply" href="${j.link}" target="_blank">Check Result</a><br><br>
      <a class="apply" href="${j.website || j.link}" target="_blank">Official Website</a>
      <br><br>
      <a class="back" href="jobs.html">← Back</a>
    `;
  }

  /* ================= ADMIT CARD ================= */
  else if (j.type === "admit") {

    box.innerHTML = `
      <h1>${j.job}</h1>
      <div class="date">Exam Date: ${j.last}</div>

      <div class="section">
        <h3>AI Admit Card Description (English)</h3>
        <p>
          ${j.org} has released the admit card for
          <b>${j.job}</b>. Candidates must download their admit card
          from the official website before the examination date.
        </p>
      </div>

      <div class="section">
        <h3>AI অ্যাডমিট কার্ড বিবরণ (বাংলা)</h3>
        <p>
          <b>${j.org}</b> কর্তৃপক্ষ <b>${j.job}</b> পরীক্ষার অ্যাডমিট কার্ড প্রকাশ করেছে।
          পরীক্ষার আগে অবশ্যই অফিসিয়াল ওয়েবসাইট থেকে অ্যাডমিট কার্ড ডাউনলোড করুন।
        </p>
      </div>

      <a class="apply" href="${j.link}" target="_blank">Download Admit Card</a><br><br>
      <a class="apply" href="${j.website || j.link}" target="_blank">Official Website</a>
      <br><br>
      <a class="back" href="jobs.html">← Back</a>
    `;
  }

});
