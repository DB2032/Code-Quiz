document.getElementById("ques-div").setAttribute("style", "display:none");
let startBtnEl  = document.getElementById("start");
//add onclick for a start button
startBtnEl.addEventListener("click", startQuiz);
let timeLeftEl = document.getElementById("tl");
let startDivEl = document.getElementById("start-div")
let timerid;
let timeLeft = 120;
//startquiz function 
function startQuiz(){
    console.log("start botton is clicked, start Quiz Function is Called");

    startDivEl.setAttribute("class", "hide");
    document.getElementById("ques-div").setAttribute("style", "display:block");
    timerid = setInterval(timerFunction, 1000);
    timeLeftEl.textContent = timeLeft;
}
function timerFunction(){
    timeLeft --;
    timeLeftEl.textContent = timeLeft;
}
//hide start div and show ques div
//add a timer
//create an array of questions
//display first question