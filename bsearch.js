
var arr = [];

for(var i = 0; i < 10; i++) {
	arr.push(i);
};

var bsearch = function(collection, key) {
	var l = 0;
	var r = collection.length;
	var m = -1;
	while (l < r) {
		m = parseInt( l + 0.5 * (r - l) );
		if (key <= collection[m]) {
			r = m;
		} else {
			l = m + 1;
		};
	};
	if (collection[l] != key) {
		return -1;
	};
	return collection[l];
};

var index = bsearch(arr, 1);
console.log(index);