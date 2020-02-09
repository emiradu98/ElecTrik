import {auth} from '../../mock/auth.json';

export default class AuthRepository {
    static getState() {
        return auth;
    }
}
