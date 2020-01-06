import Component from '../../lib/component.js';
import store from '../../store/index.js';

export default class Header extends Component {

    constructor() {
        super({
            store,
        });
    }

    render() {
        return `
            <div class="header">
              <div>
                  Logo
              </div>
              <div id="login-button" onclick="history.pushState('','','/login')">Login</div>
            </div>
        `;
    }
};
