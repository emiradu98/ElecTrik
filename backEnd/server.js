function Server(){
    const express = require('express');
    const bodyParser = require('body-parser');
    let reqOperations = require('./reqModule/requestOperations');
    // let userOperations = require('./reqModule/userOperations');
    // let companyOperations = require('./reqModule/companyOperations');
    // let companyInfo = new companyOperations();
    // let userInfo = new userOperations();
    let requestInfo = new reqOperations();
    

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const PORT = 80;

    app.post('/registerUser',(req,res)=>{
        res.send(requestInfo.register('users',req.body)); 
    });

    app.get('/login',(req,res)=>{
        // console.log(req.)
        res.send(requestInfo.loginUser(req.body));
    });

    app.post('/logout',(req,res)=>{
        console.log(req.headers.authorization.split(' ')[1]);
        res.send(requestInfo.logoutUser(req.body));
    });

    app.post('/updateUser',(req,res)=>{
        res.send(requestInfo.updateData('users',req.body));
    });

    app.post('/deleteUser',(req,res)=>{
        res.send(requestInfo.deleteData('users',req.body)); 
    });

    app.post('/registerCompany',(req,res)=>{
        res.send(requestInfo.register('companies',req.body));
    });

    app.post('/updateCompany',(req,res)=>{
        res.send(requestInfo.updateData('companies',req.body));
    });

    app.post('/deleteCompany',(req,res)=>{
        res.send(requestInfo.deleteData('companies',req.body));
    });

    app.post('/findCompany',(req,res)=>{
        res.send(requestInfo.selectFrom('companies',req.body));
    });

    app.post('/registerDeposit',(req,res)=>{
        res.send(requestInfo.register('deposits',req.body));
    });

    app.post('/updateDeposit',(req,res)=>{
        res.send(requestInfo.updateData('deposits',req.body));
    });

    app.post('/deleteDeposit',(req,res)=>{
        res.send(requestInfo.deleteData('deposits',req.body));
    });

    app.post('/registerProduct',(req,res)=>{
        res.send(requestInfo.register('products',req.body));
    });

    app.post('/updateProduct',(req,res)=>{
        res.send(requestInfo.updateData('products',req.body));
    });

    app.post('/deleteProduct',(req,res)=>{
        res.send(requestInfo.deleteData('products',req.body));
    });

    app.get('/findCompany',(req,res)=>{
        res.send(requestInfo.find('companies',req.body));
    });

    app.listen(PORT,()=>{
        console.log(`Server running at: http://localhost:${PORT}/`);
    });
}
Server();