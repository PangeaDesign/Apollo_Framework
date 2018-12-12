var allContainers = document.getElementsByClassName("container");
var allContainersBig = document.getElementsByClassName("container--big");
var allContainersJumbo = document.getElementsByClassName("container--jumbo");
var allContainersFull = document.getElementsByClassName("container--full");
var allContainersAside = document.getElementsByClassName("container--aside");
var allContainersOpacity = document.getElementsByClassName("container--opacity");

for (var i = 0; i < allContainers.length; i++) {
    var content = allContainers[i].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-inner");
    allContainers[i].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }
    /*var content = allContainers[i].innerHTML;
    allContainers[i].innerHTML = "<div class=\"container-stripe\">" + content + "</div>";*/
}
/*containerAside figures clear*/
for(var i = 0; i < allContainersAside.length; i++){
    if(!allContainersAside[i].classList.contains("scroll--container")){
        var innerContainer = allContainersAside[i].querySelectorAll(".container-inner")[0];
        var innerAsideFigures = innerContainer.querySelectorAll("figure");
        for(var j = 0; j < innerAsideFigures.length; j ++){
          var newNode = document.createElement("div");
          newNode.style.clear = "both";
          innerAsideFigures[j].parentNode.insertBefore(newNode, innerAsideFigures[j]);
        }
    }
}

var allLinks = document.getElementById("main").querySelectorAll("a");
for(var i = 0; i < allLinks.length; i++) {
    allLinks[i].setAttribute("target", "_blank");
}
