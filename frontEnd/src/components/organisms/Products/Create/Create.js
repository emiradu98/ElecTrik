import Form from '../../../molecules/Form/Form'
import AuthRepository from '../../../../repositories/AuthRepository'
import {createProduct} from "../../../../repositories/CompanyRepository/CompanyActions";

require('./Create.scss')

export default class Create {
    constructor({id}) {
        this.id = id
        this.authState = AuthRepository.getState()
        this.createCompany = new Form({
                inputArray: [
                    {
                        name: 'producer',
                        labelName: 'Producer Name',
                        id: 'producer',
                        required: true,
                        placeholder: 'Type producer name',
                        type: 'text',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'name',
                        labelName: 'Type',
                        id: 'name',
                        required: true,
                        placeholder: 'Type company email',
                        type: 'select',
                        options: [
                            {value: '🚴‍♀Bicycle', label: '🚴‍♀Bicycle'},
                            {value: '🔋Battery', label: '🔋Battery'},
                            {value: '⚡Engine', label: '⚡Engine'},
                            {value: '💡Lightbulb', label: '💡Lightbulb'},
                            {value: '🔌Charger', label: '🔌Charger'},
                        ],
                        onChange: () => {
                        }
                    },
                    {
                        name: 'stock',
                        labelName: 'Stock count',
                        id: 'stock',
                        required: true,
                        placeholder: 'Insert stock',
                        type: 'number',
                        onChange: () => {
                        }
                    },
                    {
                        name: 'price',
                        labelName: 'Price',
                        id: 'price',
                        required: true,
                        placeholder: 'Type price',
                        type: 'number',
                        onChange: () => {
                        }
                    },
                ],
                formTitle: 'Add product',
                onSubmit: () => createProduct(this.formValues(), this.id),
                btn: {
                    type: 'button',
                    innerText: 'Create'

                }
            }
        )
        this.component = document.createElement('div')
        this.component.className = 'centered-form'
        this.component.appendChild(this.createCompany.innerHTML())
        return this
    }

    formValues() {
        this.data = this.createCompany.getValues()
        this.data.deposit_id = this.id
        this.data.availabe_series = ''
        this.data.taken_series = ''
        this.data.price = Number(this.data.price)
        this.data.stock = Number(this.data.stock)
        this.data.img = ''
        return this.data
    }

}
