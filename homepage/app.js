`use strict`
//////////Register Form //////////////////////////////////////
let registerForm=document.getElementById("registerForm");
let userName=document.querySelector("userName");
let registerEmail=document.querySelector("registerEmail");
let registerPass=document.querySelector("registerPass");
let registerConfPass=document.querySelector("registerConfPass");

let userinfo=[];
// function register(userName) {
    
// }
// registerForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//   let   name=event.target.userName.value;
//   let  mail=event.target.registerEmail.value;
//   let  password=event.target.registerPass.value;
  

// validation(name,mail,password);
    
// })

function validation(userName,registerEmail,registerPass,registerConfPass) {
    
    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let capital=/[A_Z]/;

if (!letters.test(userName)) {
    alert("User name should only have lphapatic letters")
}else{
    true;
    document.getElementById("wName").innerHTML=userName;
}


}
