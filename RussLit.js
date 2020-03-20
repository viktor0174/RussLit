/**
  * Project "Russian and Literature"
  * version: 3 beta
  * Date of change: 13.03.2019
  */
var domain = location.origin;
function ready() {
	DialogueOfCultures();
	ChildrenDraw();
	RequestDataFromLinkParam ();
	// $(".btnBack").append('<div style="width:400px; height:150px; margin-left:-60px; color:red; display:block;">'+config[0]+'</div>');

	//scrollTopPage();
	// Переменная-флаг для отслеживания того, происходит ли в данный момент запрос [false - запрос не в процессе выполнения. true - запрос выполняется]
	var inProgress = false;
	// Последовательно загружая из раздела [0 - загружается при запросе раздела, 1- запрос следующих данных]
	var startFrom = 1;
	// Используйте вариант $('#more').click(function() для того, чтобы дать пользователю возможность управлять процессом, кликая по кнопке "Дальше" под блоком статей
	/*
	$(window).scroll(function() {
		// Если высота окна + высота прокрутки больше или равны высоте всего документа и ajax-запрос в настоящий момент не выполняется, то запускаем ajax-запрос
		// if($(window).scrollTop() + $(window).height() >= $(document).height() - 200 && !inProgress)
		if($(window).scrollTop() + $(window).height() >= $(document).height() && !inProgress && GetData) //200
		{

			url_data = domain+"/Publications/RussLit_section_"+section_id+"?page="+startFrom;
			create_xmlhttp();
					xmlHttp.open("GET",url_data, true);
					xmlHttp.onreadystatechange = AddContent;
					xmlHttp.send(null);
			// По факту окончания запроса снова меняем значение флага на false
			inProgress = false;
			// Увеличиваем на 10 порядковый номер статьи, с которой надо начинать выборку из базы
			startFrom += 1;
		}
	});
	*/
	var tag_css = document.createElement('link');
		tag_css.rel  = 'stylesheet';
		tag_css.href = domain+'/shadowbox/shadowbox.css';
		tag_css.type = 'text/css';
		var tag_head = document.getElementsByTagName('head');
		//tag_head[0].appendChild(tag_css);
		tag_head[0].insertBefore(tag_css, tag_head[0].firstChild);
}
document.addEventListener("DOMContentLoaded", ready);
//
var pleloader='preloader', section_id = null, rLink="", page=0;


function scrollTopPage(){
	destination = $(".rl_menuHeader").offset().top;
	$("body,html").animate({scrollTop: destination }, 800);
}

/** Get the page experts */
function getExpert(nameExpert){
	url_data = "/htmlpages/Show/RussLit/OurExperts";
	create_xmlhttp();
	xmlHttp.open("GET",url_data, true);
	xmlHttp.onreadystatechange = opening;
	xmlHttp.send(null);
	function opening(){
		if(xmlHttp.readyState==4){
			if(xmlHttp.status==200){
				var responseHTML = xmlHttp.response, regex = new RegExp('<tr id="'+nameExpert+'">', 'gi');
			}
		}
	}
}
/** Work with external links */
function setAttrItem(id){
	var arrNativeStranger;
	$("#rl_Content a").on('click', function(e) {
		e.preventDefault();
		rLink = ""+e.currentTarget.href+"";
		arrNativeStranger = rLink.split('/');
		if(location.hostname == arrNativeStranger[2]) getData(rLink);
		else window.open(rLink, '_blank');
		return false;
	});
}

function MainPage(x){
	$(".rl_table_block").attr("style", "display:"+x);
}
function sectionContentdata(x){
	//$(".sectionContent").empty().attr("style", "display:"+x);
	$(".sectionContent").attr("style", "display:"+x);
}

