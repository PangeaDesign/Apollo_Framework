// JavaScript Document

var bodyTop, images, imagesURL, imagesTops, imagesHeights, imagesCount, imagesFake = [];
var imagesAside = [];
var textSpecialHeight;
var hasTouch = 'ontouchstart' in window;
if(hasTouch){
    scrollEffectConfig.scrollEffect = false
}
if (scrollEffectConfig.scrollEffect == true) {
    startScrollEffect();
    window.addEventListener("resize", function() {
        resizingScrollEffect();
    });
    resizingScrollEffect();

    window.addEventListener("scroll", function() {
        resizingScrollEffect();
        //scrollingScrollEffect();
    });
} else {
    images = document.getElementsByClassName("scroll--container");
    imagesCount = images.length;
    for (var i = 0; i < imagesCount; i++) {
        images[0].classList.remove("scroll--container");
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
    images = document.getElementsByClassName("scroll--container");
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
            var cloneNode = [];
            for (var j = 0; j < imagesAsideLength; j++) {
                //console.log(imagesAside[i][j*2]);
                wrapper.appendChild(imagesAside[i][j*2].cloneNode(true));
                imagesAside[i][j*2+1].classList.add("scroll-aside-origin");
                /*imagesAside[i][j*2+1].classList.remove("gallery");*/
                if (j > 0) {
                    if(!imagesAside[i][j].classList.contains("scroll-aside-origin")){
                        imagesAside[i][j].classList.add("scroll-opacity-anim");
                    }
                }
            };

            //images[i].children[0].children[0].innerHTML = '<div class="parallax-aside-image">' + images[i].children[0].children[0].innerHTML + '</div><div class="parallax-image-fake"></div>';
        } else if (images[i].classList.contains("container--aside--big")){
            /*images[i].classList.add("scroll-aside-big");
            images[i].classList.add("scroll-aside-big");
            var content = images[i].children[0].children;
            var wrapper = document.createElement("div");
            wrapper.classList.add("scroll-aside-big-image");
            images[i].children[0].insertBefore(wrapper, content[0]);
            imagesAside[i] = images[i].children[0].getElementsByTagName("figure");
            var imagesAsideLength = imagesAside[i].length;
            for (var j = 0; j < imagesAsideLength; j++) {
                wrapper.appendChild(imagesAside[i][j]);
                if (j > 0) {
                    imagesAside[i][j].classList.add("scroll-opacity-anim");
                }
            }*/
        } else {
            //imagesURL[i] = images[i].childElementCount
            imagesAside[i] = false;
            imagesHeights[i] = images[i].clientHeight;
            var pictureTag = images[i].children[0].children[0].children[0].children[0].cloneNode(true);
            images[i].children[0].children[0].children[0].appendChild(pictureTag);
            images[i].children[0].children[0].children[0].children[0].classList.add("scroll-image");
            if (images[i].children[0].children[0].getAttribute("data-gallery") == "true") {
                images[i].children[0].children[0].children[0].children[2].classList.add("scroll-image-fake");
                imagesFake[i] = images[i].children[0].children[0].children[0].children[2]
            } else {
                images[i].children[0].children[0].children[0].children[1].classList.add("scroll-image-fake");
                imagesFake[i] = images[i].children[0].children[0].children[0].children[1]
            };
            if (images[i].getAttribute("data-caption")!=""&&images[i].getAttribute("data-caption")!=null){
                images[i].children[0].children[0].children[1].classList.add("scroll-opacity");
            }
        };
    };
    imagesCount = images.length;
    for (var i = 0; i < document.getElementsByTagName("figure").length; i++) {
        imagesLoaded[i] = false;
    }
    //imagesFake = document.getElementsByClassName("scroll-image-fake");
}

