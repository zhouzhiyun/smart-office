module.exports = function(){
	return function(socket, next){
		socket.on('join-room', function(data, fn){
			console.log('[join-room]', data);
			socket.join(data.roomId);
			fn();
		});		
		socket.on('p2p-obj', function(data){
			socket.to(data.roomId).emit('p2p-obj', data);
		});		
		next();
	}
	
}







