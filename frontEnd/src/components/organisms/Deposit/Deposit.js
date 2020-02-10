import Router from '../../../routes/Router'
import { Button } from '../../molecules/Button/Button'
import { getCompanies } from '../../../repositories/CompanyRepository/CompanyActions'
import CompanyRepository from '../../../repositories/CompanyRepository'
import { CompanyLink } from '../../molecules/CompanyLink/CompanyLink'
import _ from 'lodash'
require('./Deposit.scss')

export default class Deposit {
	constructor () {
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

		this.component.appendChild(this.rightButton)
		this.component.appendChild(this.flexDiv)
		return this

	}

	async _init (comp) {
		await this.componentDidMount(comp)

	}

	handleEdit (id) {
		Router.go('form', { id })
	}

	handleDelete (id, rowElement) {
		this.PersonRepository.delete(id)
		this.list.removeChild(rowElement)
	}

	async componentDidMount (comp) {
			await getCompanies()
		this.list = []
		if (this.companies) {
			this.companies.forEach(company => {
				let text = new CompanyLink({
					name: company.company_name,
					link: 'company/single',
					email: company.email,
					id: company.company_id
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
