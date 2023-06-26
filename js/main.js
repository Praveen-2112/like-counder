var likess=document.getElementById("like");
var num=document.getElementById("number");
var a=0;


likess.addEventListener("click", function(){
a++;
num.innerHTML=a+"likes";
likess.style.color="red";

})