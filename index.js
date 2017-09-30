const express=require('express');
const app = express();
const server = require('http').Server(app);
const p2p = require('./socket.io-p2p.js');
const io = require('socket.io')(server);
app.use(express.static('dist'));
io.use(p2p());
server.listen(80,function(req, res){
	console.log('http://localhost:80');
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  
});