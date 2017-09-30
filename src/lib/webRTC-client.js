
import P2P from './socket.io-p2p-client.js';
import 'webrtc-adapter/out/adapter.js';
import async from 'async';
const pc_config = {"iceServers": [
						{"urls": "stun:47.93.11.214"},
						{"urls":"turn:hack@47.93.11.214", "credential":"r00tme","username":"hack"}
						]
				};

function RTC(options){
	this.roomId = options.roomId;
	this.el = options.el;
	this.constraints = options.constraints;
}

RTC.prototype.call = function(fn){
	let _this = this;
	
	async.series([
		function(cb){
			let p2p = new P2P({roomId: _this.roomId});
			_this.p2p = p2p;
			p2p.on('connect', function(){
				console.log('------1-------');
				cb(0);
			});
		},
		function(cb){
			console.log('-------2------');
			let y = navigator.mediaDevices;
			if(typeof(y) != 'undefined' && 
			   typeof(y.getUserMedia) == 'function' &&
			   typeof(_this.constraints) != 'undefined' ){
				   
				y.getUserMedia(_this.constraints)
					.then(function(e){
						_this.stream = e;
						cb(0);
					})
					.catch(function(e){
						// cb(0);
					});
				
			}else{
				cb(0);
			}
		},
		function(cb){
			console.log('-------3------');
			let pc = new RTCPeerConnection(pc_config);
			_this.pc = pc;
			if(typeof(_this.stream) != 'undefined'){
				_this.stream.getTracks().forEach(
				function(track) {
				  pc.addTrack(
					track,
					_this.stream
				  );
				}
			  );
			}
			
			let dc = pc.createDataChannel('dc');
			_this.dc = dc;
			dc.onopen = function () {
				console.log('CreateDataChannel success');
			}
			dc.onclose = function () {
				console.log('DataChannel has closed');
				if( typeof(_this['onhang-up']) == 'function'){
					_this['onhang-up']();
				}
			}
			dc.onmessage = function(ev) {
				if( typeof(_this['ondata']) == 'function'){
					_this['ondata'](ev.data);
				}
				try{
					let d = JSON.parse(ev.data);
					let fb = _this['on' + d.ev];
					if(typeof(fb) == 'function'){
						fb(d.data);
					}
				}catch(e){
					
				}
			};
			pc.oniceconnectionstatechange  = function(e){
				console.log('Ice connection state: ' + pc.iceConnectionState);
				let y = pc.iceConnectionState;
				if(y == 'new'){
					
				}else if(y == 'checking'){
					
				}else if(y == 'connected'){
					if( typeof(_this['onready']) == 'function'){
						_this['onready']();
					}
				}else if(y == 'completed'){
					
				}else if(y == 'failed'){
					
				}else if(y == 'disconnected'){
					if( typeof(_this['onhang-up']) == 'function'){
						_this['onhang-up']();
					}
				}else if(y == 'closed'){
					
				}
			}
			
			pc.ontrack = function (ev) { 
				console.log('Received remote stream');
				if(_this.el){
					_this.el.srcObject = ev.streams[0];
				}
			}
			
			pc.onicecandidate = function(ev){
				if (ev.candidate){
					 console.log('-----cands---->---------');
					 _this.p2p.emit('ice-cands', {cands: ev.candidate});
				}
			}
			
			let config = {    
				offerToReceiveAudio: 1,
				offerToReceiveVideo: 1
			}
			
			pc.createOffer(config).then(function (desc) {    
					pc.setLocalDescription(desc).then(function () {
						console.log('SetLocalDescription success!');
						console.log('-----offer---->---------');
						_this.p2p.emit('ice-offer',{offer: desc});
						
					},function (e) {
						console.log('Failed to set session description:' + e.toString());
					 });
				},function (e) {
					console.log('Failed to create session description:' + e.toString());
				}
			);
			
			_this.p2p.on('ice-answer', function(data){
				console.log('-----answer----<--------');
				pc.setRemoteDescription(data.answer).then(
					function() {
						console.log('SetRemoteDescription success');
					},
					function(e){
						console.log('Failed to set session description: ' + e.toString());
					}
				);
			});
			
			_this.p2p.on('ice-cands', function(data){
				console.log('-----cands----<--------');
				pc.addIceCandidate(new RTCIceCandidate(data.cands)).then(
					function() {
						console.log('AddIceCandidate success');
					},
					function(e) {
						console.log('Failed to add ICE Candidate: ' + e.toString());
					}
				);
			});
			
			cb(0);
		}
		
	], function(e, results){
		console.log('-------4------');
		fn();
	});

}

