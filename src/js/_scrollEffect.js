// JavaScript Document

var bodyTop, images, imagesURL, imagesTops, imagesHeights, imagesCount, imagesFake;
var imagesAside = [];
var textSpecialHeight;

if (scrollEffectConfig.scrollEffect == true) {
    startScrollEffect();
    window.addEventListener("resize", function() {
        resizingScrollEffect();
    });
    resizingScrollEffect();

    window.addEventListener("scroll", function() {
        resizingScrollEffect();
        scrollingScrollEffect();
    });
} else {
    var images = document.getElementsByClassName("scroll-container");
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("scroll-container");
    }
    startScrollEffect();
}
/*window.onresize = function() {
    resizingParallax();
};
resizingParallax();
window.onscroll = function() {
    resizingParallax();
    scrollingParallax();
}*/

function startScrollEffect() {
    bodyTop = document.body.getBoundingClientRect().top;
    //images
    images = document.getElementsByClassName("scroll-container");
    imagesCount = images.length;
    imagesTops = [];
    imagesHeights = [];
    imagesURL = [];
    for (var i = 0; i < imagesCount; i++) {
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 65;
        imagesURL[i] = images[i].children[0].children[0].getAttribute("data-source");
        if (images[i].classList.contains("container--aside")) {
            images[i].classList.add("scroll-aside");
            var content = images[i].children[0].children;
            var wrapper = document.createElement("div");
            wrapper.classList.add("scroll-aside-image");
            images[i].children[0].insertBefore(wrapper, content[0]);
            imagesAside[i] = images[i].children[0].getElementsByTagName("figure");
            var imagesAsideLength = imagesAside[i].length;
            for (var j = 0; j < imagesAsideLength; j++) {
                //console.log(j, wrapper, imagesAside[j])
                wrapper.appendChild(imagesAside[i][j]);
                if (j > 0) {
                    imagesAside[i][j].classList.add("scroll-opacity-anim");
                }
            };

            //images[i].children[0].children[0].innerHTML = '<div class="parallax-aside-image">' + images[i].children[0].children[0].innerHTML + '</div><div class="parallax-image-fake"></div>';
        } else {
            //imagesURL[i] = images[i].childElementCount
            imagesAside[i] = false;
            imagesHeights[i] = images[i].clientHeight;
            var pictureTag = images[i].children[0].children[0].children[0].children[0].cloneNode(true);
            images[i].children[0].children[0].children[0].appendChild(pictureTag);
            images[i].children[0].children[0].children[0].children[0].classList.add("scroll-image");
            if (images[i].children[0].children[0].getAttribute("data-gallery") == "true") {
                images[i].children[0].children[0].children[0].children[2].classList.add("scroll-image-fake");
            } else {
                images[i].children[0].children[0].children[0].children[1].classList.add("scroll-image-fake");
            };
            images[i].children[0].children[0].children[1].classList.add("scroll-opacity");
        };
    };
    imagesFake = document.getElementsByClassName("scroll-image-fake");
}

function resizingScrollEffect() {
    bodyTop = document.body.getBoundingClientRect().top;
    for (var i = 0; i < imagesCount; i++) {

        if (images[i].classList.contains("container--aside")) {
            if (imagesTops[i] < window.pageYOffset - images[i].clientHeight + images[i].children[0].children[0].children[0].clientHeight) {
                images[i].children[0].children[0].classList.add("scroll-opacity-anim");
            } else {
                images[i].children[0].children[0].classList.remove("scroll-opacity-anim");
            }
            if (imagesTops[i] < window.pageYOffset - 70) {
                images[i].children[0].children[0].classList.add("scroll-aside-fixed");
            } else {
                images[i].children[0].children[0].classList.remove("scroll-aside-fixed");
            }
        } else {
            if (images[i].classList.contains("specialImage")) {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight - textSpecialHeight) {
                    images[i].classList.add("scroll-opacity");
                } else {
                    images[i].classList.remove("scroll-opacity");
                }
            } else {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight) {
                    images[i].classList.add("scroll-opacity");
                } else {
                    images[i].classList.remove("scroll-opacity");
                }
            }
            if (imagesTops[i] < window.pageYOffset) {
                //images[i].firstChild.firstChild.classList.add("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.add("scroll-image-fixed");
                imagesFake[i].classList.add("scroll-image-fake-fixed");
                images[i].classList.add("scroll-background");
                if (scrollEffectConfig.scrollEffectDynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            } else {
                //console.log(images[i].firstChild.firstChild, images[i].children[0].children[0]);
                //images[i].firstChild.firstChild.classList.remove("parallax-image-fixed");
                images[i].children[0].children[0].children[0].children[0].classList.remove("scroll-image-fixed");
                imagesFake[i].classList.remove("scroll-image-fixed");
                images[i].classList.remove("scroll-background");
                if (scrollEffectConfig.scrollEffectDynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            }
        }
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 65;
    }
}

