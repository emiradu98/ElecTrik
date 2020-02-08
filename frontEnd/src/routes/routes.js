import listPage from './pages/listPage';
import loginPage from './pages/loginPage';
import registerPage from './pages/registerPage';

const ROUTES = {
    '': {
        name: 'Home',
        render: loginPage
    },
    'login': {
        name: 'Login',
        render: loginPage
    },
    'register': {
        name: 'Register',
        render: registerPage
    },
    'list': {
        name: 'List',
        render: listPage
    }
};

export default ROUTES;
