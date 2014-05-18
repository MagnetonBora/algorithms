
(function() {

	var allDivs=document.getElementsByTagName("div");
	var dialogsId=[];

	for (var i=0; i<allDivs.length; ++i) {
		var index1 = allDivs[i].className.indexOf("dialogs_row");
		var index2 = allDivs[i].className.indexOf("dialogs_row ");
		var index3 = allDivs[i].className.indexOf(" dialogs_row");
		var index4 = allDivs[i].className.indexOf(" dialogs_row ");
		if ( index1 != -1 || index2 != -1 || index3 != -1 || index4 != -1 ) {
			dialogsId.push(allDivs[i].id.substring(9));
		};
	}

	var i = 0;
	inter = setInterval(function() {
		IM.selectDialog(dialogsId[i]);
		setTimeout(function() {
			IM.deleteHistory(dialogsId[i++]);
			// but = document.getElementsByTagName("button");
			// var j = 0;
			// while(but[j++].parentNode.className != "button_blue");
			// but[j-1].click();
		}, 500);
		setTimeout(function() {
			but = document.getElementsByTagName("button");
			var j = 0;
			while(but[j++].parentNode.className != "button_blue");
			but[j-1].click();
		},1000);
		if ( i > dialogsId.length )
			clearInterval( inter );
	}, 2000);
})();


(function() {

	var allDivs=document.getElementsByTagName("div");
	var dialogsId=[];

	for (var i=0; i<allDivs.length; ++i) {
		var index1 = allDivs[i].className.indexOf("dialogs_row");
		var index2 = allDivs[i].className.indexOf("dialogs_row ");
		var index3 = allDivs[i].className.indexOf(" dialogs_row");
		var index4 = allDivs[i].className.indexOf(" dialogs_row ");
		if ( index1 != -1 || index2 != -1 || index3 != -1 || index4 != -1 ) {
			dialogsId.push(allDivs[i].id.substring(9));
		};
	}

	var i = 0;
	inter = setInterval(function() {
		IM.selectDialog(dialogsId[i]);
		setTimeout(function() {
			IM.deleteHistory(dialogsId[i++]);
			$(".button_blue").getElementsByTagName("button")[0].click();
		}, 500);
		if ( i > dialogsId.length )
			clearInterval( inter );
	}, 2000);
})();


(function() {

	for(var p = 0; p < 50; p++) {
		
		var allDivs=document.getElementsByTagName("div");
		var dialogsId=[];

		for (var i = 0; i < allDivs.length; ++i) {
			var index1 = allDivs[i].className.indexOf("dialogs_row");
			var index2 = allDivs[i].className.indexOf("dialogs_row ");
			var index3 = allDivs[i].className.indexOf(" dialogs_row");
			var index4 = allDivs[i].className.indexOf(" dialogs_row ");
			if ( index1 != -1 || index2 != -1 || index3 != -1 || index4 != -1 ) {
				dialogsId.push(allDivs[i].id.substring(9));
			};
		}

		for(var i = 0; i < dialogsId.length; i++) {
			IM.deleteHistory(dialogsId[i++]);
			$(".button_blue").getElementsByTagName("button")[0].click();
		};
	}

})();


(function() {
	// var dialogs = document.getElementsByClassName('dialogs_del');
	var dialogs = [ 73765526, 20905818, 20504573, 619725043, 12792614 ];
	for(var key = 0; key < dialogs.length; ) {
		setTimeout(function() {
			console.log(dialogs[key++] + ' will be deleted');
			// if (dialogs[key]) {
			// 	console.log(dialogs[key] + ' will be deleted');
			// 	dialogs[key].click();
			// };
		}, 500);
		setTimeout(function() {
			// var button = $(".button_blue").getElementsByTagName("button")[0];
			// if (button && button.length) {
			// 	button.click();
			// 	console.log(dialogs[key] + ' have been be deleted');
			// };
		}, 500);
	};
})();

(function() {
	var dialogs = document.getElementsByClassName('dialogs_del');
	for(var key in dialogs) {
		setInterval(function() {
			setTimeout(function() {
				console.log(dialogs[key].toString() + ' will be deleted');
			}, 500);
			setTimeout(function() {
				console.log(dialogs[key].toString() + ' have been be deleted');
			}, 500);
		}, 1000);
	};
})();

IM.selectDialog(241662915)

(function() {
	var dialogs = document.getElementsByClassName('dialogs_del');
	setTimeout(function() {
		IM.deleteHistory(241662915)
	}, 500);
	setTimeout(function() {
		$(".button_blue").getElementsByTagName("button")[0].click();
	}, 500);
})();
