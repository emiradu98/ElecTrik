import Router from '../../../routes/Router'
import {Button} from '../../molecules/Button/Button'
import {deleteCompany, getCompanies} from '../../../repositories/CompanyRepository/CompanyActions'
import CompanyRepository from '../../../repositories/CompanyRepository'
import {CompanyLink} from '../../molecules/CompanyLink/CompanyLink'
import {Map} from "../../molecules/Map/Map";

require('./Company.scss')

export default class Company {
    constructor() {
        this.component = document.createElement('div')
        this.component.classList.add('list__page')
        this.flexDiv = document.createElement('div')
        this.flexDiv.className = 'flexDiv'
        this._init(this.flexDiv)
        this.companyRepository = CompanyRepository
        this.companies = this.companyRepository.getState().companies
        const button = new Button(
            {
                innerText: 'Create company', onClick: () => {
                    Router.go('company/create')
                }, type: 'button'
            }
        )

        this.rightButton = document.createElement('div')
        this.rightButton.className = 'rightButton'
        this.rightButton.appendChild(button.innerHTML())
        this.centeredDiv = document.createElement('div')
        this.centeredDiv.className = 'centeredDiv';
        this.component.appendChild(this.rightButton)
        this.component.appendChild(this.flexDiv)
        this.markers = []
        if (!_.isEmpty(this.companies)) {
            this.companies.forEach(comp => {
                this.markers.push({
                    lat: comp.location.split(' ')[0],
                    lng: comp.location.split(' ')[1],
                    company_name: comp.company_name
                })
            })
        } else {
            this.text = document.createElement('p')
            this.text.innerText = `You don't have any companies yet. Please add one.`
            this.centeredDiv.appendChild(this.text)
        }
        this.map = new Map({click: false, markers: this.markers})

        this.centeredDiv.append(this.map.innerHTML())
        this.wrapper = document.createElement('div')
        this.wrapper.className = 'wrapper';
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
        await getCompanies()
        this.list = []
        if (this.companies) {
            this.companies.forEach(company => {
                let text = new CompanyLink({
                    name: company.company_name,
                    link: 'company/single',
                    email: company.email,
                    id: company.company_id,
                    onClick: () => Router.go('company/single', {id: company.company_id}),
                    onRemove: (e) => {
                        e.preventDefault()
                        deleteCompany(company.company_id)
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
