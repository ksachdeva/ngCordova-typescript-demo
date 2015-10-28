(function() {
  'use strict';

  /* @ngInject */
  function doConfig($stateProvider) {
    $stateProvider.state('device', {
      url: '/device',
      templateUrl: 'app/device/device.html'
    });
  }

  angular.module('demo.device').config(doConfig);

})();