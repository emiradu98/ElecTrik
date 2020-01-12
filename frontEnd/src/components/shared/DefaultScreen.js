import Component from '../../lib/component.js';
import store from '../../store/index.js';
import Header from "./Header.js";

export default class DefaultScreen extends Component {
    constructor() {
        super({
            store,
            element: document.getElementById('main'),
        });
        this.state = {
            children: ''
        }
    }

    render() {
        this.element.innerHTML = `
            <div id="header">
            </div>
            <div class="content" id="content">
            </div>
        `;
        let header = new Header()
        header.render()
    }
};
