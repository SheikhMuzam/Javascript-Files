import PromptSync from "prompt-sync";
import randomInteger from "random-int";
const prompt = PromptSync();

// The available choices 
const choices = ["rock" , "paper" , "scissor"];
let outcome = "PLease Enter 1 , 2 or 3"

// Computer choice
const ComputerChoices = randomInteger(0, 2);
const ComputerChoicesName = choices[ComputerChoices];

// player choice
const player = prompt("Enter Your Name ") ;
const userinput = "Enter 0 for rock , 1 for paper , 2 for scissor ";
const input = prompt(userinput);
const playerchoice = choices[input];

if (ComputerChoicesName === playerchoice) {
    outcome  = "----" + "----" + " ITs a Draw " + "----" + "----"
} else if (ComputerChoicesName === "rock" && playerchoice === "paper") {
    outcome = "---" + "---" + player + " Wins " + "---" + "---" 
} else if (ComputerChoicesName === "rock" && playerchoice === "scissor") {
    outcome =  "---" + "---" + " Computer Wins " + "---" + "---" 
} else if (ComputerChoicesName === "paper" && playerchoice === "rock") {
    outcome = "---" + "---" + " Computer Wins " + "---" + "---"  
} else if (ComputerChoicesName === "paper" && playerchoice === "scissor") {
    outcome = "---" + "---" + player + " Wins " + "---" + "---"  
} else if (ComputerChoicesName === "scissor" && playerchoice === "rock") {
    outcome = "---" + "---" + player + " Wins" + "---" + "---"  
} else if (ComputerChoicesName === "scissor" && playerchoice === "paper") {
    outcome = "---" + "---" + "Computer Wins" + "---" + "---" 
}

console.log("Computer select  " + ComputerChoicesName);
console.log("player   select  " + playerchoice);
console.log("-----------------------------")
console.log(outcome);
console.log("-----------------------------")
