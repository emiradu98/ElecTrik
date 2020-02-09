import AuthRepository from "../../../repositories/AuthRepository";
import {logout} from "../../../repositories/AuthRepository/AuthActions";

require('./Navbar.scss');

export default class Navbar {
    constructor(links, onClick) {
        const nav = document.createElement('nav');
        nav.classList.add('nav');
        let excludedRoutes = [];

        const authRepo = AuthRepository;
        const state = authRepo.getState();

        if (state.isLoggedIn) {
            excludedRoutes.push('list')
        } else {
            excludedRoutes.push('register');
            excludedRoutes.push('login');
        }

        const linkElement = document.createElement('a');
        linkElement.addEventListener('click', () => onClick(''));
        linkElement.textContent = 'ElecTrik';
        linkElement.classList.add('nav__link');

        if (location.hash === '') {
            linkElement.classList.add('--active')
        }
        if (location.hash.startsWith('#')) linkElement.classList.add('--active');

        nav.appendChild(linkElement);

        const div = document.createElement('div');

        Object.keys(links).forEach(link => {
            if (!link) return;
            if (excludedRoutes.includes(link)) {
                const linkElement = document.createElement('a');
                linkElement.addEventListener('click', () => onClick(link));
                linkElement.textContent = links[link].name;
                linkElement.classList.add('nav__link');
                if (location.hash.startsWith(`#${link}`)) linkElement.classList.add('--active');

                div.appendChild(linkElement);
            }
        });

        const lgbtn = document.createElement('div');
        lgbtn.addEventListener('click', () => logout(''));
        lgbtn.textContent = 'Logout';
        lgbtn.classList.add('nav__link');

        if (location.hash === '') {
            lgbtn.classList.add('--active')
        }
        if (location.hash.startsWith('#')) lgbtn.classList.add('--active');

        div.appendChild(lgbtn);

        nav.appendChild(div);


        this.component = nav;

        return this;
    }
}
