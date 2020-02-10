import Form from '../../../molecules/Form/Form'
import {Map} from '../../../molecules/Map/Map'
import {createCompany} from '../../../../repositories/CompanyRepository/CompanyActions'
import AuthRepository from '../../../../repositories/AuthRepository'

require('./Create.scss')

export default class Create {
    constructor() {
        this.authState = AuthRepository.getState()
        this.createCompany = new Form({
                inputArray: [
                    {
                        name: 'company_name',
                        labelName: 'Company Name',
                        id: 'company_name',
                        required: true,
                        placeholder: 'Type company name',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'email',
                        labelName: 'Company Email',
                        id: 'email',
                        required: true,
                        placeholder: 'Type company email',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'invite',
                        labelName: 'Invite code',
                        id: 'invite',
                        required: true,
                        placeholder: 'Type company invite code',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                ],
                formTitle: 'Create company',
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
        this.map = new Map({click: true})
        this.createCompany.appendChild(this.map.component)
        return this
    }

    formValues() {
        this.data = this.createCompany.getValues()
        this.data.location = this.map.getLocation().lat + ' ' + this.map.getLocation().lng
        this.data.owner_id = this.authState.user.user_id
		this.data.regions = ''
        return this.data
    }

}
