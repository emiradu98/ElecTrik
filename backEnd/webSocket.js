const WebSocket = require('ws');

function call(){
    const wss = new WebSocket.Server({port:8079});
    wss.on('connection',(ws)=>{
        ws.on('message',(message)=>{
            ws.send(message);
        });
    });
}
//la conectarea din partea clientului, socket-ul va cauta sa vada anunturile si i le va trimite

call();