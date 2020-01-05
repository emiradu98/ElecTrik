import store from './store/index.js';

// Load up components
// import Count from './components/count.js';
// import List from './components/list.js';
// import Status from './components/status.js';
import DefaultScreen from "./components/shared/DefaultScreen.js";
import Router from "./config/Router.js";

// const mainDiv = document.getElementById('main');

const router = new Router();
router.get('/', function(req){
    console.log(req.path);
})
router.init();

const defaultScreen = new DefaultScreen();
defaultScreen.render();

// if(store.state.isLoggedIn){
//     mainDiv.innerHTML = `Hello username`
// } else {
//     mainDiv.innerHTML = `Hello pls login`
// }
// // Instantiate components
// const countInstance = new Count();
// const listInstance = new List();
// const statusInstance = new Status();
//
// // Initial renders
// countInstance.render();
// listInstance.render();
// statusInstance.render();
