var a = [3, 1, 3, 2, 2, 1, 3, 2, 1, 2];
var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var RegularCatchword = [
	/** 0 */'из',
	/** >= 11 <= 15 [1] */	'Негусто...',
	/**	>= 6 <= 10 	[2] */	'Неплохой результат',
	/**	>= 0 <= 5 	[3] */	'Блестяще!'
];

var opinion = [
	/** 0 */'',
	/** >= 11 <= 15 [1] */	'Похоже, что без Владимира Даля вам не разобраться.',
	/**	>= 6 <= 10 	[2] */	'Но для закрепления знаний предлагаем пройти тест еще раз.',
	/**	>= 0 <= 5 	[3] */	'Вы настоящий знаток народной русской речи!.'
];

/**
	 * Set img
	 */
	function func(t, v, r) {
		$(".actionBlock" + t + " .Label").attr({
			style: '/*background: #E6E6E6;*/ color:#424242; cursor:default;'
		});
		if (a[t] == r) {
			// num = num + 1;
			$(".actionBlock" + t + " #" + v + "").attr({
				style: '/*background: url(http://kultura174.ru/Content/RussLit/tests/Pushkin_citati/media/correctly.png) no-repeat;*/ color:#008007;'
			})

		} else {
			$(".actionBlock" + t + " #" + v + "").attr({
				style: '/*background: url(http://kultura174.ru/Content/RussLit/tests/Pushkin_citati/media/wrong.png) no-repeat;*/ color:#fa5858; '
			})
		}
		$(".actionBlock" + t + " .Label").attr({
			onClick: 'closed',
			id: 'closed'
		})
		$("#correctAnswer" + t).attr({
			style: 'display:block;'
		});
	}
	/**
	 * delete Style
	 * set ID - 1,2,3,4 ..... 30
	 * set onClick - func(numQuestion,ID,numAnswer);
	*/
	function putInOrder(){
		/**<div class="Label" id="25" onclick="func(8,25,1);">*/
		$('.Label').attr('style', '');
		var l;
		for (var i = 1; i < 35; i++) {
			l = i++;
			var IDClosed = document.getElementById("closed");
			IDClosed.id = i;
			$('.Label').attr('onClick', 'func('+i+','+IDClosed.id+','+ l +')');
		}
	}
