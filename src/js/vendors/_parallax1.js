// JavaScript Document

var bodyTop, images, imagesURL, imagesTops, imagesHeights, imagesCount, imagesFake;
var textSpecialHeight;

if (parallaxConfig.parallax == true) {
    startParallax();
    window.addEventListener("resize", function() {
        resizingParallax();
    });
    resizingParallax();

    window.addEventListener("scroll", function() {
        resizingParallax();
        scrollingParallax();
    });
}
/*window.onresize = function() {
    resizingParallax();
};
resizingParallax();
window.onscroll = function() {
    resizingParallax();
    scrollingParallax();
}*/

function startParallax() {
    bodyTop = document.body.getBoundingClientRect().top;
    //images
    images = document.getElementsByClassName("parallax-container");
    imagesCount = images.length;
    imagesTops = [];
    imagesHeights = [];
    imagesURL = [];
    for (var i = 0; i < imagesCount; i++) {
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 65;
        imagesURL[i] = images[i].children[0].children[0].getAttribute("data-source");
        if (images[i].classList.contains("container--aside")) {
            images[i].classList.add("parallax-aside");
            var content = images[i].children[0].children[0].children;
            var wrapper = document.createElement("div");
            wrapper.classList.add("parallax-aside-image");
            images[i].children[0].children[0].insertBefore(wrapper, content[0]);
            var contentLength = content.length;
            for (var j = 0; j < contentLength; j++) {
                wrapper.appendChild(content[1]);
            };
            //images[i].children[0].children[0].innerHTML = '<div class="parallax-aside-image">' + images[i].children[0].children[0].innerHTML + '</div><div class="parallax-image-fake"></div>';
        } else {
            //imagesURL[i] = images[i].childElementCount
            imagesHeights[i] = images[i].clientHeight;
            var pictureTag = images[i].children[0].children[0].children[0].children[0].cloneNode(true);
            images[i].children[0].children[0].children[0].appendChild(pictureTag);
            images[i].children[0].children[0].children[0].children[0].classList.add("parallax-image");
            if (images[i].children[0].children[0].getAttribute("data-gallery") == "true") {
                images[i].children[0].children[0].children[0].children[2].classList.add("parallax-image-fake");
            } else {
                images[i].children[0].children[0].children[0].children[1].classList.add("parallax-image-fake");
            };
            images[i].children[0].children[0].children[1].classList.add("parallax-opacity");
        };
    };
    imagesFake = document.getElementsByClassName("parallax-image-fake");
}

function resizingParallax() {
    bodyTop = document.body.getBoundingClientRect().top;
    for (var i = 0; i < imagesCount; i++) {

        if (images[i].classList.contains("container--aside")) {
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
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            } else {
                //console.log(images[i].firstChild.firstChild, images[i].children[0].children[0]);
                //images[i].firstChild.firstChild.classList.remove("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.remove("parallax-image-fixed");
                imagesFake[i].classList.remove("parallax-image-fixed");
                images[i].classList.remove("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            }
        }
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 65;
    }
}

function scrollingParallax() {
    for (var i = 0; i < imagesCount; i++) {
        if (images[i].classList.contains("container--aside")) {
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
                images[i].children[0].children[0].children[0].children[0].classList.add("parallax-image-fixed");
                imagesFake[i].classList.add("parallax-image-fake-fixed");
                images[i].classList.add("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + (imagesTops[i] - window.pageYOffset) / 2 + ")";
                }
            } else {
                images[i].children[0].children[0].children[0].children[0].classList.remove("parallax-image-fixed");
                imagesFake[i].classList.remove("parallax-image-fake-fixed");
                images[i].classList.remove("parallax-background");
                if (parallaxConfig.dynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY(0px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(0px)";
                }
            }
        }
    }
}