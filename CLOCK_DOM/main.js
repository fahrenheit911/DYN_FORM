let inp = document.getElementById("size clock");


function addClock() {

	let x = inp.value;
	x = parseInt(x);
	let mainSize = x;
	let miniSize = x * 0.1;
	let radius = x / 2;
	let hour = 12;


	let circleBig = document.createElement('div');
	document.body.appendChild(circleBig);
	circleBig.setAttribute('id', 'circleBig');
	circleBig.style.position = 'absolute';
	circleBig.style.marginLeft = '92px';
	circleBig.style.marginTop = '70px';
	circleBig.style.width = mainSize + "px";
	circleBig.style.height = mainSize + "px";
	circleBig.style.borderRadius = '50%';
	circleBig.style.backgroundColor = '#ffff00';

	let circleBigCentreX = circleBig.offsetLeft + circleBig.offsetWidth / 2;
	let circleBigCentreY = circleBig.offsetTop + circleBig.offsetHeight / 2;

	let secondHand = document.createElement('div');
	circleBig.appendChild(secondHand);
	secondHand.setAttribute('id', 'secondHand');
	secondHand.style.position = 'absolute';

	let delta = Math.PI * 2 / hour;
	let angle = 0;


	for (let i = 0; i < hour; i++) {

		let circleSmall = document.createElement('div');
		circleBig.appendChild(circleSmall);
		circleSmall.setAttribute('id', 'circleSmall');
		circleSmall.style.position = 'absolute';
		circleSmall.style.width = miniSize + "px";
		circleSmall.style.height = miniSize + "px";
		circleSmall.style.borderRadius = '50%';
		circleSmall.style.backgroundColor = '#00ff00';

		let circleSmallCentreX = circleSmall.offsetLeft + circleSmall.offsetWidth / 2;
		let circleSmallCentreY = circleSmall.offsetTop + circleSmall.offsetHeight / 2;

		let span = document.createElement('span');
		circleSmall.appendChild(span);




		circleSmall.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - (miniSize / 2)) + ((radius - miniSize / 2) * Math.sin(angle)) + 'px';//Math.round(circleBigCentreX - circleBigCentreX + radius - (miniSize / 2)) + 'px';
		circleSmall.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius - (miniSize / 2)) + ((radius - miniSize / 2) * Math.cos(angle)) + 'px';//Math.round(circleBigCentreY - circleBigCentreY + (miniSize / 2)) + 'px';

		angle += delta;

	}




}