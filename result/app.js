"use strict";
let newName= localStorage.getItem('name');
document.getElementById("userName").innerHTML=`Name : ${newName}`;
console.log(newName);