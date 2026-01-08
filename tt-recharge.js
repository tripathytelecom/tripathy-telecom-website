let operatorId = "";

function detectOperator(){
  const mobile = document.getElementById("mobile").value;
  const opName = document.getElementById("operatorName");
  const select = document.getElementById("operatorSelect");

  if(mobile.length < 3){
    opName.innerText = "—";
    operatorId = "";
    select.style.display="none";
    return;
  }

  const p = mobile.substring(0,3);

  const airtel=["896","897","898","899","915","916","917","918","919","987","986","814","815"];
  const jio=["900","901","902","903","904","905","906","907","908","909"];
  const vi=["988","989","799","781","782","783","784","785","786","787"];
  const bsnl=["943","944","945","946","947","948"];

  if(airtel.includes(p)){
    opName.innerText="Airtel";
    operatorId="2";
    select.style.display="none";
  }
  else if(jio.includes(p)){
    opName.innerText="Jio";
    operatorId="5";
    select.style.display="none";
  }
  else if(vi.includes(p)){
    opName.innerText="VI";
    operatorId="3";
    select.style.display="none";
  }
  else if(bsnl.includes(p)){
    opName.innerText="BSNL";
    operatorId="4";
    select.style.display="none";
  }
  else{
    opName.innerText="Unknown";
    operatorId="";
    select.style.display="block";
  }
}

function manualOperator(){
  operatorId=document.getElementById("operatorSelect").value;
}

function sendRecharge(){

  const mobile=document.getElementById("mobile").value.trim();
  const amount=document.getElementById("amount").value.trim();
  const msg=document.getElementById("msg");

  if(mobile.length!==10){
    msg.innerText="❌ Invalid Mobile Number";
    return;
  }
  if(!operatorId){
    msg.innerText="❌ Select Operator";
    return;
  }

  msg.innerText="⏳ Processing...";

  fetch("https://tripathytelecom.store/api/recharge/",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({
      mobile:mobile,
      amount:amount,
      operator:operatorId
    })
  })
  .then(r=>r.text())
  .then(d=>msg.innerText=d)
  .catch(()=>msg.innerText="❌ Server Error");
}
