angular.module('App').config(($stateProvider) => {
  ['product', 'alldom'].forEach((stateType) => {
    $stateProvider.state(`app.domain.${stateType}.optin`, {
      url: '/optin',
      views: {
        domainView: 'domainOptin',
      },
      translations: ['.'],
    });
  });
});
