const WebSocket = require('ws');
let reqOperations = require('./reqModule/requestOperations');
let requestInfo = new reqOperations();

function call(){
    const wss = new WebSocket.Server({port:8079});
    wss.on('connection',(ws)=>{
        ws.on('message',(tok)=>{
            let userData = requestInfo.selectFrom('users',{token:tok});
            let newsFeed = requestInfo.selectFrom('payment',{receiver:userData.data[0].company_id});
            for(let i=0;i<newsFeed.data.length;i++){
                let dataObj = {};
                dataObj.subject = newsFeed.data[i].subject;
                dataObj.message = newsFeed.data[i].message;
                ws.send(JSON.stringify(dataObj));
            }
        });
    });
}
//la conectarea din partea clientului, socket-ul va cauta sa vada anunturile si i le va trimite

call();