(function () {
	'use strict';

	angular.module('veronicaApp')
		.directive('comments',function(){
			return {
				templateUrl:'scripts/directives/sidenav/comments/comments.html?v='+window.app_version,
				restrict: 'E',
				replace: true
			};
		});

})();

