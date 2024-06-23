const endDate ="13 june 2024 08:00 PM";// update this date
document.querySelector("#end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff=(end-now) / 1000;

    if(diff < 0) return
    inputs[0].value=Math.floor(diff / 3600 / 24);
    inputs[1].value=Math.floor(diff / 3600) % 24;
    inputs[2].value=Math.floor(diff / 60) % 60;
    inputs[3].value=Math.floor(diff) % 60;
}

clock();

setInterval(()=>{
    clock();
},1000)




/* initial calculations 
1 day = 24 hrs
1 hr = 60 mins 
60 min = 3600 sec */
