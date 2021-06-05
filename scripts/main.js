const game = ()=> {
    let pScore = 0;
    let cScore =0;

    //Starts the game
  const startGame = () =>{
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector('.match');

      playBtn.addEventListener("click", () =>{ //that click means everytime someone clicks it we're running something it's a function
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      }); //This is the leading function - it starts when you click "Let's Get Jiggy" and fades into the actual game.
  };
  //Play Match
  const playMatch = () => {
      const options = document.querySelectorAll(".options button"); //this makes it so the player can select the rock/paper/scissors
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
      
      hands.forEach(hand =>{
        hand.addEventListener("animationend", function(){
          this.style.animation = '';
        })
      })
      //computer Hand where you left off at 27:37 of the video
      const computerOptions = ['bubble', 'body', 'jar'];

    
      //this makes function that will make a number between 0 & 1 and times it by 3
      options.forEach(option => {
        option.addEventListener("click", function(){
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;

          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
      });
  });

};

const updateScore = () =>{
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

};

  const compareHands = (playerChoice, computerChoice) =>{
    //Update Text
    const winner = document.querySelector(".winner");
    if(playerChoice === computerChoice){
      //Checking for a tie
      winner.textContent = "It's a TIE!";
      return;
    }
    //Check for Bubble
    if(playerChoice === "bubble"){
      if(computerChoice === "jar"){
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
    }
  }
  //Check for Body
  if(playerChoice === "body"){
    if(computerChoice === "jar"){
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;   
    }
  }
  //Check for Jar
  if(playerChoice === "jar"){
    if(computerChoice === "bubble"){
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    }
  }

}
  
  //This is calling all the inner function
  startGame();
  playMatch();
};


//start the game function
game();