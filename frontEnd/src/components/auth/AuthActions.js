import store from '../../store/index.js'
import {API_URL} from "../../config/config.js";


export const login = async (data) => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    store.dispatch('addItem', {
        auth: {loading: true},
    });
    let response = await fetch(`${API_URL}/users/all`, {method: 'get'}).then((resp)=>resp.json())
    if(response){
        if(response.status){
            store.dispatch('addItem', {
                auth: {loading: false, users: response.data},
            });
        }
    }
}

