const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionel = document.getElementById("question");
const form1 = document.getElementById("form");
const input1 = document.getElementById("input");
const score1 = document.getElementById("score");


let score=JSON.parse(localStorage.getItem("score"));

if(!score)
{
    score=0;
}

score1.innerText = `Score : ${score}`;


questionel.innerText = `what is  ${num1} multiply by ${num2}?`;


const output = num1*num2;

form1.addEventListener("submit",()=>{
    const useAns = +input1.value
    if(useAns === output)
    {
        score++;
        updateLocalstorage()
    }
    else 
     {
          score--;
         updateLocalstorage()
     }
});

function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score));
}