angular.module('myApp.directives')
	.directive('box', function() {
		return {
			replace: 'true',
			restrict: 'E',
			templateUrl: 'app/partials/elements/box.html',
			link: function(scope, element, attrs) {

				element = $(element);

				element.find('.fill').addClass(attrs.color);
				element.find('.fill').css('right', (100 - attrs.percent) + "%" );

			}
		};
	});