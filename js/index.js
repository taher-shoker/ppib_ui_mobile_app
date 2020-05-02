// JavaScript Document

/****initialize main screen****/
/***in intialization we load the JSON and draw the screen for the main services***/

var hh;
function ChecSetting()
{
	//localStorage.removeItem("Downloaded");
	clearTimeout(hh);
	$(".wrapperpage").fadeOut(4000,function(){
			window.location.replace("home.html");
		});
}

$(document).ready(function(e) {
   
	
	$(".wrapperpage").fadeIn(5000,function(){
		hh=setTimeout( "ChecSetting()",4000);
	});
	
	$(".wrapperpage").click(function(e) {
		$(".wrapperpage").fadeOut(4000,function(){
			
		});
	});

});/*****end doc ready***/