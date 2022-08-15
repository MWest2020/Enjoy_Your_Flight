/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrase() {
        const phraseArr = [
            new Phrase('big mac address'),
            new Phrase('Pi my life up'),
            new Phrase('spam and eggs'),
            new Phrase(`hello world`),
            new Phrase('Kubernetes')
        ];
        return phraseArr;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }



    /** 
     * the handleInteraction function is invoked from the app.js event listeners.
     */

    handleInteraction(input) {
        input.disabled = true

        if (this.activePhrase.checkLetter(input.textContent)) {
            input.className = 'chosen';
            this.activePhrase.showMatchedLetter(input.textContent);

            if (this.checkForWin()) { this.gameOver() };

        } else {
            input.className = 'wrong';
            this.removeLife();
        }
    }

    /** 
     * Checks for winning move 
     * @return {boolean} True if game has been won, false if game wasn't won 
     */
    checkForWin() {

        if (document.querySelector(`#phrase > ul`).innerHTML.includes('hide')) {
            return false;
        } else {
            return true;
        }

    }

    /** 
     * Displays game over message 
     */

    gameOver() {

        const gameOverMessage = document.querySelector('#game-over-message');
        if (this.checkForWin()) {
            document.getElementById('overlay').className = 'win';
            document.getElementById('overlay').style.display = 'block';
            gameOverMessage.textContent = 'PHRASE HUNTED AND SLAIN! YOU WON';
        } else {
            document.getElementById('overlay').className = 'lose';
            document.getElementById('overlay').style.display = 'block';
            gameOverMessage.textContent = 'PHRASE HUNTED and lost YOUR LIVES!';
        }
        this.init();
    }


    /** 
     * Resets the board after a game is played
     */

    init() {
        const keyboard = document.querySelectorAll("#qwerty div button");
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].className = 'key';
            keyboard[i].disabled = false;
        }

        const hearts = document.querySelector("#scoreboard > ol");
        for (let i = 0; i < hearts.children.length; i++) {
            hearts.children[i].firstElementChild.src = "/images/games/phrasehunter/liveHeart.png";
        }
    }


    //remove heart from life scoreboard
    /** 
     * Increases the value of the this.missed property 
     * Removes a life from the scoreboard 
     * Checks if player has remaining lives and ends game if player is out */
    removeLife() {
        const hearts = document.querySelector("#scoreboard > ol");
        // let heartIndex = this.missed;

        hearts.children[this.missed].firstElementChild.src = "/images/games/phrasehunter/lostHeart.png";
        this.missed++;

        if (this.missed > 4) {
            this.gameOver();
        }
    }
}