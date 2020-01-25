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
        res.send(requestInfo.selectFromProducts(req.body));
    });

    app.get('/deposits/all',(req,res)=>{
        res.send(requestInfo.selectFrom('deposits',req.body));
    });

    app.get('/companies/all',(req,res)=>{
        res.send(requestInfo.selectFrom('companies',req.body));
    });

    app.get('/products/stocks',(req,res)=>{
        if(req.headers.authorization === undefined){
            res.send({status:'You must be logged in!'});
        }
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            res.send(requestInfo.stockSelect(req.headers.authorization.split(' ')[1],req.body));
        }else{
            res.send({status:'Invalid token!'});
        }
    });

    app.get('/users/all',(req,res)=>{
        res.send(requestInfo.selectFrom('users',req.body));
    });

    app.get('/payment/all',(req,res)=>{
        
    });

    app.get('/orders/all',(req,res)=>{
        res.send(requestInfo.selectFrom('orders',req.body));
    });

    //POST

    app.post('/auth/register',(req,res)=>{
        res.send(requestInfo.register('users',req.body)); 
    });

    app.post('/auth/login',(req,res)=>{
        res.send(requestInfo.loginUser(req.body));
    });

    app.post('/auth/logout',(req,res)=>{
        if(requestInfo.isLogged({token:req.headers.authorization.split(' ')[1]}) === true){
            res.send(requestInfo.logoutUser(req.body));
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
        res.send(requestInfo.insertInto('orders',[req.body]));
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
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
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