function scrollingScrollEffect() {
    for (var i = 0; i < imagesCount; i++) {
        if (images[i].classList.contains("container--aside")) {
            if (imagesTops[i] < window.pageYOffset - images[i].clientHeight + images[i].children[0].children[0].children[0].clientHeight) {
                images[i].children[0].children[0].classList.add("scroll-opacity-anim");
            } else {
                images[i].children[0].children[0].classList.remove("scroll-opacity-anim");
            }
            if (imagesTops[i] < window.pageYOffset - 70) {
                //images[i].children[0].children[0].style.transform = "translateY("+Math.floor(window.pageYOffset-imagesTops[i])+"px)";
                images[i].children[0].children[0].classList.add("scroll-aside-fixed");
            } else {
                //images[i].children[0].children[0].style.transform = "translateY(0px)";
                images[i].children[0].children[0].classList.remove("scroll-aside-fixed");
            }
            if (imagesTops[i] < window.pageYOffset - images[i].clientHeight / imagesAside[i].length) {
                imagesAside[i][0].classList.add("scroll-opacity-anim");
            } else {
                imagesAside[i][0].classList.remove("scroll-opacity-anim");
            }
            if (imagesAside[i].length > 1) {
                for (var j = 1; j < imagesAside[i].length; j++) {
                    imagesAside[i][j].classList.add("scroll-opacity-anim");
                    if (imagesTops[i] < window.pageYOffset - images[i].clientHeight / imagesAside[i].length * j && imagesTops[i] > window.pageYOffset - images[i].clientHeight / imagesAside[i].length * (j + 1)) {
                        imagesAside[i][j].classList.remove("scroll-opacity-anim");
                    }
                }
            }
        } else {
            if (images[i].classList.contains("specialImage")) {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight - textSpecialHeight) {
                    images[i].classList.add("scroll-opacity");
                } else {
                    images[i].classList.remove("scroll-opacity");
                }
            } else {
                if (imagesTops[i] < window.pageYOffset - images[i].clientHeight) {
                    images[i].classList.add("scroll-opacity");
                } else {
                    images[i].classList.remove("scroll-opacity");
                }
            }
            if (imagesTops[i] < window.pageYOffset) {
                images[i].children[0].children[0].children[0].children[0].classList.add("scroll-image-fixed");
                imagesFake[i].classList.add("scroll-image-fake-fixed");
                images[i].classList.add("scroll-background");
                if (scrollEffectConfig.scrollEffectDynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY("+(imagesTops[i] - window.pageYOffset)/2+"px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + (imagesTops[i] - window.pageYOffset) / 2 + ")";
                }
            } else {
                images[i].children[0].children[0].children[0].children[0].classList.remove("scroll-image-fixed");
                imagesFake[i].classList.remove("scroll-image-fake-fixed");
                images[i].classList.remove("scroll-background");
                if (scrollEffectConfig.scrollEffectDynamic) {
                    //images[i].firstChild.firstChild.style.WebkitTransform = "translateY(0px)";
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(0px)";
                }
            }
        }
    } //end for
}