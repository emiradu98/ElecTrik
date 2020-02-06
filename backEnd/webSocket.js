const WebSocket = require('ws');
const wss = new WebSocket.Server({port:8079});

wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log('Received message => '+message);
    });
    ws.send(JSON.stringify({mesa:'Salut',rec:'Ionut'}));
});