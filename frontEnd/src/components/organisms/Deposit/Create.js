import Form from '../../molecules/Form/Form'
import {Map} from '../../molecules/Map/Map'
import {createDeposit} from '../../../repositories/CompanyRepository/CompanyActions'
import AuthRepository from '../../../repositories/AuthRepository'

require('./Create.scss')

export default class Create {
    constructor({id}) {
        this.company_id = id
        this.authState = AuthRepository.getState()
        this.createCompany = new Form({
                inputArray: [],
                formTitle: 'Create',
                onSubmit: () => createDeposit(this.formValues(), this.company_id),
                btn: {
                    type: 'button',
                    innerText: 'Create'

                }
            }
        )
        this.component = document.createElement('div')
        this.component.className = 'centered-form'
        this.component.appendChild(this.createCompany.innerHTML())
        this.map = new Map({click: true, markers: []})
        this.createCompany.appendChild(this.map.component)
        return this
    }

    formValues() {
        this.data = {}
        if (this.company_id) {
            this.data.company_id = this.company_id
            this.data.location = this.map.getLocation().lat + ' ' + this.map.getLocation().lng
            this.data.admin_ids = this.authState.user.user_id.toString()
            this.data.location_coordinates = ''
            return this.data
        }
    }

}
