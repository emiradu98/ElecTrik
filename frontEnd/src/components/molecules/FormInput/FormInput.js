import './FormInput.scss'

export class FormInput {
	constructor ({ name, placeholder, id, labelName, onChange, type, required }) {
		this.label = document.createElement('label')
		this.label.htmlFor = id
		this.label.innerText = labelName

		this.input = document.createElement('input')
		this.input.name = name
		this.input.type = type
		this.input.id = id
		this.input.placeholder = placeholder

		this.input.required = required

		this.div = document.createElement('div')
		this.div.appendChild(this.label)
		this.div.appendChild(this.input)
		this.div.className = 'formInput'

		return this
	}

	innerHTML () {
		return this.div
	}

	getValue () {
		return this.input.value
	}
}
