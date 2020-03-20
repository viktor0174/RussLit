	/**
		* Aliases Author
	*/
	var num = 0;
	var idElementVal;
	var a = [2, 2, 3, 1, 3, 2];
	var f = [0, 0, 0, 0, 0, 0];
	var RegularCatchword = [
		/** 0 */'из',	
		/** >= 11 <= 15 [1] */	'Не верим!',
		/**	>= 6 <= 10 	[2] */	'Неплохо!',
		/**	>= 0 <= 5 	[3] */	'Великолепно!'
	];
	var opinion = [
		/** 0 */'',	
		/** >= 11 <= 15 [1] */	'Не может быть, чтобы вы так позабыли классику. Попробуйте пройти тест еще раз.',
		/**	>= 6 <= 10 	[2] */	'Бесспорно, произведения А.С. Пушкина вы читали, но иногда путаетесь.',
		/**	>= 0 <= 5 	[3] */	'Вы настоящий знаток А.С. Пушкина!'
	];
	/**
	 * Set img 
	 */
	function func(t, v, r) {
		$(".actionBlock" + t + " .Label").attr({
			style: 'background: #E6E6E6; color:#424242; cursor:default;'
		});
		if (a[t] == r) {
			// num = num + 1;
			$(".actionBlock" + t + " #" + v + "").attr({
				style: 'background: url(http://kultura174.ru/Content/RussLit/tests/Pushkin_citati/media/correctly.png) no-repeat;'
			})
		} else {
			$(".actionBlock" + t + " #" + v + "").attr({
				style: 'background: url(http://kultura174.ru/Content/RussLit/tests/Pushkin_citati/media/wrong.png) no-repeat;'
			})
		}
		$(".actionBlock" + t + " .Label").attr({
			onClick: 'closed',
			id: 'closed'
		})
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
		for (var i = 1; i < 30; i++) {
			l = i++;
			var IDClosed = document.getElementById("closed");			
			IDClosed.id = i;
			$('.Label').attr('onClick', 'func('+i+','+IDClosed.id+','+ l +')');
		}
	}