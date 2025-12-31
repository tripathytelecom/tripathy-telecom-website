fetch("jobs.json?v=" + new Date().getTime())
.then(res => res.json())
.then(data => {

  const jobs = document.getElementById("latest-jobs");
  const results = document.getElementById("latest-results");
  const admit = document.getElementById("latest-admit");

  jobs.innerHTML = "";
  results.innerHTML = "";
  admit.innerHTML = "";

  let jobCount = 0, resultCount = 0, admitCount = 0;

  data.forEach((j, i) => {

    if (!j.type || !j.job || !j.link) return; // safety

    if (j.type === "job") {
      jobs.innerHTML += `<li><a href="job-details.html?id=${i}">${j.job}</a></li>`;
      jobCount++;
    }
    else if (j.type === "result") {
      results.innerHTML += `<li><a href="job-details.html?id=${i}">${j.job}</a></li>`;
      resultCount++;
    }
    else if (j.type === "admit") {
      admit.innerHTML += `<li><a href="job-details.html?id=${i}">${j.job}</a></li>`;
      admitCount++;
    }
  });

  if (jobCount === 0) jobs.innerHTML = "<li>No Job Available</li>";
  if (resultCount === 0) results.innerHTML = "<li>No Result Available</li>";
  if (admitCount === 0) admit.innerHTML = "<li>No Admit Card Available</li>";
});
