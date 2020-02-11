import { companies, deposits, products, shop } from '../../mock/companies.json'

export default class CompanyRepository {
	static getState () {
		return companies
	}
	static getDeposits(){
		return deposits
	}
	static getProducts(){
		return products
	}
	static getShop(){
		return shop
	}
}
