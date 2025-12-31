fetch("jobs.json?v=" + new Date().getTime())
.then(res => res.json())
.then(data => {

  const jobs = document.getElementById("latest-jobs");
  const results = document.getElementById("latest-results");
  const admit = document.getElementById("latest-admit");

  jobs.innerHTML = "";
  results.innerHTML = "";
  admit.innerHTML = "";

  data.forEach((j, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="job-details.html?id=${i}">${j.job}</a>`;

    if (j.type === "job") jobs.appendChild(li);
    else if (j.type === "result") results.appendChild(li);
    else if (j.type === "admit") admit.appendChild(li);
  });

});
