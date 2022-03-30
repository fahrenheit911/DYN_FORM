function add() {
	let name = prompt('Название коктейля:');
	let k = name.charAt(0).toUpperCase() + name.slice(1);
	let c = confirm('Коктейль алкогольтный? OK - да, алкогольный, Отмена - нет, не алкогольный');
	if (c === true) {
		v = 'да';
	} else {
		v = 'нет';
	}
	let a = prompt('Рецепт:');
	drinkStorage.addValue(k, { alco: v, rec: a });
}

function get() {
	let name = prompt('Название коктейля:');
	let k = name.charAt(0).toUpperCase() + name.slice(1);
	let info = drinkStorage.getValue(k);
	if (info === undefined) {
		alert('Указанного, Вами, коктейля в баре нет');
	} else {
		alert('Название: ' + k + '\n' + 'Алкогольный: ' + info.alco + '\n' + 'Рецепт: ' + info.rec);
	}
}


function del() {
	let name = prompt('Название коктейля:');
	let k = name.charAt(0).toUpperCase() + name.slice(1);
	let info = drinkStorage.deleteValue(k);
	if (info === true) {
		alert('Коктейль ' + k + ' удалён из бара');
	} else {
		alert('Указанного, Вами, коктейля в баре нет');
	}
}

function get2() {
	alert(drinkStorage.getKeys().join('\n'));
}


function HashStorageFunc() {
	let self = this;
	let bar = {};

	self.addValue = function (k, v) {
		bar[k] = v;
		console.log(bar);
	}

	self.getValue = function (k) {
		return bar[k];
	}

	self.deleteValue = function (k) {
		return (k in bar) ? (delete bar[k]) : false;
	}

	self.getKeys = function () {
		return Object.keys(bar);
	}
}

let drinkStorage = new HashStorageFunc;
