`use strict`
//////////Register Form //////////////////////////////////////
let registerForm= document.getElementById("registerForm");

let userinfo=[];

function RestoreData(){
    let StoredData=JSON.parse(localStorage.getItem("UsersData"));
    if (StoredData != null){
        userinfo= StoredData;
    }
}

function transpert() {
    document.getElementById('submit').style.display="none";
    document.getElementById("subdiv").style.display="block";
}
registerForm.addEventListener("submit",validation)
function validation(event) {
    event.preventDefault();
    let  userName=event.target.userName.value;
    let registerEmail=event.target.registerEmail.value;
    let registerPass=event.target.registerPass.value;
    let registerConfPass=event.target.registerConfPass.value;
    // let but=document.querySelector(button).value;
    // let div=document.querySelector("subdive").value;

    
    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // let capital=/[A_Z]/;

if (userName == "") 
    alert("User name required");

else if (!letters.test(userName)) 
    alert("User name should only have alphapatic letters");

else if (!filter.test(registerEmail))
    alert("Email should be like this example@example.com");

else if (registerPass == "")
    alert("Password is required");

else if (!pwd_expression.test(registerPass))
    alert("Password must contain capital and small letters,numbers and a symbol");

else if (registerConfPass != registerPass)
    alert("The two passwords doesn't match");
else{
LocalStore(userName,registerEmail,registerPass)
transpert();

}
}

function LocalStore(UserName,Email,Password){
    RestoreData();
    userinfo.push(UserName);
    userinfo.push(Email);
    userinfo.push(Password);
    let userinfoList= JSON.stringify(userinfo);
    localStorage.setItem("UsersData",userinfoList);
}
