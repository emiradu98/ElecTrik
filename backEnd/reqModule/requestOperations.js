function userOperations(){
    const dbOperations = require('../databaseModule/dbOperations');
    const dataBase = new dbOperations('electrik.db');
    const moment = require('moment');
    const credentials = {
        client:{
            id:'<client-id>',
            secret:'<client-secret>'
        },
        auth:{
            tokenHost:'https://api.oauth.com'
        }
    };
    const utilitar = require('../utility');
    const utility = new utilitar();
    const crypto = require('crypto');
    const oauth2 = require('simple-oauth2').create(credentials);

    function register(tableName,dataObject){
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
            if(selectedData.length === 0){
                if(utility.validateEmail(dataObject.email) === true){
                    if(dataObject.first_name.length > 1 && dataObject.last_name.length > 1){
                        dataBase.insertData(tableName,[dataObject]);
                    }else{
                        return {status:'First or Last Name too short!'};
                    }
                }else{
                    return {status:'Invalid email address!'};
                }
            }
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
            return {status:err};
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
        let tableName = 'users';
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
        }catch(err){
            return {status:err};
        }

        if(selectedData[0] !== undefined){
            let auth_token = JSON.parse(selectedData[0].auth_token);
            if(moment(auth_token.token.expires_at).diff(moment()) < 0){
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
            return {status:err};
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
            return {status:'Login succesfull!',token:token};
        }
    }

    function logoutUser(dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData('users',dataObject);
        }catch(err){
            return {status:err};
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
            return {status:err};
        }
        return {status:'Data succsefully updated!'};
    }

    function selectFrom(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
        }catch(err){
            return {status:err};
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
            return {status:err};
        }
        return {status:'Ok',data:selectedData};
    }

    function insertInto(tableName,dataObjects){
        for(let i=0;i<dataObjects.length;i++){
            try{
                dataBase.insertData(tableName,[dataObjects[i]]);
            }catch(err){
                return {status:err};
            }
        }
        return {status:'Ok'};
    }

    return {
        register:register,
        loginUser:loginUser,
        deleteData:deleteData,
        logoutUser:logoutUser,
        updateData:updateData,
        selectFrom:selectFrom,
        isLogged:isLogged,
        insertInto:insertInto,
        find:find
    };
}
module.exports = userOperations;

