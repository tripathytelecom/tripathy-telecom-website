let operatorId = "";

// 🔥 AUTO DETECT ON INPUT
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("mobile").addEventListener("input", detectOperator);
  document.getElementById("operatorSelect").addEventListener("change", manualOperator);
});

function detectOperator(){

  const mobile = document.getElementById("mobile").value;
  const opName = document.getElementById("operatorName");
  const select = document.getElementById("operatorSelect");

  if(mobile.length < 3){
    opName.innerText = "—";
    operatorId = "";
    select.style.display = "none";
    return;
  }

  const prefix = mobile.substring(0,3);

  // ✅ Common Indian prefixes (Airtel focus)
  const airtel = ["896","897","898","899","915","916","917","918","919","987","986","814","815","816","817","818","819"];
  const jio    = ["900","901","902","903","904","905","906","907","908","909"];
  const vi     = ["988","989","799","781","782","783","784","785","786","787"];
  const bsnl   = ["943","944","945","946","947","948"];

  if(airtel.includes(prefix)){
    opName.innerText = "Airtel";
    operatorId = "2";
    select.style.display = "none";
  }
  else if(jio.includes(prefix)){
    opName.innerText = "Jio";
    operatorId = "5";
    select.style.display = "none";
  }
  else if(vi.includes(prefix)){
    opName.innerText = "VI";
    operatorId = "3";
    select.style.display = "none";
  }
  else if(bsnl.includes(prefix)){
    opName.innerText = "BSNL";
    operatorId = "4";
    select.style.display = "none";
  }
  else{
    // ❗ AUTO FAIL → MANUAL SELECT
    opName.innerText = "Unknown";
    operatorId = "";
    select.style.display = "block";
  }
}

function manualOperator(){
  operatorId = document.getElementById("operatorSelect").value;
}

// 🔥 RECHARGE
function sendRecharge(){

  const mobile = document.getElementById("mobile").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const msg = document.getElementById("msg");

  if(mobile.length !== 10){
    msg.innerText = "❌ Invalid Mobile Number";
    return;
  }

  if(!operatorId){
    msg.innerText = "❌ Please select operator";
    return;
  }

  msg.innerText = "⏳ Processing...";

  fetch("https://tripathytelecom.store/api/recharge/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mobile: mobile,
      amount: amount,
      operator: operatorId
    })
  })
  .then(res => res.text())
  .then(data => {
    msg.innerText = data;
  })
  .catch(() => {
    msg.innerText = "❌ Server Error";
  });
}
