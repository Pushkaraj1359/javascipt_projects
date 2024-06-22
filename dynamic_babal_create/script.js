let clutter = "";

for(var  i=1 ; i<=50 ; i++){
    let vr=Math.floor(Math.random()*10)
    clutter += `<div class="box">${vr}</div>`;
}

document.querySelector(".content").innerHTML = clutter;

