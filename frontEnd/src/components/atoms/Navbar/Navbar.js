import AuthRepository from '../../../repositories/AuthRepository'
import Dropdown from './Dropdown'

require('./Navbar.scss')

export default class Navbar {
	constructor (links, onClick) {
		const nav = document.createElement('nav')
		nav.classList.add('nav')
		let excludedRoutes = []

		const authRepo = AuthRepository
		const state = authRepo.getState()

		this.dropdown = new Dropdown()
		this.isOpened = false
		const home = state.isLoggedIn ? 'company' : 'login'

		if (state.isLoggedIn) {
			excludedRoutes.push('shop')
			excludedRoutes.push('company')
		} else {
			excludedRoutes.push('register')
			excludedRoutes.push('login')
		}
		const linkElement = document.createElement('a')
		linkElement.addEventListener('click', () => onClick(home))
		linkElement.textContent = 'ElecTrik'
		linkElement.classList.add('nav__link')

		if (location.hash === home) {
			linkElement.classList.add('--active')
		}
		if (location.hash.startsWith('#')) linkElement.classList.add('--active')

		nav.appendChild(linkElement)



		const div = document.createElement('div')
		div.className = 'right-nav'

		Object.keys(links).forEach(link => {
			if (!link) return
			if (excludedRoutes.includes(link)) {
				const linkElement = document.createElement('a')
				linkElement.addEventListener('click', () => onClick(link))
				linkElement.textContent = links[link].name
				linkElement.classList.add('nav__link')
				if (location.hash.startsWith(`#${link}`)) linkElement.classList.add('--active')

				div.appendChild(linkElement)
			}
		})

		this.userBtn = document.createElement('div')
		this.userBtn.addEventListener('click', () => this.openDropdown())
		this.userDiv = document.createElement('div')
		this.userDiv.style = `position: relative; width: fit-content;`
		this.userDiv.appendChild(this.userBtn)
		if (state.user) {
			this.userBtn.textContent = `${state.user.first_name} ${state.user.last_name}`
		}
		this.userBtn.classList.add('nav__link')
		if (location.hash.startsWith('#')) this.userBtn.classList.add('--active')

		const shopElement = document.createElement('a')
		shopElement.addEventListener('click', () => onClick(home))
		shopElement.textContent = 'Notifications'
		shopElement.classList.add('nav__link')


		div.appendChild(shopElement)
		if (state.isLoggedIn) {
			div.appendChild(this.userDiv)
		}
		nav.appendChild(div)

		this.component = nav

		return this
	}

	openDropdown () {
		if (!this.isOpened) {
			this.userBtn.appendChild(this.dropdown)
			this.isOpened = true
		} else {
			this.userBtn.removeChild(this.dropdown)
			this.isOpened = false
		}
	}
}
