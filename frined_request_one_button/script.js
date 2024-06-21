var str=document.querySelector("#str");
var add=document.querySelector("#add");

let a=0;

add.addEventListener("click",function(){
    if(a==0){
        str.innerHTML="Friend";
        str.style.color="green";
        add.innerHTML="remove friend";
        a=1;
    }else{
        str.innerHTML="stranger";
        str.style.color="red";
        add.innerHTML="add friend";
        a=0;
    }
})