const express = require('express');
const http = require('http');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running on localhost`));