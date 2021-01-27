var url = document.URL;
var video = document.getElementById('video');
video.oncanplay = function(){
	document.title = url.split('://')[2] + '(' + video.videoWidth + 'x' + video.videoHeight + ')';
}

if(Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(url.split('#')[1]);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
		video.play();
	});
}

function hms(s) {
	var h = Math.floor(s/3600);
	var m = Math.floor(s/60 - h*60);
	var s1 = Math.floor(s - h*3600 - m*60);
	var hh = h<10?'0'+h:''+h;
	var mm = m<10?'0'+m:''+m;
	var ss = s1<10?'0'+s1:''+s1;
	var hms1 = hh + mm + ss;
	return hms1;
}