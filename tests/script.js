	var num = 0;
	var idElementVal;
	var arrLength = a.length;
	var CAQ = ~~(arrLength/3);
	//console.log("0-"+CAQ+"; "+(CAQ+1)+"-"+(CAQ+CAQ)+"; "+(CAQ+CAQ+1)+"-"+arrLength);

	function choose(x, i) {
		f[x] = i
	}
	function processData() {
		for (var i = 0; i < arrLength; i++) {if (a[i] == f[i]) { num = num + 1 }}
		BlockBtnDisplay ("ResultBlock", "block");
		BlockBtnDisplay ("id_btn", "none");
		BlockBtnDisplay ("id_titl_result", "block");
		BlockBtnDisplay ("ShowOpinion", "block");

		ContentsOfTheBlock ();
		paintAsquare();
	}
	function ResetForm(){
		//console.log(rLink);
		/*
		document.getElementById("FormOfTest").reset();
		BlockBtnDisplay ("ResultBlock", "none");
		BlockBtnDisplay ("id_btn", "block");
		BlockBtnDisplay ("id_titl_result", "none");
		BlockBtnDisplay ("ShowOpinion", "none");
		num = 0;
		for (var i = 0; i < arrLength; i++) { f[i] = 0; }
		destination = $(".nav-path").offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
		$(".square").css({"background":"rgb(0, 120, 200)", "color":"rgb(0, 120, 200)"});
		*/
		// getData (rLink); // перезагрузка данных
		// document.location.reload(true); // Перезагрузка текущей страницы, без использования кэша
		document.location.reload(); // Перезагрузка текущей страницы

	}
	/* 	idElement - getElementById
		x - block or none display this style. */
	function BlockBtnDisplay (idElement, x) {
		//document.getElementById(idElement).style.display = ""+x+"";
		$("#"+idElement).css("display",""+x+"");
	}
	function ContentsOfTheBlock (){
		$('#NumberOfResponses').empty();
		$('#catchword').empty();
		$('#ShowOpinion').empty();
		$('#NumberOfResponses').append(num+' '+RegularCatchword[0]+' '+arrLength);
		/*
		if (num >= 11 && num <= 15)	{
			$('#catchword').append(RegularCatchword[3]);
			$('#ShowOpinion').append(opinion[3]);
		}
		if (num >= 6 && num <= 10)	{
			$('#catchword').append(RegularCatchword[2]);
			$('#ShowOpinion').append(opinion[2]);
		}
		if (num >= 0 && num <= 5)	{
			$('#catchword').append(RegularCatchword[1]);
			$('#ShowOpinion').append(opinion[1]);
		}
		*/
		if (num >= (CAQ+CAQ+1) && num <= arrLength)	{
			$('#catchword').append(RegularCatchword[3]);
			$('#ShowOpinion').append(opinion[3]);
		}
		if (num >= (CAQ+1) && num <= (CAQ+CAQ))	{
			$('#catchword').append(RegularCatchword[2]);
			$('#ShowOpinion').append(opinion[2]);
		}
		if (num >= 0 && num <= CAQ)	{
			$('#catchword').append(RegularCatchword[1]);
			$('#ShowOpinion').append(opinion[1]);
		}

	}
	function paintAsquare() {
		var i;
		for (i=0; i <arrLength; i++) {
			// if (a[i] == f[i]) {
			if (a[i] != f[i]) {
				//console.info(i);
				$("#square_"+i).css({"background":"rgb(235, 67, 67)", "color":"rgb(235, 67, 67)"});
			}
			if (i > arrLength) break;
		}
	}

	$(document).ready(function () {
		$('#testResult_square').empty();
		for (var i = 0; i < arrLength; i++) {
			$('#testResult_square').append('<span class="square" id="square_'+i+'">__</span>');
			if (i > arrLength) break;
		}
	});
