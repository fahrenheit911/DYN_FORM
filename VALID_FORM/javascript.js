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
				spn1.id = formElm.name + "err";
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
				inpDt.setAttribute("min", "2022-04-08");
				inpDt.setAttribute("max", "2023-04-08");
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
				inpNb.type = "text";
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
				let spn4 = document.createElement("SPAN");
				spn4.id = "alarm4";
				labCh.appendChild(spn4);
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
				let spn9 = document.createElement("SPAN");
				spn9.id = "alarm9";
				labAr.appendChild(spn9);
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

	//вызов всех валидаций
	form.addEventListener('submit', formSubmit, true);
	function formSubmit(eo) {
		eo = eo || window.event;
		let countErr = 0;
		countErr += validDevs(!countErr);
		countErr += validSiteName(!countErr);
		countErr += validSiteUrl(!countErr);
		countErr += validData(!countErr);
		countErr += valueVisit(!countErr);
		countErr += validEmail(!countErr);
		countErr += validSelect(!countErr);
		countErr += validRadio(!countErr);
		countErr += validCheck(!countErr);
		countErr += validText(!countErr);
		if (countErr)
			eo.preventDefault();
	}

	//Валидация input разработчики	
	let inpDevs = document.getElementsByName("devs")[0];
	inpDevs.addEventListener("blur", () => validDevs(false), true);
	function validDevs(focusOnError) {
		//eo = eo || window.event;
		let inpValue = inpDevs.value;
		let countErr = 0;
		if (inpValue === "") {
			document.getElementById('devserr').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('devserr').style.color = "red";
			countErr++;
			if (focusOnError)
				inpDevs.focus();
		} else {
			document.getElementById('devserr').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input название сайта
	let inpSiteName = document.getElementsByName("sitename")[0];
	inpSiteName.addEventListener("blur", () => validSiteName(false), true);
	function validSiteName(focusOnError) {
		//eo = eo || window.event;
		let inpValue = inpSiteName.value;
		let countErr = 0;
		if (inpValue === "") {
			document.getElementById('sitenameerr').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('sitenameerr').style.color = "red";
			countErr++;
			if (focusOnError)
				inpSiteName.focus();
		} else {
			document.getElementById('sitenameerr').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input url сайта
	let inpUrl = document.getElementsByName("siteurl")[0];
	inpUrl.addEventListener("blur", () => validSiteUrl(false), true);
	function validSiteUrl(focusOnError) {
		//eo = eo || window.event;
		let inpValue = inpUrl.value;
		let countErr = 0;
		if (inpValue === "") {
			document.getElementById('siteurlerr').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('siteurlerr').style.color = "red";
			countErr++;
			if (focusOnError)
				inpUrl.focus();
		} else {
			document.getElementById('siteurlerr').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input дата запуска
	let inpData = document.querySelector('input[type="date"]');
	inpData.addEventListener("blur", () => validData(false), true);
	function validData(focusOnError) {
		//eo = eo || window.event;
		let inpValue = inpData.value;
		let nowaday = inpData.min;
		let countErr = 0;
		if (inpValue < nowaday) {
			document.getElementById('alarm2').innerHTML = "  Введенная дата не коректна"
			if (inpValue == "") {
				document.getElementById('alarm2').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
				document.getElementById('alarm2').style.color = "red";
			}
			countErr++;
			if (focusOnError)
				inpData.focus();
		} else {
			document.getElementById('alarm2').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input число посетителей
	let numberControl = document.getElementsByName("visitors")[0];
	numberControl.addEventListener("blur", () => valueVisit(false), true);
	function valueVisit(focusOnError) {
		//eo = eo || window.event;
		let numberValue = numberControl.value;
		let numb = Number(numberValue);
		let countErr = 0;
		if (numberValue != numb || numberValue === "") {
			document.getElementById('alarm3').innerHTML = '   Введите число посетителей';
			document.getElementById('alarm3').style.color = "red";
			countErr++;
			if (focusOnError)
				numberControl.focus();
		} else {
			document.getElementById('alarm3').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input email
	let emailControl = document.getElementsByName("email")[0];
	emailControl.addEventListener("blur", () => validEmail(false), true);
	function validEmail(focusOnError) {
		//eo = eo || window.event;
		let emailValue = emailControl.value;
		let e = emailValue.indexOf('@');
		let ee = emailValue.indexOf('.');
		let countErr = 0;
		if (e < 1 && ee < 1) {
			document.getElementById('alarm5').innerHTML = "  Пожалуйста, введите корректный email-адрес (вы ввели данные в неправильном формате)";
			document.getElementById('alarm5').style.color = "red";
			countErr++;
			if (focusOnError)
				emailControl.focus();
		} else {
			document.getElementById('alarm5').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input select
	let selectControl = document.getElementsByTagName("SELECT")[0];
	selectControl.addEventListener("blur", () => validSelect(false), true);
	function validSelect(focusOnError) {
		//eo = eo || window.event;
		var selectedValue = selectControl.value;
		let countErr = 0;
		if (selectedValue == "") {
			document.getElementById('alarm6').innerHTML = "  Сделайте свой выбор, укажите рубрику";
			document.getElementById('alarm6').style.color = "red";
			countErr++;
			if (focusOnError)
				selectControl.focus();
		} else {
			document.getElementById('alarm6').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input radio
	let radioControl = document.querySelectorAll("input[type=radio]");
	for (let i = 0; i < radioControl.length; i++) {
		let rad = radioControl[i];
		rad.addEventListener("blur", () => validRadio(), true);
	}
	function validRadio() {
		//eo = eo || window.event;
		let radios = document.querySelectorAll("input[type=radio]");
		let radValid = false;
		let i = 0;
		let countErr = 0;
		while (!radValid && i < radios.length) {
			if (radios[i].checked) {
				radValid = true;
				document.getElementById('alarm7').innerHTML = " ";
			}
			i++;
		}
		if (!radValid) {
			document.getElementById('alarm7').innerHTML = "  Сделайте свой выбор, укажите вариант размещения";
			document.getElementById('alarm7').style.color = "red";
			countErr++;

		}
		return countErr;
	}

	//Валидация input checkbox	
	let inpCheck = document.getElementsByName("votes")[0];
	inpCheck.addEventListener("blur", () => validCheck(true), true);
	function validCheck(focusOnError) {
		//eo = eo || window.event;
		let countErr = 0;
		if (inpCheck.checked === true) {
			document.getElementById('alarm4').innerHTML = "  Отзывы недоступны, снимите галочку";
			document.getElementById('alarm4').style.color = "red";
			countErr++;
			if (focusOnError)
				inpCheck.focus();
		} else {
			document.getElementById('alarm4').innerHTML = '';
		}
		return countErr;
	}

	//Валидация input textarea описание сайта
	let txtarControl = document.getElementsByTagName("TEXTAREA")[0];
	txtarControl.addEventListener("blur", () => validText(false), true);
	function validText(focusOnError) {
		//eo = eo || window.event;
		let txtValue = txtarControl.value;
		let countErr = 0;
		if (txtValue === "") {
			document.getElementById('alarm9').innerHTML = "  Обязательное поле (Вы не можете оставить поле пустым)";
			document.getElementById('alarm9').style.color = "red";
			countErr++;
			if (focusOnError)
				txtarControl.focus();
		} else {
			document.getElementById('alarm9').innerHTML = '';
		}
		return countErr;
	}

}

makeForm(formDef1);
