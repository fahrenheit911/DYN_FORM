let ballSpeed = 4;
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
  console.log(fieldCentreY);

  let ball = document.createElement("div");
  field.appendChild(ball);
  ball.style.borderRadius = "50%";
  ball.style.width = ballW + "px";
  ball.style.height = ballH + "px";
  ball.style.backgroundColor = "red";
  ball.style.position = "absolute";
  ball.style.zIndex = "1";
  let ballCentreX = ball.offsetLeft + ball.offsetWidth / 2;
  let ballCentreY = ball.offsetTop + ball.offsetHeight / 2;
  let ballPosX = fieldW / 2 - ballW / 2;
  let ballPosY = fieldH / 2 - ballH / 2;
  ball.style.top = ballPosY + "px";
  ball.style.left = ballPosX + "px";
  //let ballSpeed = 1;

  let leftRaquette = document.createElement("div");
  field.appendChild(leftRaquette);
  leftRaquette.style.width = fieldW * 0.014 + "px";
  leftRaquette.style.height = fieldH * 0.33 + "px";
  leftRaquette.style.backgroundColor = "green";
  leftRaquette.style.position = "absolute";
  leftRaquette.style.zIndex = "1";
  leftRaquette.style.border = "solid 1px black";

  let reightRaquette = document.createElement("div");
  field.appendChild(reightRaquette);
  reightRaquette.style.width = fieldW * 0.014 + "px";
  reightRaquette.style.height = fieldH * 0.33 + "px";
  reightRaquette.style.backgroundColor = "blue";
  reightRaquette.style.position = "absolute";
  reightRaquette.style.zIndex = "1";
  reightRaquette.style.right = "0";
  reightRaquette.style.border = "solid 1px black";
  //reightRaquette.style.float = "right";

  function start() {
    setInterval(tick, 40);
  }

  function tick() {
    ballPosX += ballSpeed;
    ball.style.left = ballPosX + "px";

    //*гол справа
    if (ballPosX + ballW > fieldW) {
      ballSpeed = ballSpeed;
      ballPosX = fieldW - ballW;
      ball.style.left = ballPosX + "px";
    }
    //*гол слева
    if (ballPosX < 0) {
      ballSpeed = ballSpeed;
      ballPosX = 0;
      ball.style.left = ballPosX + "px";
    }

    ballPosY += ballSpeed;
    ball.style.top = ballPosY + "px";

    //* вылетел ли мяч ниже пола?
    if (ballPosY + ballH > fieldH) {
      ballSpeed = -ballSpeed;
      ballPosY = fieldH - ballH;
      ball.style.top = ballPosY + "px";
    }
    //* вылетел ли мяч выше потолка?
    if (ballPosY < 0) {
      ballSpeed = -ballSpeed;
      ballH.posY = 0;
      ball.style.top = ballPosY + "px";
    }
  }
}

TTT();
