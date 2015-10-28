(function() {
  'use strict';

  /* ngInject */
  function DeviceController($ionicPlatform, $cordovaDevice) {
    var self = this;

    function init() {
      $ionicPlatform.ready(function() {
        self.available = $cordovaDevice.getDevice().available;
        self.cordova = $cordovaDevice.getCordova();
        self.model = $cordovaDevice.getModel();
        self.platform = $cordovaDevice.getPlatform();
        self.uuid = $cordovaDevice.getUUID();
        self.version = $cordovaDevice.getVersion();
      });
    }

    init();
  }

  angular.module('demo.device').controller('DeviceController', DeviceController);

})();