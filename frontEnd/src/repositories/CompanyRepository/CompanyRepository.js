import { companies, deposits } from '../../mock/companies.json'

export default class CompanyRepository {
	static getState () {
		return companies
	}
	static getDeposits(){
		return deposits
	}
}
