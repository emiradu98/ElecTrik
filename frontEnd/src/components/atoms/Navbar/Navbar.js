require('./Navbar.scss');

export default class Navbar {
  constructor (links, onClick) {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const linkElement = document.createElement('a');
    linkElement.addEventListener('click', () => onClick(''));
    linkElement.textContent = 'Electrik';
    linkElement.classList.add('nav__link');

    if (location.hash.startsWith('#')) linkElement.classList.add('--active');

    nav.appendChild(linkElement);

    const div = document.createElement('div');

    Object.keys(links).forEach(link => {
      if (!link) return;

      const linkElement = document.createElement('a');
      linkElement.addEventListener('click', () => onClick(link));
      linkElement.textContent = links[link].name;
      linkElement.classList.add('nav__link');
      console.log(link);
      if (location.hash.startsWith(`#${link}`)) linkElement.classList.add('--active');

      div.appendChild(linkElement);
    });

    nav.appendChild(div);
    this.component = nav;

    return this;
  }
}
