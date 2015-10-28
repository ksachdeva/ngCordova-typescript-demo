/// <reference path="_references.ts"/>

namespace demo {
	'use strict';
	
	var dependencies = [
		'ionic',
		'ngCordova',
		'demo.device',
		'demo.toast'
  	];
	
	runApp.$inject = ["$ionicPlatform", "$window"];  
	function runApp($ionicPlatform:ionic.platform.IonicPlatformService, $window) {
		$ionicPlatform.ready(() => {
			if ($window.cordova && $window.cordova.plugins.Keyboard) {
				$window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if ($window.StatusBar) {
				$window.StatusBar.styleDefault();
			}
		});
	}
	
	
	configApp.$inject = ["$stateProvider", "$urlRouterProvider"];
	function configApp($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
		$urlRouterProvider.otherwise('/layout');
	
		$stateProvider.state('layout', {
				url: "/layout",
				templateUrl: "app/layout/layout.html"
			})
	
		.state('about', {
			url: "/about",
			templateUrl: "app/about/about.html"
		});
	}

	angular.module('demo', dependencies)	
			.run(runApp)	
			.config(configApp);
	
}