import './CompanyLink.scss'
import Router from '../../../routes/Router'
import { deleteCompany } from '../../../repositories/CompanyRepository/CompanyActions'

export class CompanyLink {
	constructor ({ name, link, email, id }) {
		this.div = document.createElement('div')
		this.div.className = 'companyLink'

		this.delete = document.createElement('div')
		this.delete.className = 'companyDelete'
		this.delete.addEventListener('click', (e) => {
			e.preventDefault()
			deleteCompany(id)
			e.stopPropagation()
		})
		this.delete.innerText = 'ⓧ'

		this.div.appendChild(this.delete)

		this.name = document.createElement('p')
		this.name.className = 'companyName'
		this.name.innerText = name

		this.email = document.createElement('p')
		this.email.className = 'companyEmail'
		this.email.innerText = email

		this.div.addEventListener('click', () => Router.go(link, { id }))
		this.div.appendChild(this.name)
		this.div.appendChild(this.email)
		return this
	}

	innerHTML () {
		return this.div
	}

	getValue () {
		return this.input.value
	}
}
