var pswpHTML = "<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"pswp__bg\"></div><div class=\"pswp__scroll-wrap\"><div class=\"pswp__container\"><div class=\"pswp__item\"></div><div class=\"pswp__item\"></div><div class=\"pswp__item\"></div></div><div class=\"pswp__ui pswp__ui--hidden\"><div class=\"pswp__top-bar\"><div class=\"pswp__counter\"></div><button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button><button class=\"pswp__button pswp__button--share\" title=\"Share\"></button><button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button><button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button><div class=\"pswp__preloader\"><div class=\"pswp__preloader__icn\"><div class=\"pswp__preloader__cut\"><div class=\"pswp__preloader__donut\"></div></div></div></div></div><div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\"><div class=\"pswp__share-tooltip\"></div></div><button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\"></button><button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\"></button><div class=\"pswp__caption\"><div class=\"pswp__caption__center\"></div></div></div></div></div>";
document.body.innerHTML += pswpHTML;
// Render image containers
/*(function() {
    var imageContainers = document.body.getElementsByTagName('figure');
    for (i = 0; i < imageContainers.length; i++) {
        var imageCaption = imageContainers[i].getAttribute("data-caption");
        var imageSource = imageContainers[i].getAttribute("data-source");
        var imageGallery = imageContainers[i].getAttribute("data-gallery");
        var imageThumb = imageContainers[i].getAttribute("data-thumb");
        var imageThumbCaption = imageContainers[i].getAttribute("data-thumb-caption");
        var imageElement = document.createElement("img");
        if (imageThumb != null) {
            if (imageThumb.slice(0, 22) == "https://gdb.rferl.org/") {
                imageElement.setAttribute("src", imageThumb.split(".")[0] + "." + imageThumb.split(".")[1] + "." + imageThumb.split(".")[2] + "_w200." + imageThumb.split(".")[3]);
            } else {
                imageElement.setAttribute("src", imageThumb);
            }
        } else {
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") {
                imageElement.setAttribute("src", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w200." + imageSource.split(".")[3]);
            } else {
                imageElement.setAttribute("src", imageSource);
            }
        }

        if (imageCaption != null) {
            imageElement.setAttribute("alt", imageCaption);
        } else {
            imageElement.setAttribute("alt", "Image " + i);
        }
        var imageLinkElement = document.createElement("a");

        imageContainers[i].appendChild(imageLinkElement);
        imageLinkElement.appendChild(imageElement);
        if (imageGallery == "false") {
            //imageLinkElement.setAttribute("href", "");
        } else {
            imageContainers[i].setAttribute("class", "gallery");
            //imageContainers[i].innerHTML = "<div class=\"gallery-icon\"><svg viewBox=\"0 0 533.333 533.333\"><path d=\"M533.333,0v216.667L450,133.333l-100,100l-50-50l100-100L316.667,0H533.333z M233.333,350l-100,100l83.333,83.333H0 V316.667L83.333,400l100-100L233.333,350z\"/></svg></div>";
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") {
                imageLinkElement.setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1200." + imageSource.split(".")[3]);
            } else {
                imageLinkElement.setAttribute("href", imageSource);
            }
            var galleryIcon = document.createElement("div");
            galleryIcon.setAttribute("class", "gallery-icon");
            galleryIcon.innerHTML = "<svg viewBox=\"0 0 533.333 533.333\"><path d=\"M533.333,0v216.667L450,133.333l-100,100l-50-50l100-100L316.667,0H533.333z M233.333,350l-100,100l83.333,83.333H0 V316.667L83.333,400l100-100L233.333,350z\"/></svg>";
            imageLinkElement.appendChild(galleryIcon);
        }

        imageElement.onload = function() {
            //this.parentNode.parentNode.setAttribute("data-size", "1200x"+Math.round((1/(this.width/this.height))*1200));
            this.parentNode.parentNode.setAttribute("data-size", "1200x" + Math.round((1 / (this.width / this.height)) * 1200));
        };
        if (imageCaption != null) {
            var imageCaptionElement = document.createElement("figcaption");
            imageContainers[i].appendChild(imageCaptionElement);
            imageCaptionElement.innerHTML = imageCaption;
        };
        if (imageThumbCaption == "false") {
            imageCaptionElement.style = "display:none";
        };
    };
})();*/
(function() {
    var imageContainers = document.body.getElementsByTagName('figure');
    for (i = 0; i < imageContainers.length; i++) {
        var imageCaption = imageContainers[i].getAttribute("data-caption");
        var imageSource = imageContainers[i].getAttribute("data-source");
        var imageGallery = imageContainers[i].getAttribute("data-gallery");
        var imageThumb = imageContainers[i].getAttribute("data-thumb");
        var imageThumbCaption = imageContainers[i].getAttribute("data-thumb-caption");
        var imageElement = document.createElement("picture");
        var imageSourceElementA = document.createElement("source");
        var imageSourceElementB = document.createElement("source");
        var imageSourceElementC = document.createElement("source");
        var imageImgElement = document.createElement("img");
        if (imageThumb != null&&imageThumb != "") {
            if (imageThumb.slice(0, 22) == "https://gdb.rferl.org/") {
                imageSourceElementA.setAttribute("media", "(max-width: 568px)");
                imageSourceElementA.setAttribute("srcset", imageThumb.split(".")[0] + "." + imageThumb.split(".")[1] + "." + imageThumb.split(".")[2] + "_w200." + imageThumb.split(".")[3]);
                imageSourceElementB.setAttribute("media", "(max-width: 1024px)");
                imageSourceElementB.setAttribute("srcset", imageThumb.split(".")[0] + "." + imageThumb.split(".")[1] + "." + imageThumb.split(".")[2] + "_w200." + imageThumb.split(".")[3]);
                imageSourceElementC.setAttribute("media", "(min-width: 1025px)");
                imageSourceElementC.setAttribute("srcset", imageThumb.split(".")[0] + "." + imageThumb.split(".")[1] + "." + imageThumb.split(".")[2] + "_w200." + imageThumb.split(".")[3]);
                imageImgElement.setAttribute("src", imageThumb.split(".")[0] + "." + imageThumb.split(".")[1] + "." + imageThumb.split(".")[2] + "_w200." + imageThumb.split(".")[3]);
            } else {
                //imageSourceElementA.setAttribute("media", "(max-width: 568px)");
                imageSourceElementA.setAttribute("media", "(max-width: 568px)");
                imageSourceElementA.setAttribute("srcset", imageThumb);
                imageSourceElementB.setAttribute("media", "(max-width: 1024px)");
                imageSourceElementB.setAttribute("srcset", imageSource);
                imageSourceElementC.setAttribute("media", "(min-width: 1025px)");
                imageSourceElementC.setAttribute("srcset", imageSource);
                imageImgElement.setAttribute("src", imageThumb);
            }
        } else {
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") {
                imageSourceElementA.setAttribute("media", "(max-width: 568px)");
                imageSourceElementA.setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w200." + imageSource.split(".")[3]);
                imageSourceElementB.setAttribute("media", "(max-width: 1024px)");
                imageSourceElementB.setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w200." + imageSource.split(".")[3]);
                imageSourceElementC.setAttribute("media", "(min-width: 1025px)");
                imageSourceElementC.setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w200." + imageSource.split(".")[3]);
                imageImgElement.setAttribute("src", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w200." + imageSource.split(".")[3]);
            } else {
                //imageSourceElementA.setAttribute("media", "(max-width: 568px)");
                imageSourceElementA.setAttribute("srcset", imageSource);
                imageSourceElementB.setAttribute("srcset", imageSource);
                imageSourceElementC.setAttribute("srcset", imageSource);
                imageImgElement.setAttribute("src", imageSource);
            }
        }

        if (imageCaption != null) {
            imageImgElement.setAttribute("alt", imageCaption);
        } else {
            imageImgElement.setAttribute("alt", "Image " + i);
        }
        var imageLinkElement = document.createElement("a");

        imageContainers[i].appendChild(imageLinkElement);
        imageLinkElement.appendChild(imageElement);
        imageElement.appendChild(imageSourceElementA);
        imageElement.appendChild(imageSourceElementB);
        imageElement.appendChild(imageSourceElementC);
        imageElement.appendChild(imageImgElement);
        if (imageGallery == "false" || imageGallery == null) {
            //imageLinkElement.setAttribute("href", "");
        } else {
            imageContainers[i].classList.add("gallery");
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") { // !!! also in resize ???
                if(window.innerWidth <= 568){
                    imageLinkElement.setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w568." + imageSource.split(".")[3]);
                }else if(window.innerWidth > 568 && window.innerWidth <= 1024){
                    imageLinkElement.setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1024." + imageSource.split(".")[3]);
                }else if(window.innerWidth > 1024){
                    imageLinkElement.setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1920." + imageSource.split(".")[3]);
                }
            } else {
                imageLinkElement.setAttribute("href", imageSource);
            }
            var galleryIcon = document.createElement("div");
            galleryIcon.setAttribute("class", "gallery-icon");
            galleryIcon.innerHTML = "<svg viewBox=\"0 0 533.333 533.333\"><path d=\"M533.333,0v216.667L450,133.333l-100,100l-50-50l100-100L316.667,0H533.333z M233.333,350l-100,100l83.333,83.333H0 V316.667L83.333,400l100-100L233.333,350z\"/></svg>";
            imageLinkElement.appendChild(galleryIcon);
        }

        imageImgElement.onload = function() {
            this.parentNode.parentNode.parentNode.setAttribute("data-size", window.innerWidth + "x" + Math.round((1 / (this.width / this.height)) * window.innerWidth)); // !!! some max width ???
        };
        if (imageCaption != null) {
            var imageCaptionElement = document.createElement("figcaption");
            imageContainers[i].appendChild(imageCaptionElement);
            imageCaptionElement.innerHTML = imageCaption;
        };
        if (imageThumbCaption == "false") {
            imageCaptionElement.style = "display:none";
        };
    };
})();
// Lazy Load
var imagesLoaded = [];
for (var i = 0; i < document.getElementsByTagName("figure").length; i++) {
    imagesLoaded[i] = false;
}

function lazyLoad() {
    for (var i = 0; i < document.getElementsByTagName("figure").length; i++) {
        var changeImage = document.getElementsByTagName("figure")[i];
        var imageSource = changeImage.getAttribute("data-source");
        //console.log(changeImage);
        if (changeImage.getBoundingClientRect().top < window.innerHeight && imagesLoaded[i] == false) {
            imagesLoaded[i] = true;
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") {
                changeImage.children[0].children[0].children[0].setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w568." + imageSource.split(".")[3]);
                changeImage.children[0].children[0].children[1].setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1024." + imageSource.split(".")[3]);
                changeImage.children[0].children[0].children[2].setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1920." + imageSource.split(".")[3]);
                changeImage.children[0].children[0].children[3].setAttribute("src", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w" + window.innerWidth + "." + imageSource.split(".")[3]);

            }
        };
    };
}
