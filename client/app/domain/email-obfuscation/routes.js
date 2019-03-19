angular.module('App').config(($stateProvider) => {
  ['product', 'alldom'].forEach((stateType) => {
    $stateProvider.state(`app.domain.${stateType}.emailObfuscation`, {
      url: '/obfuscation',
      views: {
        domainView: 'domainEmailObfuscation',
      },
      translations: ['.'],
    });
  });
});