function resizingScrollEffect() {
    bodyTop = document.body.getBoundingClientRect().top;
    for (var i = 0; i < imagesCount; i++) {

        if (images[i].classList.contains("container--aside")) {
            //changing fixed position
            if (imagesTops[i] < window.pageYOffset - 50 && imagesTops[i] > window.pageYOffset - images[i].clientHeight + images[i].children[0].children[0].children[0].clientHeight+40) {
                if(!images[i].children[0].children[0].classList.contains("scroll-aside-fixed")){
                    images[i].children[0].children[0].classList.add("scroll-aside-fixed");
                }
            } else {
                if(images[i].children[0].children[0].classList.contains("scroll-aside-fixed")){
                    images[i].children[0].children[0].classList.remove("scroll-aside-fixed");
                }
            }
            //to dissapear when is end of container
            if (imagesTops[i] < window.pageYOffset - images[i].clientHeight + images[i].children[0].children[0].children[0].clientHeight+40) {
                images[i].children[0].children[0].style.top = (images[i].clientHeight - images[i].children[0].children[0].children[0].clientHeight-90) + "px";
            } else {
                images[i].children[0].children[0].removeAttribute("style");
            }
            //when more images in container
            if (imagesAside[i].length/2 > 1) {
                if(!imagesAside[i][0].classList.contains("scroll-opacity-anim")){
                    imagesAside[i][0].classList.add("scroll-opacity-anim");
                }
                if(imagesTops[i] > window.pageYOffset-(images[i].clientHeight-imagesAside[i][0].clientHeight)/(imagesAside[i].length/2)){
                    if(imagesAside[i][0].classList.contains("scroll-opacity-anim")){
                        imagesAside[i][0].classList.remove("scroll-opacity-anim");
                    }
                }
                for (var j = 1; j < imagesAside[i].length/2-1; j++) {
                    if(!imagesAside[i][j].classList.contains("scroll-opacity-anim")){
                        imagesAside[i][j].classList.add("scroll-opacity-anim");
                    }
                    if (imagesTops[i] < window.pageYOffset - (images[i].clientHeight-imagesAside[i][0].clientHeight) / (imagesAside[i].length/2) * j && imagesTops[i] > window.pageYOffset - (images[i].clientHeight-imagesAside[i][0].clientHeight) / (imagesAside[i].length/2) * (j + 1)) {
                        if(imagesAside[i][j].classList.contains("scroll-opacity-anim")){
                            imagesAside[i][j].classList.remove("scroll-opacity-anim");
                        }
                    }
                }
                if(!imagesAside[i][imagesAside[i].length/2-1].classList.contains("scroll-opacity-anim")){
                    imagesAside[i][imagesAside[i].length/2-1].classList.add("scroll-opacity-anim");
                }
                if(imagesTops[i] < window.pageYOffset - (images[i].clientHeight-imagesAside[i][0].clientHeight) / (imagesAside[i].length/2) * (imagesAside[i].length/2-1)){
                    if(imagesAside[i][imagesAside[i].length/2-1].classList.contains("scroll-opacity-anim")){
                        imagesAside[i][imagesAside[i].length/2-1].classList.remove("scroll-opacity-anim");
                    }
                }
            }
        } else {
            if (imagesTops[i] < window.pageYOffset) {
                images[i].children[0].children[0].children[0].children[0].classList.add("scroll-image-fixed");
                imagesFake[i].classList.add("scroll-image-fake-fixed");
                if (scrollEffectConfig.scrollEffectDynamic) {
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            } else {
                images[i].children[0].children[0].children[0].children[0].classList.remove("scroll-image-fixed");
                imagesFake[i].classList.remove("scroll-image-fake-fixed");
                if (scrollEffectConfig.scrollEffectDynamic) {
                    images[i].children[0].children[0].children[0].children[0].style.transform = "translateY(" + Math.round((imagesTops[i] - window.pageYOffset) / 2) + "px)";
                }
            }
            //add opacity class, when on background
            if(imagesTops[i]< window.pageYOffset-images[i].clientHeight){
                if(!images[i].children[0].children[0].children[0].children[0].classList.contains("scroll-opacity-anim")){
                    images[i].children[0].children[0].children[0].children[0].classList.add("scroll-opacity-anim");
                }
            }else{
                if(images[i].children[0].children[0].children[0].children[0].classList.contains("scroll-opacity-anim")){
                    images[i].children[0].children[0].children[0].children[0].classList.remove("scroll-opacity-anim");
                }
            }
        }
        imagesTops[i] = images[i].getBoundingClientRect().top - bodyTop - 65;
    }
}

function scrollingScrollEffect() {
    for (var i = 0; i < imagesCount; i++) {
        if (images[i].classList.contains("container--aside")) {//for containers "containers--aside"

        } else {//for all containers without "container--aside"

        }
    } //end for
}
