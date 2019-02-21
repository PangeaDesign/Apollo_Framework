// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

///////////////////////
// V A R I A B L E S //
///////////////////////

var pageHtmlNode = document.getElementsByTagName("html")[0];
var pageHeadNode = document.getElementsByTagName("head")[0];
var pageBodyNode = document.getElementsByTagName("body")[0];
var pagePreloaderNode = document.getElementById("preloader");
var pageMainNode = document.getElementsByTagName("main")[0];

var configAnalyticsSize = Object.keys(siteAnalytics).length;
var thisPageURL = window.location.href;

//////////////////////////
// R E N D E R  H E A D //
//////////////////////////
// Get the language and direction and add it to the <html> and <body>
if (setupWizard.haltStatus === false) {
    pageHtmlNode.setAttribute("lang", siteConfig[apolloConfig.projectSite].siteLangISO);
    pageHtmlNode.setAttribute("dir", siteConfig[apolloConfig.projectSite].siteDir);
    pageBodyNode.setAttribute("dir", siteConfig[apolloConfig.projectSite].siteDir);
}

// Get the culture and add proper CSS to the <head>
if (setupWizard.haltStatus === false) {
    var apolloCulture = siteConfig[apolloConfig.projectSite].siteCulture;
    setupWizard.culture.status = "go";
}

// Get the theme and add proper CSS to the <head>
if (setupWizard.haltStatus === false) {
    var apolloTheme = apolloConfig.pageTheme;
    if (apolloTheme === "light" || apolloTheme === "dark") {
        setupWizard.theme.status = "go";
    } else {
        setupWizard.haltStatus = true;
        setupWizard.theme.status = "no-go";
    }
}

// Get the main CSS to the <head>
if (setupWizard.haltStatus === false) {
    var apolloVersion = configPaths.version;
    var newDOMNode = document.createElement('link');
    newDOMNode.setAttribute("rel", "stylesheet");
    newDOMNode.setAttribute("href", configPaths.css.root + "apollo-framework-" + apolloVersion + "-" + apolloCulture + "-" + apolloTheme + ".min.css?nocache=1");
    pageHeadNode.appendChild(newDOMNode);
    newDOMNode.onload = function(){
      document.getElementById("myConsole").innerHTML += " cssLoaded ";
      window.onload = function() {
          document.getElementById("myConsole").innerHTML += " windowLoaded ";
          var preloaderDOM = document.getElementById("preloader");
          preloaderDOM.className += "preloader--loading";
          startVideoEmbedded();
          setTimeout(function() {
              document.getElementById("myConsole").innerHTML += " startTimer ";
              preloaderDOM.className = "preloader--loaded";
              document.getElementsByTagName("body")[0].style.overflow = "visible";
          }, 1500);
      }
    }
}

// Prepare the mandatory meta data log and print it in console
var numberOfMeta = pageHeadNode.getElementsByTagName("meta").length;


// Send info to the setupWizard
if (numberOfMeta < setupWizard.meta.mandatoryMetaItems) {
    if (setupWizard.configParser.status === "no-go-1") {
        setupWizard.haltStatus = true;
        setupWizard.meta.status = "no-go-1";
    } else {
        setupWizard.meta.metaList = "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n<title>" + apolloConfig.projectTitle + "</title>\n<meta name=\"description\" content=\"" + apolloConfig.projectDescription + "\">\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/" + siteConfig[apolloConfig.projectSite].siteSocial.facebook + "\">\n<meta property=\"og:title\" content=\"" + apolloConfig.projectTitle + "\">\n<meta property=\"og:description\" content=\"" + apolloConfig.projectDescription + "\">\n<meta property=\"og:image\" content=\"" + apolloConfig.projectImage + "\">\n<meta property=\"og:url\" content=\"" + apolloConfig.projectTitle + "\">\n<meta property=\"og:type\" content=\"article\">\n<meta property=\"og:site_name\" content=\"" + siteConfig[apolloConfig.projectSite].siteNameLocal + "\">\n<meta property=\"fb:app_id\" content=\"" + siteConfig[apolloConfig.projectSite].siteSocialMeta.facebook + "\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:image:alt\" content=\"" + apolloConfig.projectImage + "\">\n<meta name=\"twitter:site\" content=\"" + siteConfig[apolloConfig.projectSite].siteSocialMeta.twitter + "\">\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/favicon-16x16.png\">\n<link rel=\"manifest\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/manifest.json\">\n<link rel=\"mask-icon\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/safari-pinned-tab.svg\" color=\"" + faviconConfig[siteConfig[apolloConfig.projectSite].siteBrand] + "\">\n<meta name=\"theme-color\" content=\"#ffffff\">";
        setupWizard.haltStatus = true;
        setupWizard.meta.status = "no-go-2";
    }
} else {
    setupWizard.meta.metaList = "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n<title>" + apolloConfig.projectTitle + "</title>\n<meta name=\"description\" content=\"" + apolloConfig.projectDescription + "\">\n<meta property=\"article:publisher\" content=\"https://www.facebook.com/" + siteConfig[apolloConfig.projectSite].siteSocial.facebook + "\">\n<meta property=\"og:title\" content=\"" + apolloConfig.projectTitle + "\">\n<meta property=\"og:description\" content=\"" + apolloConfig.projectDescription + "\">\n<meta property=\"og:image\" content=\"" + apolloConfig.projectImage + "\">\n<meta property=\"og:url\" content=\"" + apolloConfig.projectTitle + "\">\n<meta property=\"og:type\" content=\"article\">\n<meta property=\"og:site_name\" content=\"" + siteConfig[apolloConfig.projectSite].siteNameLocal + "\">\n<meta property=\"fb:app_id\" content=\"" + siteConfig[apolloConfig.projectSite].siteSocialMeta.facebook + "\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:image:alt\" content=\"" + apolloConfig.projectImage + "\">\n<meta name=\"twitter:site\" content=\"" + siteConfig[apolloConfig.projectSite].siteSocialMeta.twitter + "\">\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/favicon-16x16.png\">\n<link rel=\"manifest\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/manifest.json\">\n<link rel=\"mask-icon\" href=\"" + configPaths.favicons + siteConfig[apolloConfig.projectSite].siteBrand + "/safari-pinned-tab.svg\" color=\"" + faviconConfig[siteConfig[apolloConfig.projectSite].siteBrand] + "\">\n<meta name=\"theme-color\" content=\"#ffffff\">";
    setupWizard.meta.status = "go";
}

