import loginPage from './pages/loginPage';
import registerPage from './pages/registerPage';
import companyPage from "./pages/companyPage";
import companyCreatePage from "./pages/companyCreatePage";

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
    'company/create': {
        name: 'Company Create',
        render: companyCreatePage
    },
    'company': {
        name: 'Company',
        render: companyPage
    },
    'orders': {
        name: 'Orders',
        render: companyPage
    },
    'statistics': {
        name: 'Statistics',
        render: companyPage
    },
    'products': {
        name: 'Products',
        render: companyPage
    },
};

export default ROUTES;
