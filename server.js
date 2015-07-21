var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var chats = [];

app.use(express.static('client'));

io.on('connection', function (socket) {
  console.log('A user connected');
  socket.on('chat', function (chat) {
    console.log('got chat: ' + chat.message);
    chats.push(chat);
    socket.emit('chats', chats);
  });
});

var onlisten = function () {
  console.log('App listening on port 3000');
};

server.listen(3000, onlisten);