// const fs = require('fs');


class Highscore
{
    dateTime;
    constructor(name, aantalBeurten, tijdsDuur)
    {
        let currentDate = new Date();
        this.dateTime = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDay();
        this.name = name;
        this.aantalBeurten = aantalBeurten;
        this.tijdsDuur = tijdsDuur;
    }

}
// collapsible button
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let currentDate = yyyy + '-' + mm + '-' + dd;

let coll = document.getElementsByClassName("collapsible");
let i;

// count the turns taken // to be used in the hall of fame
let turnCounter = 0;

// total pairs of cards in the game
let totalPairs = document.querySelectorAll('.card').length * 0.5;

// successful paired cards
let pairedCards = 0;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let help = this.nextElementSibling;
        if (help.style.maxHeight){
            help.style.maxHeight = null;
        } else {
            help.style.maxHeight = help.scrollHeight + "px";
        }
    });
}
//
// // hall of fame table
//
// button for resetting memory OnClick refresh
let player;
function createHighscore() {
    let playerName = document.querySelector('#name').value;
    player = new Highscore(playerName, turnCounter, timeSpentGame);
 }

function refreshPage(){
    window.location.reload();
}

function popUp(pairs){
    if (pairs === totalPairs) {
        stopTime();
        document.getElementById("time").value = timeSpentGame;
        document.getElementById("turnsTaken").value = turnCounter;
        document.getElementById("date").value = currentDate;
        setTimeout(() => {
            document.getElementById("popupForm").id = 'visiblePopUp';
        }, 1000);
    }
}
// variabele die al mijn kaarten opslaat

const cards = document.querySelectorAll('.card');

// deze  functie zodat er gelet wordt op het klikken op de kaarten (komen in .this keyword)
cards.forEach(card => card.addEventListener('click', flipCard));

// deze variabele begint false omdat er nog geen kaart is omgedraaid
let flippedCard= false;
// declareren van de twee kaarten die je gaat omdraaien en checken op match
let firstCard, secondCard;
// begint false en deze gaat naar true als er 2 kaarten aangeklikt zijn (zodat er niet verder geklikt kan worden)
let waitForMatch = false;

// initialiseert game timer
let timeSpentGame = 0;
let timerID = null;
// timer hoe lang de user over zijn spel doet
function gameTimer() {
    timerID = setInterval(() => {
        timeSpentGame++
        document.getElementById('gameTimer').innerHTML = 'Time spent: ' + timeSpentGame;
    }, 1000)
    console.log(timerID);
}
function updateTurnsTaken(match) {
    turnCounter++
    document.getElementById('turns').innerHTML = 'Turns taken: ' + turnCounter;
    if (match === true) {
        pairedCards++
        document.getElementById('cardPairs').innerHTML = 'Pairs: ' + pairedCards;
    }
}
function stopTime() {
    clearInterval(timerID);
}
// functie om een kaart van clasd te kunnen laten veranderen zodat je daar andere eigenschappen aan kan geven
function flipCard() {
    if (timerID === null) {
        gameTimer();
    }
    // hier is de if statement die je niet verder laat klikken en meer kaarten omdraaien als je er al 2 hebt geklikt
    if (waitForMatch) return;
    // hierdoor kan je de flip class van een al aangeklikte kaaart niet veranderen
    if (this === firstCard) return;
    // hier geef je de geklikte kaart een nieuwe class
    this.classList.toggle('flip');
    cardFlipSound();
    // initialiseren van de kaarten
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
    }
    else{
        flippedCard = false;
        secondCard = this;

        checkMatch();
        popUp(pairedCards);
    }
}


// met behulp van dataset kan ik de kaarten vergelijken en dus matchen
// bij een match gaat de eventlistener uit op die twee kaarten
function checkMatch() {
    let match = false;
    if (firstCard.dataset.image === secondCard.dataset.image) {
        matchSound();
        disableFlip();
        removeCard();
        match = true;
        updateTurnsTaken(match);

    }
    else {
        unflipCards();
        wrongMatchSound();
        updateTurnsTaken(match);
    }
}
// hier zet ik de eventlistener uit van de geflipte kaarten
function disableFlip() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function removeCard(){
    firstCard.classList.add('remove');
    secondCard.classList.add('remove');
}

// als het geen match is draaien de kaarten terug door hun flip class eraf te halen
// wait for match erop en eraf halen zodat je niet door kan klikken na 2 kaarten
// timeout erop zodat je wel de kaarten kan bekijken
function unflipCards() {
    waitForMatch = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        waitForMatch = false;
        cardFlipSound();
        resetCards();
    }, 1000);
}
// random getallen toewijzen aan de kaarten in mijn flex box
// flex ordend dan automatisch van laag nar hoog
(function shuffleCards() {
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 20);
        card.style.order = randomCard;
    });
})();

// bug fix omdat kaarten opgeslagen blijven,
// met deze functie worden ze gereset zodat je dezelfde eerste kaart kan omdraaien in de volgende beurt
function resetCards() {
    [flippedCard, waitForMatch] = [false, false];
    [firstCard, secondCard] = [null, null];
}
// function to play a sound effect of flipping card
// also sound effect for successful and unsuccessful match
function cardFlipSound() {
    let audio = new Audio('/sounds/memory/Card Flip - sound effect.wav');
    audio.play();
}
function matchSound() {
    let audio = new Audio('/sounds/memory/Apple Pay Success Sound Effect.wav');
    audio.play();
}
function wrongMatchSound() {
    let audio = new Audio('/sounds/memory/Microsoft Windows XP Error - Sound Effect (HD).wav');
    audio.play();
}
