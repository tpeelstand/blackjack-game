let cards = []
let sum = 0
// Booleans
let hasBlackJack = false;
let isAlive = false;
// Empty string
let message = "";
// Message Variable
let messageEl = document.getElementById("message-el");
// Sum Variable
let sumEl = document.querySelector("#sum-el");
// Cards Variable
let cardsEl = document.getElementById("cards-el");
// Player
let player = {
    name: "Nate",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Random Card Function
function getRandomCard() {
     let randomCard = Math.floor(Math.random() * 13) + 1
     if(randomCard > 10) {
        return 10
     } else if (randomCard === 1) {
        return 11
     } else {
        return randomCard
     }
}

// Function for starting the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function for game
function renderGame() {
    // Display the cards
    cardsEl.textContent = "Cards: ";

    // For Loop to render cards
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    // Displaying the sum
    sumEl.textContent = "Sum: " + sum;

    // Playing the hand
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "BUSTED! Try again!"
        isAlive = false;
    }

    // Display message on page
    messageEl.textContent = message;
}

// Drawing a new card
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let nextCard = getRandomCard()
    sum += nextCard;
    cards.push(nextCard)
    renderGame()
    }
}
