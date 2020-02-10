import CompanyRepository from '../../../../repositories/CompanyRepository'
import {Button} from '../../../molecules/Button/Button'
import Router from '../../../../routes/Router'
import {deleteDeposit, getDeposits} from '../../../../repositories/CompanyRepository/CompanyActions'
import {Map} from "../../../molecules/Map/Map";
import {CompanyLink} from "../../../molecules/CompanyLink/CompanyLink";

require('./CompanySingle.scss')
require('../Company.scss')

export default class CompanySingle {
    constructor({id}) {
        this.id = id
        this.markers = []

        this.component = document.createElement('div')
        this.component.classList.add('list__page')
        this.flexDiv = document.createElement('div')
        this.flexDiv.className = 'flexDiv'
        this._init(this.flexDiv)
        this.companyRepository = CompanyRepository
        this.companies = this.companyRepository.getState().companies
        const button = new Button(
            {
                innerText: 'Create deposit', onClick: () => {
                    Router.go('deposit/create', {id})
                }, type: 'button'
            }
        )
        this.list = []
        this.deposits = this.companyRepository.getDeposits().deposits
        this.centeredDiv = document.createElement('div')
        this.centeredDiv.className = 'centeredDiv';
        if (_.isEmpty(this.deposits)) {
            this.text = document.createElement('p')
            this.text.innerText = `You don't have any deposits yet. Please add one.`
            this.centeredDiv.appendChild(this.text)
        } else {
            this.deposits.forEach((dep) => {
                this.markers.push({
                    lat: dep.location.split(' ')[0],
                    lng: dep.location.split(' ')[1],
                    company_name: dep.id
                })
                let text = new CompanyLink({
                    name: dep.id,
                    link: 'products',
                    id: dep.id.toString(),
                    onClick: () => Router.go('products', {id: dep.id}),
                    onRemove: (e) => {
                        e.preventDefault()
                        deleteDeposit(dep.id)
                        e.stopPropagation()
                    }
                })
                this.flexDiv.appendChild(text.innerHTML())

            })
            this.map = new Map({click: false, markers: this.markers})

            this.centeredDiv.append(this.map.innerHTML())
        }


        this.rightButton = document.createElement('div')
        this.rightButton.className = 'rightButton'
        this.rightButton.appendChild(button.innerHTML())

        this.component.appendChild(this.rightButton)
        this.wrapper = document.createElement('div')
        this.wrapper.className = 'wrapper';
        this.component.appendChild(this.flexDiv)
        this.wrapper.appendChild(this.centeredDiv)
        this.component.appendChild(this.wrapper)

        return this

    }

    async _init(comp) {
        await this.componentDidMount(comp)

    }

    handleEdit(id) {
        Router.go('form', {id})
    }

    handleDelete(id, rowElement) {
        this.PersonRepository.delete(id)
        this.list.removeChild(rowElement)
    }

    async componentDidMount(comp) {
        await getDeposits(this.id)
        this.list = []

    }

}
