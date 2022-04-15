let inp = document.getElementById("size clock");
let diam = inp.value;
diam = parseInt(diam);
let mainSize = diam;
let miniSize = diam * 0.1;
let radius = diam / 2;
let hours = 12;

if ((diam < 200) || (diam > 800)) {
	btn.addEventListener('click', err)
	function err() {
		alert('Пожалуйста, введите значение от 200 до 800')
	}
} else {

	function addClock() {

		let circleBig = document.createElement('div');
		document.body.appendChild(circleBig);
		circleBig.setAttribute('id', 'circleBig');
		circleBig.style.position = 'absolute';
		circleBig.style.marginLeft = '92px';
		circleBig.style.marginTop = '70px';
		circleBig.style.width = mainSize + "px";
		circleBig.style.height = mainSize + "px";
		circleBig.style.borderRadius = '50%';
		circleBig.style.backgroundColor = 'RGB(0 110 187)';
		let circleBigCentreX = circleBig.offsetLeft + circleBig.offsetWidth / 2;
		let circleBigCentreY = circleBig.offsetTop + circleBig.offsetHeight / 2;

		let delta = Math.PI * 2 / hours;
		let angle = 0;

		for (let i = 0; i < hours; i++) {

			let circleSmall = document.createElement('div');
			circleBig.appendChild(circleSmall);
			circleSmall.setAttribute('id', 'circleSmall');
			circleSmall.style.position = 'absolute';
			circleSmall.style.width = miniSize + "px";
			circleSmall.style.height = miniSize + "px";
			circleSmall.style.borderRadius = '50%';
			circleSmall.style.textAlign = 'center';
			circleSmall.style.backgroundColor = 'RGB(255 216 0)';
			let circleSmallCentreX = circleSmall.offsetLeft + circleSmall.offsetWidth / 2;
			let circleSmallCentreY = circleSmall.offsetTop + circleSmall.offsetHeight / 2;

			let span = document.createElement('span');
			circleSmall.appendChild(span);
			span.innerHTML = i + 1;
			circleSmall.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - (miniSize / 2)) + ((radius - miniSize / 2) * Math.sin(angle)) + 'px';//Math.round(circleBigCentreX - circleBigCentreX + radius - (miniSize / 2)) + 'px';
			circleSmall.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius - (miniSize / 2)) + ((radius - miniSize / 2) * Math.cos(angle)) + 'px';//Math.round(circleBigCentreY - circleBigCentreY + (miniSize / 2)) + 'px';

			angle += delta;

		}

		let secondHand = document.createElement('div');
		circleBig.appendChild(secondHand);
		secondHand.setAttribute('id', 'secondHand');
		secondHand.style.position = 'absolute';
		let secondWidth = 2.5;
		secondHand.style.width = secondWidth + 'px';
		let secondHeight = radius * 0.9;
		secondHand.style.height = secondHeight + 'px';
		secondHand.style.backgroundColor = 'black';
		let secondHandPointTopX = secondHand.offsetLeft / 2;
		let secondHandPointTopY = secondHand.offsetTop + secondHeight;
		secondHand.style.transformOrigin = "center bottom";
		secondHand.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - secondWidth / 2) + 'px';
		secondHand.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius * 0.1) + 'px';

		let minuteHand = document.createElement('div');
		circleBig.appendChild(minuteHand);
		minuteHand.setAttribute('id', 'minutehand');
		minuteHand.style.position = 'absolute';
		let minuteWidth = 4.5;
		minuteHand.style.width = minuteWidth + 'px';
		let minuteHeight = radius * 0.8;
		minuteHand.style.height = minuteHeight + 'px';
		minuteHand.style.backgroundColor = 'black';
		minuteHand.style.borderRadius = '1000px';
		let minuteHandPointTopX = minuteHand.offsetLeft / 2;
		let minuteHandPointTopY = minuteHand.offsetTop + minuteHeight;
		minuteHand.style.transformOrigin = "center bottom";
		minuteHand.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - minuteWidth / 2) + 'px';
		minuteHand.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius * 0.2) + 'px';

		let hourHand = document.createElement('div');
		circleBig.appendChild(hourHand);
		hourHand.setAttribute('id', 'hourhand');
		hourHand.style.position = 'absolute';
		let hourWidth = 6;
		hourHand.style.width = hourWidth + 'px';
		let hourHeight = radius * 0.57;
		hourHand.style.height = hourHeight + 'px';
		hourHand.style.backgroundColor = 'black';
		hourHand.style.borderRadius = '1000px';
		let hourHandPointTopX = hourHand.offsetLeft / 2;
		let hourHandPointTopY = hourHand.offsetTop + hourHeight;
		hourHand.style.transformOrigin = "center bottom";
		hourHand.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - hourWidth / 2) + 'px';
		hourHand.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius * 0.43) + 'px';

		let digitalClock = document.createElement('div');
		circleBig.appendChild(digitalClock);
		digitalClock.setAttribute('id', 'clock');
		digitalClock.style.textAlign = 'center';
		digitalClock.style.marginTop = '25%';
		digitalClock.style.fontSize = 'x-large';

		window.setInterval(
			function () {
				let t = new Date();
				document.getElementById('clock').innerHTML = t.toLocaleTimeString();
			}
			, 500);

		window.setInterval(
			function () {
				let d = new Date();
				let dg = 6;
				let hour = d.getHours() * 30;
				let min = d.getMinutes() * dg;
				let sec = d.getSeconds() * dg;

				hourHand.style.transform = `rotateZ(${hour}deg)`;
				minuteHand.style.transform = `rotateZ(${min}deg)`;
				secondHand.style.transform = `rotateZ(${sec}deg)`;
			});

		let btn = document.getElementById('btn');
		btn.style.display = 'none';

		let sz = document.getElementById('size clock');
		sz.style.display = 'none';
	}
}
