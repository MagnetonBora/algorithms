
//var tree = [
//	{ 
//		"label": "Automotive",
//		"id": "node1"
//	},
//	{
//		"label": "Sports - NASCAR",
//		"id": "node2"
//	},
//	{
//		"label" : "Other",
//		"id": "node3",
//		"children": [
//						{ 
//							"label": "Fight",
//							"children": [
//							             {
//							            	"label": "Box",
//							            	"id": "123213"
//							             }
//							]
//						},
//						{
//							"label": "Business",	
//						},
//						{
//							"label": "Education"
//						},
//						{
//							"label": "Lorem"	
//						},
//						{
//							"label": "Ipsum"
//						},
//						{
//							"label": "Cars"
//						}
//		 ]
//	}
//];

var tree = [
            {
                "label": "Advertiser's data",
                "children": [
                        {
                          "label": "all website visitors"
                        },
                        {
                          "label": "LP visitors"
                        },
                        {
                          "label": "subscribers"
                        }
                ]
              },
              {
                "label": "DataExchanger"
              },
              {
                "label": "eXelate",
                "children": [
                        {
                          "label": "Demo"
                        },
                        {
                          "label": "Interest"
                        },
                        {
                          "label": "Intent"
                        }
                ]
              },
              {
                "label": "Lotame",
                "children": [
                        {
                          "label": "Demographi"
                        },
                        {
                          "label": "Interest",
                          "children": [
                                {
                                  "label": "Arts & Culture",
                                  "value": "0,75 USD"
                                },
                                {
                                  "label": "Automobile",
                                  "value": "0,75 USD"
                                },
                                {
                                  "label": "Entertainment",
                                  "value": "0,75 USD"
                                },
                                {
                                  "label": "Sports & Recreations",
                                  "value": "0,75 USD"
                                }
                          ]
                        }
                ]
              }
];


var traverse = function(root) {
	
	if (!root) {
		println("Empty");
		return null;
	};
	
	var stack = [];
	stack.push(root);
	
	while (stack.length != 0) {
		var node = stack.pop();
		println(node.label);
		if (typeof node.children != 'undefined' && node.children != null) {
			for(var i = 0; i < node.children.length; i++) {
				stack.push(node.children[i]);
			};
		};
	};
};

var clone = function(obj) {
	if (obj == null || typeof(obj) != 'object') {
		return obj;
	};
	var temp = new obj.constructor();
	for(key in obj) {
		temp[key] = clone(obj[key]);
	};
	return temp;
};

var expand = function(roots) {
	
	if (!roots) {
		traverse(null);
		return;
	};
	
	for(var i = 0; i < roots.length; i++) {
		traverse(roots[i]);
	};
	
};

var search = function(tree, node) {
	
	if (typeof tree === 'undefined' || tree === null) {
		return undefined;
	};
	
	if (typeof node === 'undefined' || node === null) {
		return undefined;
	};

	var pattern = node.label.toLowerCase();
	var root = clone(tree);
	
	var parent = null;
	var node = null;
		
	for(var i = 0; i < root.length; i++) {
		if (root[i].label.toLowerCase() === pattern) {
			node = root[i];
			break;
		} else {
			if (typeof root[i].children !== 'undefined' && root[i].children !== null) {
				for(var j = 0; j < root[i].children.length; j++) {
					if (root[i].children[j].label.toLowerCase() === pattern) {
						parent = root[i];
						node = root[i].children[j];
						break;
					};
				};
			};
		};
	};
	
	return {
		parent: parent,
		node: node
	};
};

var truncate = function(tree, node) {
	
	if (typeof tree === 'undefined' || tree === null) {
		return undefined;
	};
	
	if (typeof node === 'undefined' || node === null) {
		return undefined;
	};
	
	var pattern = node.label.toLowerCase();
	
	var stack = [];
	
	for(var i = 0; i < tree.length; i++) {
		if (typeof tree[i].children !== 'undefined' && tree[i].children !== null && 
				tree[i].children.length != 0) {
			stack.push(tree[i].children);
		} else {
			if (tree[i].label.toLowerCase() === pattern) {
				tree.splice(i, 1);
				println("Node: " + pattern + " deleted.");
			};			
		};
	};
	
	while (stack.length != 0) {
		var nodes = stack.pop();
		for(var i = 0; i < nodes.length; i++) {
			if (nodes[i].label.toLowerCase() === pattern) {
				nodes.splice(i, 1);
				println("Node: " + pattern + " deleted.");
			} else {
				if (typeof nodes[i].children !== 'undefined' && nodes[i].children !== null) {
					stack.push(nodes[i].children);
				};				
			};
		};
	};
	
};

var filter = function(tree, query) {
	
	if (typeof tree === 'undefined' || tree == null) {
		return undefined;
	};
	
	if (typeof query === 'undefined' || query == null) {
		return tree;
	};
	
	var pattern = query.toLowerCase();
	var buffer = clone(tree);
	
	var stack = [];
	var marked_nodes = [];
	
	for(var i = 0; i < buffer.length; i++) {
		stack.push(buffer[i]);
	};
	
	while (stack.length != 0) {
		var node = stack.pop();
		println("Node to check: " + node.label);
		if (!node.label.toLowerCase().match(pattern)) {
			println("Node: " + node.label + " doesn't match.");
			if (typeof node.children === 'undefined' || node.children === null ||
					node.children.length == 0) {
				println("Node to delete: " + node.label);
				truncate(buffer, node);
			} else {
				println("Node: " + node.label + " has " + node.children.length + " children.");
				var index = marked_nodes.indexOf(node);
				if (index == -1) {
					marked_nodes.push(node);
					stack.push(node);
					for(var i = 0; i < node.children.length; i++) {
						stack.push(node.children[i]);
					};
				};
			};
		};
	};

	return buffer;
};

var query = 'LP';

println("Expanded tree: ");

expand(tree);
println("");

var buffer = clone(tree);
var part = filter(buffer, query);

println("");
println("Filtered tree: ");
expand(part);
