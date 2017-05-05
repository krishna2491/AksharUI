
/* JavaScript content from script/aes/mdTheme.js in folder common */
IFMISMobileApp.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });
IFMISMobileApp.config(function ($mdThemingProvider) {

	 $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': '466ABF',
    '100': '466ABF',
    '200': '466ABF',
    '300': '466ABF',
    '400': '466ABF',
    '500': '466ABF',
    '600': '466ABF',
    '700': '466ABF',
    '800': '466ABF',
    '900': '466ABF',
    'A100': '466ABF',
    'A200': '466ABF',
    'A400': '466ABF',
    'A700': '466ABF',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.definePalette('backgroundPalette', {
    '50': 'F9F9F9',
    '100': 'F9F9F9',
    '200': 'F9F9F9',
    '300': 'F9F9F9',
    '400': 'F9F9F9',
    '500': 'F9F9F9',
    '600': 'F9F9F9',
    '700': 'F9F9F9',
    '800': 'F9F9F9',
    '900': 'F9F9F9',
    'A100': 'F9F9F9',
    'A200': 'F9F9F9',
    'A400': 'F9F9F9',
    'A700': 'F9F9F9',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });



$mdThemingProvider
    .theme('default')
    .primaryPalette('amazingPaletteName')
    .accentPalette('amazingPaletteName')
    .warnPalette('red')
    .backgroundPalette('backgroundPalette')



})
