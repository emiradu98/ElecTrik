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
        console.log(sqlQuery);
        db.prepare(sqlQuery).run(dataToInsert[0]);
        // console.log(sqlQuery);
    }
    this.selectData = function(tableName,otherParams){
        sqlQuery = 'select * from ' + tableName;
        if(otherParams !== undefined){
            sqlQuery += ' where ';
            let keys = Object.keys(otherParams);
            for(let i=0;i<keys.length;i++){
                sqlQuery += (keys[i] + '=' + otherParams[keys[i]] + ' and ');
            }
            sqlQuery += (keys[keys.length - 1] + '=' + otherParams[keys[keys.length-1]]);
        }
        console.log(db.prepare(sqlQuery).all());
    }
    this.updateData = function(tableName,parameters,otherParams){
        sqlQuery = 'UPDATE ' + tableName + ' SET ';
        let keys = Object.keys(parameters);
        for(let i=0;i<keys.length - 1;i++){
            sqlQuery += (keys[i] + '=' + '@' + keys[i] + ',');
        }
        sqlQuery += (keys[keys.length - 1] + '=' + '@' + keys[keys.length - 1]);
        if(otherParams !== undefined){
            keys = Object.keys(otherParams);
            sqlQuery += ' WHERE ';
            for(let i=0;i<keys.length - 1;i++){
                sqlQuery += (keys[i] + '=' + otherParams[keys[i]] + ' and ');
            }
            sqlQuery += (keys[keys.length - 1] + '=' + otherParams[keys[keys.length - 1]]);
        }
        console.log(sqlQuery);
        db.prepare(sqlQuery).run(parameters);
    }
    this.deleteData = function(tableName,parameters){
        sqlQuery = 'DELETE FROM ' + tableName + ' WHERE ';
        let keys = Object.keys(parameters);
        for(let i=0;i<keys.length - 1;i++){
            sqlQuery += (keys[i] + '=' + '@' + keys[i] + ' AND ');
        }
        sqlQuery += (keys[keys.length - 1] + '=' + '@' + keys[keys.length - 1]);
        db.prepare(sqlQuery).run(parameters);
    }
}
let arr_obj = [
    {first_name:'Ocu',last_name:'Dumitru',email:'ocuDum@yahoo.com',phone:'0751414143',password:'bbanan2',region:'South America',location:'LosAngeles',country:'USA',auth_token:'',company_id:1,title:'Local'},
    {first_name:'David',last_name:'Brancu',email:'calcal@yahoo.com',phone:'0751414142',password:'bbanan1',region:'Europe',location:'London',country:'USA',auth_token:'',company_id:1,title:'Local'}
];
module.exports = dbOperations;
// new dbOperations('electrik.db').insertData('users',arr_obj);
// new dbOperations('electrik.db').selectData('users',{user_id:3});
// new dbOperations('electrik.db').updateData('users',{email:'oculutz@gmail.com',phone:'0751401122'},{user_id:3});
// new dbOperations('electrik.db').deleteData('users',{first_name:'Ocu',last_name:'Dumitru'});