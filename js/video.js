 var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	var vol= document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
  video.playbackRate=1;
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
    video.playbackRate=video.playbackRate*.8;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
  video.playbackRate=video.playbackRate*1.25;
	console.log("Speed is " + video.playbackRate); } 

function skipAhead() {
  if (video.ended){
    video.currentTime=0;
    video.playbackRate=1;}
  else{
    video.currentTime=video.currentTime + 60;
  }
  console.log("Current location is "+ video.currentTime);
} 

function mute() {
  var vol2= document.querySelector("#mute");
  	if (video.muted){
  		video.muted=false;
  		vol2.innerHTML='mute';
  		console.log("changing to Unmuted");
  	}
  	else{
  		video.muted=true;
      vol2.innerHTML='unmute';
      console.log("Changing to muted")};
  	}
  	

function changeVolume() {
  var volume= document.querySelector("#volumeSlider").value/100;
  video.volume=volume; 
  document.querySelector('#volume').innerHTML=video.volume*100 + '%';
  console.log("Volume is " +video.volume*100);

}
       

function gray() { 
  video.classList.toggle("grayscale");
  console.log("In grayscale");
}

function color() {
  video.classList.toggle("grayscale");
	console.log("In color");
}
