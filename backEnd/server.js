function Server(){
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const PORT = 80;

    app.get('/pen',(req,res)=>{
        console.log(req.body);
        res.send('Hello World');
    });

    app.post('/pen2',(req,res)=>{
        console.log(req.body);
        res.send('Hello!');
    });

    app.listen(PORT,()=>{
        console.log(`Server running at: http://localhost:${PORT}/`);
    });
}
Server();