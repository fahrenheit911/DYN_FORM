let formDef1 =
	[
		{ label: 'Разработчики: ', kind: 'longtext', name: 'devs' },
		{ label: 'Название сайта: ', kind: 'longtext', name: 'sitename' },
		{ label: 'URL сайта: ', kind: 'longtext', name: 'siteurl' },
		{ label: 'Дата запуска сайта: ', kind: 'date', name: 'start' },
		{ label: 'Посетителей в сутки: ', kind: 'number', name: 'visitors' },
		{ label: 'E-mail для связи: ', kind: 'shorttext', name: 'email' },
		{
			label: 'Рубрика каталога: ', kind: 'combo', name: 'division',
			variants: [{ text: 'сделайте выбор', value: "" }, { text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
		},
		{
			label: 'Размещение: ', kind: 'radio', name: 'payment',
			variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
		},
		{ label: 'Разрешить отзывы: ', kind: 'check', name: 'votes' },
		{ label: 'Описание сайта: ', kind: 'memo', name: 'description' },
		{ caption: 'Опубликовать', kind: 'submit' },
	];

function makeForm(FFF) {

	let form = document.createElement("FORM");
	form.id = "myForm";
	form.action = "https://fe.it-academy.by/TestForm.php";
	form.metod = "get";

	document.body.appendChild(form);

	for (let f = 0; f < FFF.length; f++) {
		let formElm = FFF[f];
		switch (formElm.kind) {

			case 'longtext':
				let labTx = document.createElement("LABEL");
				labTx.innerHTML = formElm.label;
				let inpTx = document.createElement("INPUT");
				inpTx.type = "text";
				inpTx.name = formElm.name;
				labTx.appendChild(inpTx);
				let spn1 = document.createElement("SPAN");
				spn1.id = "alarm1";
				labTx.appendChild(spn1);
				form.appendChild(labTx);
				let x = document.createElement("BR");
				labTx.appendChild(x);
				break;

			case 'date':
				let labDt = document.createElement("LABEL");
				labDt.innerHTML = formElm.label;
				let inpDt = document.createElement("INPUT");
				inpDt.type = "date";
				inpDt.name = formElm.name;
				labDt.appendChild(inpDt);
				let spn2 = document.createElement("SPAN");
				spn2.id = "alarm2";
				labDt.appendChild(spn2);
				form.appendChild(labDt);
				let xx = document.createElement("BR");
				labDt.appendChild(xx);
				break;

			case 'number':
				let labNb = document.createElement("LABEL");
				labNb.innerHTML = formElm.label;
				let inpNb = document.createElement("INPUT");
				inpNb.type = "number";
				inpNb.name = formElm.name;
				labNb.appendChild(inpNb);
				let spn3 = document.createElement("SPAN");
				spn3.id = "alarm3";
				labNb.appendChild(spn3);
				form.appendChild(labNb);
				let x1 = document.createElement("BR");
				labNb.appendChild(x1);
				break;

			case 'shorttext':
				let labEm = document.createElement("LABEL");
				labEm.innerHTML = formElm.label;
				let inpEm = document.createElement("INPUT");
				inpEm.type = 'email';
				inpEm.name = formElm.name;
				labEm.appendChild(inpEm);
				let spn5 = document.createElement("SPAN");
				spn5.id = "alarm5";
				labEm.appendChild(spn5);
				form.appendChild(labEm);
				let x2 = document.createElement("BR");
				labEm.appendChild(x2);
				break;

			case 'combo':
				let labSl = document.createElement("LABEL");
				labSl.innerHTML = formElm.label;
				let sel = document.createElement("SELECT");
				sel.name = formElm.name;
				for (let o = 0; o < formElm.variants.length; o++) {
					let v = formElm.variants[o];
					let opt = document.createElement("OPTION");
					opt.innerHTML = v.text;
					opt.value = v.value;
					//opt.setAttribute('selected', 'true');
					sel.appendChild(opt);
					//pt[1].setAttribute("disabled", "disabled");
				}
				labSl.appendChild(sel);
				let spn6 = document.createElement("SPAN");
				spn6.id = "alarm6";
				labSl.appendChild(spn6);
				form.appendChild(labSl);
				let x3 = document.createElement("BR");
				labSl.appendChild(x3);
				break;

			case 'radio':
				let labRd = document.createElement("LABEL");
				labRd.innerHTML = formElm.label;
				for (let r = 0; r < formElm.variants.length; r++) {
					let w = formElm.variants[r];
					let lbl = document.createElement("LABEL");
					let inpRd = document.createElement("INPUT");
					inpRd.type = 'radio';
					inpRd.name = formElm.name;
					let spn = document.createElement('SPAN');
					spn.innerHTML = w.text;
					inpRd.value = w.value;
					lbl.appendChild(inpRd);
					lbl.appendChild(spn);
					labRd.appendChild(lbl);
				}
				labRd.insertAdjacentHTML('beforeend', '<span id="alarm7"></span>');
				form.appendChild(labRd);
				let x4 = document.createElement("BR");
				labRd.appendChild(x4);
				break;

			case 'check':
				let labCh = document.createElement("LABEL");
				labCh.innerHTML = formElm.label;
				let inpCh = document.createElement("INPUT");
				inpCh.type = 'checkbox';
				inpCh.name = formElm.name;
				inpCh.setAttribute('checked', 'true');
				labCh.appendChild(inpCh);
				form.appendChild(labCh);
				let x5 = document.createElement("BR");
				labCh.appendChild(x5);
				break;

			case 'memo':
				let labAr = document.createElement("LABEL");
				labAr.innerHTML = formElm.label + '<br/>';
				let txAr = document.createElement("TEXTAREA");
				txAr.type = 'text';
				txAr.name = formElm.name;
				labAr.appendChild(txAr);
				form.appendChild(labAr);
				let x6 = document.createElement("BR");
				labAr.appendChild(x6);
				break;

			case 'submit':
				let inpSb = document.createElement("INPUT");
				inpSb.type = 'submit';
				inpSb.value = formElm.caption;
				form.appendChild(inpSb);
				break;
			default:
		}
	}
	let x6 = document.createElement("BR");
	document.body.appendChild(x6);


	form.addEventListener('submit', function (event) {
		event.preventDefault();
	})


	let inp = document.getElementsByTagName("INPUT")[0];
	inp.addEventListener("blur", function (eo) {
		eo = eo || window.event;
		let inpValue = document.getElementsByTagName("INPUT")[0].value;
		if (inpValue === "") {
			document.getElementById('alarm1').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('alarm1').style.color = "red";
		} else {
			document.getElementById('alarm1').innerHTML = '';
		}
	}, true);

	let inp1 = document.getElementsByTagName("INPUT")[1];
	inp1.addEventListener("blur", function (eo) {
		eo = eo || window.event;
		let inpValue = document.getElementsByTagName("INPUT")[1].value;
		if (inpValue === "") {
			document.getElementById('alarm1').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('alarm1').style.color = "red";
		} else {
			document.getElementById('alarm1').innerHTML = '';
		}
	}, true);

	let inp2 = document.getElementsByTagName("INPUT")[2];
	inp2.addEventListener("blur", function (eo) {
		eo = eo || window.event;
		let inpValue = document.getElementsByTagName("INPUT")[2].value;
		if (inpValue === "") {
			document.getElementById('alarm1').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('alarm1').style.color = "red";
		} else {
			document.getElementById('alarm1').innerHTML = '';
		}
	}, true);

	let numberControl = document.getElementsByTagName("INPUT")[4];
	numberControl.addEventListener("blur", function (eo) {
		eo = eo || window.event;
		let numberValue = document.getElementsByTagName("INPUT")[4].value;
		let numb = Number(numberValue);
		if (numberValue != numb || numberValue === "") {
			document.getElementById('alarm3').innerHTML = '   введите число посетителей';
			document.getElementById('alarm3').style.color = "red";
		} else {
			document.getElementById('alarm3').innerHTML = '';
		}
	}, true);

	let emailControl = document.getElementsByTagName("INPUT")[5];
	emailControl.addEventListener("blur", function (eo) {
		eo = eo || window.event;
		let emailValue = document.getElementsByTagName("INPUT")[5].value;
		let e = emailValue.indexOf('@');
		let ee = emailValue.indexOf('.');
		if (e < 1 && ee < 1) {
			document.getElementById('alarm5').innerHTML = "  Пожалуйста, введите корректный email-адрес (вы ввели данные в неправильном формате)";
			document.getElementById('alarm5').style.color = "red";
		} else {
			document.getElementById('alarm5').innerHTML = '';
		}
	}, true);

	let selectControl = document.getElementsByTagName("SELECT")[0];
	selectControl.addEventListener("blur", function (eo) {
		eo = eo || window.event;
		var selectedValue = selectControl.value;
		if (selectedValue == "") {
			document.getElementById('alarm6').innerHTML = "  Сделайте свой выбор, укажите рубрику";
			document.getElementById('alarm6').style.color = "red";
		} else {
			document.getElementById('alarm6').innerHTML = '';
		}
	}, true);

	let radioControl = document.querySelectorAll("input[type=radio]");
	for (let i = 0; i < radioControl.length; i++) {
		let rad = radioControl[i];
		rad.addEventListener("blur", kkk, true);
	}
	function kkk(eo) {
		eo = eo || window.event;
		let radios = document.querySelectorAll("input[type=radio]");
		var formValid = false;
		var i = 0;
		while (!formValid && i < radios.length) {
			if (radios[i].checked) {
				formValid = true;
				document.getElementById('alarm7').innerHTML = " ";
			}
			i++;
		}
		if (!formValid) {
			document.getElementById('alarm7').innerHTML = "  Сделайте свой выбор, укажите вариант размещения";
			document.getElementById('alarm7').style.color = "red";
		}
		return formValid;
	}


}




/*form.addEventListener('submit', function (event) {
	event.preventDefault()
	alert('текст: ' + inpTx.value);
})*/


makeForm(formDef1);
