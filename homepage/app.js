`use strict`;
//////////////////////////////////////////////////////////////////////////////


let wName= localStorage.getItem('name');
document.getElementById("wName").innerHTML=`Welcome ${wName}`;
let divselect=document.getElementById("selectDiv")
let selector=document.getElementById("select");
let option1=document.getElementsByClassName("class1");
let option2=document.getElementsByClassName("class2");
let option3=document.getElementsByClassName("class3");
let btn= document.getElementById("submitt");


////////////////////////////SELECTOR////////////////////////////////////////////


function selectExam() {
    
    if(selector.value == 1){
        localStorage.setItem(`exam`,`HTML`);
        btn.style.display="block";
    }
    else if(selector.value == 2){
        localStorage.setItem(`exam`,`CSS`);
        btn.style.display="block";  
    }
    else if(selector.value == 3){
        localStorage.setItem(`exam`,`JS`);
        btn.style.display="block";  
    }
}

//////////////////////////////////////////////////////////////////////////////////






