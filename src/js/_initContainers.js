var allContainers = document.getElementsByClassName("container");
var allContainersBig = document.getElementsByClassName("container-big");
var allContainersJumbo = document.getElementsByClassName("container-jumbo");
var allContainersFull = document.getElementsByClassName("container-full");
var allContainersAside = document.getElementsByClassName("container-aside");
var allContainersOpacity = document.getElementsByClassName("container-opacity");

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