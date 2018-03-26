// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

var videoContainers = document.getElementsByClassName("video");

for(var i=0; i<videoContainers.length; i++){
  if(videoContainers[i].getAttribute("data-type")==="pangea"){
    var videoURL = videoContainers[i].getAttribute("data-video-id");
    var videoPoster = videoContainers[i].getAttribute("data-video-poster");
    videoContainers[i].removeAttribute("data-video-id");
    var newVideoNode = document.createElement("video");
    newVideoNode.setAttribute("controls", "controls");
    newVideoNode.setAttribute("poster", videoPoster);
    var newSourceNode = document.createElement("source");
    newSourceNode.setAttribute("src",videoURL);
    newSourceNode.setAttribute("type", "video/mp4");
    videoContainers[i].appendChild(newVideoNode);
    newVideoNode.appendChild(newSourceNode);
  }
}

var audioContainers = document.getElementsByClassName("audio");

for(var i=0; i<audioContainers.length; i++){
  if(audioContainers[i].getAttribute("data-type")!=null||audioContainers[i].getAttribute("data-type")!=undefined){
    audioContainers[i].removeAttribute("data-type");
    }
  var audioURL = audioContainers[i].getAttribute("data-audio-id");
  audioContainers[i].removeAttribute("data-audio-id");
  var newAudioNode = document.createElement("audio");
  newAudioNode.setAttribute("controls","controls");
  var newSourceNode = document.createElement("source");
  newSourceNode.setAttribute("src",audioURL);
  newSourceNode.setAttribute("type","audio/mp3");
  audioContainers[i].appendChild(newAudioNode);
  newAudioNode.appendChild(newSourceNode);
}
