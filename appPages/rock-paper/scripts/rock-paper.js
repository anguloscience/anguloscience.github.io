let score = JSON.parse(localStorage.getItem("score")) || {
   wins: 0,
   losses: 0,
   ties: 0,
};

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
   if (!isAutoPlaying) {
      intervalId = setInterval(() => {
         const playerMove = pickComputerMove();
         playGame(playerMove);
      }, 2000);
      isAutoPlaying = true;
   } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
   }
}

function stopAutoPlay() {
   const autoPlayElement = document.querySelector(".js-autoplay-button");

   if (autoPlayElement.innerText === "Auto play") {
      autoPlayElement.innerHTML = "Stop auto play";
   } else {
      autoPlayElement.innerHTML = "Auto play";
   }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
   playGame("Rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
   playGame("Paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
   playGame("Scissors");
});

document.querySelector(".js-lizard-button").addEventListener("click", () => {
   playGame("Lizard");
});

document.querySelector(".js-spock-button").addEventListener("click", () => {
   playGame("Spock");
});

document.body.addEventListener("keydown", (event) => {
   if (event.key === "r") {
      playGame("Rock");
   } else if(event.key === "p") {
      playGame("Paper");
   } else if (event.key === "s") {
      playGame("Scissors");
   } else if (event.key === "l") {
      playGame("Lizard");
   } else if (event.key === "k") {
      playGame("Spock");
   }
});

updateScoreElement();

function pickComputerMove() {
   const randomNumber = Math.random();
   let computerMove = "";

   if (randomNumber >= 0 && randomNumber < 1 / 5) {
      computerMove = "Rock";
   } else if (randomNumber >= 1 / 5 && randomNumber < 2 / 5) {
      computerMove = "Scissors";
   } else if (randomNumber >= 2 / 5 && randomNumber < 3 / 5) {
      computerMove = "Paper";
   } else if (randomNumber >= 3 / 5 && randomNumber < 4 / 5) {
      computerMove = "Lizard";
   } else {
      computerMove = "Spock";
   }
   return computerMove;
}

function playGame(playerMove) {
   const computerMove = pickComputerMove();

   let result = "";
   if (playerMove === "Spock") {
      if (computerMove === "Spock") {
         result = "Tie.";
      } else if (computerMove === "Paper" || computerMove === "Lizard") {
         result = "Computer wins.";
      } else if (computerMove === "Rock" || computerMove === "Scissors") {
         result = "You win!";
      }
   } else if (playerMove === "Lizard") {
      if (computerMove === "Lizard") {
         result = "Tie.";
      } else if (computerMove === "Scissors" || computerMove === "Rock") {
         result = "Computer wins.";
      } else if (computerMove === "Paper" || computerMove === "Spock") {
         result = "You win!";
      }
   } else if (playerMove === "Scissors") {
      if (computerMove === "Scissors") {
         result = "Tie.";
      } else if (computerMove === "Rock" || computerMove === "Spock") {
         result = "Computer wins.";
      } else if (computerMove === "Paper" || computerMove === "Lizard") {
         result = "You win!";
      }
   } else if (playerMove === "Paper") {
      if (computerMove === "Paper") {
         result = "Tie.";
      } else if (computerMove === "Scissors" || computerMove === "Lizard") {
         result = "Computer wins.";
      } else if (computerMove === "Rock" || computerMove === "Spock") {
         result = "You win!";
      }
   } else if (playerMove === "Rock") {
      if (computerMove === "Rock") {
         result = "Tie.";
      } else if (computerMove === "Paper" || computerMove === "Spock") {
         result = "Computer wins.";
      } else if (computerMove === "Scissors" || computerMove === "Lizard") {
         result = "You win!";
      }
   }

   if (result === "You win!") {
      score.wins++;
   } else if (result === "Computer wins.") {
      score.losses++;
   } else if (result === "Tie.") {
      score.ties++;
   }

   localStorage.setItem("score", JSON.stringify(score));

   updateScoreElement();

   document.querySelector(".js-result").innerHTML = result;

   document.querySelector(
      ".js-moves"
   ).innerHTML = `You <img src="images/${playerMove}.png" class="move-icon" alt="">VS.<img src="images/${computerMove}.png" class="move-icon" alt=""> Computer`;
}

function updateScoreElement() {
   document.querySelector(
      ".js-score"
   ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
