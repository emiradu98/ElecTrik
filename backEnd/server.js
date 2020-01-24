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

    app.put('/users/update',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.updateData('users',req.body));
        }
    });

    app.delete('/users/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('users',req.body)); 
        }
    });

    app.post('/companies/register',(req,res)=>{
        // if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
        //     res.send(requestInfo.insertInto('companies',req.body));
        // }
        console.log(req.body);
        res.send(requestInfo.insertInto('companies',[req.body]));
    });

    app.put('/companies/update',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.updateData('companies',req.body));
        }
    });

    app.delete('/companies/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('companies',req.body));
        }
    });

    app.get('/companies/all',(req,res)=>{
        res.send(requestInfo.selectFrom('companies',req.body));
    });

    app.post('/deposits/register',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.register('deposits',req.body));
        }
    });

    app.get('/users/all',(req,res)=>{
        console.log(req.body);
        res.send(requestInfo.selectFrom('users',req.body));
    });

    app.put('/deposits/update',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.updateData('deposits',req.body));
        }
    });

    app.delete('/deposits/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('deposits',req.body));
        }
    });

    app.post('/products/register',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.register('products',req.body));
        }
    });

    app.put('/products/update',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.updateData('products',req.body));
        }
    });

    app.delete('/products/delete',(req,res)=>{
        if(requestInfo.isLogged(req.headers.authorization.split(' ')[1]) === true){
            res.send(requestInfo.deleteData('products',req.body));
        }
    });

    app.listen(PORT,()=>{
        console.log(`Server running at: http://localhost:${PORT}/`);
    });
}
Server();