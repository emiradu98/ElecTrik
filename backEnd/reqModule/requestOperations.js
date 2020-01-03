function userOperations(){
    const dbOperations = require('../databaseModule/dbOperations');
    const dataBase = new dbOperations('electrik.db');

    function register(tableName,dataObject){
        try{
            dataBase.insertData(tableName,[dataObject]);
        }catch(err){
            return 'E-mail or phone number already in use';
        }
        return 'Registered succesfull';
    }

    function deleteData(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
            if(selectedData.length > 0){
                dataBase.deleteData(tableName,dataObject);
            }
        }catch(err){
            return 'An error has occured!';
        }
        if(selectedData.length > 0){
            return 'Data deleted!';
        }else{
            return 'No data found!';
        }
    }

    function loginUser(dataObject){
        //aici ar trebui sa fie updatat token-ul in baza de date,marcam ca e or smth, la asta si cel de jos vb cu emi inainte de a face ceva
        let selectedData;
        try{
            selectedData = dataBase.selectData('users',dataObject);
        }catch(err){
            return 'An error has occured!';
        }
        if(selectedData.length == 0){
            return 'No user with this credentials!';
        }else{
            return 'Login succesfull';
        }
    }

    function logoutUser(userObject){
        //aici ar trebui sa fie updatat token-ul din baza de date, in sensul ca marcam ca nu mai e or smth
    }

    function updateData(tableName,dataObject){
        try{
            dataBase.updateData(tableName,dataObject.value,dataObject.where);
        }catch(err){
            return 'Error has occured!';
        }
        return 'Data succsefully updated!';
    }

    function selectFrom(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData(tableName,dataObject);
        }catch(err){
            return 'An error occured!';
        }
        if(selectedData.length > 0){
            return 'Found';
        }else{
            return 'Not found!';
        }
    }

    function find(tableName,dataObject){
        let selectedData;
        try{
            selectedData = dataBase.selectMatch(tableName,dataObject);
        }catch(err){
            return 'An error has occured!';
        }
        return selectedData;
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

