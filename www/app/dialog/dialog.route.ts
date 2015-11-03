/// <reference path="../_references.ts"/>

namespace demo.dialog {
  'use strict';
	
  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('dialog', {
      url: '/dialog',
      templateUrl: 'app/dialog/dialog.html'
    });
  }

  angular.module('demo.dialog').config(doConfig);

}
