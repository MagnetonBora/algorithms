
var arr1 = [ 1, 2, 3, 4, 5 ];
var arr2 = [ 5, 2, 3, 4, 1, 6 ];

var evaluate = function(prev, curr) {
	var items = [];
	for(var i = 0; i < curr.length; i++) {
		var index = -1;
		for(var j = 0; j < prev.length; j++) {
			if (prev[j] == curr[i]) {
				index = j;
				break;
			};
		};
		if (index == -1) {
			items.push(curr[i]);
		};
	};
	return items;
};

var res = evaluate(arr1, arr2);

console.log(res);

var app = angular.module('app', []);

app.controller('Ctrl', function ($scope, $q, $timeout) {

	$scope.done = [];

	var asyncTask = function (value) {
		var deferred = $q.defer();
		$timeout(function () {
			$scope.done.push(2 * value);
			deferred.resolve();
		}, 1000);
		return deferred.promise;
	};

	var list = [ 1, 2, 3, 4, 5 ];
	
	var deferred = $q.defer();
	var promise = deferred.promise;

	angular.forEach(list, function (value) {
		promise = promise.then(function () {
			return asyncTask(value);
		});
	});
	deferred.resolve();
});