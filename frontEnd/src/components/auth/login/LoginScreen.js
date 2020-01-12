import Component from "../../../lib/component.js";
import store from '../../../store/index.js'
import {login} from "../AuthActions.js";
export default class LoginScreen extends Component {
    constructor() {
        super({
            store,
            element: document.getElementById('main'),
        });
        window.login = login;
    }

    render() {
        return `
              <input id="email"/>
              <input id="password"/>
              <a href="/register">Register</a>
              <button id="login-btn" onclick="login()">sss</button>
        `;
    }
};
