fetch("jobs.json?v=" + new Date().getTime())
.then(res => res.json())
.then(data => {
  let html = "";

  data.forEach(j => {

    html += `
    <div class="job">

      <h2>🆕 ${j.job}</h2>
      <p class="date">Posted on: ${new Date(j.date).toDateString()}</p>

      <hr>

      <h3>📌 বিস্তারিত (বাংলা)</h3>
      <p>
      <b>${j.job}</b> নিয়োগের জন্য <b>${j.org}</b> কর্তৃপক্ষ আবেদন আহ্বান করেছে।
      যেসব প্রার্থীর <b>${j.qua}</b> যোগ্যতা রয়েছে তারা আবেদন করতে পারবেন।
      আবেদনকারীর বয়স হতে হবে <b>${j.age}</b>।
      অনলাইন আবেদন করার শেষ তারিখ <b>${j.last}</b>।
      </p>

      <h3>📌 Details (English)</h3>
      <p>
      <b>${j.org}</b> has invited applications for the post of
      <b>${j.job}</b>.
      Candidates who have <b>${j.qua}</b> qualification are eligible.
      Age limit for applicants is <b>${j.age}</b>.
      The last date to apply online is <b>${j.last}</b>.
      </p>

      <a class="btn" href="${j.link}" target="_blank">Apply Online</a>

    </div>
    `;
  });

  document.getElementById("jobs").innerHTML = html;
});
