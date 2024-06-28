let main=document.querySelector(".main");
let box=document.querySelector(".box");


// play with event position X-axis and Y-axis
main.addEventListener("mousemove",function(dets){
    box.style.left= dets.x+"px";
    box.style.top=dets.y+"px";
})
