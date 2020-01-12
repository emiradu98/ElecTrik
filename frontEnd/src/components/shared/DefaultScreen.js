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

    append(element){
        this.state.children = element
        this.render()
    }
    render() {
        let header = new Header()
        this.element.innerHTML = `
              ${header.render()}
            </div>
            <div class="content">
                ${this.state.children}
            </div>
        `;
    }
};
