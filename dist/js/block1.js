let myImg = document.querySelector('#myImg')
let button = document.querySelector('#block1-button');
const inputElement = document.querySelector('#block1-input');

window.addEventListener('resize', function () {
	if (window.innerWidth >= 900) {
		myImg.src = '../img/planet-1440.svg';
	} else {
		myImg.src = '../img/planet.svg';
	}
});

//---------------------------------------------------------------------------------
// Получаем элемент, у которого нужно изменить атрибут placeholder
// Создаем функцию, которая будет менять текст placeholder в зависимости от размера экрана
function updatePlaceholderText() {
	if (window.innerWidth >= 780) {
		inputElement.placeholder = 'Введите email чтобы войти в аккаунт или создать новый';
	} else {
		inputElement.placeholder = 'Введите email ';
	}
}

// Вызываем функцию, чтобы установить начальный текст placeholder
updatePlaceholderText();

// Обновляем текст placeholder при изменении размера экрана
window.addEventListener('resize', updatePlaceholderText);

button.addEventListener('click', (event) => {
	if (inputElement.value.trim() === '' || !inputElement.value.includes('@')) {
		inputElement.classList.add('red-border');
		button.classList.add('red-border');
		inputElement.placeholder = 'ошибка';
		event.preventDefault();
	} else {
		inputElement.classList.remove('red-border');
		button.classList.remove('red-border');
		updatePlaceholderText();
	}
})