function ContentData(x){
	$(".dataContent"   ).attr("style", "display:"+x);
}
function section(id){
	section_id = id;
	//console.info("[Section] "+section_id);
}
function BtnBack(x, s){
	btnBackDisplay(x);
	$(".btnBack").on('click', function() {
		if(s === 'main'){
			MainPage('block');
			sectionContentdata('none');
			ContentData('none');
			x='none';
			DisplayPages();
		}else{
		/*
			if( $('#news').is(".news") == false ) {
				getSRussLit(s, 0);
				console.log(s+' false #news');
			}else {
				console.log(s+' true #news');
			}
			*/
			getSRussLit(s, 0);
			MainPage('none');
			sectionContentdata('block');
			ContentData('none');
			$("._pages").attr("style","display:block");
		}
		btnBackDisplay(x)
	});
	function btnBackDisplay(x){
		$(".btnBack img").attr("style","display:"+x);
	}
}
function LinkBack() {
	if ($("#return").is(".return") == true) {
		$(".return a").on('click', function() {
			BtnBack('block', section_id);
			$('.btnBack').trigger('click');
		});
	}
}
function setParamLinkShare(link) {
	var pasingLink = link.split('/');
	if(pasingLink[5] != undefined){
		location.hash=section_id+"#"+pasingLink[5];
	}
}
function RequestDataFromLinkParam () {
	var link = window.location.href.split('/');
		link = link[5].split('#');
		if(link[1] != undefined) {
			section(link[1]);
			//console.log("[Request link] section:"+link[1]+" | data:"+link[2]);
			getData (domain+'/Publications/RussLit_section_'+link[1]+'/'+link[2]);
			//getSRussLit(link[1], 0);
			LinkBack();
		}
}
function LoadMore(page){
	if ($("#_loadmore").hasClass("_loadmore") == true) {
		//$("#_loadmore").remove();
		$("#_loadmore").attr("onClick","getSRussLit("+section_id+", "+page+");");
	}
	else $(".items").append('<div class="_loadmore" id="_loadmore" onClick="getSRussLit('+section_id+', '+page+');" ></div>');
}
function pages(x){
	removePages();
	if(section_id != 'main'){
		var li='', i=0;
		for(i=0;i<x;i++){
			li += "<li onClick=\"getSRussLit("+section_id+", "+i+")\">"+(i+1)+"</li>";
		}
		$(".items").append('<ul class="_pages" id="_pages" >'+li+'</ul>');
	//	console.log("Page generation");
	}
}
function removePages(){
	if ($("#_pages").hasClass("_pages") == true) {
		$("._pages").remove();
	//	console.log("Delete pages");
	}
}
function DisplayPages (){
	if ($("#_pages").hasClass("_pages") == true) {
		$("._pages").attr("style","display:none");
	//	console.log("Do not show pages");
	}
}
function DialogueOfCultures(){
	$.ajax({ type: "GET", url: domain+'/Publications/RussLit_section_4', cache: true, async: true,
		success: function(data){
			var result = $(data).find(".news .item #img_wrp:first");
			if(result[length] != undefined) {
				var st = $(result[length]).attr("style");
				$("#SRussLit_4").attr("style", st);
			}
		}
	});
}
function ChildrenDraw(){
	$.ajax({ type: "GET", url: domain+'/Publications/RussLit_section_3', cache: true,  async: true,
		success: function(data){
			var result = $(data).find(".news .item #img_wrp:first");
			if(result[length] != undefined) {
				var st = $(result[length]).attr("style");
				$("#SRussLit_3").attr("style", st);
			}
		}
	});
}


/**
 * Get the section
 * s - number section
 */
function getSRussLit(s, page=0){
	if(page == undefined || page === '' || page == null) { page=0 }
	if(s==0 || s=="additionalUnit") return;
	var PT, uri=domain,i=0;
	section(s); startFrom = 2; ContentData('none');
	// ********
	if(s != 'main') {
		BtnBack('block', 'main');
		uri = uri+'/Publications/RussLit_section_'+s+'?page='+page;
		MainPage('none'); sectionContentdata('block');
		//console.log(uri);
		//return;
		GS=function(){
			$.ajax({
				type: "GET", url: uri, cache: true, async: true,
				success: function(data) {
					PT = $(data).find(".pager_total").text();
					PT = parseInt(+PT.replace(/\D+/g,""));
					var result = $(data).find(".news");
					console.log('sectionContent |'+result[length]);
					if(result[length] != undefined) {
						$(".sectionContent").empty().html(result[length]);
						setAttrItem(section_id);
						if(page < (Math.ceil(Math.trunc(PT/100)/10))-1){
							pages((Math.ceil(Math.trunc(PT/100)/10)));
						}
					}else{
					/*
						setTimeout("alert(config[1])", 2000);
						setTimeout("alert(config[2])", 5000);
						setTimeout("if(!alert(config[3])){window.location.reload();}", 10000);
						*/
					}
				},
				error: function(xhr, status, error) {
					//console.log(xhr+": "+status+": "+error);
				}
			});
		};GS();
	}else {removePages(); BtnBack('none', section_id); MainPage('block'); sectionContentdata('none');}
}

function getData (link){
	if(link == undefined) return;
	DisplayPages();
	$(".dataContent").empty();
	section(section_id); startFrom = 2; MainPage('none'); ContentData('block'); sectionContentdata('none'); BtnBack('block', section_id);
	setParamLinkShare(link);
	$.ajax({
		type: "GET", url: link, cache: true, async: true,
		success: function(data){
			var result = $(data).find(".newsPage");
			if(result[length] != undefined) {
				$(".dataContent").append(result[length]);
				setTimeout("LinkBack()", 1000);

			}
		}
	});
}

function clearAll() {
  for (var i = setTimeout(function() {}, 0); i > 0; i--) {
    window.clearInterval(i);
    window.clearTimeout(i);
    if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
  }
}

function WrapLinkVideo(){
	$('#rl_Content a').wrap(function() {
		return '<span onclick="OpenShadowBoxVideo(\'' + $(this).attr('href') + '\');" rel="shadowbox[video];;options={flashVars:{repeat:\'always\'}}"></span>';
    });
}
function OpenShadowBoxVideo(url){
	Shadowbox.open([{
		// title: 'Detail',
		player: 'flv',
		width:800,
		height:600,
		content: url
	}]);
}
function WrapLinkIMG(){
	$('#rl_Content img').wrap(function() {
		return '<span onclick="OpenShadowBox(\'' + $(this).attr('src') + '\');" ></span>';
    });
}
function OpenShadowBox(url){
	Shadowbox.open([{
		// title: 'Detail',
		player: 'img',
		content: url
	}]);
}

