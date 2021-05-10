const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.all('/testweb', testWeb);
http.createServer(app).listen(80);

function testWeb(req, res) {
    res.send('test');
}