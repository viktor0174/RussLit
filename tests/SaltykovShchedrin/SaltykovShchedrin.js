var a = [4, 1, 1, 2, 2, 3, 1, 2, 1, 2, 3, 3, 2, 3, 2];
var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var RegularCatchword = [
	/** 0 */'из',
	/** >= 11 <= 15 [1] */	'Увы!',
	/**	>= 6 <= 10 	[2] */	'Неплохо.',
	/**	>= 0 <= 5 	[3] */	'Блестяще!'
];

var opinion = [
	/** 0 */'',
	/** >= 11 <= 15 [1] */	'На этот раз вы в отстающих.',
	/**	>= 6 <= 10 	[2] */	'Твердая четверка!',
	/**	>= 0 <= 5 	[3] */	'Ваш багаж знаний просто поражает!'
];

/**
	 * Set img
	 */
	function func(t, v, r) {
	console.log(a[t]+"" +t + " | " + v + " | " + r);
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
		for (var i = 1; i < 75; i++) {
			l = i++;
			var IDClosed = document.getElementById("closed");
			IDClosed.id = i;
			$('.Label').attr('onClick', 'func('+i+','+IDClosed.id+','+ l +')');
		}
	}