RTC.prototype.wait = function(fn){
	let _this = this;
	
	async.series([
		function(cb){
			let p2p = new P2P({roomId: _this.roomId});
			_this.p2p = p2p;
			p2p.on('connect', function(){
				console.log('-------1-------');
				cb(0);
			});
		},
		function(cb){
			console.log('-------2------');
			let y = navigator.mediaDevices;
			if(typeof(y) != 'undefined' && 
			   typeof(y.getUserMedia) == 'function' &&
			   typeof(_this.constraints) != 'undefined' ){
				   
				y.getUserMedia(_this.constraints)
					.then(function(e){
						_this.stream = e;
						cb(0);
					})
					.catch(function(e){
						// cb(0);
					});
				
			}else{
				cb(0);
			}
		},
		function(cb){
			console.log('--------3--------');
			let pc = new RTCPeerConnection(pc_config);
			_this.pc = pc;
			if(typeof(_this.stream) != 'undefined'){
				_this.stream.getTracks().forEach(
				function(track) {
				  pc.addTrack(
					track,
					_this.stream
				  );
				}
			  );
			}
			
			pc.ondatachannel = function (ev) {
				let dc = ev.channel;
				_this.dc = dc;
				dc.onopen = function () {
					console.log('CreateDataChannel success');
				}

				dc.onclose = function () {
					console.log('DataChannel has closed');
					if( typeof(_this['onhang-up']) == 'function'){
						_this['onhang-up']();
					}
				}
				
				dc.onmessage = function(ev) {
					if( typeof(_this['ondata']) == 'function'){
						_this['ondata'](ev.data);
					}
					try{
						let d = JSON.parse(ev.data);
						let fb = _this['on' + d.ev];
						if(typeof(fb) == 'function'){
							fb(d.data);
						}
					}catch(e){
						
					}
				};
			}
			
			pc.oniceconnectionstatechange  = function(e){
				console.log('Ice connection state: ' + pc.iceConnectionState);
				let y = pc.iceConnectionState;
				if(y == 'new'){
					
				}else if(y == 'checking'){
					
				}else if(y == 'connected'){
					if( typeof(_this['onready']) == 'function'){
						_this['onready']();
						
					}
				}else if(y == 'completed'){
					
				}else if(y == 'failed'){
					
				}else if(y == 'disconnected'){
					if( typeof(_this['onhang-up']) == 'function'){
						_this['onhang-up']();
					}
					
				}else if(y == 'closed'){
					
				}
			}
			
			pc.ontrack = function (ev) { 
				console.log('Received remote stream');
				if(_this.el){
					_this.el.srcObject = ev.streams[0];
				}
			}
			
			pc.onicecandidate = function(ev){
				if (ev.candidate){
					 console.log('-----cands---->---------');
					 _this.p2p.emit('ice-cands', {cands: ev.candidate});
				}
			}
			
			_this.p2p.on('ice-offer', function(data){
				console.log('-----offer----<---------');
				pc.setRemoteDescription(data.offer);
				pc.createAnswer().then(
					function(desc){
						pc.setLocalDescription(desc).then(
							function() {
								console.log('SetLocalDescription success');
								_this.p2p.emit('ice-answer',{answer: desc});
								console.log('-----answer---->---------', _this.roomId);
							},
							function(e){
								console.log('Failed to set session description: ' + e.toString());
							}
						);
					},
					function(e){
						console.log('Failed to create session description: ' + e.toString());
					}
				);
			});
			
			_this.p2p.on('ice-cands', function(data){
				console.log('-----cands----<---------');
				pc.addIceCandidate(new RTCIceCandidate(data.cands)).then(
					function() {
						console.log('AddIceCandidate success');
					},
					function(e) {
						console.log('Failed to add ICE Candidate: ' + e.toString());
					}
				);
			});
			
			cb(0);
		}
		
	], function(e, results){
		console.log('--------4----------');
		fn();
	});
}

RTC.prototype.exit = function(){
	if(this.p2p){
		this.p2p.exit();
		this.p2p = null;
	}
	if(this.el){
		this.el.srcObject = null;
		this.el = null;
	}
	if(this.pc){
		let streams = this.pc.getLocalStreams();
		for (let stream of streams) {
			let tracks = stream.getTracks();
			for (let track of tracks) {
				
			}
		}
		if(this.pc.iceConnectionState == 'connected' ||
		   this.pc.iceConnectionState == 'completed' ){
			   this.pc.close();
		}
		this.pc = null;
	}
}

RTC.prototype.send = function(data){
	if(this.dc && this.dc.readyState == 'open'){
        this.dc.send(data);
    }
}

RTC.prototype.on = function(ev, fn){
	if( typeof(ev) != 'undefined' && typeof(fn) == 'function' ){
		this['on' + ev] = fn;
	}
}

RTC.prototype.emit = function(ev, data){
	if(typeof(ev) != 'undefined'){
		let y = {
			ev: ev,
			data: data
		};
		this.send(JSON.stringify(y));
	}
}

export default RTC;
