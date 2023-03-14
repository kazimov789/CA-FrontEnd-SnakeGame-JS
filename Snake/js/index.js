let oneBlockSize = 20;
let totalRows = 35;
let totalCols = 35;

let gameItems;
let snakeBody = [];
let score = 0;
let foodHeight;
let foodWidth;

let snakeHeight=oneBlockSize*10; // default Snake Position
let snakeWidth=oneBlockSize*10; // default Snake Position

let snakeX = 0; // Widht
let snakeY = 0; // Height

// Food Replace Func
function food() {
  foodHeight = Math.floor(Math.random() * totalRows) * oneBlockSize;
  foodWidth = Math.floor(Math.random() * totalCols) * oneBlockSize;
}

window.onload = function () {

    // Game Board height and width
    let game = document.querySelector("#game");
  game.height = oneBlockSize * totalRows;
  game.width = oneBlockSize * totalCols;
  gameItems = game.getContext("2d");

  food();
//   movements
  document.addEventListener("keydown", (e) => {
    const { key: eventKey } = e;
    if (eventKey === "ArrowUp" && snakeY!==1) {
      snakeX = 0;
      snakeY = -1;
      // snakeHeight -= oneBlockSize;
      // replaceSnake();
      // gameItems.fillStyle = "white";
      // gameItems.fillRect(snakeWidth, snakeHeight, oneBlockSize, oneBlockSize);
    } else if (eventKey === "ArrowDown" && snakeY!==-1) {
      snakeX = 0;
      snakeY = 1;
      // snakeHeight += oneBlockSize;
      // replaceSnake();
      // gameItems.fillStyle = "white";
      // gameItems.fillRect(snakeWidth, snakeHeight, oneBlockSize, oneBlockSize);
    } else if (eventKey === "ArrowLeft" && snakeX!==1) {
      snakeX = -1;
      snakeY = 0;
      // snakeWidth -= oneBlockSize;
      // replaceSnake();
      // gameItems.fillStyle = "white";
      // gameItems.fillRect(snakeWidth, snakeHeight, oneBlockSize, oneBlockSize);
    } else if (eventKey === "ArrowRight"&& snakeX!==-1) {
      snakeX = 1;
      snakeY = 0;
      // snakeWidth += oneBlockSize;
      // replaceSnake();
      // gameItems.fillStyle = "white";
      // gameItems.fillRect(snakeWidth, snakeHeight, oneBlockSize, oneBlockSize);
    }
    //   gameItems.fillRect(snakeWidth, snakeHeight, oneBlockSize, oneBlockSize);
  });

setInterval(Uptade,1000/10);
}

function Uptade() {

gameItems.fillStyle = "black";
gameItems.fillRect(0,0,game.width,game.height);

    // Set Food Position
  gameItems.fillStyle = "red";
  gameItems.fillRect(foodWidth, foodHeight, oneBlockSize, oneBlockSize);

  //snake grow when eat food
  if (snakeWidth === foodWidth && snakeHeight === foodHeight) {
    score++;
    document.querySelector("#score").innerText=`SCORE : ${score}`;
    snakeBody.push([snakeWidth, snakeHeight]);
    food();
  }


  for (let i =snakeBody.length-1; i>0; i--) {
    snakeBody[i]=snakeBody[i-1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeWidth, snakeHeight];
}


  gameItems.fillStyle = "blue";
  snakeHeight += snakeY * oneBlockSize;
  snakeWidth += snakeX * oneBlockSize;
  gameItems.fillRect(snakeWidth, snakeHeight, oneBlockSize, oneBlockSize);

  for (let i = 0; i < snakeBody.length; i++) {
    gameItems.fillRect(snakeBody[i][0], snakeBody[i][1], oneBlockSize, oneBlockSize);
}

if(snakeHeight<0||snakeWidth<0||snakeHeight>oneBlockSize*totalRows||snakeWidth>oneBlockSize*totalCols)
{
  alert(`Your Score : ${score}`);
        window.open("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7434560.jpg");
        window.close();  
    // location.reload();
}
}

