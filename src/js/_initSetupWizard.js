// Pangea Apollo Framework 2.0 [Reykjavík]
// 2018 (c) Pangea Digital, Radio Free Europe/Radio Liberty, Inc.
// All rights reserved

// Launch setup wizard if config is missing or user filled setupWizard: true
if (typeof apolloConfig === 'undefined' || apolloConfig.setupWizard === true) {

    // Header of the setupWizard
    console.log("%c" + setupWizard.title.message, configSetupWizard.headline);
    console.log("%c" + setupWizard.version.message, configSetupWizard.copyright);
    console.log("%c" + setupWizard.copyright.message, configSetupWizard.copyright);
    //console.log("%c" + "CONFIG TO PASTE:", configSetupWizard.copyright);
    //console.log("%c" + setupWizard.meta.metaList, configSetupWizard.infoMessage);

    console.log("%c" + setupWizard.instructions.message, configSetupWizard.paragraph);
    console.log("%c" + setupWizard.summary.message, configSetupWizard.subHeadline);

    if (setupWizard.configParser.status === "no-go-1") {
        console.log("%c" + setupWizard.configParser.noGoMessage1, configSetupWizard.errorMessage);
    } else if (setupWizard.configParser.status === "no-go-2") {
        console.log("%c" + setupWizard.configParser.noGoMessage2, configSetupWizard.errorMessage);
    } else {
        console.log("%c" + setupWizard.configParser.goMessage, configSetupWizard.successMessage);
        setupWizard.launchStatus.status = "go";
    }

    if (setupWizard.branding.status === "no-go") {
        console.log("%c" + setupWizard.branding.noGoMessage, configSetupWizard.errorMessage);
    } else {
        console.log("%c" + setupWizard.branding.goMessage, configSetupWizard.successMessage);
    }

    if (setupWizard.culture.status === "no-go") {
        console.log("%c" + setupWizard.culture.noGoMessage, configSetupWizard.errorMessage);
    } else {
        console.log("%c" + setupWizard.culture.goMessage, configSetupWizard.successMessage);
    }

    if (setupWizard.theme.status === "no-go") {
        console.log("%c" + setupWizard.theme.noGoMessage, configSetupWizard.errorMessage);
    } else {
        console.log("%c" + setupWizard.theme.goMessage, configSetupWizard.successMessage);
    }

    /*if (setupWizard.meta.status === "no-go-1") {
        console.log("%c" + setupWizard.meta.noGoMessage1, configSetupWizard.errorMessage);
    } else if (setupWizard.meta.status === "no-go-2") {
        console.log("%c" + setupWizard.meta.noGoMessage2, configSetupWizard.errorMessage);
        console.log("%c" + setupWizard.meta.metaList, configSetupWizard.infoMessage);
    } else {
        console.log("%c" + setupWizard.meta.goMessage, configSetupWizard.successMessage);
    }*/

    /*if (setupWizard.haltStatus === false) {
        if (setupWizard.analytics.status === "no-go") {
            console.log("%c" + setupWizard.analytics.noGoMessage, configSetupWizard.errorMessage);
        } else if (setupWizard.analytics.status === "go-warn-1") {
            console.log("%c" + setupWizard.analytics.goWarnMessage1, configSetupWizard.warningMessage);
            setupWizard.launchStatus.status = "go";
        } else if (setupWizard.analytics.status === "go-warn-2") {
            console.log("%c" + setupWizard.analytics.goWarnMessage2, configSetupWizard.warningMessage);
            setupWizard.launchStatus.status = "go";
        } else {
            console.log("%c" + setupWizard.analytics.goMessage, configSetupWizard.successMessage);
            setupWizard.launchStatus.status = "go";
        }
    }*/

    if (setupWizard.template4.status === "no-go") {
        console.log("%c" + setupWizard.template4.noGoMessage, configSetupWizard.errorMessage);
    } else {

    }

    if (setupWizard.haltStatus === true) {
        setupWizard.launchStatus.status = "no-go";
    }

    if (setupWizard.launchStatus.status === "no-go") {
        console.log("%c" + setupWizard.launchStatus.noGoMessage, configSetupWizard.errorMessage);
    } else {
        console.log("%c" + setupWizard.launchStatus.goMessage, configSetupWizard.successMessage);
    }

    console.log("%c" + setupWizard.others.message, configSetupWizard.subHeadline);
} else {
    console.log("%c" + setupWizard.credits.message, configSetupWizard.credits);
}
