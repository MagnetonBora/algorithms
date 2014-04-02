
var roots = [{
               "label": "Advertiser's data",
               "children": [
                       {
                         "label": "all website visitors",
                         "children": []
                       },
                       {
                         "label": "LP visitors",
                         "children": []
                       },
                       {
                         "label": "subscribers",
                         "children": []
                       }
               ]
             },
             {
               "label": "DataExchanger",
               "children": []
             },
             {
               "label": "eXelate",
               "children": [
                       {
                         "label": "Demo",
                         "children": []
                       },
                       {
                         "label": "Interest",
                         "children": []
                       },
                       {
                         "label": "Intent",
                         "children": []
                       }
               ]
             },
             {
               "label": "Lotame",
               "children": [
                       {
                         "label": "Demographi",
                         "children": []
                       },
                       {
                         "label": "Interest",
                         "children": [
                               {
                                 "label": "Arts & Culture",
                                 "children": [],
                                 "value": "0,75 USD"
                               },
                               {
                                 "label": "Automobile",
                                 "children": [],
                                 "value": "0,75 USD"
                               },
                               {
                                 "label": "Entertainment",
                                 "children": [],
                                 "value": "0,75 USD"
                               },
                               {
                                 "label": "Sports & Recreations",
                                 "children": [],
                                 "value": "0,75 USD"
                               }
                         ]
                       }]
                 }];

var foo = function() {
	return function(roots) {

		var list = [];

		var add_branch_to_list = function(level, branch, parent_id) {
			var children = [];
      if (branch.children && branch.children.length) {
        for(var index in branch.children) {
          var child = branch.children[index];
          child.id = child.id || Math.random().toString().substr(2);
          children.push(child);
        };
      };

			var obj = {
        level: level,
				parent_id: parent_id,
				children: children,
				label: branch.label
			};

			obj.id = branch.id ? branch.id : Math.random().toString().substr(2);
			list.push(obj);

			if (children.length) {
        for(var index in children) {
          var child = children[index];
          add_branch_to_list(level+1, child, obj.id);
        };
			};
		};

    for(var index in roots) {
      var root = roots[index];
      add_branch_to_list(1, root, null);
    };

		return list;
	};
};

var flat_list = foo()(roots);

console.log(flat_list);

for(var index in flat_list) {
  console.log( 'Level is: ' + flat_list[index].level );
};