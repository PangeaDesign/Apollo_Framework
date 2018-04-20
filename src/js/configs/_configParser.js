// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

// Defaults for Apollo main config
var apolloConfigDefaults = {
    setupWizard: true,
    projectSite: "en",
    projectTitle: "Welcome to Iceland!",
    projectDescription: "Iceland is a Nordic island country of Europe located in the North Atlantic Ocean. It has a population of 332,529 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe. The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population.",
    projectAuthor: "Björk",
    projectImage: "https://www.icelandairhotels.com/static/strevda/lg/1475075635-1473434601-rvk-vetur04.jpg",
    heroStyle: "tabloid",
    heroMedia: "https://www.icelandairhotels.com/static/strevda/lg/1475075635-1473434601-rvk-vetur04.jpg",
    heroByline: "Story by Björk",
    heroOverlay: true,
    pageTheme: "light",
    footerBlockTitle: "Credits",
    footerBlockContent: "Iceland is a Nordic island country of Europe located in the North Atlantic Ocean. It has a population of 332,529 and an area of 103,000 km2 (40,000 sq mi), making it the most sparsely populated country in Europe. The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population."
}

// Parse User's Apollo main config and replace missing values with defaults
var apolloConfigParsed = {};

if (typeof apolloConfig === 'undefined') {
    setupWizard.haltStatus = true;
    setupWizard.configParser.status = "no-go-1";
} else {
    var apolloConfigSize = Object.keys(apolloConfig).length;
    var apolloConfigDefaultsSize = Object.keys(apolloConfigDefaults).length;

    if (apolloConfigSize < apolloConfigDefaultsSize) {
        setupWizard.haltStatus = true;
        setupWizard.configParser.status = "no-go-2";
    } else {
        setupWizard.configParser.status = "go";

        if (siteConfig[apolloConfig.projectSite] === undefined) {
            setupWizard.haltStatus = true;
            setupWizard.branding.status = "no-go";
            setupWizard.culture.status = "no-go";
        } else {
            setupWizard.branding.status = "go";
            setupWizard.culture.status = "go";
        }
    }
}