function Server(){
    const express = require('express');
    const bodyParser = require('body-parser');
    let userOperations = require('./usersModule/userOperations');
    let userInfo = new userOperations();

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const PORT = 80;

    // app.get('/pen',(req,res)=>{
    //     console.log(req.body);
    //     res.send('Hello World');
    // });

    // app.post('/pen2',(req,res)=>{
    //     console.log(req.body);
    //     res.send('Hello!');
    // });

    app.post('/registerUser',(req,res)=>{
        res.send(userInfo.registerUser(req.body)); 
    });

    app.get('/login',(req,res)=>{
        res.send(userInfo.loginUser(req.body));
    });

    app.post('/updateUser',(req,res)=>{
        res.send(userInfo.updateUserData(req.body));
    });

    app.post('/deleteUser',(req,res)=>{
        res.send(userInfo.deleteUser(req.body)); 
    });

    app.listen(PORT,()=>{
        console.log(`Server running at: http://localhost:${PORT}/`);
    });
}
Server();