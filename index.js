let player = {
    name:"abc",
    chip: 10
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
message = "";
messageEl = document.getElementById("message-el");
// sumEl = document.getElementById("sum-el");
sumEl = document.querySelector("#sum-el");
cardsEl = document.querySelector("#cards-el")
// let playername = "per"
// let plyerChip = 145

playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + " :$" + player.chip
console.log(playerEl)
console.log(cards)

function getRandomCard()
{
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard > 10)
    {
        return 10
    }
    else if(randomCard === 1)
    {
        return 11
    }
    else{
        return randomCard
    }
    
}
console.log(getRandomCard)
function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards= [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}
function renderGame()
{
    console.log(sumEl)
    sumEl.textContent = "SUM: " + sum;
    cardsEl.textContent ="Cards: ";
    for(let i=0; i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?";
        
        
    }
    else if(sum === 21)
    {
        message = " You've got Blackjack!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game! "
        isAlive = false;
        console.log(isAlive)
    }
    messageEl.textContent = message;
    console.log(messageEl)
    console.log(message)
}
function newCard()
{
    if(isAlive === true && hasBlackJack=== false)
    {
         
   
   let card =  getRandomCard();
   sum += card;
   cards.push(card);
   console.log(cards)
   renderGame();
}
}
