import { logout } from '../../../repositories/AuthRepository/AuthActions'

require('./Navbar.scss')

export default class Navbar {
	constructor () {
		this.dropdown = document.createElement('div')
		this.dropdown.className = 'dropdown'
		this.close = document.createElement('div')
		this.close.innerText = 'Logout'
		this.close.addEventListener('click', () => logout())

		this.component = this.dropdown
		this.component.appendChild(this.close)

		return this.component
	}
}
