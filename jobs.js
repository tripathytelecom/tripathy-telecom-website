fetch("jobs.json")
.then(res => res.json())
.then(data => {
  let html = "";
  data.forEach(j => {
    html += `
    <div style="border:1px solid #ddd;padding:15px;margin:10px 0">
      <b>🆕 Latest Job</b><br><br>

      <b>বাংলা:</b><br>
      📌 পদ: ${j.job}<br>
      🎓 যোগ্যতা: ${j.qua}<br>
      🎂 বয়স: ${j.age}<br>
      📅 শেষ তারিখ: ${j.last}<br><br>

      <b>English:</b><br>
      📌 Post: ${j.job}<br>
      🎓 Qualification: ${j.qua}<br>
      🎂 Age Limit: ${j.age}<br>
      📅 Last Date: ${j.last}<br><br>

      👉 <a href="${j.link}" target="_blank">Apply Online</a>
    </div>`;
  });

  document.getElementById("jobs").innerHTML = html;
});
