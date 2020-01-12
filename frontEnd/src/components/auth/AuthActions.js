import store from '../../store/index.js'
import {API_URL} from "../../config/config.js";


export const login = async (data) => {
    let email = document.getElementById('email').value
    let (document.getElementById('email').value)
    store.dispatch('addItem', {
        auth: {loading: true},
    });
    let response = await fetch(`${API_URL}/login`, {method: 'post', body:'' })
}

