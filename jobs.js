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
