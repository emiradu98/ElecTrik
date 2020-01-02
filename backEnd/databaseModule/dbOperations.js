function dbOperations(dataBaseName){
    const sqliteDb = require('better-sqlite3');
    let db = new sqliteDb(dataBaseName,{verbose:console.log});
    this.insertData = function(tableName,dataToInsert){
        let sqlQuery = 'INSERT INTO ';
        sqlQuery += tableName + ' (';
        let keys = Object.keys(dataToInsert[0]);
        for(let i=0;i<keys.length - 1;i++){
            sqlQuery += (keys[i] + ',');
        }
        sqlQuery += keys[keys.length-1];
        sqlQuery += ')';
        sqlQuery += ' VALUES (';
        for(let i=0;i<keys.length - 1;i++){
            sqlQuery += ('@' + keys[i] + ',');
        }
        sqlQuery += '@' + keys[keys.length - 1] + ')';
        for(let i=0;i<dataToInsert.length;i++){
            db.prepare(sqlQuery).run(dataToInsert[i]);
        }
    }
    this.selectData = function(tableName,otherParams){
        sqlQuery = 'select * from ' + tableName;
        if(otherParams !== undefined){
            sqlQuery += ' where ';
            let keys = Object.keys(otherParams);
            let keysLength = keys.length;
            for(let i=0;i<keysLength;i++){
                if(typeof otherParams[keys[i]] === 'string'){
                    sqlQuery += (keys[i] + '=' + "'" + otherParams[keys[i]] + "'");
                }else{
                    sqlQuery += (keys[i] + '=' + otherParams[keys[i]]);
                }
                if(i != keysLength - 1){
                    sqlQuery += ' and ';
                }
            }
        }
        return db.prepare(sqlQuery).all();
    }
    this.updateData = function(tableName,parameters,otherParams){
        sqlQuery = 'UPDATE ' + tableName + ' SET ';
        let keys = Object.keys(parameters);
        let keysLength = keys.length;
        for(let i=0;i<keysLength;i++){
            sqlQuery += (keys[i] + '=' + '@' + keys[i]);
            if(i != keysLength - 1){
                sqlQuery += ',';
            }
        }
        if(otherParams !== undefined){
            keys = Object.keys(otherParams);
            keysLength = keys.length;
            sqlQuery += ' WHERE ';
            for(let i=0;i<keysLength;i++){
                if(typeof otherParams[keys[i]] === 'string'){
                    sqlQuery += (keys[i] + '=' + "'" + otherParams[keys[i]] + "'");
                }else{
                    sqlQuery += (keys[i] + '=' + otherParams[keys[i]]);
                }
                if(i != keysLength - 1){
                    sqlQuery += ' and ';
                }
            }
        }
        return db.prepare(sqlQuery).run(parameters);
    }
    this.deleteData = function(tableName,parameters){
        sqlQuery = 'DELETE FROM ' + tableName + ' WHERE ';
        let keys = Object.keys(parameters);
        let keysLength = keys.length;
        for(let i=0;i<keysLength;i++){
            sqlQuery += (keys[i] + '=' + '@' + keys[i]);
            if(i != keysLength - 1){
                sqlQuery += ' and ';
            }
        }
        return db.prepare(sqlQuery).run(parameters);
    }
}
let arr_obj = [
    {first_name:'Ocu',last_name:'Dumitru',email:'ocuDum@yahoo.com',phone:'0751414143',password:'bbanan2',region:'South America',location:'LosAngeles',country:'USA',auth_token:'',company_id:1,title:'Local'},
    {first_name:'George',last_name:'Rohozneanu',email:'rohoGeo@gmail.com',phone:'0753010142',password:'lubitzu',region:'Europe',location:'London',country:'USA',auth_token:'',company_id:1,title:'Local'}
];
module.exports = dbOperations;
//new dbOperations('electrik.db').insertData('users',[arr_obj[0]]);
//new dbOperations('electrik.db').selectData('users',{email:'ocuDum@yahoo.com'});
// new dbOperations('electrik.db').updateData('users',{email:'oculutz@gmail.com',phone:'0751401122'},{email:'ocuDum@yahoo.com'});
//console.log(new dbOperations('electrik.db').selectData('users',{email:'ocuDum@yahoo.com',password:'bbanan2'}));
//new dbOperations('electrik.db').deleteData('users',{first_name:'Ocu',last_name:'Dumitru'});