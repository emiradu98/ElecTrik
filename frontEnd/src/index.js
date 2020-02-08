import {autoLogin} from "./repositories/AuthRepository/AuthActions";
import Router from './routes/Router';

require('./scss/base.scss');

autoLogin()

Router.go(location.hash);
