angular.module('myApp.directives')
	.directive('row', ['rowService',
		function(rowService) {
			return {
				replace: 'true',
				restrict: 'E',
				templateUrl: 'app/partials/elements/row.html',
				scope: {
			        details: '=',
			    },
				link: function(scope, element, attrs) {

					scope.index = attrs.index;

					var type = attrs.type == 'build' ? 'fa-desktop' : 'fa-square';  

					element.addClass(attrs.status);
					$(element).find('.icon i').addClass(type);

					element.bind("click", function() {

						
						if (!element.hasClass('open')) {
							//All Rows Actions
							$('.row').removeClass('open');
							$('.name').removeClass("clicked");
							$('.calc').fadeIn(300);
							$('.tiles').removeClass("open");

							element.addClass("open");
							$(element).find('.name').addClass("clicked");
							$(element).find('.tiles').addClass("open");
							$(element).find(".calc").fadeOut(300);

						} else {
							element.removeClass("open");
							$(element).find('.name').removeClass("clicked");
							$(element).find('.tiles').removeClass("open");
							$(element).find(".calc").fadeIn(300);
						}


					});
				}
			};
		}
	]);