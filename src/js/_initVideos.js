// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

var videoContainers = document.getElementsByClassName("video");

for (var i = 0; i < videoContainers.length; i++) {
    if (videoContainers[i].getAttribute("data-type") === "link") {
        //videoContainers[i].classList.add("videoPlyr");
        var videoURL = videoContainers[i].getAttribute("data-video-id");
        var videoMobileURL = videoContainers[i].getAttribute("data-video-mobile");
        var videoPoster = videoContainers[i].getAttribute("data-video-poster");
        videoContainers[i].removeAttribute("data-video-id");
        var newVideoNode = document.createElement("video");
        //newVideoNode.setAttribute("class", "videoPlyr");
        newVideoNode.setAttribute("controls", "controls");
        newVideoNode.setAttribute("playsinline", "");
        newVideoNode.setAttribute("preload", "none");
        if(videoPoster != "" || videoPoster != undefined || videoPoster != null) {
            newVideoNode.setAttribute("poster", videoPoster);
        }
        var newSourceNode = document.createElement("source");
        newSourceNode.setAttribute("src", videoURL);
        newSourceNode.setAttribute("type", "video/mp4");
        videoContainers[i].appendChild(newVideoNode);
        if(videoMobileURL == "" || videoMobileURL == undefined || videoMobileURL == null){
            newVideoNode.appendChild(newSourceNode);
        }else{
            var newSourceMobileNode = document.createElement("source");
            newSourceMobileNode.setAttribute("src", videoMobileURL);
            newSourceMobileNode.setAttribute("type", "video/mp4");
            if (document.documentElement.clientWidth <= 568) {
                newVideoNode.appendChild(newSourceMobileNode);
            }else{
                newVideoNode.appendChild(newSourceNode);
                newVideoNode.appendChild(newSourceMobileNode);
            }
        }
        videoContainers[i].classList.add("videoLink");
    /*}else if(videoContainers[i].getAttribute("data-type") === "pangeaEmbed"){
        var videoURL = videoContainers[i].getAttribute("data-video-id");
        var videoMobileURL = videoContainers[i].getAttribute("data-video-mobile");
        var videoPoster = videoContainers[i].getAttribute("data-video-poster");
        videoContainers[i].removeAttribute("data-video-id");
        var newVideoNode = "<iframe class=\"videoPangea\" src=\"https://www.rferl.org/embed/player/0/"+videoURL+".html?type=video\" frameborder=\"0\" scrolling=\"no\" width=\"640\" height=\"360\" allowfullscreen></iframe>";
        videoContainers[i].innerHTML = newVideoNode;*/
    }else{
        videoContainers[i].classList.add("videoPlyr");
    }
}

var audioContainers = document.getElementsByClassName("audio");

for (var i = 0; i < audioContainers.length; i++) {
    if (audioContainers[i].getAttribute("data-type") != null || audioContainers[i].getAttribute("data-type") != undefined) {
        audioContainers[i].removeAttribute("data-type");
    }
    var audioURL = audioContainers[i].getAttribute("data-audio-id");
    audioContainers[i].removeAttribute("data-audio-id");
    var newAudioNode = document.createElement("audio");
    newAudioNode.setAttribute("controls", "controls");
    var newSourceNode = document.createElement("source");
    newSourceNode.setAttribute("src", audioURL);
    newSourceNode.setAttribute("type", "audio/mp3");
    audioContainers[i].appendChild(newAudioNode);
    newAudioNode.appendChild(newSourceNode);
}
//var player = new Plyr(videoContainers);
//var videoInstances = plyr.setup(".video");
var videoInstancesExternal = plyr.setup(".videoPlyr");
var videoInstances = document.getElementsByClassName("videoLink");

for (var i = 0; i < videoInstances.length; i++){
    videoInstances[i].setAttribute("xmlid", i);
    videoInstances[i].children[0].onplay = videosPause;
};
function videosPause(){
    for(var j = 0; j < videoInstances.length; j++){
        if(j != this.parentNode.getAttribute("xmlid")){
            //console.log(this.parentNode.getAttribute("xmlid"), videoInstances[j]);
            videoInstances[j].children[0].pause();
        }
    }
}

/*for (var i = 0; i < videoInstances.length; i++) {
    videoInstances[i].getContainer().setAttribute("xmlid", i);
    videoInstances[i].on("playing", function() {
        for (var j = 0; j < videoInstances.length; j++) {
            if (j != this.getAttribute("xmlid")) {
                videoInstances[j].pause();
            }
            //if (videoInstances[i].getContainer().classList.contains("plyr--playing")) {
                //videoInstances[i].pause();
            //}
        }
    });
};*/
var audioInstances = plyr.setup(".audio");
for (var i = 0; i < audioInstances.length; i++) {
    audioInstances[i].getContainer().setAttribute("xmlid", i);
    audioInstances[i].on("playing", function() {
        for (var j = 0; j < audioInstances.length; j++) {
            if (j != this.getAttribute("xmlid")) {
                audioInstances[j].pause();
            }
        }
    });
};

var videoEmbedded = document.getElementsByTagName("iframe");
var videoAspects = [];
function startVideoEmbedded(){
    for(var i = 0; i < videoEmbedded.length; i++){
        videoAspects[i] = videoEmbedded[i].getAttribute("width")/videoEmbedded[i].getAttribute("height");
        videoEmbedded[i].setAttribute("width", videoEmbedded[i].parentNode.getBoundingClientRect().width);
        videoEmbedded[i].setAttribute("height", videoEmbedded[i].clientWidth/videoAspects[i]);
    }
}
if(videoEmbedded.length>0){
    window.addEventListener("resize", function(){
        resizeVideoEmbedded();
    });
}
function resizeVideoEmbedded(){
    videoEmbedded[i].setAttribute("width", videoEmbedded[i].parentNode.getBoundingClientRect().width);
    videoEmbedded[i].setAttribute("height", videoEmbedded[i].clientWidth/videoAspects[i]);
}
