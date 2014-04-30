
var A = "12345";

var B = "11111";

var sum = function(A, B) {

	var carry = 0;
	var len = Math.max(A.length, B.length)
	var Q = "";

	for(var i = len-1; i >= 0; i--) {
		var a = parseInt( A[i] );
		var b = parseInt( B[i] );
		Q = Q + ( (a + b + carry) % 10);
		carry = ( a + b <= 9 ) ? 0 : 1;
	};

	return Q.split("").reverse().join("");
};

console.log( sum(A, B) );