var allContainers = document.getElementsByClassName("container");
var allContainersBig = document.getElementsByClassName("container-big");
var allContainersJumbo = document.getElementsByClassName("container-jumbo");
var allContainersFull = document.getElementsByClassName("container-full");
var allContainersAside = document.getElementsByClassName("container-aside");
var allContainersOpacity = document.getElementsByClassName("container-opacity");

for (var i = 0; i < allContainers.length; i++) {
    var content = allContainers[i].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-stripe");
    allContainers[i].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }
    /*var content = allContainers[i].innerHTML;
    allContainers[i].innerHTML = "<div class=\"container-stripe\">" + content + "</div>";*/
}
for (var i = 0; i < allContainersBig.length; i++) {
    var content = allContainersBig[i].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-stripe");
    allContainersBig[i].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }
    /*var content = allContainersBig[i].innerHTML;
    allContainersBig[i].innerHTML = "<div class=\"container-stripe\">" + content + "</div>";*/
}
for (var i = 0; i < allContainersJumbo.length; i++) {
    var content = allContainersJumbo[i].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-stripe");
    allContainersJumbo[i].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }
    /*var content = allContainersJumbo[i].innerHTML;
    allContainersJumbo[i].innerHTML = "<div class=\"container-stripe\">" + content + "</div>";*/
}
for (var i = 0; i < allContainersFull.length; i++) {
    var content = allContainersFull[i].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-stripe");
    allContainersFull[i].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }
    /*var content = allContainersFull[i].innerHTML;
    allContainersFull[i].innerHTML = "<div class=\"container-stripe\">" + content + "</div>";*/
}
for (var i = 0; i < allContainersAside.length; i++) {
    var content = allContainersAside[i].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-stripe");
    allContainersAside[i].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }
    /*var content = allContainersAside[i].innerHTML;
    allContainersAside[i].innerHTML = "<div class=\"container-stripe\">" + content + "</div>";*/
}