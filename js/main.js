// $(function(){
// 	$("#header-menu").on("click",function(){
// 		$("#header ul").toggleClass("show");
// 	});
	
// });


//-------------- accordian bit

$(function(){

	$("#main-side-selection h2").on("click",function(){

		$(this).next().toggleClass("hide");

	});

	$(".open-hide").addClass("hide");
	$("#main-faq-selection h3").on("click",function(){

		$(this).next().toggleClass("hide");

		if($(this).next().hasClass("hide")){
			$(this).find(".fa").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
		}else{
			$(this).find(".fa").removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
		}


	});

	
});


