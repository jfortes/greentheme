// $(function(){
// 	$("#header-menu").on("click",function(){
// 		$("#header ul").toggleClass("show");
// 	});
	
// });


//-------------- accordian bit

$(function(){

	$("#main-side-selection h2").on("click",function(){

		$(this).next().prepareTransition().toggleClass("hide");

	});

	// $("#main-side-selection p").on("transitionend",function(){

	// 	if($(this).hasClass("hide") == false){

	// 		$(this).prev().children("i")
	// 			.removeClass("fa fa-leaf")
	// 			.addClass("fa fa-leaf");

	// 	}else{

	// 		$(this).prev().children("i")
	// 			.removeClass("fa fa-leaf")
	// 			.addClass("fa fa-leaf");
	// 	}

	// });

});


