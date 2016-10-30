var booksApp = angular.module('booksApp', []);

booksApp.controller('booksCtrl', function ($scope, $http) {
	$scope.bookLoaderVisible = true;
	
	
	$scope.loadBooks = function(q, prefix) {
		$http.get(GoogleBooksURLBase + q).success( function (data) {
		$scope.books = data.items;
		$scope.bookLoaderVisible=false;
		
	})
	}
});