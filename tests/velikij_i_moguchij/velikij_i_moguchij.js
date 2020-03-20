	
	var num = 0;
	var idElementVal;
	var a = [3, 1, 2, 3, 2, 4, 1, 2, 1, 4, 2, 2, 3, 4, 2];
	var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	function choose(x, i) {
		f[x] = i
	}
	function processData() {
		for (var i = 0; i < a.length; i++) {
			if (a[i] == f[i]) { num = num + 1 }
		}
		BlockBtnDisplay ("ResultBlock", "block");
		BlockBtnDisplay ("id_btn", "none");
		BlockBtnDisplay ("id_titl_result", "block");
		/*
		if (num == 0) {
			idElementVal = "zero";
			BlockBtnDisplay (idElementVal, "block");
			ContentsOfTheBlock (idElementVal);
		}
		*/
		if (num >= 0 && num <= 5) {
			idElementVal = "weak";
			BlockBtnDisplay (idElementVal, "block");
			ContentsOfTheBlock (idElementVal);
		}
		if (num >=6 && num <= 10) {
			idElementVal = "normal";
			BlockBtnDisplay (idElementVal, "block");
			ContentsOfTheBlock (idElementVal);
		}
		if (num >= 11 && num <= 15) {
			idElementVal = "strong";
			BlockBtnDisplay (idElementVal, "block");
			ContentsOfTheBlock (idElementVal);
		}
		/*
		if (num > 10 && num <= 13) {
			idElementVal = "hard";			
			BlockBtnDisplay (idElementVal, "block");
			ContentsOfTheBlock (idElementVal);
		}
		*/	
		paintAsquare();
	}
	function ResetForm(){		
		document.getElementById("FormOfTest").reset();
		BlockBtnDisplay ("ResultBlock", "none");
		BlockBtnDisplay ("id_btn", "block");
		BlockBtnDisplay ("id_titl_result", "none");
		BlockBtnDisplay (idElementVal, "none");
		num = 0;
		for (var i = 0; i < f.length; i++) { f[i] = 0; }
		destination = $(".nav-path").offset().top;
		$("body,html").animate({scrollTop: destination }, 800);		
		$(".square").css({"background":"rgb(0, 120, 200)", "color":"rgb(0, 120, 200)"});		
	}
	/* 	idElement - getElementById
		x - block or none display this style. */
	function BlockBtnDisplay (idElement, x) {
		//document.getElementById(idElement).style.display = ""+x+"";
		$("#"+idElement).css("display",""+x+"");	
	}
	/*  */
	function ContentsOfTheBlock (idElement){
		document.getElementById(idElement).innerHTML = $("#"+idElement+"").text();
		$('#NumberOfResponses').empty();
		$('#catchword').empty();
		$('#NumberOfResponses').append(num+' '+numberOfReports[1]+' '+a.length);		
		if (num >= 11 && num <= 15) $('#catchword').append(RegularCatchword[5]);
		if (num >= 6 && num <= 10) 	$('#catchword').append(RegularCatchword[2]);
		if (num >= 0 && num <= 5) 	$('#catchword').append(RegularCatchword[1]);
	}
	function paintAsquare() {
		var i;		
		for (i=0; i <15; i++) {			
			// if (a[i] == f[i]) {				
			if (a[i] != f[i]) {				
				console.info(i);
				$("#square_"+i).css({"background":"rgb(235, 67, 67)", "color":"rgb(235, 67, 67)"});				
			}
			if (i > a.length) break;
		}
	}
	
	$(document).ready(function () {		
		$('#testResult_square').empty();
		for (var i = 0; i < 15; i++) {
			$('#testResult_square').append('<span class="square" id="square_'+i+'">__</span>');			
			if (i > a.length) break;
		}
	});
	
	
	
	
	
	
	
	
	