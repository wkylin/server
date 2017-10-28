"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Express');
});
var server = app.listen(8000, 'localhost', function () {
    console.log('server run @ http://localhost:8000');
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', function (websocket) {
    websocket.send('这个消息是服务器主动推送的');
});
//# sourceMappingURL=auction-server.js.map