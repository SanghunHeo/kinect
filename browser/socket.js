var io = require('socket.io').listen(4040);

io.sockets.on('connection', function(socket) {
    console.log("- on connection");
    console.log(socket);
    socket.emit('ready');
    
    // socket.on('set nickname', function(name) {
    //     socket.set('nickname', name, function() {
    //         socket.emit('ready');
    //     });
    // });

    // socket.on('msg', function() {
    //     socket.get('nickname', function(err, name) {
    //         console.log('Chat message by ', name);
    //     });
    // });
});