function login(){

  // 🔐 CHANGE THESE
  const USER_ID = "admin";
  const PASSWORD = "12345";

  const uid = document.getElementById("uid").value;
  const pwd = document.getElementById("pwd").value;
  const msg = document.getElementById("msg");

  if(uid === USER_ID && pwd === PASSWORD){
    localStorage.setItem("tt_logged_in","yes");
    window.location.href = "tt-recharge.html";
  }else{
    msg.innerText = "Invalid ID or Password";
  }
}
