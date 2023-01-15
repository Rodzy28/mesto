let popup = document.querySelector('.profile__edit-button');

let popupShow = document.querySelector('.popup');
let popupUnShow = document.querySelector('.popup__close-button');

let popupClose = document.querySelector('.popup__save-button');

function editPopup() {
  popupShow.classList.toggle('popup_opened');

}

popup.addEventListener('click', editPopup);
popupUnShow.addEventListener('click', editPopup);
popupClose.addEventListener('click', editPopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('#input-name');
let jobInput = document.querySelector('#input-job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value


  let newName = document.querySelector('.profile__name'); // Выберите элементы, куда должны быть вставлены значения полей
  let newjob = document.querySelector('.profile__job');

  newName.textContent = nameInput.value;  // Вставьте новые значения с помощью textContent
  newjob.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

// Просто тренировался
console.log(document.querySelector('.profile__name').textContent);
console.log(document.querySelector('.profile__job').textContent);
