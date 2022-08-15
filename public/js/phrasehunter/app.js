/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//testing game logic
let game = null;

/**
  * Game class. Hold event listeners to interact with the DOM
  */

//addEventListener for the start button
document.getElementById('btn__reset').addEventListener('click', () => {
    
  game = new Game();
  game.startGame();
  
  
  });
  
  
  
  
  //addEvenlistener for the onscreen keyboard buttons


// Adds an event listener to the keyboard. It then calls the game.handleInteraction() method and passes it the selected key.
document.querySelector("#qwerty").addEventListener('click', (event) => {
  if (event.target.className !== 'keyrow' && event.target.id !== 'qwerty') {
      game.handleInteraction(event.target);
  }
});

// Adds an event listener to the document to add keyboard functionality.
document.addEventListener('keydown', (event) => {
  const keyboard = document.querySelectorAll("#qwerty div button");

  if (game !== null) {
      for (let i = 0; i < keyboard.length; i++) {
          if (keyboard[i].disabled === false) {
              if (keyboard[i].textContent === event.key.toLowerCase()) {
                  game.handleInteraction(keyboard[i]);
              }
          }
      }
  }
});
  