import Component from '../../lib/component.js';
import store from '../../store/index.js';

export default class Header extends Component {

    constructor() {
        super({
            store,
            element: document.getElementById('header')
        });
    }

    render() {
        this.element.innerHTML = `
            <div class="header">
              <div>
                  Logo
              </div>
              <a href="/login">Login</a>
            </div>
        `;
    }
};
