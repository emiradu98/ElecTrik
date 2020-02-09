import Form from '../../molecules/Form/Form';
import {continents, countries} from "countries-list";
import _ from 'lodash'
import {register} from "../../../repositories/AuthRepository/AuthActions";

require('./Register.scss');


export default class Register {
    constructor() {
        this.registerForm = new Form({
                inputArray: [
                    {
                        name: 'first_name',
                        labelName: 'First Name',
                        id: 'first_name',
                        placeholder: 'Insert your first name',
                        type: 'text',
                        required: true,
                        onChange: () => {
                        }
                    },
                    {
                        name: 'last_name',
                        labelName: 'Last Name',
                        id: 'last_name',
                        placeholder: 'Insert your last name',
                        type: 'text',
                        required: true,
                        onChange: () => {
                        }
                    },
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
                    {
                        name: 'phone',
                        labelName: 'Phone Number',
                        id: 'phone',
                        required: true,
                        placeholder: 'Type your phone number',
                        type: 'number',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'country',
                        labelName: 'Country',
                        id: 'country',
                        required: true,
                        placeholder: 'Select your country',
                        type: 'select',
                        options: _.map(countries, country => {
                            return {value: country.name, label: `${country.emoji} ${country.name}`}
                        }),
                        onChange: () => {
                        }
                    },
                    {
                        name: 'region',
                        labelName: 'Region',
                        id: 'region',
                        required: true,
                        placeholder: 'Select your region',
                        type: 'select',
                        options: _.map(continents, continent => {
                            return {value: continent, label: continent}
                        }),
                        onChange: () => {
                        }
                    },
                    {
                        name: 'invite',
                        labelName: 'Invite Code',
                        id: 'invite',
                        required: true,
                        placeholder: 'If you have a invite code insert it here',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                ],
                formTitle: 'Register',
                onSubmit: ()=>register(this.registerForm.getValues())

                ,
                btn: {
                    type: 'button',
                    innerText: 'Register'

                }
            }
        )
        this.component = document.createElement('div');
        this.component.className = 'centered-form'
        this.component.appendChild(this.registerForm.innerHTML());
        return this;
    }



}
