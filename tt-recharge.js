function sendRecharge(){
  let mobile = document.getElementById("mobile").value.trim();
  let amount = document.getElementById("amount").value.trim();
  let msg = document.getElementById("msg");

  msg.innerText = "⏳ Processing...";

  fetch("https://tripathytelecom.store/api/recharge/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mobile: mobile,
      amount: amount,
      operator: "AT"
    })
  })
  .then(res => res.text())
  .then(data => {
    msg.innerText = data;
  })
  .catch(err => {
    msg.innerText = "JS Error: " + err;
  });
}
