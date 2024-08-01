var user;
var userScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    user = this.id;
    document.getElementById("user-choice").src = user + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; 
    //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    if (user == opponent) {
        userScore += 1;
        opponentScore += 1;
    }
    else {
        if (user == "rock") {
            if (opponent == "scissors") {
                userScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (user == "scissors") {
            if (opponent == "paper") {
                userScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (user == "paper") {
            if (opponent == "rock") {
                userScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
// replay button
// Add event listener to the replay button when the window loads
window.onload = function () {
    // Loop through choices to add click event listeners
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }

    // Add event listener to the replay button
    document.getElementById("replay-btn").addEventListener("click", resetGame);
}

// Function to reset the game
function resetGame() {
    // Reset scores to zero
    userScore = 0;
    opponentScore = 0;
    // Update score displays
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("opponent-score").innerText = opponentScore;
    // Clear user and opponent choices
    document.getElementById("user-choice").src = "";
    document.getElementById("opponent-choice").src = "";
}
