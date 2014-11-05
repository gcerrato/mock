angular.module('myApp.directives')
	.directive('example', function() {
		return {
			replace: 'true',
			link: function(scope, element, attrs) {

			}
		};
	});