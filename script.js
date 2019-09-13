const game = () => {
  let rng = Math.ceil(Math.random() * 15);
  let rngNumber = document.querySelector(".rng-number p");
  let prevNumber = document.querySelector(".rng-number p");
  let wScore = 0;
  let lScore = 0;

  //RNG Number
  const total = () => {
    let storedNumber = prevNumber.textContent;
    rng = Math.ceil(Math.random() * 15);
    rngNumber.textContent = rng;
    if (storedNumber === "J") {
      storedNumber = 11;
    }
    if (storedNumber === "Q") {
      storedNumber = 12;
    }
    if (storedNumber === "K") {
      storedNumber = 13;
    }
    if (storedNumber === "A") {
      storedNumber = 14;
    }
    if (rng === 11) {
      rngNumber.innerHTML = "J";
    }
    if (rng === 12) {
      rngNumber.innerHTML = "Q";
    }
    if (rng === 13) {
      rngNumber.innerHTML = "K";
    }
    if (rng === 14) {
      rngNumber.innerHTML = "A";
    }
    return;
  };

  //higher button press
  const playGame = () => {
    const hButton = document.querySelector(".h-button");
    const lButton = document.querySelector(".l-button");

    hButton.addEventListener("click", () => {
      playingH();
      numberToLetters();
      return;
    });

    lButton.addEventListener("click", () => {
      playingL();
      numberToLetters();
      return;
    });

    const updateScore = () => {
      let winScore = document.querySelector(".wins");
      let lossScore = document.querySelector(".losses");
      winScore.textContent = wScore;
      lossScore.textContent = lScore;
    };

    const playingH = () => {
      let storedNumber = prevNumber.textContent;
      rng = Math.ceil(Math.random() * 14);
      rngNumber.textContent = rng;
      if (storedNumber === "J") {
        storedNumber = 11;
      }
      if (storedNumber === "Q") {
        storedNumber = 12;
      }
      if (storedNumber === "K") {
        storedNumber = 13;
      }
      if (storedNumber === "A") {
        storedNumber = 14;
      }
      if (storedNumber < rng) {
        console.log("You win");
        wScore++;
        updateScore();
      } else if (storedNumber > rng) {
        console.log("you lose");
        lScore++;
        updateScore();
      } else {
        console.log("draw");
      }
    };

    const playingL = () => {
      let storedNumber = prevNumber.textContent;
      rng = Math.ceil(Math.random() * 15);
      rngNumber.textContent = rng;
      if (storedNumber === "J") {
        storedNumber = 11;
      }
      if (storedNumber === "Q") {
        storedNumber = 12;
      }
      if (storedNumber === "K") {
        storedNumber = 13;
      }
      if (storedNumber === "A") {
        storedNumber = 14;
      }
      if (storedNumber > rng) {
        console.log("You win");
        wScore++;
        updateScore();
      } else if (storedNumber < rng) {
        console.log("you lose");
        lScore++;
        updateScore();
      } else {
        console.log("draw");
      }
    };

    const numberToLetters = () => {
      if (rng === 11) {
        rngNumber.innerHTML = "J";
      }
      if (rng === 12) {
        rngNumber.innerHTML = "Q";
      }
      if (rng === 13) {
        rngNumber.innerHTML = "K";
      }
      if (rng === 14) {
        rngNumber.innerHTML = "A";
      }
    };
  };

  //invoke functions
  total();
  playGame();
};
game();
