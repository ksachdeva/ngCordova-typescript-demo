/// <reference path="../_references.ts"/>

namespace demo.appavailability {
  'use strict';

  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('appavailability', {
      url: '/appavailability',
      templateUrl: 'app/appAvailability/appavailability.html'
    });
  }

  angular.module('demo.appavailability').config(doConfig);

}
