import Router from '../../../routes/Router'
import {Button} from '../../molecules/Button/Button'
import CompanyRepository from '../../../repositories/CompanyRepository'
import {CompanyLink} from "../../molecules/CompanyLink/CompanyLink";
import {getProducts} from "../../../repositories/CompanyRepository/CompanyActions";
import _ from 'lodash'

export default class Products {
    constructor({id}) {
        this.id = id
        this.component = document.createElement('div')
        this.component.classList.add('list__page')
        this.flexDiv = document.createElement('div')
        this.flexDiv.className = 'flexDiv'
        this.centeredDiv = document.createElement('div')
        this.centeredDiv.className = 'centeredDiv';
        this._init(this.flexDiv)
        this.companyRepository = CompanyRepository
        this.products = this.companyRepository.getProducts().products
        const button = new Button(
            {
                innerText: 'Add product', onClick: () => {
                    Router.go('products/create', {id})
                }, type: 'button'
            }
        )

        if (_.isEmpty(this.products)) {
            this.text = document.createElement('p')
            this.text.innerText = `You don't have any products yet. Please add one.`
            this.centeredDiv.appendChild(this.text)
        }

        this.rightButton = document.createElement('div')
        this.rightButton.className = 'rightButton'
        this.rightButton.appendChild(button.innerHTML())
        this.wrapper = document.createElement('div')
        this.wrapper.className = 'wrapper';
        this.wrapper.appendChild(this.centeredDiv)
        this.component.appendChild(this.rightButton)
        this.component.appendChild(this.wrapper)
        this.component.appendChild(this.flexDiv)

        return this

    }

    async _init(comp) {
        await this.componentDidMount(comp)

    }

    async componentDidMount(comp) {
        await getProducts(this.id)
        this.list = []
        if (this.products) {
            this.products.forEach(product => {
                let text = new CompanyLink({
                    name: product.company_name,
                    link: 'company/single',
                    email: product.email,
                    id: product.company_id,
                    onClick: () => Router.go('company/single', {id: product.company_id}),
                    onRemove: (e) => {
                        e.preventDefault()
                        deleteProduct(company.company_id)
                        e.stopPropagation()
                    }
                })
                this.list.push(text.innerHTML())
            })
        }
        this.list.forEach(item => {
                comp.appendChild(item)
            }
        )

    }
}
