/// <reference path="../_references.ts"/>

namespace demo.email {
  'use strict';

  doConfig.$inject = ["$stateProvider"];
  function doConfig($stateProvider:ng.ui.IStateProvider) {
    $stateProvider.state('emailComposer', {
      url: '/emailComposer',
      templateUrl: 'app/emailComposer/emailComposer.html'
    });
  }

  angular.module('demo.email').config(doConfig);

}
