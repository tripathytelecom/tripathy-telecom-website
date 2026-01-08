let operatorId = "";

function detectOperator(){
  const mobile = document.getElementById("mobile").value;
  const opName = document.getElementById("operatorName");

  if(mobile.length < 4){
    opName.innerText = "—";
    operatorId = "";
    return;
  }

  const prefix = mobile.substring(0,3);

  // ✅ Demo prefix logic (India)
  if(["987","986","915","916","814"].includes(prefix)){
    opName.innerText = "Airtel";
    operatorId = "2";   // Airtel Company ID
  }
  else if(["909","900","898","897"].includes(prefix)){
    opName.innerText = "Jio";
    operatorId = "5";
  }
  else if(["988","989","799"].includes(prefix)){
    opName.innerText = "VI";
    operatorId = "3";
  }
  else if(["943","947","948"].includes(prefix)){
    opName.innerText = "BSNL";
    operatorId = "4";
  }
  else{
    opName.innerText = "Unknown";
    operatorId = "";
  }
}

function sendRecharge(){

  const mobile = document.getElementById("mobile").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const msg = document.getElementById("msg");

  if(mobile.length !== 10){
    msg.innerText = "❌ Invalid Mobile Number";
    return;
  }

  if(!operatorId){
    msg.innerText = "❌ Operator not detected";
    return;
  }

  msg.innerText = "⏳ Processing Recharge...";

  fetch("https://tripathytelecom.store/api/recharge/", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({
      mobile: mobile,
      amount: amount,
      operator: operatorId   // ✅ Company ID sent
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
