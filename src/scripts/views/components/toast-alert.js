import template from './templates/toast-alert.html';
import './styles/toast-alert.scss';
import closeIcon from '../../../assets/icons/close.svg';

class ToastAlert extends HTMLElement {
  #message = null;

  set message(value) {
    this.#message = value;
    this.render();
  }

  render() {
    this.innerHTML = template;
    this.className = 'toast';

    const messageElement = this.querySelector('#toastMessage');
    const buttonElement = this.querySelector('#toastButton');

    messageElement.innerHTML = this.#message;
    buttonElement.innerHTML = closeIcon;

    buttonElement.addEventListener('click', () => this.classList.add('close'));
  }
}

customElements.define('toast-alert', ToastAlert);
