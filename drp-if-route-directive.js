/*
	<element drp-if-route="match-regexp">...</element>
*/
angular.module('com.david-rodenas.DrpIfRoute',[
		'com.david-rodenas.DrpIfDirectiveSupport',
	]).directive('drpIfRoute', 
		['DrpIfDirectiveSupport','$location', function 
		( DrpIfDirectiveSupport , $location ) { 'use strict';

	return {
		restrict: 'A',
		transclude: 'element',
		priority: 600,
		terminal: true,
		$$tlb: true,
		link: function (scope, element, attr, ctrl, transclude) {

			var ifSupport = new DrpIfDirectiveSupport({
				element: element,
				transclude: transclude,
				comment: 'if-route'
			});

			scope.$watch(function() {
				return $location.path();
			}, function (newPath) {
				var match = '^' + attr.drpIfRoute + '$';
				if (newPath.match(match)) {
					ifSupport.enter();
				} else {
					ifSupport.leave();
				}
			});

		},
	};

}]);