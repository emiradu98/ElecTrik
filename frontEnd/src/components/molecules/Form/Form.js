import {FormInput} from '../FormInput/FormInput';
import {Button} from '../Button/Button';

export default class Form {
    constructor({
                    inputArray = [],
                    formTitle = '',
                    btn = {},
                    onSubmit = () => {
                    },
                }) {
        this.inputs = []
        this.component = document.createElement('div');
        this.form = document.createElement('form');

        this.formTitle = document.createElement('h2');
        this.formTitle.innerText = formTitle;

        this.form.appendChild(this.formTitle);

        inputArray.map((inp) => {
            const appendingInput = new FormInput({
                name: inp.name,
                labelName: inp.labelName,
                id: inp.id,
                placeholder: inp.placeholder,
                type: inp.type,
                onChange: () => {
                },
                options: inp.options
            })
            this.inputs.push(appendingInput)
            this.form.appendChild(appendingInput.innerHTML())
        })

        this.button = new Button({
            type: 'button',
            innerText: btn.innerText,
            onClick: onSubmit
        });

        this.form.appendChild(this.button.innerHTML());
        this.component && this.component.appendChild(this.form);
    }

    innerHTML() {
        return this.component;
    }

    getValues() {
        let values = {}
        this.inputs.forEach(inp => values[inp.input.name] = inp.input.value)
        return values
    }

}
