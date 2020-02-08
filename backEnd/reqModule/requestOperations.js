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

    function createOrder(tok,dataObject){
        let selectedData = dataBase.selectData('users',{token:tok});
        let prData = dataBase.selectData('products',{id:dataObject.product_Id});
        if(selectedData[0].company_id !== dataObject.provider_Id){
            // dataBase.updateData('products',{value:{stock:prData.stock - dataObject.quantity},where:{id:dataObject.product_Id}});
            dataBase.insertData('orders',dataObject);
        }
        return {status:'Orderd waiting to be processed!'};
    }

    function acceptOrder(tok,dataObject){
        let selectedData = dataBase.selectData('users',{token:tok});
        let prData = dataBase.selectData('products',{company_id:selectedData[0].company_id,deposit_id:dataObject.deposit_Id});
        dataBase.updateData('orders',{value:{isProcessed:1},where:{order_Id:dataObject.order_Id}});
        dataBase.updateData('products',{value:{stock:prData[0].stock - dataObject.quantity},where:{id:prData[0].id}});
        return {status:'Order processed!'};
    }

    function listOrders(tok){
        let selectedData = dataBase.selectData('users',{token:tok});
        let deposit = dataBase.selectData('deposits',{company_id:selectedData[0].company_id,location:selectedData[0].location});
        let queue = dataBase.selectData('orders',{isProcessed:0,provider_Id:selectedData[0].company_id,deposit_Id:deposit[0].id});
        return {status:'Ok',data:queue};
    }

    function createPayment(tok){
        // let selectedData = dataBase.selectData('users',{token:tok});

    }

    function stockSelect(token,dataObject){
        let selectData = dataBase.makeSelection('SELECT * FROM users WHERE token=' + "'" + token + "'");
        let checkData = dataBase.makeSelection('SELECT * FROM companies WHERE owner_id=' + selectData[0].user_id);
        console.log(checkData[0]);
        if(checkData !== undefined){
            let keys = Object.keys(dataObject);
            let sqlDemand = 'SELECT id,name,producer,stock,deposit_id FROM products WHERE company_id=' + selectData[0].company_id;
            if(keys.length > 0){
                if(dataObject['name'] !== undefined){
                    sqlDemand += ' and name=' + "'" + dataObject['name'] + "'";
                }
                if(dataObject['producer'] !== undefined){
                    sqlDemand += ' and producer=' + "'" + dataObject['producer'] + "'";
                }
            }
            let selection = dataBase.makeSelection(sqlDemand);
            let depos = dataBase.makeSelection('SELECT * FROM deposits WHERE company_id=' + selectData[0].company_id);
            for(let i=0;i<depos.length;i++){
                for(let j=0;j<selection.length;j++){
                    if(depos[i].id === selection[j].deposit_id){
                        selection[j].location = depos[i].location;
                    }
                }
            }
            return {status:'Ok',data:selection};
        }else{
            let keys = Object.keys(dataObject);
            let depo = dataBase.makeSelection("SELECT id,location FROM deposits WHERE admin_ids LIKE '%" + selectData[0].user_id + "%'");
            let sqlDemand = 'SELECT id,name,producer,stock,deposit_id FROM products WHERE deposit_id=' + depo[0].id;
            if(keys.length > 0){
                if(dataObject['name'] !== undefined){
                    sqlDemand += ' and name=' + "'" + dataObject['name'] + "'";
                }
                if(dataObject['producer'] !== undefined){
                    sqlDemand += ' and producer=' + "'" + dataObject['producer'] + "'";
                }
            }
            let selection = dataBase.makeSelection(sqlDemand);
            for(let i=0;i<selection.length;i++){
                selection[i].location = depo[0].location;
            }
            return {status:'Ok',data:selection};
        }
    }

    function announceClients(tok){
        let selectData = dataBase.selectData('users',{token:tok});
        let checkData = dataBase.selectData('companies',{owner_id:selectData[0].user_id});
        if(checkData !== undefined){
            let sqlDemand = 'SELECT DISTINCT client_Id,product_Id FROM orders WHERE provider_Id='+selectData[0].company_id;
            let selection = dataBase.makeSelection(sqlDemand);
            let companyData = dataBase.makeSelection('SELECT company_name FROM companies WHERE company_id=' + selectData[0].company_id);
            for(let i=0;i<selection.length;i++){
                let prData = dataBase.makeSelection('SELECT name,producer,price FROM producst WHERE id=' + selection[i].product_Id);
                let info = 'Price for this product is now ' + prData.price + '!';
                let obj = {
                    receiver:selection[i].clientId,
                    message:info,
                    sender:companyData.company_name,
                    subject:prData.producer + ' ' + prData.name
                };
                dataBase.insertData('news',obj);
            }
            return {status:'Clients have been notified!'};
        }else{
            return {status:'Only Owner can do this operation!'};
        }
    }

    function isOwner(tokenObject){
        let userData = dataBase.selectData('users',tokenObject);
        let companyData = dataBase.selectData('companies',{owner_id:userData[0].user_id});
        if(companyData !== undefined){
            return {status:'Owner'};
        }else{
            return {status:'Employee'};
        }
    }

    function getAllDepositLocations(tokenObject){
        let userData = dataBase.selectData('users',tokenObject);
        let companyData = dataBase.selectData('companies',{owner_id:userData[0].user_id});
        let locations = dataBase.makeSelection('SELECT location FROM deposits WHERE company_id=' + companyData[0].company_id);
        let arr = [];
        for(let el of locations){
            arr.push(el.location);
        }
        return {status:'Ok',data:arr};
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
                'expires_in':'7200000'
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

    function selectFromProducts(dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectAllProducts(dataObject);
        }catch(err){
            return {status:err};
        }
        if(selectedData.length > 0){
            return {status:'Found',data:selectedData};
        }else{
            return {status:'Not found!'};
        }
    }

    function executeQuerySelect(query){
        let selection;
        try{
            selection = dataBase.makeSelection(query);
        }catch(err){
            return {status:err};
        }
        if(selection.length > 0){
            return {status:'Found',data:selection};
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
        selectFromProducts:selectFromProducts,
        stockSelect:stockSelect,
        createOrder:createOrder,
        executeQuerySelect:executeQuerySelect,
        isOwner:isOwner,
        getAllDepositLocations:getAllDepositLocations,
        find:find
    };
}
module.exports = userOperations;

