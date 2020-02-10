import Form from '../../../molecules/Form/Form'
import { Map } from '../../../molecules/Map/Map'
import { createCompany } from '../../../../repositories/CompanyRepository/CompanyActions'
import AuthRepository from '../../../../repositories/AuthRepository'

require('./Create.scss')

export default class Create {
	constructor () {
		this.authState = AuthRepository.getState()
		this.createCompany = new Form({
				inputArray: [
					{
						name: 'company_name',
						labelName: 'Deposit Name',
						id: 'company_name',
						required: true,
						placeholder: 'Type company name',
						type: 'text',
						onChange: () => {
						}
					},
					{
						name: 'regions',
						labelName: 'Regions',
						id: 'regions',
						required: true,
						placeholder: 'Type company region',
						type: 'text',
						onChange: () => {
						}
					},
					{
						name: 'invite',
						labelName: 'Invite',
						id: 'invite',
						required: true,
						placeholder: 'Type company invite',
						type: 'text',
						onChange: () => {
						}
					},

					{
						name: 'location',
						labelName: 'Location',
						id: 'location',
						required: true,
						placeholder: 'Type location',
						type: 'text',
						onChange: () => {
						}
					},
					{
						name: 'email',
						labelName: 'Deposit Email',
						id: 'email',
						required: true,
						placeholder: 'Type company email',
						type: 'text',
						onChange: () => {
						}
					}
				],
				formTitle: 'Create',
				onSubmit: () => createCompany(this.formValues()),
				btn: {
					type: 'button',
					innerText: 'Create'

				}
			}
		)
		this.component = document.createElement('div')
		this.component.className = 'centered-form'
		this.component.appendChild(this.createCompany.innerHTML())
		this.map = new Map()
		this.createCompany.appendChild(this.map.component)
		return this
	}

	formValues(){
		this.data = this.createCompany.getValues()
		console.log(this.authState)
		this.data.owner_id = this.authState.user.user_id
		return this.data
	}

}
