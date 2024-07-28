let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose Your ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genComChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == "rock"){
            // comp - scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // comp - rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        } else{
            // comp- rock, paper
            userWin = compChoice === "rock" ? false : true;
            
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });