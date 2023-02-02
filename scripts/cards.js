const initialCards = [
  {
    name: 'Шри-Ланка',
    link: './images/pictures/sri_lanka.jpg'
  },
  {
    name: 'Кипр',
    link: './images/pictures/cyprus.jpg'
  },
  {
    name: 'Белёв',
    link: './images/pictures/belev.jpg'
  },
  {
    name: 'Собачий приют - Некрасовка',
    link: './images/pictures/nekrasovka.jpg'
  },
  {
    name: 'Тайланд',
    link: './images/pictures/thailand.jpg'
  },
  {
    name: 'Дубай',
    link: './images/pictures/dubai.jpg'
  }
];

const listCards = document.querySelector('.place__list');
const templateCard = document.querySelector('.place__card').content.querySelector('.place__item');

function renderCards() {
  initialCards.forEach((item) => {
    const card = templateCard.cloneNode(true);
    const btnLike = card.querySelector('.place__like-button');
    card.querySelector('.place__text').textContent = item.name;
    card.querySelector('.place__picture').src = item.link;
    btnLike.addEventListener('click', likeBtnActive);
    listCards.append(card);
  });
}

renderCards();

function likeBtnActive (event) {
  event.target.classList.toggle('place__like-button_active');
}

// Перенести все в один файл

