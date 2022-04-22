let ballSpeedX = 4;
let ballSpeedY = 4;
let fieldW = 500;
let fieldH = 300;
let ballW = 20;
let ballH = 20;

function TTT() {
  let inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.type = "button";
  inp.value = "Старт!";
  inp.addEventListener("click", start, true);

  /*let div = document.createElement("div");
  document.body.appendChild(div);*/

  let field = document.createElement("div");
  document.body.appendChild(field);
  field.style.width = fieldW + "px";
  field.style.height = fieldH + "px";
  field.style.backgroundColor = "#f0f056";
  field.style.border = "solid 1px black";
  field.style.position = "relative";
  //field.style.left = "0";
  //field.style.top = "0";
  let fieldCentreX = field.offsetLeft + field.offsetWidth / 2;
  let fieldCentreY = field.offsetTop + field.offsetHeight / 2;

  let ball = document.createElement("div");
  field.appendChild(ball);
  ball.style.borderRadius = "50%";
  ball.style.width = ballW + "px";
  ball.style.height = ballH + "px";
  ball.style.backgroundColor = "red";
  ball.style.position = "absolute";
  ball.style.zIndex = "999";
  let ballCentreX = ball.offsetLeft + ball.offsetWidth / 2;
  let ballCentreY = ball.offsetTop + ball.offsetHeight / 2;
  let ballPosX = fieldW / 2 - ballW / 2;
  let ballPosY = fieldH / 2 - ballH / 2;
  ball.style.top = ballPosY + "px";
  ball.style.left = ballPosX + "px";
  //let ballSpeedY = 1;

  let leftRaquette = document.createElement("div");
  field.appendChild(leftRaquette);
  leftRaquette.style.width = fieldW * 0.015 + "px";
  leftRaquette.style.height = fieldH * 0.3 + "px";
  leftRaquette.style.backgroundColor = "green";
  leftRaquette.style.position = "absolute";
  leftRaquette.style.zIndex = "999";
  leftRaquette.style.border = "solid 1px black";

  let reightRaquette = document.createElement("div");
  field.appendChild(reightRaquette);
  reightRaquette.style.width = fieldW * 0.015 + "px";
  reightRaquette.style.height = fieldH * 0.3 + "px";
  reightRaquette.style.backgroundColor = "blue";
  reightRaquette.style.position = "absolute";
  reightRaquette.style.zIndex = "0";
  reightRaquette.style.right = "0";
  reightRaquette.style.border = "solid 1px black";

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function start() {
    setInterval(tick, 40);
  }

  function tick() {
    ballPosX += ballSpeedX / 5;
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
  }

  window.addEventListener("keypress", ggg, true);
  function ggg(eo) {
    eo = eo || window.event;
    if (eo.key == "ArrowDown") alert("msg");
  }
}

TTT();
