const questions = [
    {
        'que' : 'which of the following is a markup language?',
        'a'   : 'HTML',
        'b'   : 'CSS',
        'c'   : 'javascript',
        'd'   :  'php',
        'correct': 'a'
    },  
    {
        'que' : 'what year was javascript launched?',
        'a'   : '1996',
        'b'   : '1995',
        'c'   : '1994',
        'd'   :  'none of the above',
        'correct': 'b'
    },
    {
        'que' : 'what does css stands for?',
        'a'   : 'hypertext markup language',
        'b'   : 'cascading style sheet',
        'c'   : 'jason object notation',
        'd'   :  'helicopters terminals motorboats lamborganis',
        'correct': 'b'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let quesBox = document.querySelector("#quesBox");
let optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index == total){
        return endQuiz();
    }
    reset();
    let data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = ()=>{
    let data = questions[index];
    let ans = getAnswer();
    // console.log(ans,data.correct);
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

let getAnswer = () =>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.Value;
        }
    })
    return answer;
}

let  reset = () =>{
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}

const endQuiz = ()=> {
    document.querySelector("#box").innerHTML=`
        <h2>thank you for playing the quiz**</h2>
    `
}

loadQuestion();









