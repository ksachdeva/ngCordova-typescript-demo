/// <reference path="../_references.ts"/>

namespace demo.geolocation {
  'use strict';

  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('geolocation', {
      url: '/geolocation',
      templateUrl: 'app/geolocation/geolocation.html'
    });
  }

  angular.module('demo.geolocation').config(doConfig);

}
