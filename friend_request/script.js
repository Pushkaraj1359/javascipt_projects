var str=document.querySelector("#str");
var add=document.querySelector("#add");
var remove=document.querySelector("#remove");

add.addEventListener("click",function(){
    str.innerHTML="friend";
    str.style.color="green";
})

remove.addEventListener("click",function(){
    str.innerHTML="stranger"
    str.style.color="red"
})