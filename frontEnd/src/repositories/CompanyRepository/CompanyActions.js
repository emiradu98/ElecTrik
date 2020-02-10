import {API_URL} from '../../../static/constants/constants'
import CompanyRepository from './CompanyRepository'
import Router from '../../routes/Router'

let firstCompany = true
let firstDeposit = true
let firstProduct = true

export const getCompanies = async () => {
    const companyRepository = CompanyRepository
    firstDeposit = true

    const cookie = document.cookie.split('token=')[1]
    if (cookie) {
        const response = await fetch(`${API_URL}/me/companies/`, {
            method: 'get',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`}
        })
        const json = await response.json()
        const state = companyRepository.getState()
        state.companies = json.data
        if (firstCompany) {
            Router.go('company')
            firstCompany = false
        }
    }
}

export const createCompany = async (data) => {
    const response = await fetch(`${API_URL}/companies/register`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    firstCompany = true
    if (response.status === 201) {
        getCompanies()
    }
}

export const deleteCompany = async (id) => {
    const cookie = document.cookie.split('token=')[1]
    if (cookie) {
        const response = await fetch(`${API_URL}/companies/delete`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
            body: JSON.stringify({company_id: id})
        })
        if (response.status === 200) {
            firstCompany = true
            getCompanies()
        }
    }
}

export const getDeposits = async (id) => {
    const cookie = document.cookie.split('token=')[1]
    const companyRepository = CompanyRepository
    if (cookie) {
        const response = await fetch(`${API_URL}/deposits/all?search=${id}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
        })
        if (response.status === 200) {
            const json = await response.json()
            const state = companyRepository.getDeposits()
            if (json.data) {
                state.deposits = json.data
            } else {
                state.deposits = []
            }
            if (firstDeposit) {
                firstDeposit = false
                Router.go('company/single', {id})
            }
        }
    }
}

export const createDeposit = async (data, id) => {
    const cookie = document.cookie.split('token=')[1]
    const companyRepository = CompanyRepository

    if (cookie) {
        const response = await fetch(`${API_URL}/deposits/register`, {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
            body: JSON.stringify(data)
        })
        if (response.status === 201) {
            firstDeposit = true
            Router.go('company/single', {id})
        }
    }
}

export const deleteDeposit = async (id) => {
    const cookie = document.cookie.split('token=')[1]
    if (cookie) {
        const response = await fetch(`${API_URL}/deposits/delete`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
            body: JSON.stringify({id: id})
        })
        if (response.status === 200) {
            firstDeposit = true
            getDeposits()
        }
    }
}


export const getProducts = async (id) => {
    const cookie = document.cookie.split('token=')[1]
    const companyRepository = CompanyRepository
    if (cookie) {
        const response = await fetch(`${API_URL}/products/all?search=&f1=deposit_id&o1==&v1=${id}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
        })
        if (response.status === 200) {
            const json = await response.json()
            const state = companyRepository.getProducts()
            if (json.data) {
                state.products = json.data
            } else {
                state.products = []
            }
            if (firstProduct) {
                firstProduct = false
                Router.go('products', {id})
            }
        }
    }
}

export const createProduct = async (data, id) => {
    const cookie = document.cookie.split('token=')[1]
    const companyRepository = CompanyRepository

    if (cookie) {
        const response = await fetch(`${API_URL}/products/register`, {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
            body: JSON.stringify(data)
        })
        if (response.status === 201) {
            firstProduct = true
            Router.go('products', {id})
        }
    }
}
