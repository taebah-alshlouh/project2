`use strict`;
//////////////////////////////////////////////////////////////////////////////

let wName= localStorage.getItem('name');
document.getElementById("wName").innerHTML=`Welcome ${wName}`;
let qName=localStorage.getItem(`exam`);
document.getElementById("qName").innerHTML=`${qName}`;






