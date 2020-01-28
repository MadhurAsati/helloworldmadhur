'use strict';
var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World and happy new year and Hello India Hello Pune and Pune is best , Happy me, Happy all\n');
}).listen(port);
