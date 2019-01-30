// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

// Load all post-render scripts


// Resize scripts
/*window.onresize = function() {
var changedDataSizeImage = document.getElementsByClassName("gallery");
for (var i = 0; i < changedDataSizeImage.length; i++) {
    if (window.innerWidth <= 568) {
        changedDataSizeImage[i].setAttribute("data-size", "568x" + Math.round(1 / (changedDataSizeImage[i].children[0].children[0].children[3].width / changedDataSizeImage[i].children[0].children[0].children[3].height) * 568));
    } else if (window.innerWidth > 568 && window.innerWidth < 1024) {
        changedDataSizeImage[i].setAttribute("data-size", "1024x" + Math.round(1 / (changedDataSizeImage[i].children[0].children[0].children[3].width / changedDataSizeImage[i].children[0].children[0].children[3].height) * 1024));
    } else if (window.innerWidth >= 1024) {
        changedDataSizeImage[i].setAttribute("data-size", "1920x" + Math.round(1 / (changedDataSizeImage[i].children[0].children[0].children[3].width / changedDataSizeImage[i].children[0].children[0].children[3].height) * 1920));
    }
}
}*/
window.addEventListener("resize", onResize);

function onResize() {
    var changedDataSizeImage = document.getElementsByClassName("gallery");
    for (var i = 0; i < changedDataSizeImage.length; i++) {
        var imageSource = changedDataSizeImage[i].getAttribute("data-source");
        if (window.innerWidth <= 568) {
            changedDataSizeImage[i].setAttribute("data-size", "568x" + Math.round(1 / (changedDataSizeImage[i].children[0].children[0].children[3].width / changedDataSizeImage[i].children[0].children[0].children[3].height) * 568));
        } else if (window.innerWidth > 568 && window.innerWidth <= 1024) {
            changedDataSizeImage[i].setAttribute("data-size", Math.min(window.innerWidth, 1024) + "x" + Math.round(1 / (changedDataSizeImage[i].children[0].children[0].children[3].width / changedDataSizeImage[i].children[0].children[0].children[3].height) * Math.min(window.innerWidth, 1024)));
        } else if (window.innerWidth > 1024) {
            changedDataSizeImage[i].setAttribute("data-size", Math.min(window.innerWidth, 1600) +"x" + Math.round(1 / (changedDataSizeImage[i].children[0].children[0].children[3].width / changedDataSizeImage[i].children[0].children[0].children[3].height) * Math.min(window.innerWidth, 1600)));
        }
        if (imageSource.slice(0, 11) == "https://gdb") {
            if(window.innerWidth <= 568){
                changedDataSizeImage[i].children[0].setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w568." + imageSource.split(".")[3]);
            }else if(window.innerWidth > 568 && window.innerWidth <=1024){
                changedDataSizeImage[i].children[0].setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w" + Math.min(window.innerWidth, 1024) + "." + imageSource.split(".")[3]);
            }else if(window.innerWidth > 1024){
                changedDataSizeImage[i].children[0].setAttribute("href", imageSource.split(".")[0] + "." + imageSource.split(".")[1] + "." + imageSource.split(".")[2] + "_w" + Math.min(window.innerWidth, 1600) + "." + imageSource.split(".")[3]);
            }
        }
    }
}
// Scroll scripts
progressBar();
/*window.onscroll = function() {
    lazyLoad();
    progressBar();
}*/
window.addEventListener("scroll", onScroll);

function onScroll() {
    lazyLoad();
    progressBar();
    headerBackground();
}

function progressBar() {
    var heightMain = document.getElementsByTagName("main")[0].offsetHeight;
    var heightFooter = document.getElementById("page__footer").offsetHeight;
    var pageHeight = heightMain + heightFooter;
    var scrollPosition = document.body.getBoundingClientRect().top;
    if (scrollPosition <= 0) {
        document.getElementById("bar").style.width = -scrollPosition / pageHeight * 100 + "%";
    } else {
        document.getElementById("bar").style.width = "0px";
    }
}

function headerBackground() {
    var heightWindow = window.innerHeight;
    scrollPosition = document.body.getBoundingClientRect().top;
    if (heightWindow + scrollPosition - 65 > 0) {
        document.getElementById("page__header").classList.remove("page__header--onpage");
    } else {
        document.getElementById("page__header").classList.add("page__header--onpage");
    }
}
// Remove config part from the page
if (setupWizard.haltStatus === false) {
    var configDOM = document.getElementById('apollo-config');
    configDOM.remove();
}
