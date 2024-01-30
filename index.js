console.log("tic tac toe");
let turn = "X";
let isgameOver = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check for the win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText !== "" &&
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[0]].innerText
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Won";
      isgameOver = true;
    }
  });
};

// Game Logic

// Select the box from the various boxes
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "" && !isgameOver) {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
