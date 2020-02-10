import loginPage from './pages/loginPage'
import registerPage from './pages/registerPage'
import companyPage from './pages/companyPage'
import companyCreatePage from './pages/companyCreatePage'
import companySingle from './pages/companySingle'
import depositCreatePage from './pages/depositCreatePage'
import productsPage from "./pages/productsPage";
import productsCreatePage from "./pages/productsCreatePage";

const ROUTES = {
	'': {
		name: 'Home',
		render: loginPage
	},
	'login': {
		name: 'Login',
		render: loginPage
	},
	'shop': {
		name: 'Shop',
		render: loginPage
	},
	'register': {
		name: 'Register',
		render: registerPage
	},
	'company/create': {
		name: 'Deposit Create',
		render: companyCreatePage
	},
	'company/single': {
		name: 'Deposit Single',
		render: companySingle
	},
	'deposit/create': {
		name: 'Deposit Create',
		render: depositCreatePage
	},

	'company': {
		name: 'Company',
		render: companyPage
	},
	'orders': {
		name: 'Orders',
		render: companyPage
	},
	'statistics': {
		name: 'Statistics',
		render: companyPage
	},
	'products': {
		name: 'Products',
		render: productsPage
	},
	'products/create': {
		name: 'Create Product',
		render: productsCreatePage
	}
}

export default ROUTES
