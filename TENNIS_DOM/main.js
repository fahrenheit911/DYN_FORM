let ballSpeedX = 0;
let ballSpeedY = 0;
let fieldW = 500;
let fieldH = 300;
let ballW = 20;
let ballH = 20;
let raquetteSpeedLeft = 0;
let raquetteSpeedRight = 0;
let RaquetteW = fieldW * 0.015;
let RaquetteH = fieldH / 3;


function TTT() {
  let inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.type = "button";
  inp.value = "Старт!";

  let field = document.createElement("div");
  document.body.appendChild(field);
  field.style.width = fieldW + "px";
  field.style.height = fieldH + "px";
  field.style.backgroundColor = "#f0f056";
  field.style.border = "solid 1px black";
  field.style.position = "relative";
  let fieldCentreX = field.offsetLeft + field.offsetWidth / 2;
  let fieldCentreY = field.offsetTop + field.offsetHeight / 2;

  let ball = document.createElement("div");
  field.appendChild(ball);
  ball.style.borderRadius = "50%";
  ball.style.width = ballW + "px";
  ball.style.height = ballH + "px";
  ball.style.backgroundColor = "red";
  ball.style.position = "absolute";
  let ballX = ball.offsetLeft;
  let ballY = ball.offsetTop;
  //let ballPosX = fieldW / 2 - ballW / 2;
  //let ballPosY = fieldH / 2 - ballH / 2;
  ball.style.top = ballY + fieldH / 2 - ballH / 2 + "px";
  ball.style.left = ballX + fieldW / 2 - ballW / 2 + "px";

  console.log("ballX: " + ballX);
  console.log("ballY: " + ballY);

  console.log(
    "стартовая позиция мяча X: " +
      (ball.style.left = ballX + fieldW / 2 - ballW / 2 + "px")
  );
  console.log(
    "стартовая позиция мяча Y: " +
      (ball.style.top = ballY + fieldH / 2 - ballH / 2 + "px")
  );

  let leftRaquette = document.createElement("div");
  field.appendChild(leftRaquette);
  leftRaquette.style.width = RaquetteW + "px";
  leftRaquette.style.height = RaquetteH + "px";
  leftRaquette.style.backgroundColor = "green";
  leftRaquette.style.position = "absolute";
  leftRaquette.style.border = "solid 1px black";
  let leftRaquetteTop = RaquetteH;
  leftRaquette.style.top = leftRaquetteTop + "px";
  let leftRaquetteY = leftRaquette.offsetTop - RaquetteH;
  let leftRaquetteX = leftRaquette.offsetLeft;

  let rightRaquette = document.createElement("div");
  field.appendChild(rightRaquette);
  rightRaquette.style.width = RaquetteW + "px";
  rightRaquette.style.height = RaquetteH + "px";
  rightRaquette.style.backgroundColor = "blue";
  rightRaquette.style.position = "absolute";
  rightRaquette.style.right = "0";
  rightRaquette.style.border = "solid 1px black";
  let rightRaquetteTop = RaquetteH * 1.5 - RaquetteH / 2;
  rightRaquette.style.top = rightRaquetteTop + "px";
  let rightRaquetteRight = 0 + "px";

  inp.addEventListener(
    "click",
    function () {
      ballSpeedX = -6;
      ballSpeedY = 4;
    },
    false
  );

  function timer() {
    setInterval(tick, 40);
  }
  timer();

  window.addEventListener(
    "keydown",
    function (eo) {
      eo = eo || window.event;

      if (eo.code == "ShiftLeft") {
        raquetteSpeedLeft = 3;
      }

      if (eo.code == "ControlLeft") {
        raquetteSpeedLeft = -3;
      }

      if (eo.code == "ArrowUp") {
        raquetteSpeedRight = 3;
      }

      if (eo.code == "ArrowDown") {
        raquetteSpeedRight = -3;
      }
    },
    false
  );

  window.addEventListener(
    "keyup",
    function (eo) {
      eo = eo || window.event;

      if (eo.code == "ShiftLeft" || eo.code == "ControlLeft") {
        raquetteSpeedLeft = 0;
      }

      if (eo.code == "ArrowUp" || eo.code == "ArrowDown") {
        raquetteSpeedRight = 0;
      }
    },
    false
  );

  function moveRaquette() {
    leftRaquetteTop += -raquetteSpeedLeft;
    leftRaquette.style.top = leftRaquetteTop + "px";

    if (leftRaquetteTop < 0) {
      leftRaquetteTop = 0;
      leftRaquette.style.top = leftRaquetteTop + "px";
    }

    if (leftRaquetteTop + RaquetteH > fieldH) {
      leftRaquetteTop = fieldH - RaquetteH;
      leftRaquette.style.top = leftRaquetteTop + "px";
    }

    rightRaquetteTop += -raquetteSpeedRight;
    rightRaquette.style.top = rightRaquetteTop + "px";

    if (rightRaquetteTop < 0) {
      rightRaquetteTop = 0;
      rightRaquette.style.top = rightRaquetteTop + "px";
    }

    if (rightRaquetteTop + RaquetteH > fieldH) {
      rightRaquetteTop = fieldH - RaquetteH;
      rightRaquette.style.top = rightRaquetteTop + "px";
    }
  }

  function tick() {
    ballX += ballSpeedX / 2;
    ball.style.left = ballX + "px";

    //*гол справа
    if (ballX + ballW > fieldW) {
      ballSpeedX = 0;
      ballSpeedY = 0;
      //ballPosX = fieldW - ballW;
      ball.style.left = fieldW - ballW + "px";
    }

    //*гол слева
    if (ballX < 0) {
      ballSpeedX = 0;
      ballSpeedY = 0;
      ballX = 0;
      ball.style.left = 0;
    }

    if (
      ballY + ballW / 2 >= leftRaquetteY &&
      ballY + ballW / 2 <= leftRaquetteY + RaquetteH &&
      ballX <= RaquetteW
    ) {
      ballSpeedX = -ballSpeedX;
      //ballPosX = RaquetteW;
      //ball.style.left = ballPosX + "px";
    }

    ballY += ballSpeedY;
    ball.style.top = ballY + "px";

    //* вылетел ли мяч ниже пола?
    if (ballY + ballH > fieldH) {
      ballSpeedY = -ballSpeedY;
      //ballPosY = fieldH - ballH;
      ball.style.top = fieldH - ballH + "px";
    }
    //* вылетел ли мяч выше потолка?
    if (ballY < 0) {
      ballSpeedY = -ballSpeedY;
      ballY = 0;
      ball.style.top = 0;
    }

    moveRaquette();
  }
}

TTT();

//let ballX = ball.offsetLeft + ball.offsetWidth;
//let ballY = ball.offsetTop + ball.offsetHeight / 2;

/* function location() {
    ball.style.top = ballPosY + "px";
    ball.style.left = ballPosX + "px";

    leftRaquette.style.top = leftRaquetteTop + "px";

    rightRaquette.style.top = rightRaquetteTop + "px";
  }
  location();*/
