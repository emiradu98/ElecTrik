import {API_URL} from "../../../static/constants/constants";
import CompanyRepository from "./CompanyRepository";
import Router from "../../routes/Router";

export const getCompanies = async () => {
    const companyRepository = CompanyRepository;
    const response = await fetch(`${API_URL}/companies/all`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    })
    const json = await response.json()
    const state = companyRepository.getState()
    state.companies = json.data
}


export const createCompany = async (data) => {
    const companyRepository = CompanyRepository;
    const response = await fetch(`${API_URL}/companies/register`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data
    })
    // const json = await response.json()
    // const state = companyRepository.getState()
    // state.companies = json.data
}

