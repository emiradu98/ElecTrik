import {FormInput} from '../FormInput/FormInput';
import {Button} from '../Button/Button';

export default class Form {
  constructor ({
    inputArray = [],
    formTitle = '',
    onSubmit
  }) {
    this.component = document.createElement('div');
    const form = document.createElement('form');

    const formTitle = document.createElement('h2');
    formTitle.innerText = 'Register';

    const emailInput = new FormInput({
      name: 'email',
      labelName: 'Email',
      id: 'email',
      placeholder: 'Enter email',
      type: 'text',
      onChange: () => {
      }
    });

    const passwordInput = new FormInput({
      name: 'password',
      labelName: 'Password',
      id: 'password',
      placeholder: 'Enter password',
      type: 'password',
      onChange: () => {
      }
    });

    const loginButton = new Button({
      type: 'button',
      innerText: 'Register',
      onClick: () => alert(passwordInput.getValue())
    });

    const registerDiv = document.createElement('div');
    registerDiv.className = 'link';
    const registerText = document.createElement('a');
    registerText.innerText = 'Don\'t have an account?';
    registerText.href = '#register';
    registerDiv.appendChild(registerText);

    form.appendChild(formTitle);
    form.appendChild(emailInput.innerHTML());
    form.appendChild(passwordInput.innerHTML());
    form.appendChild(loginButton.innerHTML());
    form.appendChild(registerDiv);
    this.component.appendChild(form);

  }

}
