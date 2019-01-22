// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

// Styles for setup wizard
var configSetupWizard = {
    errorMessage: "color: #D12430; font-size: 13px;",
    warningMessage: "color: #EE8735; font-size: 13px;",
    successMessage: "color: #83AB4B; font-size: 13px;",
    infoMessage: "color: #8C4799; font-size: 11px; ",
    headline: "color: #186c97; font-size: 22px; font-weight: bold; font-family: sans-serif;",
    subHeadline: "color: #186c97; font-size: 13px; font-weight: bold;",
    copyright: "color: #186c97; font-size: 12px; font-weight: bold;",
    credits: "color: #ea6903; font-size: 12px; font-weight: bold;",
    paragraph: "color: #000; font-size: 13px;"
}

// Create new object with Setup Wizard values
var setupWizard = {
    haltStatus: false,
    setupWizardStatus: true,
    title: {
        message: "Welcome to the Pangea Apollo Framework Setup Wizard"
    },
    credits: {
        message: "Radio Free Europe/Radio Liberty © " + new Date().getFullYear() + " RFE/RL, Inc. All Rights Reserved."
    },
    copyright: {
        message: "Copryight " + new Date().getFullYear() + " © Pangea Digital\n\n"
    },
    version: {
        message: "Pangea Apollo Framework 2.0 [Iceland]"
    },
    instructions: {
        message: "Please fill the apolloConfig part of your page and follow the instructions displayed in the following summary.\nFor more information read Pangea Apollo Framework documentation on https://docs.rferl.org/Branding/CDN/Apollo_Framework/2.0/HowTo.html \nAll messages should be green with [GO] prefix before publishing."
    },
    summary: {
        message: "\nLaunch sequence summary\n-----------------------"
    },
    configParser: {
        status: "no-go-1",
        noGoMessage1: "[NO-GO] Your project is missing the main config part. Halting...",
        noGoMessage2: "[NO-GO] Your project config is missing mandatory values. Halting...",
        goMessage: "[GO] Your project config is present on the page.",
    },
    branding: {
        status: "no-go",
        noGoMessage: "[No-GO] Config value error: No site with this ID found. Halting...",
        goMessage: "[GO] Site branding set."
    },
    culture: {
        status: "no-go",
        noGoMessage: "[NO-GO] Config value error: No culture settings found. Halting...",
        goMessage: "[GO] Site direction and language set."
    },
    theme: {
        status: "no-go",
        noGoMessage: "[NO-GO] Config value error: Page theme doesn't exist. Halting...",
        goMessage: "[GO] Project theme set."
    },
    meta: {
        status: "no-go-1",
        mandatoryMetaItems: 15,
        noGoMessage1: "[NO-GO] Your page is missing main config that generates mandatory meta data. Halting...",
        noGoMessage2: "[NO-GO] Your page is missing mandatory meta data. Copy & paste following lines of code to the <head> section of your project:",
        goMessage: "[GO] Mandatory meta data set."
    },
    analytics: {
        status: "no-go",
        goWarnMessage1: "[GO][With Warnings] Your project is running on domain that is not supported by RFE/RL's Adobe Analytics!",
        goWarnMessage2: "[GO][With Warnings] It seems that you're working on the local environment. Analytics will be added once the page is uploaded to the Pangea CMS.",
        noGoMessage: "[NO-GO] RFE/RL's Adobe Analytics unknown error.",
        goMessage: "[GO] RFE/RL's Adobe Analytics initiated for this domain."
    },
    template4: {
        status: "no-go",
        noGoMessage: "[NO-GO] Check your \"Infographics page layout\" in CMS, this code is prepared for Template 4 (Empty Canvas)"
    },
    launchStatus: {
        status: "no-go",
        goMessage: "============ L A U N C H   S T A T U S ============\n[GO] Your project is ready for liftoff! Bon Voyage!\n\n\n",
        noGoMessage: "================================= L A U N C H   S T A T U S ===================================\n[NO-GO] Halted. Check the launch sequence summary for NO-GO errors and follow the instructions. \n\n\n"
    },
    others: {
        message: "Console log & Other messages:\n-----------------------------"
    }
}


// On demand call of the meta data
var myMeta = function() {
    console.log("%c" + setupWizard.meta.metaList, configSetupWizard.infoMessage);
    return "Make sure all the purple lines are present in the <head> part of your page.";
}
