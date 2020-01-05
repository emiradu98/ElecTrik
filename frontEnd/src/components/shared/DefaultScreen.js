import Component from '../../lib/component.js';
import store from '../../store/index.js';
import Header from "./Header.js";

export default class DefaultScreen extends Component {

    constructor() {
        super({
            store,
            element: document.getElementById('main'),
        });
    }

    render() {
        let header = new Header()
        this.element.innerHTML = `
            ${header.render()}
            <div class="content">
            </div>
        `;
    }
};
