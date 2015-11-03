/// <reference path="../_references.ts"/>

namespace demo.devicemotion {
  'use strict';

  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('devicemotion', {
      url: '/devicemotion',
      templateUrl: 'app/deviceMotion/devicemotion.html'
    });
  }

  angular.module('demo.devicemotion').config(doConfig);

}
