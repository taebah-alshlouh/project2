//////////Login Form //////////////////////////////////////
function logintranspert() {
    document.getElementById('submit1').style.display="none";
    document.getElementById("subdiv1").style.display="block";
}

LoginForm.addEventListener("submit",CheckFun);
function CheckFun(event){
    event.preventDefault();
    let loginEmail= event.target.loginEmail.value;
    console.log(typeof(loginEmail));
    
    let loginPass= event.target.loginPass.value;
    let StorageData=JSON.parse(localStorage.getItem("UsersData"));
    console.log(StorageData);
    // StorageData.map((value,index) => {
    //     if(value == loginEmail ){
    //         if(StorageData[index+1] != loginPass){
    //             alert("The password is wrong");
    //         }else{
    //             logintranspert();
    //     }}
    //     else{
    //         alert("The Email is wrong");
    //     }
    // }
    // )
    for(let i=1; i<StorageData.length;){
        console.log(StorageData[i]);
        if(StorageData[i] != loginEmail ){
            i=i+3;
            continue;
        }    
        else if(StorageData[i+1] != loginPass){
            alert("The password is wrong");
        }else{
            logintranspert();
            localStorage.setItem('name',(StorageData[i-1]));
            console.log(StorageData[i-1]);
            break;
    
}}
// alert("The Email is wrong");
    // console.log(StorageData[nth:Child(even)]);
}

