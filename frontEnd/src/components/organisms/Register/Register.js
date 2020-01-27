import {FormInput} from '../../molecules/FormInput/FormInput';
import {Button} from '../../molecules/Button/Button';
import Form from '../../molecules/Form/Form';

require('./Register.scss');

export default class Register {
  constructor () {
    this.registerForm = new Form();
    this.component.appendChild(this.registerForm.innerHTML())
    return this;
  }

}
