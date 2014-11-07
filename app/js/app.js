'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ui.router',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
]).run(['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams) {

		// It's very handy to add references to $state and $stateParams to the $rootScope
		// so that you can access them from any scope within your applications.For example,
		// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
		// to active whenever 'contacts.list' or one of its decendents is active.
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

	}
]).config(
	['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');			

			$stateProvider.state('home', {
				url: "/home",
				templateUrl: 'app/partials/layout/layout.html',
				controller: 'layoutController'
			});

		}
	]);

/*controllers*/
angular.module('myApp.controllers', []);
/* Directives */
angular.module('myApp.directives', []);
/* Services */
angular.module('myApp.services', []);

