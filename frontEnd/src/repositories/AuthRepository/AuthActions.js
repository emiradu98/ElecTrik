import {sha256} from "js-sha256";
import {API_URL} from "../../../static/constants/constants";
import Router from "../../routes/Router";
import AuthRepository from "./AuthRepository";

export const register = async (data) => {
    data.auth_token = '';
    data.token = null;
    data.location = '';
    data.image = '';
    if (!data.invite) {
        delete data.invite
    }
    data.password = sha256(data.password)
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (response.status === 201) {
        await login({email: data.email, password: data.password})
    }
}


export const login = async (data) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (response.status === 200) {
        const authRepository = AuthRepository
        const loginState = authRepository.getState()
        loginState.isLoggedIn = true
        const json = await response.json()
        document.cookie = `token=${json.token}`;
        Router.go('company')
    }
}

export const autoLogin = async () => {
    const cookie = document.cookie.split('token=')[1];
    if (cookie) {
        const response = await fetch(`${API_URL}/me`, {
            method: 'get',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${cookie}`},
        })
        if (response.status === 200) {
            const authRepository = AuthRepository;
            const loginState = authRepository.getState();
            loginState.isLoggedIn = true;
            const json = await response.json();
            loginState.user = json.data[0];
            Router.go('company')
        }
    }
}

export const logout = async () => {
    document.cookie = 'token='
    const authRepository = AuthRepository
    const loginState = authRepository.getState()
    loginState.isLoggedIn = false
    Router.go('login')
}
