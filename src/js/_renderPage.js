// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved
// FUNCTION: Scroll Status

if (setupWizard.haltStatus !== true) {

    /////////////
    // H E R O //
    /////////////
    var heroNode = document.createElement("div");
    var heroBackgroundNode = document.createElement("div");
    heroBackgroundNode.className += ("hero__background");

    // Get media url from config
    var heroMedia = apolloConfig.heroMedia;

    // In case media type is image
    if (heroMedia.indexOf(".jpg") >= 0 || heroMedia.indexOf(".jpeg") >= 0 || heroMedia.indexOf(".png") >= 0 || heroMedia.indexOf(".gif") >= 0) {
        heroBackgroundNode.setAttribute("style", "background-image: url(\"" + apolloConfig.heroMedia + "\"); background-size: cover; background-position: center;");

        // In case media type is mp4 video
    } else if (heroMedia.indexOf(".mp4") >= 0) {
        heroBackgroundNode.className += " hero__background--video";
        heroBackgroundNode.innerHTML = "<video playsinline=\"\" autoplay=\"\" muted=\"\" loop=\"\"><source src=\"" + apolloConfig.heroMedia + "\" type=\"video/mp4\"></video>";
    } else {
        console.log("%c[Warning] Hero media type is not supported! Use only [jpg/jpeg], [png], [gif] or [mp4].\nMedia from [youtu.be] and [vimeo.com] are not allowed for the hero section of the page.", configSetupWizard.warningMessage);
        heroBackgroundNode.setAttribute("style", "background-image: url(\"dist/assets/media-not-supported.jpg\"); background-size: cover; background-position: center;");
    }

    // Render hero overlay
    var heroOverlayNode = document.createElement("div");
    heroOverlayNode.className += ("hero__overlay");
    if (apolloConfig.heroOverlay) {
        heroOverlayNode.className += (" hero__overlay--rendered");
    }

    // Render hero elements
    var heroContentNode = document.createElement("div");
    heroContentNode.className += ("hero__content");

    var heroContentH1Node = document.createElement("h1");
    heroContentH1Node.textContent += apolloConfig.projectTitle;
    heroContentNode.appendChild(heroContentH1Node);

    var heroContentH2Node = document.createElement("h2");
    heroContentH2Node.textContent += apolloConfig.heroByline;
    heroContentNode.appendChild(heroContentH2Node);

    var heroContinueNode = document.createElement("div");
    heroContinueNode.className += ("hero__continue");
    heroContinueNode.innerHTML = icons.more;

    heroNode.setAttribute("id", "hero");
    heroNode.className += ("hero__container hero__container--" + apolloConfig.heroStyle);
    pagePreloaderNode.parentNode.insertBefore(heroNode, pagePreloaderNode.nextSibling);

    heroNode.appendChild(heroBackgroundNode);
    heroBackgroundNode.appendChild(heroOverlayNode);
    heroNode.appendChild(heroContentNode);
    heroNode.appendChild(heroContinueNode);

    /////////////////
    // H E A D E R //
    /////////////////
    var headerNode = document.createElement("header");
    headerNode.setAttribute("id", "page__header");
    pagePreloaderNode.parentNode.insertBefore(headerNode, pagePreloaderNode.nextSibling);

    var headerProgressNode = document.createElement("div");
    headerProgressNode.setAttribute("id", "progress");
    headerNode.appendChild(headerProgressNode);
    var headerProgressBarNode = document.createElement("div");
    headerProgressBarNode.setAttribute("id", "bar");
    headerProgressNode.appendChild(headerProgressBarNode);

    var headerLeftNode = document.createElement("div");
    var headerLogoNode = document.createElement("a");
    headerLogoNode.classList.add("page__header-logo");
    headerLogoNode.setAttribute("id", "page__header-logo");
    headerLogoNode.setAttribute("href", siteConfig[apolloConfig.projectSite].siteURL);
    headerLogoNode.setAttribute("target", "_blank");
    /*headerLogoNode.innerHTML = logos[apolloConfig.projectSite];*/
    function httpGetIcon(logoUrl, logoContainerId) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                document.getElementById(logoContainerId).innerHTML = xmlHttp.response;
            }
        }
        xmlHttp.open("GET", logoUrl, true);
        xmlHttp.send(null);
    }

    var headerRightNode = document.createElement("div");
    headerRightNode.classList.add("a__container");
    var headerShareNode = document.createElement("a");
    headerShareNode.classList.add("page__header-share");
    headerShareNode.setAttribute("href", "#");
    headerShareNode.setAttribute("target", "_blank");
    headerShareNode.innerHTML = icons.share + siteConfig[apolloConfig.projectSite].siteLocal["share"];

    headerNode.appendChild(headerLeftNode);
    headerLeftNode.appendChild(headerLogoNode);
    httpGetIcon("https://docs.rferl.org/Branding/CDN/Apollo_Framework/2.0/dist/assets/logos/" + apolloConfig.projectSite + ".svg", "page__header-logo");
    headerNode.appendChild(headerRightNode);
    headerRightNode.appendChild(headerShareNode);

    var allContainers = document.getElementsByClassName("container");
    var chaptersCount = 0;
    var chaptersTitles = new Array();
    for (var i = 0; i < allContainers.length; i++) {
        var title = allContainers[i].getAttribute("navigation-title");
        if (title != null) {
            chaptersTitles[chaptersCount] = title;
            chaptersCount++;
            allContainers[i].setAttribute("id", "chapter-" + chaptersCount);
        };
    };
    if (chaptersTitles.length > 1) {
        var headerNavNode = document.createElement("a");
        headerNavNode.classList.add("page__header-nav");
        headerNavNode.setAttribute("id", "page__header-nav");
        headerRightNode.appendChild(headerNavNode);
        httpGetIcon("src/assets/export/navigation.svg", "page__header-nav");

        var navSiteNode = document.createElement("aside");
        navSiteNode.setAttribute("id", "nav__site");
        document.getElementById("page__header").appendChild(navSiteNode);

        var navSiteContainerNode = document.createElement("div");
        navSiteContainerNode.setAttribute("id", "nav__site-container");
        navSiteNode.appendChild(navSiteContainerNode);

        var navSiteCloseNode = document.createElement("div");
        navSiteCloseNode.setAttribute("id", "nav__site-close");
        navSiteContainerNode.appendChild(navSiteCloseNode);
        httpGetIcon("src/assets/export/close.svg", "nav__site-close");

        var navSiteUlNode = document.createElement("ul");
        navSiteContainerNode.appendChild(navSiteUlNode);
        var navSiteLiNode, navSiteANode;
        for (var i = 0; i < chaptersCount; i++) {
            navSiteLiNode = document.createElement("li");
            navSiteUlNode.appendChild(navSiteLiNode);
            navSiteANode = document.createElement("a");
            navSiteLiNode.appendChild(navSiteANode);
            navSiteANode.setAttribute("class", "anchor");
            navSiteANode.setAttribute("href", "#chapter-" + i);
            navSiteANode.text = chaptersTitles[i];
        }
        console.log(document.getElementById("page__header-nav"));
        document.getElementById("page__header-nav").addEventListener("click", function() {
            console.log("YES");
            navSiteNode.classList.add("nav__site-visible");
        });
        navSiteCloseNode.addEventListener("click", function() {
            navSiteNode.classList.remove("nav__site-visible");
        });
        navSiteUlNode.addEventListener("click", function() {
            navSiteNode.classList.remove("nav__site-visible");
        })
    }



    ///////////////////
    // G A L L E R Y //
    ///////////////////
    var galleryNode = document.createElement("div");
    galleryNode.setAttribute("id", "page__gallery");
    pageMainNode.parentNode.insertBefore(galleryNode, pageMainNode.nextSibling);


    /////////////////
    // F O O T E R //
    /////////////////
    var footerNode = document.createElement("footer");

    var footerBlockNode = document.createElement("div");
    footerBlockNode.classList.add("footer__block");
    if (apolloConfig.footerBlockContent != "" && apolloConfig.footerBlockContent != false && apolloConfig.footerBlockContent != undefined) {
        if (apolloConfig.footerBlockTitle != "" && apolloConfig.footerBlockTitle != false && apolloConfig.footerBlockTitle != undefined) {
            var footerBlockTitleNode = document.createElement("h3");
            footerBlockTitleNode.textContent += apolloConfig.footerBlockTitle;
            footerBlockNode.appendChild(footerBlockTitleNode);
        }
        var footerBlockContentNode = document.createElement("p");
        footerBlockContentNode.textContent += apolloConfig.footerBlockContent;
        footerBlockNode.appendChild(footerBlockContentNode);
        footerBlockNode.classList.add("footer__block--rendered");
    }

    var footerFollowUsNode = document.createElement("div");
    footerFollowUsNode.classList.add("footer__follow-us");

    var footerFollowUsH3Node = document.createElement("h3");
    footerFollowUsH3Node.textContent += siteConfig[apolloConfig.projectSite].siteLocal["followUs"];
    footerFollowUsNode.appendChild(footerFollowUsH3Node);

    var siteSocialMeta = siteConfig[apolloConfig.projectSite].siteSocial;
    for (var socialProfile in siteSocialMeta) {
        if (siteSocialMeta.hasOwnProperty(socialProfile)) {
            if (siteSocialMeta[socialProfile] !== undefined) {
                var footerFollowUsANode = document.createElement("a");
                footerFollowUsANode.setAttribute("href", configPaths.socialMedia[socialProfile] + siteSocialMeta[socialProfile]);
                footerFollowUsANode.setAttribute("target", "_blank");
                footerFollowUsANode.innerHTML += icons[socialProfile];
                footerFollowUsNode.appendChild(footerFollowUsANode);
            }
        }
    }

    var siteServiceMeta = siteConfig[apolloConfig.projectSite].siteServices;
    for (var siteService in siteServiceMeta) {
        if (siteServiceMeta.hasOwnProperty(siteService)) {
            if (siteServiceMeta[siteService] !== false) {
                var footerFollowUsANode = document.createElement("a");
                footerFollowUsANode.setAttribute("href", siteConfig[apolloConfig.projectSite].siteURL + configPaths.siteServices[siteService]);
                footerFollowUsANode.setAttribute("target", "_blank");
                footerFollowUsANode.innerHTML += icons[siteService];
                footerFollowUsNode.appendChild(footerFollowUsANode);
            }
        }
    }

    var footerCopyrightNode = document.createElement("div");
    footerCopyrightNode.className += ("footer__copyright");

    var footerCopyrightPNode = document.createElement("p");
    footerCopyrightPNode.textContent += siteConfig[apolloConfig.projectSite].siteLocal["copyright"];
    footerCopyrightNode.appendChild(footerCopyrightPNode);

    var heroContentNode = document.createElement("div");
    footerNode.setAttribute("id", "page__footer");
    pageMainNode.parentNode.insertBefore(footerNode, pageMainNode.nextSibling);
    footerNode.appendChild(footerBlockNode);
    footerNode.appendChild(footerFollowUsNode);
    footerNode.appendChild(footerCopyrightNode);
}