// Check if is this domain part of the analytics config
if (setupWizard.haltStatus === false) {
    if (thisPageURL.indexOf("file://") >= 0 || thisPageURL.indexOf("localhost") >= 0) {
        var analyticsInit = false;
        var analyticsLocal = true;
    } else {
        for (i = 0; i < configAnalyticsSize; i++) {
            if (thisPageURL.indexOf(siteAnalytics[i].siteURL) >= 0) {
                //break; //??? it happens everytime I think or metadata is still not created ??? on the end ???
                var analyticsEntity = siteAnalytics[i].entity;
                var analyticsLang = siteAnalytics[i].lang;
                var analyticsLangService = siteAnalytics[i].langService;
                var analyticsShortLangService = siteAnalytics[i].shortLangService;
                var analyticsPropertyID = siteAnalytics[i].propertyID;
                var analyticsInit = true;
                var analyticsLocal = false;

                // Append Analytics script to the <head>
                var newDOMNode = document.createElement('script');
                newDOMNode.type = 'text/javascript';
                newDOMNode.text = '\nvar utag_data = {\nentity: \'' + analyticsEntity + '\',\nlanguage: \'' + analyticsLang + '\',\nlanguage_service: \'' + analyticsLangService + '\',\nshort_language_service: \'' + analyticsShortLangService + '\',\nproperty_id: \'' + analyticsPropertyID + '\',\nplatform: \'Responsive\',\nplatform_short: \'R\',\nruns_js: \'Yes\',\npage_title: \'' + apolloConfigParsed.projectTitle + '\'\n};\nif(typeof(TealiumTagFrom) === \'function\' && typeof(TealiumTagSearchKeyword) === \'function\') {\nvar utag_from = TealiumTagFrom();\nvar utag_searchKeyword = TealiumTagSearchKeyword();\nif (utag_searchKeyword != null && utag_searchKeyword !== \'\' && utag_data["search_keyword"] == null)\nutag_data["search_keyword"] = utag_searchKeyword;\nif (utag_from != null && utag_from !== \'\')\nutag_data["from"] = TealiumTagFrom();\n}\n(function(a, b, c, d) {\na ="//tags.tiqcdn.com/utag/bbg/rferl-pangea/prod/utag.js";\nb = document;\nc = "script";\nd = b.createElement(c);\nd.src = a;\nd.type = "text/java" + c;\nd.async = true;\na = b.getElementsByTagName(c)[0];\na.parentNode.insertBefore(d, a);\n})();\n';

                if (typeof utag_data == 'undefined') {
                    document.head.appendChild(newDOMNode);
                    setupWizard.template4.status = "go";
                } else {
                    setupWizard.template4.status = "no-go";
                }
                break;
            } else {
                var analyticsInit = false;
            }
        }
    }

    // Send info to the setupWizard
    if (analyticsInit === false && analyticsLocal === false) {
        setupWizard.analytics.status = "go-warn-1";
    } else if (analyticsInit === false && analyticsLocal === true) {
        setupWizard.analytics.status = "go-warn-2";
    } else if (analyticsInit === true) {
        setupWizard.analytics.status = "go";
    } else {
        setupWizard.haltStatus = true;
        setupWizard.analytics.status = "no-go";
    }
}
