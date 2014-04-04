
var LENGTH = 20;
var tree = [];

tree[0] = -1;

for(var i = 1; i < LENGTH; i+=3) {
	tree[i] = i;
	tree[2*i] = 2*i;
	tree[2*i+1] = 2*i+1;
};

for(var i = 0; i < tree.length; i++) {
	console.log(tree[i]);
};