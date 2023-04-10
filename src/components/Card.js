export default class Card {
  constructor(data, userID, templateSelector, openImagePopup,
    { handleAddLike, handleRemoveLike, handleTrashButton })
  {
    this._data = data;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleTrashButton = handleTrashButton;
    this._userID = userID;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._placePicture = this._element.querySelector('.place__picture');
    this._placePicture.src = this._data.link;
    this._placePicture.alt = this._data.name;
    this._likeButton = this._element.querySelector('.place__like-button');
    this._trashButton = this._element.querySelector('.place__trash-button');
    this._element.querySelector('.place__text').textContent = this._data.name;
    this._likeCounter = this._element.querySelector('.place__like-counter');
    this._likeCounter.textContent = this._data.likes.length;
    this._setEventListeners();
    this._renderMyLikes();
    this._renderDeleteButton();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.contains('place__like-button_active')
        ? this._handleRemoveLike()
        : this._handleAddLike();
    });

    this._trashButton.addEventListener('click', () => {
      this._handleTrashButton();
    });

    this._placePicture.addEventListener('click', () => {
      this._openCardView();
    })
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.place__item').cloneNode(true);
    return cardElement;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _openCardView() {
    this._openImagePopup({ name: this._data.name, link: this._data.link });
  }

  addLike() {
    this._likeButton.classList.add('place__like-button_active');
  }

  removeLike() {
    this._likeButton.classList.remove('place__like-button_active');
  }

  _renderMyLikes() {
    this._data.likes.forEach((user) => {
      if (user._id === this._userID) {
        this.addLike();
      }
    });
  }

  _renderDeleteButton() {
    if (this._data.owner._id !== this._userID) {
      this._trashButton.remove();
      this._trashButton = null;
    }
  }

  likesCounter(res) {
    this._likeCounter.textContent = res.likes.length;
  }

}
