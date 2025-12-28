const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("jobs.json?v=" + new Date().getTime())
.then(res => res.json())
.then(data => {

  const j = data[id];
  const box = document.getElementById("details");

  box.innerHTML = `
    <h1>${j.job}</h1>

    <div class="section">
      <h3>Organization</h3>
      <p>${j.org}</p>
    </div>

    <div class="section">
      <h3>Qualification</h3>
      <p>${j.qua}</p>
    </div>

    <div class="section">
      <h3>Age Limit</h3>
      <p>${j.age}</p>
    </div>

    <div class="section">
      <h3>Important Date</h3>
      <p>Last Date to Apply: <b>${j.last}</b></p>
    </div>

    <div class="section">
      <h3>Full Details</h3>
      <p>
        <b>${j.org}</b> has released the official notification for
        <b>${j.job}</b>. Eligible candidates who meet the required
        qualification of <b>${j.qua}</b> and age limit of <b>${j.age}</b>
        can apply online before <b>${j.last}</b>.
      </p>
    </div>

    <a class="apply" href="${j.link}" target="_blank">Apply Online</a>
    <br><br>
    <a class="back" href="jobs.html">← Back to Job List</a>
  `;
});
