const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const question=document.getElementById("questios");
const form1=document.getElementById("form");
const elemt=document.getElementById("input");
const scoreEl=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText=`score:${score}`
question.innerText=`What is ${num1} multiply by ${num2} ?` ;
const correctAnsw=num1*num2;

form1.addEventListener("submit",()=>{
    const usrans=+elemt.value;
    if(usrans===correctAnsw){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }

})
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));

}
