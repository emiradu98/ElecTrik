import './FormInput.scss';

export class FormSelect {
    constructor({name, placeholder, id, labelName, onChange, options, type, required}) {
        this.label = document.createElement('label');
        this.label.htmlFor = id;
        this.label.innerText = labelName;

        this.input = document.createElement('select');
        this.input.name = name;
        this.input.id = id;
        this.input.placeholder = placeholder;

        this.input.required = required;

        if(options){
            options.map((option)=>{
                const addOption = document.createElement('option')
                addOption.value = option.value
                addOption.label = option.label
                this.input.appendChild(addOption)
            })
        }

        this.div = document.createElement('div');
        this.div.appendChild(this.label);
        this.div.appendChild(this.input);
        this.div.className = 'formSelect';

        return this;
    }

    innerHTML() {
        return this.div;
    }

    getValue() {
        return this.input.value;
    }
};
