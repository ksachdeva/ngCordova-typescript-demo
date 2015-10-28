/// <reference path="../_references.ts"/>

namespace demo.device {
	'use strict';
	
	interface IDeviceViewModel {
		available:string;
        cordova:string;
        model:string;
        platform:string;
        uuid:string;
        version:string;
	}
	
	export class DeviceController {
		
		public vm:IDeviceViewModel;
		
		constructor($ionicPlatform, $cordovaDevice) {
			var self = this;
			
			$ionicPlatform.ready(function() {
				self.vm = {
					available : $cordovaDevice.getDevice().available,
					cordova : $cordovaDevice.getCordova(),
					model : $cordovaDevice.getModel(),
					platform : $cordovaDevice.getPlatform(),
					uuid : $cordovaDevice.getUUID(),
					version : $cordovaDevice.getVersion()
				};
			});				
		}
								
	}
	
	angular.module("demo.device").controller("DeviceController", DeviceController);
}