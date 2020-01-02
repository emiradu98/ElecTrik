function userOperations(){
    const dbOperations = require('../databaseModule/dbOperations');
    const dataBase = new dbOperations('electrik.db');

    function registerUser(userObject){
        try{
            dataBase.insertData('users',[userObject]);
        }catch(err){
            return 'E-mail or phone number already in use';
        }
        return 'Registered succesfull';
    }

    function deleteUser(userObject){
        let selectedData;
        try{
            selectedData = dataBase.selectData('users',userObject);
            if(selectedData.length > 0){
                dataBase.deleteData('users',userObject);
            }
        }catch(err){
            return 'An error has occured!';
        }
        if(selectedData.length > 0){
            return 'Account deleted!';
        }else{
            return 'No account to delete!';
        }
    }

    function loginUser(userObject){
        //aici ar trebui sa fie updatat token-ul in baza de date,marcam ca e or smth, la asta si cel de jos vb cu emi inainte de a face ceva
        let selectedData;
        try{
            selectedData = dataBase.selectData('users',userObject);
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

    function updateUserData(userObject){
        try{
            dataBase.updateData('users',userObject.value,userObject.where);
        }catch(err){
            return 'Error has occured!';
        }
        return 'Data succsefully updated!';
    }

    return {
        registerUser:registerUser,
        loginUser:loginUser,
        deleteUser:deleteUser,
        logoutUser:logoutUser,
        updateUserData:updateUserData
    };
}
module.exports = userOperations;

