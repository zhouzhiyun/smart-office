
import io from 'socket.io-client';

function P2P(options){
	let _this = this;
	_this.roomId = options.roomId;

	let socket = io.connect();
	_this.socket = socket;
	
	socket.on('connect', function(){
		socket.emit('join-room', {id: socket.id, roomId: _this.roomId}, function(){
			let fn = _this['on' + 'connect'];
			if(typeof(fn) == 'function'){
				fn();
			}
		});
	});
	
	socket.on('disconnect', function(){
		let fn = _this['on' + 'disconnect'];
		if(typeof(fn) == 'function'){
			fn();
		}
	});
	
	socket.on('p2p-obj', function(obj){
		let msg = obj.data;
		let fn = _this['on' + msg.ev];
		if(typeof(fn) == 'function'){
			fn(msg.data);
		}
	});
	
}

P2P.prototype.on = function(ev, cb){
	if(typeof(ev) != 'undefined' && typeof(cb) == 'function'){
		this['on' + ev] = cb;
	}
}

P2P.prototype.emit = function(ev, data){
	if(typeof(ev) != 'undefined'){
		this.socket.emit('p2p-obj', {
			roomId: this.roomId,
			data: {
				ev: ev,
				data: data
			}
		});
	}
}

P2P.prototype.exit = function(){
	this.socket.close();
}


export default P2P;