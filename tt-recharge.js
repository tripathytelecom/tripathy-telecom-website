function sendRecharge(){

  let mobile = document.getElementById("mobile").value;
  let amount = document.getElementById("amount").value;
  let msg = document.getElementById("msg");

  if(mobile.length != 10){
    msg.innerText = "Invalid Mobile Number";
    return;
  }

  msg.innerText = "Processing...";

  fetch("https://YOUR_FIREBASE_URL/recharge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mobile: mobile,
      amount: amount,
      operator: "AT"
    })
  })
  .then(res => res.json())
  .then(data => {
    msg.innerText = data.message;
  })
  .catch(err => {
    msg.innerText = "Server Error";
  });
}
