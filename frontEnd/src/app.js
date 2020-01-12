import Router from "./config/Router.js";
import DefaultScreen from "./components/shared/DefaultScreen.js";
import LoginScreen from "./components/auth/login/LoginScreen.js";

// initialize router
const router = new Router();

// initialize default screen
const defaultScreen = new DefaultScreen();
defaultScreen.render();

// routing files
router.get('/login', function(req){
    const loginScreen = new LoginScreen()
    defaultScreen.append(loginScreen.render())
})

router.init();








// import store from './store/index.js';

// Load up components
// import Count from './components/count.js';
// import List from './components/list.js';
// import Status from './components/status.js';


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
