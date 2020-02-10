import { companies } from '../../mock/companies.json'

export default class CompanyRepository {
	static getState () {
		return companies
	}
}
