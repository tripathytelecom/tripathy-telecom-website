const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("jobs.json?v=" + new Date().getTime())
.then(res => res.json())
.then(data => {

  const j = data[id];
  const box = document.getElementById("details");

  if (!j) {
    box.innerHTML = "Invalid post.";
    return;
  }

  // JOB
  if (j.type === "job") {
    box.innerHTML = `
      <h1>${j.job}</h1>

      <div class="section"><h3>Organization</h3><p>${j.org}</p></div>
      <div class="section"><h3>Qualification</h3><p>${j.qua}</p></div>
      <div class="section"><h3>Age Limit</h3><p>${j.age}</p></div>
      <div class="section"><h3>Last Date</h3><p>${j.last}</p></div>

      <div class="section">
        <h3>Details</h3>
        <p>
          ${j.org} has released the notification for <b>${j.job}</b>.
          Eligible candidates can apply before <b>${j.last}</b>.
        </p>
      </div>

      <a class="apply" href="${j.link}" target="_blank">Apply Online</a>
      <br><br>
      <a class="back" href="jobs.html">← Back</a>
    `;
  }

  // RESULT
  else if (j.type === "result") {
    box.innerHTML = `
      <h1>${j.job}</h1>

      <div class="section"><h3>Organization</h3><p>${j.org}</p></div>
      <div class="section"><h3>Exam Name</h3><p>${j.qua || "—"}</p></div>
      <div class="section"><h3>Result Date</h3><p>${j.last}</p></div>

      <div class="section">
        <h3>Result Information</h3>
        <p>
          ${j.org} has declared the result for <b>${j.job}</b>.
          Candidates can check or download the result from the link below.
        </p>
      </div>

      <a class="apply" href="${j.link}" target="_blank">Download Result</a>
      <br><br>
      <a class="back" href="jobs.html">← Back</a>
    `;
  }

  // ADMIT CARD
  else if (j.type === "admit") {
    box.innerHTML = `
      <h1>${j.job}</h1>

      <div class="section"><h3>Organization</h3><p>${j.org}</p></div>
      <div class="section"><h3>Exam Date</h3><p>${j.last}</p></div>

      <div class="section">
        <h3>Admit Card Details</h3>
        <p>
          ${j.org} has released the admit card for <b>${j.job}</b>.
          Candidates can download their admit card from the link below.
        </p>
      </div>

      <a class="apply" href="${j.link}" target="_blank">Download Admit Card</a>
      <br><br>
      <a class="back" href="jobs.html">← Back</a>
    `;
  }

});
