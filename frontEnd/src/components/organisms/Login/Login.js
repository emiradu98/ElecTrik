import {API_URL, regexEmail} from '../../../../static/constants/constants';
import Form from "../../molecules/Form/Form";

require('./Login.scss');

export default class Login {
  constructor () {
    let data = {}

    this.registerForm = new Form({
          inputArray: [
            {
              name: 'email',
              labelName: 'Email',
              id: 'email',
              required: true,

              placeholder: 'Insert your email',
              type: 'text',
              onChange: () => {
              }
            },
            {
              name: 'password',
              labelName: 'Password',
              id: 'password',
              required: true,

              placeholder: 'Type your password',
              type: 'password',
              onChange: () => {
              }
            },
          ],
          formTitle: 'Login',
          onSubmit: async () => {
            data = this.registerForm.getValues();
            const response = await fetch(`${API_URL}/auth/login`, {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            })
            console.log(response)
          }
          ,
          btn: {
            type: 'button',
            innerText: 'Login'

          }
        }
    )
    this.component = document.createElement('div');
    this.component.className = 'centered-form'
    this.component.appendChild(this.registerForm.innerHTML());
    return this;
  }

}
