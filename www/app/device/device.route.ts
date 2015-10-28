/// <reference path="../_references.ts"/>

namespace demo.device {
  'use strict';
	
  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider) {
    $stateProvider.state('device', {
      url: '/device',
      templateUrl: 'app/device/device.html'
    });
  }

  angular.module('demo.device').config(doConfig);

}