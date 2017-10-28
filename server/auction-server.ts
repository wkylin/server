import * as express from 'express';

import {Server} from 'ws';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello Express');
});
const server = app.listen(8000, 'localhost', ()=>{
    console.log('server run @ http://localhost:8000');
})

const wsServer = new Server({port:8085});
wsServer.on('connection', websocket => {
    websocket.send('这个消息是服务器主动推送的');
})