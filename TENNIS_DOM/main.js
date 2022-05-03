let ballSpeedX = 6;
let ballSpeedY = 5;
let fieldW = 500;
let fieldH = 300;
let ballW = 20;
let ballH = 20;
let raquetteSpeedLeft = 0;
let raquetteSpeedRight = 0;

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
  let ballX = ball.offsetLeft + ball.offsetWidth;
  console.log(ballX);
  let ballY = ball.offsetTop + ball.offsetHeight / 2;
  console.log(ballY);
  let ballPosX = fieldW / 2 - ballW / 2;
  let ballPosY = fieldH / 2 - ballH / 2;
  ball.style.top = ballPosY + "px";
  ball.style.left = ballPosX + "px";

  let leftRaquette = document.createElement("div");
  field.appendChild(leftRaquette);
  let leftRaquetteW = fieldW * 0.015;
  let leftRaquetteH = fieldH / 3;
  leftRaquette.style.width = leftRaquetteW + "px";
  leftRaquette.style.height = leftRaquetteH + "px";
  leftRaquette.style.backgroundColor = "green";
  leftRaquette.style.position = "absolute";
  leftRaquette.style.border = "solid 1px black";
  let leftRaquetteTop = leftRaquetteH * 1.5 - leftRaquetteH / 2;
  leftRaquette.style.top = leftRaquetteTop + "px";

  let rightRaquette = document.createElement("div");
  field.appendChild(rightRaquette);
  let rightRaquetteW = fieldW * 0.015;
  let rightRaquetteH = fieldH / 3;
  rightRaquette.style.width = rightRaquetteW + "px";
  rightRaquette.style.height = rightRaquetteH + "px";
  rightRaquette.style.backgroundColor = "blue";
  rightRaquette.style.position = "absolute";
  rightRaquette.style.right = "0";
  rightRaquette.style.border = "solid 1px black";
  let rightRaquetteTop = rightRaquetteH * 1.5 - rightRaquetteH / 2;
  rightRaquette.style.top = rightRaquetteTop + "px";
  let rightRaquetteRight = 0 + "px";

  inp.addEventListener(
    "click",
    function () {
      setInterval(tick, 40);
    },
    false
  );

  window.addEventListener(
    "keydown",
    function (eo) {
      eo = eo || window.event;

      if (eo.code == "ShiftLeft") {
        raquetteSpeedLeft = 2;
      }

      if (eo.code == "ControlLeft") {
        raquetteSpeedLeft = -2;
      }

      if (eo.code == "ArrowUp") {
        raquetteSpeedRight = 2;
      }

      if (eo.code == "ArrowDown") {
        raquetteSpeedRight = -2;
      }
    },
    false
  );

  window.addEventListener(
    "keyup",
    function (eo) {
      eo = eo || window.event;
      raquetteSpeedLeft = 0;
      raquetteSpeedRight = 0;
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

    if (leftRaquetteTop + leftRaquetteH > fieldH) {
      leftRaquetteTop = fieldH - leftRaquetteH;
      leftRaquette.style.top = leftRaquetteTop + "px";
    }

    rightRaquetteTop += -raquetteSpeedRight;
    rightRaquette.style.top = rightRaquetteTop + "px";

    if (rightRaquetteTop < 0) {
      rightRaquetteTop = 0;
      rightRaquette.style.top = rightRaquetteTop + "px";
    }

    if (rightRaquetteTop + rightRaquetteH > fieldH) {
      rightRaquetteTop = fieldH - rightRaquetteH;
      rightRaquette.style.top = rightRaquetteTop + "px";
    }
  }

  function tick() {
    ballPosX += ballSpeedX / 1;
    ball.style.left = ballPosX + "px";

    //*гол справа
    if (ballPosX + ballW > fieldW) {
      ballSpeedX = 0;
      ballSpeedY = 0;
      ballPosX = fieldW - ballW;
      ball.style.left = ballPosX + "px";
    }

    //*гол слева
    if (ballPosX < 0) {
      ballSpeedX = 0;
      ballSpeedY = 0;
      ballPosX = 0;
      ball.style.left = ballPosX + "px";
    }

    ballPosY += ballSpeedY;
    ball.style.top = ballPosY + "px";

    //* вылетел ли мяч ниже пола?
    if (ballPosY + ballH > fieldH) {
      ballSpeedY = -ballSpeedY;
      ballPosY = fieldH - ballH;
      ball.style.top = ballPosY + "px";
    }
    //* вылетел ли мяч выше потолка?
    if (ballPosY < 0) {
      ballSpeedY = -ballSpeedY;
      ballH.posY = 0;
      ball.style.top = ballPosY + "px";
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
