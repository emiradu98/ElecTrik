import Form from "../../molecules/Form/Form";
import {sha256} from "js-sha256";
import {login} from "../../../repositories/AuthRepository/AuthActions";

require('./Login.scss');

export default class Login {
  constructor () {

    this.loginForm = new Form({
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
          onSubmit: ()=>login({email: this.loginForm.getValues().email, password: sha256(this.loginForm.getValues().password)})
          ,
          btn: {
            type: 'button',
            innerText: 'Login'

          }
        }
    )
    this.component = document.createElement('div');
    this.component.className = 'centered-form'
    this.component.appendChild(this.loginForm.innerHTML());
    return this;
  }

}
