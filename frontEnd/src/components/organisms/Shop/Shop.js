import CompanyRepository from '../../../repositories/CompanyRepository'
import _ from 'lodash'
import {CompanyLink} from "../../molecules/CompanyLink/CompanyLink";
import {getShop} from "../../../repositories/CompanyRepository/CompanyActions";
import Router from "../../../routes/Router";

export default class Shop {
    constructor() {
        this.component = document.createElement('div')
        this.component.classList.add('list__page')
        this.flexDiv = document.createElement('div')
        this.flexDiv.className = 'flexDiv'
        this.centeredDiv = document.createElement('div')
        this.centeredDiv.className = 'centeredDiv';
        this._init(this.flexDiv)
        this.companyRepository = CompanyRepository
        this.shop = this.companyRepository.getShop().shop

        if (_.isEmpty(this.shop)) {
            this.text = document.createElement('p')
            this.text.innerText = `There aren't any products yet.`
            this.centeredDiv.appendChild(this.text)
        }

        this.wrapper = document.createElement('div')
        this.wrapper.className = 'wrapper';
        this.wrapper.appendChild(this.centeredDiv)
        this.component.appendChild(this.wrapper)
        this.component.appendChild(this.flexDiv)

        return this

    }

    async _init(comp) {
        await this.componentDidMount(comp)

    }

    async componentDidMount(comp) {
        await getShop()
        this.list = []
        if (this.shop) {
            console.log(this.shop)
            this.shop.forEach(item => {
                let text = new CompanyLink({
                    name: item.name,
                    link: 'product',
                    email: item.producer,
                    id: item.id,
                    onClick: () => Router.go('shop/product', {id: item.id, product: item}),
                    noRemove: true
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
