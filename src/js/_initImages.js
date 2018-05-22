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
        if (imageThumb != null) {
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
                imageSourceElementA.setAttribute("srcset", imageThumb);
                imageSourceElementB.setAttribute("srcset", imageThumb);
                imageSourceElementC.setAttribute("srcset", imageThumb);
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
        if (imageGallery == "false") {
            //imageLinkElement.setAttribute("href", "");
        } else {
            imageContainers[i].setAttribute("class", "gallery");
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") {
                imageLinkElement.setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1200." + imageSource.split(".")[3]); // !!! change to resize ???
            } else {
                imageLinkElement.setAttribute("href", imageSource);
            }
            var galleryIcon = document.createElement("div");
            galleryIcon.setAttribute("class", "gallery-icon");
            galleryIcon.innerHTML = "<svg viewBox=\"0 0 533.333 533.333\"><path d=\"M533.333,0v216.667L450,133.333l-100,100l-50-50l100-100L316.667,0H533.333z M233.333,350l-100,100l83.333,83.333H0 V316.667L83.333,400l100-100L233.333,350z\"/></svg>";
            imageLinkElement.appendChild(galleryIcon);
        }

        imageImgElement.onload = function() {
            this.parentNode.parentNode.parentNode.setAttribute("data-size", "1200x" + Math.round((1 / (this.width / this.height)) * 1200)); // !!! change to resize ???
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
function lazyLoad() {
    for (var i = 0; i < document.getElementsByTagName("figure").length; i++) {
        var changeImage = document.getElementsByTagName("figure")[i];
        var imageSource = changeImage.getAttribute("data-source");
        if (changeImage.getBoundingClientRect().top < window.innerHeight) {
            if (imageSource.slice(0, 22) == "https://gdb.rferl.org/") {
                changeImage.children[0].children[0].children[0].setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w568." + imageSource.split(".")[3]);
                changeImage.children[0].children[0].children[1].setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1024." + imageSource.split(".")[3]);
                changeImage.children[0].children[0].children[2].setAttribute("srcset", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w1920." + imageSource.split(".")[3]);
                changeImage.children[0].children[0].children[3].setAttribute("src", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w" + window.innerWidth + "." + imageSource.split(".")[3]);

            }
        };
    };
}

// _initGallerySwipe

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            thumbElements = document.getElementsByClassName("gallery"),
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        /*console.log(thumbElements);*/
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.parentNode.getAttribute('data-size').split('x');
            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            childNodes = document.getElementsByClassName("gallery"),
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {
            history: false, //disable hashes
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }
        };
        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);
    galleryElements = document.getElementsByClassName("gallery");
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.content');