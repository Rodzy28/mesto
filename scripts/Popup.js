export default class Popup {
  constructor(popupElement){
    this._popup = popupElement;
  }

  open(){
    this._popup.classList.add('popup_opened');
  }

  close(){
    this._popup.classList.remove('popup_opened');
  }

  // _handleEscClose(){

  // }

  setEventListeners(){
    this._popup.addEventListener('mousedown', (e) => {
      if (e.target === e.currentTarget) {
        this.close();
      }
    });

    this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
      this.close();
    });
  }

}
