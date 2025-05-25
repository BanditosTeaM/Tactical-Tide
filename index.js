const buttonFire = document.getElementById("button_fire");
const buttonDefense = document.getElementById("button_defense");
const buttonDodge = document.getElementById("button_dodge");
const hpPlayer1 = document.getElementById("hpPlayer1");
const hpPlayer2 = document.getElementById("hpPlayer2");
const playerTurnText = document.getElementById("playerTurn");

let allhpPlayer1 = 100;
let allhpPlayer2 = 100;
let DefensePlayer1 = false;
let DefensePlayer2 = false;
let DodgePlayer1 = false;
let DodgePlayer2 = false;

let playerTurn = 1;

function updateHP() {
  hpPlayer1.innerHTML = allhpPlayer1 + "%";
  hpPlayer2.innerHTML = allhpPlayer2 + "%";

  if (DefensePlayer1) {
    hpPlayer1.innerHTML = "🛡️" + allhpPlayer1 + "%";
  }
  if (DefensePlayer2) {
    hpPlayer2.innerHTML = "🛡️" + allhpPlayer2 + "%";
  }
  if (DodgePlayer1) {
    hpPlayer1.innerHTML = "💨" + allhpPlayer1 + "%";
  }
  if (DodgePlayer2) {
    hpPlayer2.innerHTML = "💨" + allhpPlayer2 + "%";
  }
}

function updateTurn() {
  playerTurnText.innerHTML = "Ходит игрок " + playerTurn;
}

function systemAttack() {
  if (playerTurn === 1) {
    if (DefensePlayer2) {
      allhpPlayer2 -= 5;
    } else if (DodgePlayer2) {
      console.log("Игрок 1 идет нахуй со своей атакой");
    } else {
      allhpPlayer2 -= 10;
    }
    DodgePlayer2 = false;
    DefensePlayer2 = false;
    playerTurn = 2;
  } else {
    if (DefensePlayer1) {
      allhpPlayer1 -= 5;
    } else if (DodgePlayer1) {
      console.log("Игрок 2 идет нахуй со своей атакой");
    } else {
      allhpPlayer1 -= 10;
    }
    DodgePlayer1 = false;
    DefensePlayer1 = false;
    playerTurn = 1;
  }

  updateTurn();
  updateHP();
}

function systemDefense() {
  if (playerTurn == 1) {
    DefensePlayer1 = true;
    DodgePlayer1 = false;
    playerTurn = 2;
  } else {
    DefensePlayer2 = true;
    DodgePlayer2 = false;
    playerTurn = 1;
  }

  updateTurn();
  updateHP();
}

function systemDodge() {
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  if (playerTurn == 1) {
    if (randomNumber == 1) {
      DodgePlayer1 = true;
    } else {
      DodgePlayer1 = false;
    }
    DefensePlayer1 = false;
    playerTurn = 2;
  } else {
    if (randomNumber == 2) {
      DodgePlayer2 = true;
    } else {
      DodgePlayer2 = false;
    }
    DefensePlayer2 = false;
    playerTurn = 1;
  }

  updateTurn();
  updateHP();
}

buttonFire.addEventListener("click", () => {
  systemAttack();
});

buttonDefense.addEventListener("click", () => {
  systemDefense();
});

buttonDodge.addEventListener("click", () => {
  systemDodge();
});
