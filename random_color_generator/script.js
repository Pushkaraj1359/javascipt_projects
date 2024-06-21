
// hex code
const getColor = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16); // 16 is unit of hex code
    document.body.style.backgroundColor = randomCode;
    document.querySelector("#color-code").innerHTML=randomCode;
    // navigator.clipboard.writeText(randomCode);
}

document.querySelector("#btn").addEventListener("click",getColor)

getColor(); 






