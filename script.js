const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionE1 = document.getElementById("question");

const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");

questionE1.innerText = `What is ${num1} multiply by ${num2}?`;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

const correctAns = num1*num2;

formE1.addEventListener("submit",()=>{
    const userAns = +inputE1.value;
    if(userAns === correctAns)
    {
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage()
{
    localStorage.setItem("score",JSON.stringify(score));

}

const scoreE1 = document.getElementById("score");
scoreE1.innerText = `score: ${score}`;