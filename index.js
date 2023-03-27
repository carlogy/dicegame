var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
console.log(randomNumber1); 

var diceImageSource1 = "images/dice" + randomNumber1  + ".png";
document.querySelector(".img1").setAttribute("src" , diceImageSource1);
console.log(diceImageSource1)

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
console.log(randomNumber2); 

var diceImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", diceImageSource2);
console.log(diceImageSource2);

var player1Wins = randomNumber1 > randomNumber2
var player2Wins = randomNumber2 > randomNumber1
var Draw = randomNumber1 === randomNumber2

if (player1Wins === true) {
    document.querySelector(".heading").textContent = "Player 1 Wins!"
} else if (player2Wins === true) {
    document.querySelector(".heading").textContent = "Player 2 Wins!" 
} else {
    document.querySelector(".heading").textContent = " It's a Draw!"
}
