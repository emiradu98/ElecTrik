const WebSocket = require('ws');

function call(){
    const wss = new WebSocket.Server({port:8079});
    wss.on('connection',(ws)=>{
        ws.on('message',(message)=>{
            console.log('Received message => '+message);
        });
        ws.send(JSON.stringify({mesa:'Salut',rec:'Ionut'}));
    });
}
//la conectarea din partea clientului, socket-ul va cauta sa vada anunturile si i le va trimite

call();