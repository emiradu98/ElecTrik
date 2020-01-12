import Component from "../../../lib/component.js";
import {login} from "../AuthActions.js";
import store from "../../../store/index.js";
export default class LoginScreen extends Component {
    constructor() {
        super({
            store,
            element: document.getElementById('content'),
        });
        window.login = login;
    }

    render() {
        console.log(store.state.globalState.auth.users)
        this.element.innerHTML = `
              <input id="email"/>
              <input id="password"/>
              <a href="/register">Register</a>
              <button id="login-btn" onclick="login()">sss</button>
              ${store.state.globalState.auth.users && store.state.globalState.auth.users.map((item)=>`<div>${item.email}</div>`)}
        `;
    }
};
