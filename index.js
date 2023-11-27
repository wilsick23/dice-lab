// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();

// how many times the roll button was clicked
var clickCount = -1;
var balanceArray = [];

// close input form and display Roll button
function startGame() {
  numRolls = parseInt(document.querySelector("#nRolls").value);
  document.querySelector("form").style.display="none";
  document.querySelectorAll("button")[0].style.display="none";
  document.querySelectorAll("button")[1].style.display="block";
}

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars. ";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars. ";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }
    
    balanceArray.push(balance);

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome 
    + "<br>" + "Your current balance is " + balance + " dollars.";
}

// displays Ok! button and resets everything
function playAgain() {
  document.querySelector("h3").innerHTML = "";
  document.querySelector("form").style.display="block";
  document.querySelectorAll("button")[0].style.display="block";
  document.querySelectorAll("button")[1].style.display="none";
  document.querySelectorAll("button")[2].style.display="none";

  balance = 0;
  clickCount = -1;
  balanceArray = [];
}

// rolls the dice and says who won when clicked
// counts how many times the player rolled and displays message when all rolls have been used
function letsPlay() {
  clickCount++;
  if (clickCount == numRolls) {
    document.querySelectorAll("button")[1].style.display="none";

    let allBalances = "";

    // for loop to display repeats
    for (let i = 0; i < numRolls; i++) {
      allBalances += "Your balance on roll " + (i + 1) + " was "
      + balanceArray[i] + " dollars.\n";
    }
    alert("You have rolled " + numRolls + " times.\n\n" + allBalances);

    document.querySelectorAll("button")[2].style.display="block";
  }

  else {
    rollDice();
    whoWon();
  }
}

