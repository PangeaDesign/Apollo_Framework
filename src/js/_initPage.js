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

}

// Remove config part from the page
if (setupWizard.haltStatus === false) {
    var configDOM = document.getElementById('apollo-config');
    configDOM.remove();
}
