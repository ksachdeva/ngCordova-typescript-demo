/// <reference path="../_references.ts"/>

namespace demo.deviceorientation {
  'use strict';

  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('deviceorientation', {
      url: '/deviceorientation',
      templateUrl: 'app/deviceOrientation/deviceorientation.html'
    });
  }

  angular.module('demo.deviceorientation').config(doConfig);

}
