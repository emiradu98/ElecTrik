import formPage from './pages/formPage';
import listPage from './pages/listPage';
import {getParam} from './parsers';
import loginPage from './pages/loginPage';
import authRepository from '../repositories/AuthRepository/AuthRepository';
import registerPage from './pages/registerPage';

const authState = authRepository.getState();
const ROUTES = authState.isLoggedIn ? {
  'form': {
    name: 'Form',
    render: (hash, params) => {
      const id = params ? params.id : getParam(hash, 'id');
      return formPage(id);
    }
  },
  'list': {
    name: 'List',
    render: listPage
  },
  '': {
    name: 'List',
    render: listPage
  }
} : {
  'login': {
    name: 'Login',
    render: loginPage
  },
  'register': {
    name: 'Register',
    render: registerPage
  },
  '': {
    name: 'List',
    render: listPage
  }
};

export default ROUTES;
