/// <reference path="../_references.ts"/>

namespace demo.network {
  'use strict';

  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('network', {
      url: '/network',
      templateUrl: 'app/network/network.html'
    });
  }

  angular.module('demo.network').config(doConfig);

}
