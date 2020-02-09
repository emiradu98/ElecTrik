let WebSocketServer = require('websocket').server;
let http = require('http');

let server = http.createServer(function(req,res){
    console.log('Receive request for ' + req.url);
    res.writeHead(404);
    res.end();
});
server.listen(80,function(){
    console.log('listeing at 80!');
});

wsServer = new WebSocketServer({
    httpServer:server,
    autoAcceptConnections:false
});

wsServer.on('request',function(req){
    let conn = req.accept();
    conn.on('message',function(message){
        console.log('Received message right now!');
        console.log(message);
    });
    conn.send(JSON.stringify({data:'ce?'}));
    conn.on('close',function(rC,descr){
        console.log('closed!');
    });
});