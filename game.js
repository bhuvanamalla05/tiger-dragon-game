const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("msg");
const userChoiceText = document.getElementById("user-choice");
const compChoiceText = document.getElementById("comp-choice");

const c = ["tiger", "tie", "dragon"];

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        const compChoice = c[Math.floor(Math.random() * 3)];

        userChoiceText.innerText = userChoice;
        compChoiceText.innerText = compChoice;

        if (userChoice === compChoice) {
             resultText.innerText = "you won,congratulations!";
             resultText.style.backgroundColor="rgb(0, 255, 20)";
        } 
        else {
             if(compChoice=="tie")
             {
                resultText.innerText = "draw ! play again...";
                resultText.style.backgroundColor="rgb(255, 255, 0)";
             }
             else{
             resultText.innerText =    "you lose! Better luck next time" ;
             resultText.style.backgroundColor="red";}
        }
        
    });
});




