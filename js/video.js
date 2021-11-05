var video = document.querySelector("#player1");
var muted = false;

window.addEventListener("load", function () {
	video.load();
	console.log("Good job opening the window")
});

document.getElementById('play').addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById('slider').value = 100;
	document.getElementById('volume').innerHTML = slider.value + "%";

});

document.getElementById('pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.getElementById('slower').addEventListener("click", function () {
	video.playbackRate -= 0.05;
	console.log("Video speed is " + video.playbackRate);
});

document.getElementById('faster').addEventListener("click", function () {
	video.playbackRate += 0.05;
	console.log("Video speed is " + video.playbackRate);
});

document.getElementById('skip').addEventListener("click", function () {
	video.currentTime += 15;
	console.log("Current location: " + video.currentTime)
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
    }
});

document.getElementById('mute').addEventListener("click", function () {
	if (!muted) {
		video.volume = 0;
		console.log("Mute Video");
		muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
		document.getElementById('slider').value = 0;
		document.getElementById('volume').innerHTML = slider.value + "%";
	}
	else {
		document.getElementById('mute').innerHTML = "Mute"
		console.log("Unmute Video");
		video.volume = 1;
		muted = false;
		document.getElementById('slider').value = 100;
		document.getElementById('volume').innerHTML = slider.value + "%";
	}
});

document.getElementById('slider').addEventListener("change", function () {
	video.volume = (document.getElementById('slider').value) / 100;
	console.log("Volume is: " + video.volume);
	document.getElementById('volume').innerHTML = slider.value + "%";
});

document.getElementById('vintage').addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Old School effect added")
});

document.getElementById('orig').addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Old School effect removed")
});