(function() {
  'use strict';

  var dependencies = [
    'ionic',
    'demo.device'
  ];

  angular.module('demo', dependencies)

  .run(function($ionicPlatform, $window) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if ($window.cordova && $window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if ($window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/layout');

    $stateProvider.state('layout', {
      url: "/layout",
      templateUrl: "app/layout/layout.html"
    })

    .state('device', {
      url: '/device',
      templateUrl: 'app/device/device.html',
      controller: "DeviceController"
    })

    .state('about', {
      url: "/about",
      templateUrl: "app/about/about.html"
    });

  });
})();