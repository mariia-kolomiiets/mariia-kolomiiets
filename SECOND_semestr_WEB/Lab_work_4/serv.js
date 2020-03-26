var express = require('express');
var app = express();//в этой переменной моя программа
var server = require('http').createServer(app);//здесь хранится сервер приложения
var io = require("socket.io").listen(server);

server.listen(8080); //устанавливаю порт который необходимо слушать
app.use(express.static("public"));


console.log("//server starting...");


io.sockets.on('connection', function(socket) { //срабатывает при конекте клиента
	console.log("...connected!");

	socket.on('new message', function(data) { //срабатывает при новом сообщении
		io.sockets.emit('resend messages', {user: data.user, newMessage: data.newMessage, messColor: data.messColor});
	});

	socket.on('disconnect', function(data) {//при дисконекте клиента
		console.log("!!!DISCONNECTED!!!");
	});

});
