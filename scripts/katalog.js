$(document).ready(function(){
	$(".cat_a").click(function(){
				$(".cat_block").removeClass("cat_block_not_animated");
		if(!$(this).parent(".cat_block").hasClass("cat_block_animated")){
		
			$(".cat_block_animated").children(".cat_hidden").css("display","none");
			$(".cat_block_animated").children("a").children("div").children("img").animate({width:"100px"},500);
			$(".cat_block_animated").removeClass("cat_block_animated");
			$(this).parent(".cat_block").children(".cat_hidden").css("display","block");
			$(this).children("div").children("img").animate({width:"250px"},500);
			$(this).parent(".cat_block").addClass("cat_block_animated");
			$(".cat_block").each(function(){if(!$(this).hasClass("cat_block_animated")){$(this).addClass("cat_block_not_animated")}});
		}else{
			$(".cat_block_animated").children(".cat_hidden").css("display","none");
			$(".cat_block_animated").children("a").children("div").children("img").animate({width:"100px"},500);
			$(".cat_block_animated").removeClass("cat_block_animated");
			$(".cat_block").removeClass("cat_block_not_animated");
		}
		return false;
	
	});
});