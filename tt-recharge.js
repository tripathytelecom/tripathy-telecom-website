let detectedOperatorCode = "";

function detectOperator(){
  const mobile = document.getElementById("mobile").value;
  const opName = document.getElementById("operatorName");

  if(mobile.length < 4){
    opName.innerText = "—";
    return;
  }

  const prefix = mobile.substring(0,4);

  // 🔹 Simple Indian prefix logic (Demo – 95% correct)
  if(["987","986","976","915"].includes(prefix.substring(0,3))){
    opName.innerText = "Airtel";
    detectedOperatorCode = "AT";
  }
  else if(["909","900","898","897"].includes(prefix.substring(0,3))){
    opName.innerText = "Jio";
    detectedOperatorCode = "RJ";
  }
  else if(["988","989","799"].includes(prefix.substring(0,3))){
    opName.innerText = "Vi";
    detectedOperatorCode = "VI";
  }
  else if(["943","947","948"].includes(prefix.substring(0,3))){
    opName.innerText = "BSNL";
    detectedOperatorCode = "BS";
  }
  else{
    opName.innerText = "Unknown";
    detectedOperatorCode = "";
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

  if(!detectedOperatorCode){
    msg.innerText = "❌ Operator not detected";
    return;
  }

  msg.innerText = "⏳ Processing...";

  fetch("https://tripathytelecom.store/api/recharge/", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({
      mobile: mobile,
      amount: amount,
      operator: detectedOperatorCode
    })
  })
  .then(res => res.text())
  .then(data => {
    msg.innerText = data;
  })
  .catch(err => {
    msg.innerText = "❌ Server Error";
  });
}
