function Server(){
    const express = require('express');
    const bodyParser = require('body-parser');
    let reqOperations = require('./reqModule/requestOperations');
    // let userOperations = require('./reqModule/userOperations');
    // let companyOperations = require('./reqModule/companyOperations');
    // let companyInfo = new companyOperations();
    // let userInfo = new userOperations();
    let requestInfo = new reqOperations();
    const cors = require('cors');
    

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const PORT = 80;

    //GET

    app.get('/products/all',(req,res)=>{
        console.log(req.query);
        let keys = Object.keys(req.query);
        let sqlDemand = 'SELECT * FROM products';
        if(keys.length > 0){
            sqlDemand += ' WHERE ';
            // let f = [];
            console.log((keys.length)/3,req.query[('f'+(0+1))]);
            for(let i=0;i<parseInt(keys.length/3);i++){
                // sqlDemand += req.query[('f'+(i+1))] + ' ' + req.query[('o'+(i+1))] + ' ' + req.query[('v'+(i+1))];
                sqlDemand += req.query[('f'+(i+1))] + ' ' + req.query[('o'+(i+1))] + ' ';
                if(isNaN(req.query[('v'+(i+1))]) === true){
                    sqlDemand += "'" + req.query[('v'+(i+1))] + "'";
                    if(i < parseInt((keys.length/3)) - 1){
                        if(req.query[('f'+(i+1))] === req.query[('f'+(i+2))]){
                            sqlDemand += ' OR ';
                        }else{
                            sqlDemand += ' AND ';
                        }
                    }
                }else{
                    sqlDemand += + req.query[('v'+(i+1))];
                    if(i < parseInt((keys.length/3)) - 1){
                        sqlDemand += ' AND ';
                    }
                }
            }
        }
        console.log(sqlDemand);
        res.send(requestInfo.executeQuerySelect(sqlDemand));
    });

    app.get('/deposits/all',(req,res)=>{
        // res.send(requestInfo.selectFrom('deposits',req.body));
        let tok = req.headers.authorization.split(' ')[1];
        let usrData = requestInfo.selectFrom('users',{token:tok});
        if(usrData.status === 'Not found!'){
            res.send(usrData);
            return;
        }
        if(usrData.data[0].title === 'General'){
            res.send(requestInfo.selectFrom('deposits',{company_id:usrData.data[0].company_id}));
        }else{
            //
            let sqlDemand = 'SELECT * FROM DEPOSITS WHERE company_id=' + usrData.data[0].company_id + ' ';
            let keys = Object.keys(req.query);
            if(parseInt(keys.length/3) > 0){
                sqlDemand += 'AND ';
            }
            for(let i=0;i<parseInt(keys.length/3);i++){
                sqlDemand += req.query[('f'+(i+1))] + ' ' + req.query[('o'+(i+1))] + " '" + req.query[('v'+(i+1))] + "'";
                if(i<parseInt(keys.length/3) - 1){
                    sqlDemand += ' AND ';
                }
            }
            console.log(sqlDemand);
            // res.send(requestInfo.selectFrom('deposits',{company_id:usrData.data[0].company_id,location:usrData.data[0].location}));
            res.send(requestInfo.executeQuerySelect(sqlDemand));
        }
    });

    //aici, nu punem operator, nu exista decat campuri care pot avea relatia de identitate
    app.get('/companies/all',(req,res)=>{
        let keys = Object.keys(req.query);
        let obj = {};
        for(let i=0;i<parseInt(keys.length/3);i++){
            obj[req.query['f'+(i+1)]] = req.query['v'+(i+1)];
        }
        res.send(requestInfo.selectFrom('companies',obj));
    });

    app.get('/products/stocks',(req,res)=>{
        if(req.headers.authorization === undefined){
            res.send({status:'You must be logged in!'});
        }
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            //de asemenea, doar egal
            let obj = {};
            keys = Object.keys(req.query);
            for(let i=0;i<parseInt(keys.length/3);i++){
                obj[req.query['f'+(i+1)]] = req.query['v'+(i+1)];
            }
            res.send(requestInfo.stockSelect(req.headers.authorization.split(' ')[1],obj));
        }else{
            res.send({status:'Invalid token!'});
        }
    });

    app.get('/users/all',(req,res)=>{
        let obj = {};
        let keys = Object.keys(req.query);
        for(let i=0;i<parseInt(keys.length/3);i++){
            obj[req.query['f'+(i+1)]] = req.query['v'+(i+1)];
        }
        res.send(requestInfo.selectFrom('users',obj));
    });

    app.get('/me/statut',(req,res)=>{
        if(req.headers.authorization === undefined){
            res.send({status:'You must be logged in!'});
        }
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            //de asemenea, doar egal
            res.send(requestInfo.isOwner({token:req.headers.authorization.split(' ')[1]}));
        }else{
            res.send({status:'Invalid token!'});
        }
    });

    app.get('/me/deposits',(req,res)=>{
        if(req.headers.authorization === undefined){
            res.send({status:'You must be logged in!'});
        }
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            res.send(requestInfo.getAllDepositLocations({token:req.headers.authorization.split(' ')[1]}));
        }else{
            res.send({status:'Invalid token!'});
        }
    })

    app.get('/payment/all',(req,res)=>{
        
    });

    app.get('/orders/all',(req,res)=>{
        let obj = {};
        let keys = Object.keys(req.query);
        let sqlDemand = 'SELECT * FROM orders';
        if(parseInt(keys.length/3)>0){
            sqlDemand += ' WHERE ';
        }
        for(let i=0;i<parseInt(keys.length/3);i++){
            sqlDemand += req.query['f'+(i+1)] + req.query['o'+(i+1)];
            if(isNaN(req.query['v'+(i+1)]) === true){
                sqlDemand += "'" + req.query['v'+(i+1)] + "'";
            }else{
                sqlDemand += req.query['v'+(i+1)];
            }
            if((i+1)<parseInt(keys.length/3)){
                sqlDemand += ' AND ';
            }
        }
        // res.send(requestInfo.selectFrom('orders',req.body));
        res.send(requestInfo.executeQuerySelect(sqlDemand));
    });

    //POST

    app.post('/auth/register',(req,res)=>{
        if(req.body.invite === undefined){
            let selectData = requestInfo.selectFrom('companies',{invite:req.body.invite});
            if(selectData === undefined){
                res.send({status:'Invalid invitation!'});
            }
            req.body.company_id = selectData.data[0].company_id;
            delete req.body.invite;
        }else{
            req.body.company_id = 0;
        } 
        res.send(requestInfo.register('users',req.body));
    });

    app.post('/auth/login',(req,res)=>{
        res.send(requestInfo.loginUser(req.body));
    });

    app.post('/auth/logout',(req,res)=>{
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            res.send(requestInfo.logoutUser({token:req.headers.authorization.split(' ')[1]}));
        }else{
            res.send({status:'Invalid token!'});
        }
    });

    app.post('/companies/register',(req,res)=>{
        res.send(requestInfo.insertInto('companies',[req.body]));
    });

    app.post('/products/register',(req,res)=>{
        res.send(requestInfo.insertInto('products',[req.body]));
    });

    app.post('/deposits/register',(req,res)=>{
        res.send(requestInfo.insertInto('deposits',[req.body]));
    });

    app.post('/payment/register',(req,res)=>{
        res.send(requestInfo.insertInto('payment',[req.body]));
    });

    app.post('/orders/register',(req,res)=>{
        // res.send(requestInfo.insertInto('orders',[req.body]));
        // res.send(requestInfo.create(req.headers.)
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            res.send(requestInfo.createOrder(req.headers.authorization.split(' ')[1],req.body));
        }else{
            res.send({status:'Invalid token!'});
        }
    });

    //PUT
    //here, for update, we use an object with value and where
    //value is an object that contains fields and desired values
    //where is an object that contains fields and values that show us where to change values

    app.put('/users/update',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.updateData('users',req.body));
        }
    });

    app.put('/companies/update',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.updateData('companies',req.body));
        }
    });

    app.put('/deposits/update',(req,res)=>{
        // if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
        //     res.send(requestInfo.updateData('deposits',req.body));
        // }
        res.send(requestInfo.updateData('deposits',req.body));
    });

    app.put('/products/update',(req,res)=>{
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            res.send(requestInfo.updateData('products',req.body));
        }
    });

    app.put('/payment/update',(req,res)=>{
        res.send(requestInfo.updateData('payment',req.body));
    });

    app.put('/orders/update',(req,res)=>{
        res.send(requestInfo.updateData('orders',req.body));
    });

    //DELETE

    app.delete('/users/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('users',req.body)); 
        }
    });

    app.delete('/companies/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('companies',req.body));
        }
    });

    app.delete('/deposits/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('deposits',req.body));
        }
    });

    app.delete('/products/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('products',req.body));
        }
    });

    app.delete('/payment/delete',(req,res)=>{
        res.send(requestInfo.deleteData('payment',req.body));
    });

    app.delete('/orders/delete',(req,res)=>{
        res.send(requestInfo.deleteData('orders',req.body));
    });

    //LISTEN

    app.listen(PORT,()=>{
        console.log(`Server running at: http://localhost:${PORT}/`);
    });
}
Server();