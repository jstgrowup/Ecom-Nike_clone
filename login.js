var logindata = JSON.parse(localStorage.getItem("userdatafromsignup"));
document.querySelector("#signupID").addEventListener("submit", loginfun);
function loginfun() {
  event.preventDefault();
  var userlogindata = {
    mail: signupID.idmail.value,
    pass: signupID.idpass.value,
  };
  if (logindata === null) {
    alert("hey buddy you need to signup first let me take you there");
    window.location.href = "signup.html";
  } else if (
    logindata.mail === userlogindata.mail &&
    logindata.pass === userlogindata.pass
  ) {
    alert("login successful lets go!");
    // we need the username
    localStorage.setItem("maiduserdata", JSON.stringify(logindata));
    window.location.href = "products.html";
  } else {
    alert("dont tell me you forgot your password");
  }
}