const carsImg = document.querySelectorAll('.cars');
const form = document.querySelector('.main_form');
const mainArea = document.querySelector('.main');
const carName = document.querySelectorAll('.car_name');
const selectedCar = document.querySelector('.selected_car');
const priceArea = document.querySelector('.price p');
const carPrice = document.querySelectorAll('.car_price');
const returnBtn = document.querySelector('.return');
const buyBtn = document.querySelector('.buy');
const wheelsBtn = document.querySelector('.wheelsBtn');
const guaranteeBtn = document.querySelector('.guaranteeBtn');
const finishScreen = document.querySelector('.finish_screen');
const lastImg = document.querySelector('.last_img');
const createImg = document.createElement('img');
const finishCarName = document.querySelector('.finish_car_name');
const nameInput = document.querySelector('.nameInput');
const placeInput = document.querySelector('.placeInput');
const warning = document.querySelector('.warning');
const createErrorP1 = document.createElement('p');
const numbers = /[0-9]/i;
const specials = /[!@#$%^&*()]/i;
const date = document.querySelector('.date');
const finalPrice = document.querySelector('.final_price');
const leasingRadio = document.querySelector('#leasing_radio');
const cashRadio = document.querySelector('#cash_radio');
const payForm = document.querySelector('.pay_form');
const brand = document.querySelector('.brand');
const carArea = document.querySelectorAll('.car_area');
let wheelsBtnValue = 0;
let guaranteeBtnValue = 0;

const main = () => {
	prepareDOMEvents();
};

const prepareDOMEvents = () => {
	returnBtn.addEventListener('click', closeForm);
	wheelsBtn.addEventListener('click', addWheelsPrice);
	guaranteeBtn.addEventListener('click', addGuaranteePrice);
	buyBtn.addEventListener('click', buyCar);

	//LocalStorage

	nameInput.addEventListener('keyup', () => {
		window.localStorage.setItem('name', JSON.stringify(nameInput.value));
	});

	placeInput.addEventListener('keyup', () => {
		window.localStorage.setItem('place', JSON.stringify(placeInput.value));
	});

	//brand
	brand.addEventListener('keyup', brandChoice);
};

//After click cars img form should appear with name of chosen car and price
const clickCarsImg = (e) => {
	form.classList.add('active');
	setTimeout(() => {
		mainArea.classList.replace('main', 'zero');
	}, 1000);
	if (e.target === carsImg[0]) {
		selectedCar.textContent += ' ' + carName[0].textContent;
		finishCarName.textContent += carName[0].textContent;
		priceArea.textContent = carPrice[0].textContent;
		createImg.src = carsImg[0].src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	} else if (e.target === carsImg[1]) {
		selectedCar.textContent += ' ' + carName[1].textContent;
		finishCarName.textContent += carName[1].textContent;
		priceArea.textContent = carPrice[1].textContent;
		createImg.src = carsImg[1].src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	} else if (e.target === carsImg[2]) {
		selectedCar.textContent += ' ' + carName[2].textContent;
		finishCarName.textContent += carName[2].textContent;
		priceArea.textContent = carPrice[2].textContent;
		createImg.src = carsImg[2].src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	} else if (e.target === carsImg[3]) {
		selectedCar.textContent += ' ' + carName[3].textContent;
		finishCarName.textContent += carName[3].textContent;
		priceArea.textContent = carPrice[3].textContent;
		createImg.src = carsImg[3].src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	} else if (e.target === carsImg[4]) {
		selectedCar.textContent += ' ' + carName[4].textContent;
		finishCarName.textContent += carName[4].textContent;
		priceArea.textContent = carPrice[4].textContent;
		createImg.src = carsImg[4].src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	} else if (e.target === carsImg[5]) {
		selectedCar.textContent += ' ' + carName[5].textContent;
		finishCarName.textContent += carName[5].textContent;
		priceArea.textContent = carPrice[5].textContent;
		createImg.src = carsImg[5].src;
		createImg.classList.add('last_img');
		lastImg.appendChild(createImg);
	}
};

//Date when car can be taken(2 weeks after)
const now = new Date();
const future_date = new Date();

future_date.setDate(now.getDate() + 14);
let html_date = future_date.toLocaleDateString();
date.textContent += html_date;

//Close form
const closeForm = () => {
	mainArea.classList.replace('zero', 'main');
	form.classList.remove('active');
	setTimeout(() => {
		selectedCar.textContent = 'Wybrałeś ';
		guaranteeBtn.classList.remove('colorBtn');
		wheelsBtn.classList.remove('colorBtn');
		finishCarName.textContent = '';
		createErrorP1.textContent = '';
		warning.textContent = '';
		nameInput.value = '';
		placeInput.value = '';
		wheelsBtnValue = 0;
		guaranteeBtnValue = 0;
	}, 500);
};

//Buy car button & input name and place

const buyCar = () => {
	const nameValue = nameInput.value;
	const nameArray = nameValue.trim().split(' ');

	warning.classList.add('active3');
	if (nameInput.value === '' && placeInput.value === '') {
		createErrorP1.textContent = 'Musisz podać wszystkie dane';
		warning.append(createErrorP1);
	} else if (nameArray.length <= 1 || nameArray.length > 2) {
		createErrorP1.textContent = 'Musisz podać imię i nazwisko';
		warning.append(createErrorP1);
	} else if (nameInput.value === '') {
		createErrorP1.textContent = 'Musisz uzupełnić imię i nazwisko';
		warning.append(createErrorP1);
	} else if (
		nameInput.value.match(numbers) ||
		placeInput.value.match(numbers)
	) {
		createErrorP1.textContent = 'Użyłeś liczb';
		warning.append(createErrorP1);
	} else if (
		nameInput.value.match(specials) ||
		placeInput.value.match(specials)
	) {
		createErrorP1.textContent = 'Użyłeś niedozwolonych znaków';
		warning.append(createErrorP1);
	} else if (placeInput.value === '') {
		createErrorP1.textContent = 'Musisz uzupełnić miejsce odbioru';
		warning.append(createErrorP1);
	} else {
		finishScreen.classList.add('active2');
		finalPrice.textContent += priceArea.textContent + ' PLN';
		if (leasingRadio.checked) {
			payForm.textContent += 'Leasing';
		} else if (cashRadio.checked) {
			payForm.textContent += 'Gotówka';
		}
		setTimeout(() => {
			mainArea.classList.replace('zero', 'main');
			form.classList.remove('active');
			finishScreen.classList.remove('active2');
			selectedCar.textContent = 'Wybrałeś ';
			guaranteeBtn.classList.remove('colorBtn');
			wheelsBtn.classList.remove('colorBtn');
			wheelsBtnValue = 0;
			guaranteeBtnValue = 0;
		}, 5000);
		setTimeout(() => {
			warning.classList.remove('active3');
			finalPrice.textContent = 'Kwota do zapłaty: ';
			payForm.textContent = 'Forma zapłaty: ';
			createErrorP1.textContent = '';
			finishCarName.textContent = '';
			nameInput.value = '';
			placeInput.value = '';
		}, 6000);
	}
};

//Accessories - wheels button
const addWheelsPrice = () => {
	if (wheelsBtnValue === 0) {
		wheelsBtn.classList.add('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) + 2000;
		priceArea.textContent = wheelsPrice;
		wheelsBtnValue = 1;
	} else if (wheelsBtnValue === 1) {
		wheelsBtn.classList.remove('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) - 2000;
		priceArea.textContent = wheelsPrice;
		wheelsBtnValue = 0;
	}
};

//Accessories - guarantee button

const addGuaranteePrice = () => {
	if (guaranteeBtnValue === 0) {
		guaranteeBtn.classList.add('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) + 5000;
		priceArea.textContent = wheelsPrice;
		guaranteeBtnValue = 1;
	} else if (guaranteeBtnValue === 1) {
		guaranteeBtn.classList.remove('colorBtn');
		const newPrice = priceArea.textContent;
		let wheelsPrice = Number(newPrice) - 5000;
		priceArea.textContent = wheelsPrice;
		guaranteeBtnValue = 0;
	}
};

carsImg.forEach((item) => {
	item.addEventListener('click', clickCarsImg);
});

//localStorage Load

if (localStorage.getItem('name')) {
	const lsNameInput = localStorage.getItem('name');
	nameInput.value = lsNameInput;
}

if (localStorage.getItem('place')) {
	placeInput.value = localStorage.getItem('place');
}

//Select brand

const brandChoice = () => {
	if (brand.value === 'Audi' || brand.value === 'audi') {
		carArea[1].classList.add('active_brand');
		carArea[2].classList.add('active_brand');
		carArea[4].classList.add('active_brand');
		carArea[5].classList.add('active_brand');
	} else if (brand.value === 'BMW' || brand.value === 'bmw') {
		carArea[0].classList.add('active_brand');
		carArea[2].classList.add('active_brand');
		carArea[3].classList.add('active_brand');
		carArea[4].classList.add('active_brand');
	} else if (brand.value === 'Renault' || brand.value === 'renault') {
		carArea[0].classList.add('active_brand');
		carArea[1].classList.add('active_brand');
		carArea[3].classList.add('active_brand');
		carArea[5].classList.add('active_brand');
	} else {
		carArea[0].classList.remove('active_brand');
		carArea[1].classList.remove('active_brand');
		carArea[2].classList.remove('active_brand');
		carArea[3].classList.remove('active_brand');
		carArea[4].classList.remove('active_brand');
		carArea[5].classList.remove('active_brand');
	}
};

document.addEventListener('DOMContentLoaded', main);
