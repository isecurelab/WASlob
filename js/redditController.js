var redditTwitterApp = angular.module('redditTwitterApp', []);

redditTwitterApp.controller('redditTwitterCtrl', function ($scope, $http) {
	$scope.redditLoaderVisible = true;
	
	$http.get(RedditURL).success( function (data) {
		$scope.reddit = data.data.children;
		$scope.redditLoaderVisible=false;
		
	})
	$scope.updTwitter = function(v) {
		loadTwitterData(v, "#twitter_summary_container");
	}
});