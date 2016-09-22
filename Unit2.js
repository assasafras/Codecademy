/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

function compare(choice1, choice2)
{
    if (choice1 === choice2) // Do we have a tie?
        return "The result is a tie!";
    else if (choice1 === "rock") // Rock was chosen by the first player, check if the other choice won or lost (we already know it's not a tie).
    {
        if(choice2 === "scissors") // Rock vs. Scissors.
            return "rock wins";
        else // Rock vs. Paper.
            return "paper wins";
    }
    else if (choice1 === "paper") // Paper was chosen by the first player, check if the other choice won or lost (we already know it's not a tie).
    {
        if(choice2 === "rock") // Paper vs. Rock.
            return "paper wins";
        else // Paper vs. Scissors.
            return "scissors wins";
    }
}