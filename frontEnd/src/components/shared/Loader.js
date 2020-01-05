import Component from '../../lib/component.js';
import store from '../../store/index.js';
export default class Loader extends Component {
    constructor() {
        super({
            store,
        });
    }

    render() {
        let link = document.createElement( "link" );
        link.href = './src/components/shared/styles/loader.css'
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";

        document.getElementsByTagName( "head" )[0].appendChild( link );
        return `
            <div class="loader">
              <img src="../../src/assets/loader/loader.svg"/>
            </div>`
    }
};
