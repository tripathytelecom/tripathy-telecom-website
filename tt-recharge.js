function sendRecharge(){

  let mobile = document.getElementById("mobile").value.trim();
  let amount = document.getElementById("amount").value.trim();
  let msg = document.getElementById("msg");

  if(mobile.length !== 10){
    msg.innerText = "❌ Invalid Mobile Number";
    return;
  }

  if(amount <= 0){
    msg.innerText = "❌ Invalid Amount";
    return;
  }

  msg.innerText = "⏳ Processing...";

  fetch("https://tripathytelecom.store/api/recharge/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    mobile: mobile,
    amount: amount,
    operator: "AT"
  })
})
  .then(res => res.text())
  .then(data => {
    msg.innerText = "✅ Response: " + data;
  })
  .catch(err => {
    msg.innerText = "❌ Server Error";
  });
}
