
document.getElementById("myConsole").innerHTML += ", start initContainers";
var allContainers = document.getElementsByClassName("container");
var allContainersBig = document.getElementsByClassName("container--big");
var allContainersJumbo = document.getElementsByClassName("container--jumbo");
var allContainersFull = document.getElementsByClassName("container--full");
var allContainersAside = document.getElementsByClassName("container--aside");
var allContainersAsideBig = document.getElementsByClassName("container--aside--big");
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
for(var i = 0; i < allContainersAsideBig.length; i++){
    if(!allContainersAsideBig[i].classList.contains("scroll--contaier")){
        var innerContainer = allContainersAsideBig[i].querySelectorAll(".container-inner")[0];
        var innerAsideBigFigures = innerContainer.querySelectorAll("figure");
        for(var j = 0; j < innerAsideBigFigures.length; j ++){
            var newNode = document.createElement("div");
            newNode.style.clear = "both";
            innerAsideBigFigures[j].parentNode.insertBefore(newNode, innerAsideBigFigures[j]);
            if(window.innerWidth > 796){
                innerAsideBigFigures[j].style.width = (document.documentElement.clientWidth - 640) / 2 + 280 + "px";
                innerAsideBigFigures[j].style.marginLeft = - ((document.documentElement.clientWidth - 640) / 2 - 20) + "px";
                innerAsideBigFigures[j].style.transform = "translateX(" + (document.documentElement.clientWidth - 640) / 2 + "px)";
            }else if (window.innerWidth > 640 && window.innerWidth <= 796){
                innerAsideBigFigures[j].style.width = "350px";
                innerAsideBigFigures[j].style.marginLeft = "20px";
                innerAsideBigFigures[j].style.transform = "translateX(0px)";
            }else{
                innerAsideBigFigures[j].style.width = "100%";
                innerAsideBigFigures[j].style.marginLeft =  "0px";
                innerAsideBigFigures[j].style.transform = "translateX(0px)";
            }
        }
    }
}

var allLinks = document.getElementById("main").querySelectorAll("a");
for(var i = 0; i < allLinks.length; i++) {
    allLinks[i].setAttribute("target", "_blank");
}
document.getElementById("myConsole").innerHTML += ", end initContainers";
