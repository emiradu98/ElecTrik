import { API_URL } from '../../../static/constants/constants'
import CompanyRepository from './CompanyRepository'
import Router from '../../routes/Router'

let first = true

export const getCompanies = async () => {
	const companyRepository = CompanyRepository
	const cookie = document.cookie.split('token=')[1]
	if (cookie) {
		const response = await fetch(`${API_URL}/me/companies/`, {
			method: 'get',
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}` }
		})
		const json = await response.json()
		const state = companyRepository.getState()
		state.companies = json.data
		if (first) {
			Router.go('company')
			first = false
		}
	}
}

export const createCompany = async (data) => {
	const response = await fetch(`${API_URL}/companies/register`, {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	first = true
	if (response.status === 201) {
		getCompanies()
	}
	// const state = companyRepository.getState()
	// state.companies = json.data
}

export const deleteCompany = async (id) => {
	const companyRepository = CompanyRepository
	const cookie = document.cookie.split('token=')[1]

	if(cookie) {
		const response = await fetch(`${API_URL}/companies/delete`, {
			method: 'delete',
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}` },
			body: JSON.stringify({company_id: id})
		})
	}
	// const state = companyRepository.getState()
	// state.companies = json.data
}