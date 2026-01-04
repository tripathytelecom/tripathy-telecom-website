fetch("jobs.json?v=" + Date.now())
.then(res => res.json())
.then(data => {

  const jobBox = document.getElementById("latest-jobs");
  const resultBox = document.getElementById("latest-results");
  const admitBox = document.getElementById("latest-admit");

  jobBox.innerHTML = "";
  resultBox.innerHTML = "";
  admitBox.innerHTML = "";

  let jc=0, rc=0, ac=0;

  data.forEach((j, i) => {

    if (!j.type || !j.title) return;

    /* JOB */
    if (j.type === "job") {
      jobBox.innerHTML += `
        <li>
          <a href="job-details.html?id=${i}">
            ${j.title}
          </a>
        </li>`;
      jc++;
    }

    /* RESULT */
    if (j.type === "result") {
      resultBox.innerHTML += `
        <li>
          <a href="result-details.html?id=${i}">
            ${j.title}
          </a>
        </li>`;
      rc++;
    }

    /* ADMIT */
    if (j.type === "admit") {
      admitBox.innerHTML += `
        <li>
          <a href="admit-details.html?id=${i}">
            ${j.title}
          </a>
        </li>`;
      ac++;
    }

  });

  if (jc===0) jobBox.innerHTML="<li>No Job Available</li>";
  if (rc===0) resultBox.innerHTML="<li>No Result Available</li>";
  if (ac===0) admitBox.innerHTML="<li>No Admit Card Available</li>";
});
const searchInput = document.getElementById("jobSearch");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();

    filterListById("latest-jobs", keyword);
    filterListById("latest-results", keyword);
    filterListById("latest-admit", keyword);
  });
}

function filterListById(listId, keyword) {
  const list = document.getElementById(listId);
  if (!list) return;

  const items = list.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(keyword) ? "" : "none";
  }
}
