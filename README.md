## Loading Waterfall
1. dist/css/launch.min.css
2. dist/js/apollo-framework-2.0.min.js
3. dist/css/themes/theme-THEME.min.css
4. dist/css/apollo-framework-2.0.min.css
5. dist/css/brands/brand-NAME.min.css
6. fonts/FONTFILE.woff2
7. fonts/FONTFILE.woff
8. content


## How to?
1. Turn on the setup wizard in config by putting "true" value into setupWizard.
2. Fill the config
3. Open your console in the browser and follow the instructions
4. Copy all mandatory meta data in the <head>
5. Localize <noscript> tag if necessary.
6. Create your content inside of <main> tags
7. After you're finished, put setupWizard config value to "false"
8. Publish!


## Waterfall for SetupWizard
1. config
2. => branding
3. ==> theme
4. ===> meta
5. ====> analytics check


## On demand Meta
write myMeta() into console


## Apollo config
+ `setupWizard` | boolean |
+ `projectSite` | af_da | af_en | af_pa | ar | ar_ru | az | be | cr_ru | cr_tb | cr_uk | en | press | ge | ge_ru | kz | kz_ru | al | kg | kg_ru | mk | mo | nc_ce | nc_ru | pk | fa | fa_en | ru | sib | sh | tj | tj_ru | tb | tb_ru | tu | tu_ru | ua | uz | uz_ru | ct |
+ `projectTitle` | string |
+ `projectDescription` | string |
+ `projectAuthor` | string |
+ `projectImage` | string (jpg, jpeg, png) |
+ `heroStyle` | centered | tabloid | cover-left | cover-right |
+ `heroMedia` | string (gif, jpg, jpeg, png, mp4) |
+ `heroOverlay` | boolean |
+ `heroByline` | string |
+ `pageTheme` | light | dark |
+ `footerBlock` | boolean |
+ `footerBlockTitle` | string |
+ `footerBlockContent` | string |
