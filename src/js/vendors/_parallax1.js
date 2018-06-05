// JavaScript Document

var bodyTop, images, imagesURL, imagesTops, imagesHeights, imagesCount, imagesFake;
var textSpecialHeight;

startParallax();

window.onresize = function() {
    resizingParallax();
};
resizingParallax();

window.onscroll = function() {
    resizingParallax();
    scrollingParallax();
}

function startParallax() {
    bodyTop = document.body.getBoundingClientRect().top;
    //containers
    var allContainers = document.getElementsByClassName("container");
    var allContainersBig = document.getElementsByClassName("container-big");
    var allContainersJumbo = document.getElementsByClassName("container-jumbo");
    var allContainersFull = document.getElementsByClassName("container-full");
    var allContainersAside = document.getElementsByClassName("container-aside");
    var allContainersOpacity = document.getElementsByClassName("container-opacity");

    /*var content = allContainers[0].children;
    var wrapper = document.createElement("div");
    wrapper.classList.add("container-stripe");
    allContainers[0].insertBefore(wrapper, content[0]);
    var contentLength = content.length;
    for (var j = 1; j < contentLength; j++) {
        wrapper.appendChild(content[1]);
    }*/

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
    //images
    images = document.getElementsByClassName("parallax-container");
    imagesCount = images.length;
    imagesTops = [];
    imagesHeights = [];
    imagesURL = [];
    for (var i = 0; i < imagesCount; i++) {
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 56;
        imagesURL[i] = images[i].children[0].children[0].getAttribute("data-source");
        if (images[i].classList.contains("container-aside")) {
            images[i].classList.add("parallax-aside");
            images[i].children[0].children[0].innerHTML = '<div class="parallax-aside-image">' + images[i].children[0].children[0].innerHTML + '</div><div class="parallax-image-fake"></div>';
        } else {
            //imagesURL[i] = images[i].childElementCount
            //console.log(images[i].children[0].children[0].getAttribute("image-source"));
            imagesHeights[i] = images[i].clientHeight;
            //console.log(images[i].children[0].children[0]);
            var pictureTag = images[i].children[0].children[0].children[0].innerHTML;
            images[i].children[0].children[0].children[0].innerHTML = pictureTag + pictureTag;
            images[i].children[0].children[0].children[0].children[0].classList.add("parallax-image");
            if (images[i].children[0].children[0].getAttribute("data-gallery") == "true") {
                images[i].children[0].children[0].children[0].children[2].classList.add("parallax-image-fake");
            } else {
                images[i].children[0].children[0].children[0].children[1].classList.add("parallax-image-fake");
            };
            //images[i].innerHTML = '<div class="container-stripe"><img class="parallax-image" src="' + imagesURL[i] + '"><img class="parallax-image-fake" src="' + imagesURL[i] + '"></div>';
            //images[i].innerHTML += '';
        }
    }
    imagesFake = document.getElementsByClassName("parallax-image-fake");
}

function resizingParallax() {
    bodyTop = document.body.getBoundingClientRect().top;
    for (var i = 0; i < imagesCount; i++) {

        if (images[i].classList.contains("container-aside")) {
            if (imagesTops[i] < window.pageYOffset - images[i].clientHeight + images[i].children[0].children[0].children[0].clientHeight) {
                images[i].children[0].children[0].classList.add("parallax-opacity-anim");
            } else {
                images[i].children[0].children[0].classList.remove("parallax-opacity-anim");
            }
            if (imagesTops[i] < window.pageYOffset) {
                images[i].children[0].children[0].classList.add("parallax-aside-fixed");
            } else {
                images[i].children[0].children[0].classList.remove("parallax-aside-fixed");
            }
        } else {
            if (images[i].classList.contains("specialImage")) {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight - textSpecialHeight) {
                    images[i].classList.add("parallax-opacity");
                } else {
                    images[i].classList.remove("parallax-opacity");
                }
            } else {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight) {
                    images[i].classList.add("parallax-opacity");
                } else {
                    images[i].classList.remove("parallax-opacity");
                }
            }
            if (imagesTops[i] < window.pageYOffset) {
                //images[i].firstChild.firstChild.classList.add("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.add("parallax-image-fixed");
                imagesFake[i].classList.add("parallax-image-fake-fixed");
                images[i].classList.add("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].firstChild.firstChild.firstChild.firstChild.style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            } else {
                //console.log(images[i].firstChild.firstChild, images[i].children[0].children[0]);
                //images[i].firstChild.firstChild.classList.remove("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.remove("parallax-image-fixed");
                imagesFake[i].classList.remove("parallax-image-fixed");
                images[i].classList.remove("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].firstChild.firstChild.firstChild.firstChild.style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            }
        }
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 56;
    }
}

function scrollingParallax() {
    //console.log(imagesTops[0], imagesHeights[0], window.pageYOffset)
    for (var i = 0; i < imagesCount; i++) {
        //console.log(imagesTops[i]+" +");
        if (images[i].classList.contains("container-aside")) {
            if (imagesTops[i] < window.pageYOffset - images[i].clientHeight + images[i].children[0].children[0].children[0].clientHeight) {
                images[i].children[0].children[0].classList.add("parallax-opacity-anim");
            } else {
                images[i].children[0].children[0].classList.remove("parallax-opacity-anim");
            }
            if (imagesTops[i] < window.pageYOffset) {
                //images[i].children[0].children[0].style.transform = "translateY("+Math.floor(window.pageYOffset-imagesTops[i])+"px)";
                images[i].children[0].children[0].classList.add("parallax-aside-fixed");
            } else {
                //images[i].children[0].children[0].style.transform = "translateY(0px)";
                images[i].children[0].children[0].classList.remove("parallax-aside-fixed");
            }
        } else {
            if (images[i].classList.contains("specialImage")) {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight - textSpecialHeight) {
                    images[i].classList.add("parallax-opacity");
                } else {
                    images[i].classList.remove("parallax-opacity");
                }
            } else {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight) {
                    images[i].classList.add("parallax-opacity");
                } else {
                    images[i].classList.remove("parallax-opacity");
                }
            }
            if (imagesTops[i] < window.pageYOffset) {
                //images[i].firstChild.firstChild.classList.add("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.add("parallax-image-fixed");
                imagesFake[i].classList.add("parallax-image-fake-fixed");
                images[i].classList.add("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].firstChild.firstChild.firstChild.firstChild.style.transform = "translateY(" + (imagesTops[i] - window.pageYOffset) / 2 + ")";
                }
            } else {
                //images[i].firstChild.firstChild.classList.remove("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.remove("parallax-image-fixed");
                imagesFake[i].classList.remove("parallax-image-fake-fixed");
                images[i].classList.remove("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY(0px)";
                    images[i].firstChild.firstChild.firstChild.firstChild.style.transform = "translateY(0px)";
                }
            }
        }
    }
}