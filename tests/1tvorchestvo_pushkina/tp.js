	var a = [2, 2, 3, 1, 3, 2];
	var f = [0, 0, 0, 0, 0, 0];
	var RegularCatchword = [
		/** 0 */'из',	
		/** >= 11 <= 15 [1] */	'Браво!',
		/**	>= 6 <= 10 	[2] */	'Неплохо!',
		/**	>= 0 <= 5 	[3] */	'Увы!'
	];
	var opinion = [
		/** 0 */'',	
		/** >= 11 <= 15 [1] */	'Вы настоящий знаток А.С. Пушкина!',
		/**	>= 6 <= 10 	[2] */	'Бесспорно, произведения А.С. Пушкина вы читали, но иногда путаетесь.',
		/**	>= 0 <= 5 	[3] */	'Не может быть, чтобы вы так позабыли классику. Попробуйте пройти тест еще раз.'
	];
	
	/**
	
	*/
	function func(n, v, r) {
		$(".actionBlock" + n + " .Label").attr({
			style: 'background: #E6E6E6; color:#424242; cursor:default;'
		});
		if (a[n] == r) {
			num = num + 1;
			$(".actionBlock" + n + " #" + v + "").attr({
				style: 'background: url(http://kultura174.ru/Content/RussLit/tests/tvorchestvo_pushkina/correctly.png) no-repeat;'
			})
		} else {
			$(".actionBlock" + n + " #" + v + "").attr({
				style: 'background: url(http://kultura174.ru/Content/RussLit/tests/tvorchestvo_pushkina/wrong.png) no-repeat;'
			})
		}
		$(".actionBlock" + n + " .Label").attr({
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
		var n;
		for (var i = 1; i < 30; i++) {
			n = i++;
			var IDClosed = document.getElementById("closed");			
			IDClosed.id = i;
			$('.Label').attr('onClick', 'func('+i+','+IDClosed.id+','+ n +')');
		}
	}	