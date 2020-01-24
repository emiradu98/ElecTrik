const dbOperations = require('./databaseModule/dbOperations');
let ops = new dbOperations('electrik.db');
function Population(){
    function populate(){
        let arr_obj = [
            {first_name:'Ocu',last_name:'Dumitru',email:'ocuDum@yahoo.com',phone:'0751414143',password:'bbanan2',region:'South America',location:'LosAngeles',country:'USA',auth_token:'',token:'',company_id:1,title:'Local'},
            {first_name:'George',last_name:'Rohozneanu',email:'rohoGeo@gmail.com',phone:'0753010142',password:'lubitzu',region:'Europe',location:'London',country:'USA',auth_token:'',token:'',company_id:1,title:'Local'}
        ];
        //console.log(typeof new dbOperations('electrik.db').selectData('users')[0]);
        // console.log(new dbOperations('electrik.db').selectMatch('companies',{company_name:'Tec'}));
        //new dbOperations('electrik.db').insertData('users',[arr_obj[0]]);
        //console.log(new dbOperations('electrik.db').selectData('users',{email:'ocuDum@yahoo.com'}));
        // console.log(ops.selectData('users',{email:'oculutz@gmail.com'}));
        //new dbOperations('electrik.db').updateData('users',{email:'oculutz@gmail.com',phone:'0751401122'},{email:'ocuDum@yahoo.com'});
        //console.log(new dbOperations('electrik.db').selectData('users',{email:'ocuDum@yahoo.com',password:'bbanan2'}));
        //new dbOperations('electrik.db').deleteData('users',{first_name:'Ocu',last_name:'Dumitru'});
    }
    return {
        populate:populate
    };
}
new Population().populate();