function userOperations(){
    const dbOperations = require('../databaseModule/dbOperations');
    const dataBase = new dbOperations('electrik.db');
    const credentials = {
        client:{
            id:'<client-id>',
            secret:'<client-secret>'
        },
        auth:{
            tokenHost:'https://api.oauth.com'
        }
    };
    const crypto = require('crypto');
    const oauth2 = require('simple-oauth2').create(credentials);

    function register(tableName,dataObject){
        try{
            dataBase.insertData(tableName,[dataObject]);
        }catch(err){
            return {status:'E-mail or phone number already in use'};
        }
        return {status:'Registered succesfull'};
    }

    function deleteData(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
            if(selectedData.length > 0){
                dataBase.deleteData(tableName,dataObject);
            }
        }catch(err){
            return {status:'An error has occured!'};
        }
        if(selectedData.length > 0){
            return {status:'Data deleted!'};
        }else{
            return {status:'No data found!'};
        }
    }

    function isLogged(dataObject){
        let auth;
        let selectedData;
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
        }catch(err){
            return {status:'An error has occured!'};
        }
        if(selectedData.length > 0){
            let auth_token = JSON.parse(selectedData.auth_token);
            if(auth_token.expire()){
                logoutUser(dataObject);
                return {status:'Session expired!'};
            }else{
                return true;
            }
        }else{
            return {status:'Can t found any user!'};
        }
    }

    function createToken(){
        let token = '';
        for(let i=0;i<16;i++){
            token += Math.floor(Math.random()*1024+0);
        }
        token = crypto.createHash('sha256').update(token).digest('hex');
        return token;
    }

    function loginUser(dataObject){
        //aici ar trebui sa fie updatat token-ul in baza de date,marcam ca e or smth, la asta si cel de jos vb cu emi inainte de a face ceva
        let selectedData;
        try{
            selectedData = dataBase.selectData('users',dataObject);
        }catch(err){
            return {status:'An error has occured!'};
        }
        if(selectedData.length == 0){
            return {status:'No user with this credentials!'};
        }else{
            let tokenObject = {
                'access_token':'<access-token>',
                'refresh_token':'<refresh-token>',
                'expires_in':'7200'
            };
            let accessToken = oauth2.accessToken.create(tokenObject);
            let token = createToken();
            dataBase.updateData('users',{auth_token:JSON.stringify(accessToken),token:token},dataObject);
            return {status:'Login succesfull!',data:token};
        }
    }

    function logoutUser(dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData('users',dataObject);
        }catch(err){
            return {status:'An error has occured!'};
        }
        if(selectedData.length == 0){
            return {status:'No user with this credentials!'};
        }else{
            dataBase.updateData('users',{auth_token:'',token:''},dataObject);
            return {status:'Logout succesfull'};
        }
        //aici ar trebui sa fie updatat token-ul din baza de date, in sensul ca marcam ca nu mai e or smth
    }

    function updateData(tableName,dataObject){
        try{
            dataBase.updateData(tableName,dataObject.value,dataObject.where);
        }catch(err){
            return {status:'Error has occured!'};
        }
        return {status:'Data succsefully updated!'};
    }

    function selectFrom(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
        }catch(err){
            return {status:'An error occured!'};
        }
        if(selectedData.length > 0){
            return {status:'Found',data:selectedData};
        }else{
            return {status:'Not found!'};
        }
    }

    function find(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectMatch(tableName,dataObject);
        }catch(err){
            return {status:'An error has occured!'};
        }
        return {status:'Ok',data:selectedData};
    }

    return {
        register:register,
        loginUser:loginUser,
        deleteData:deleteData,
        logoutUser:logoutUser,
        updateData:updateData,
        selectFrom:selectFrom,
        find:find
    };
}
module.exports = userOperations;

