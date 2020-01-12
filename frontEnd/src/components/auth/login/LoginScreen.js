import Component from "../../../lib/component.js";
import store from '../../../store/index.js'
export default class LoginScreen extends Component {
    constructor() {
        super({
            store,
            element: document.getElementById('main'),
        });
    }

    render() {
        return `
              <input/>
              <input/>
              <a href="/register">Register</a>
              <button id="login-btn" onclick="login()">sss</button>
        `;
    }
};
