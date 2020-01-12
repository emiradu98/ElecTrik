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
        console.log(element)
        this.state.children = element
        console.log(this.state.children)
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
