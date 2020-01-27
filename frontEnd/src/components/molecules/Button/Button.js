import './Button.scss';

export class Button {
  constructor ({innerText, onClick, type, className = 'button'}) {
    this.button = document.createElement('button');
    this.button.innerText = innerText;
    this.button.className = className;
    this.button.addEventListener('click', onClick);
    this.button.type = type;

    return this;
  }

  innerHTML () {
    return this.button;
  }

};
