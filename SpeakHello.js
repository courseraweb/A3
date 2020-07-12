(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	window.helloSpeaker = helloSpeaker;
	helloSpeaker.speak = function (name) {
	  	console.log(speakWord + " " + name);
	}

})(window);
