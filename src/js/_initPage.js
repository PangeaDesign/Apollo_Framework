// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

// Hide preloader & load all post-render scripts
window.onload = function() {
    var preloaderDOM = document.getElementById("preloader");
    preloaderDOM.className += "preloader--loading";
    setTimeout(function() {
        preloaderDOM.className = "preloader--loaded";
    }, 1500);
}

// Resize scripts
window.onresize = function() {
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
}
// Scroll scripts
progressBar();
window.onscroll = function() {
    lazyLoad();
    progressBar();
}
// Remove config part from the page
if (setupWizard.haltStatus === false) {
    var configDOM = document.getElementById('apollo-config');
    configDOM.remove();
}