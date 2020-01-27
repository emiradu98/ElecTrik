import AuthRepository from '../../../repositories/AuthRepository';
import {regexEmail} from '../../../../static/constants/constants';

require('./Login.scss');

export default class Login {
  constructor () {
    this.PersonRepository = AuthRepository;

    this.data = {};
    this.component = document.createElement('div');

    const form = document.createElement('form');
    const formTitle = document.createElement('h2');
    formTitle.innerText = 'Login';
    form.className = 'form';
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.innerText = 'Email';

    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.id = 'email';

    const emailDiv = document.createElement('div');
    emailDiv.appendChild(emailLabel);
    emailDiv.className = `formInput ${regexEmail.test(emailInput.value) ? 'error' : ''}`;
    emailDiv.appendChild(emailInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    passwordLabel.innerText = 'Password';

    const passwordInput = document.createElement('input');
    passwordInput.name = 'password';
    passwordInput.id = 'password';

    const passwordDiv = document.createElement('div');
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.className = 'formInput';

    passwordDiv.appendChild(passwordInput);

    const loginButton = document.createElement('button');
    loginButton.innerText = 'Login';
    loginButton.type = 'button';
    loginButton.className = 'formButton';
    loginButton.addEventListener('click', () => {
      alert('here');
    });

    const registerDiv = document.createElement('div');
    registerDiv.className = 'link';
    const registerText = document.createElement('a');
    registerText.innerText = 'Don\'t have an account?';
    registerText.href = '#register';
    registerDiv.appendChild(registerText);

    form.appendChild(formTitle);
    form.appendChild(emailDiv);
    form.appendChild(passwordDiv);
    form.appendChild(loginButton);
    form.appendChild(registerDiv);
    this.component.appendChild(form);
    return this;
  }

}
