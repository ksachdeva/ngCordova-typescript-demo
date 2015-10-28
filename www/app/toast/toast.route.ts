/// <reference path="../_references.ts"/>

namespace demo.toast {
  'use strict';
	
  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('toast', {
      url: '/toast',
      templateUrl: 'app/toast/toast.html'
    });
  }

  angular.module('demo.toast').config(doConfig);

}