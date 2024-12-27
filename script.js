let userScore = 0; // Tracks the user's score
let computerScore = 0; // Tracks the computer's score

// Selects all elements with the class "choice" (user's game choices: rock, paper, scissors)
const choices = document.querySelectorAll(".choice"); 

// Selects the element where the game message will be displayed
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

// Function to generate the computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]; // Possible choices
    const randIdx = Math.floor(Math.random() * 3); // Generate a random index (0, 1, or 2)
    return options[randIdx]; // Return the computer's choice
};

// Function to handle a draw game scenario
const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw. Play Again!"; // Display draw message
};

// Function to show the winner of the game
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win");
        msg.innerText = "You win!"; // Display "You win!" message
        msg.style.backgroundColor = "green"; // Change message background to green for win
    } else {
        computerScore++;
        CompScorePara.innerText=computerScore;
        // console.log("you lose");
        msg.innerText = "You lose!"; // Display "You lose!" message
        msg.style.backgroundColor = "red"; // Change message background to red for loss
    }
};

// Main game function to process the user's choice and compare it to the computer's choice
const playGame = (userChoice) => {
    // console.log("user choice=", userChoice);
    
    // Generate the computer's choice
    const compChoice = genCompChoice();
    // console.log("computer choice=", compChoice);

    // If user choice matches computer choice, it's a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Determine if the user wins
        let userWin = true; // Assume user wins by default

        if (userChoice === "rock") {
            // Rock beats scissors, loses to paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // Paper beats rock, loses to scissors
            userWin = compChoice === "scissors" ? false : true;
        } else  {
            // Scissors beat paper, lose to rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice,compChoice); // Display the winner
    }
};

// Add event listeners to each choice (rock, paper, scissors)
choices.forEach((choice) => {
    // console.log(choice); // Logs the choice element
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the user's choice based on the element's ID
        playGame(userChoice); // Pass the user's choice to the game logic
    });
});
