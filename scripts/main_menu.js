$(document).ready(function(){
   $body_wid=$("body").width();
   $logo_wid=parseInt($(".logo").css("width"));
   $bor_logo=parseInt($(".logo").css("borderLeftWidth"))+parseInt($(".logo").css("borderRightWidth"));
   $mar_logo=parseInt($(".logo").css("marginLeft"))+parseInt($(".logo").css("marginRight"));
   $logo_wid=$logo_wid+$mar_logo+$bor_logo;
   $menu_wid=parseInt($(".menu").css("width"));
   $bor_menu=parseInt($(".menu").css("borderLeftWidth"))+parseInt($(".menu").css("borderRightWidth"));
   $pad_menu=parseInt($(".menu").css("paddingLeft"))+parseInt($(".menu").css("paddingRight"));
   $mar_menu=parseInt($(".menu").css("marginLeft"))+parseInt($(".menu").css("marginRight"));
   $menu_wid=$menu_wid+$mar_menu+$pad_menu+$bor_menu;
   $pad_content=parseInt($(".content").css("paddingLeft"))+parseInt($(".content").css("paddingRight"));
   $content_wid=$body_wid-$menu_wid-$logo_wid;
   $content_left=$menu_wid+$logo_wid+$pad_content;


   // if(parseInt($(window).width())<730) {
   //     $content_left=100;
   // }
   $(".fon").animate({"opacity":"1"},1300);
   $(".content").css("width",$content_wid);
   // $(".content").animate({"left":parseInt($content_left)},1300);
   $(".menu").animate({"left":parseInt($body_wid*0.3)},700);
   $(window).resize(function(){
      $body_wid=$("body").width();
      $logo_wid=parseInt($(".logo").css("width"));
      $bor_logo=parseInt($(".logo").css("borderLeftWidth"))+parseInt($(".logo").css("borderRightWidth"));
      $mar_logo=parseInt($(".logo").css("marginLeft"))+parseInt($(".logo").css("marginRight"));
      $logo_wid=$logo_wid+$mar_logo+$bor_logo;
      $menu_wid=parseInt($(".menu").css("width"));
      $bor_menu=parseInt($(".menu").css("borderLeftWidth"))+parseInt($(".menu").css("borderRightWidth"));
      $pad_menu=parseInt($(".menu").css("paddingLeft"))+parseInt($(".menu").css("paddingRight"));
      $mar_menu=parseInt($(".menu").css("marginLeft"))+parseInt($(".menu").css("marginRight"));
      $menu_wid=$menu_wid+$mar_menu+$pad_menu+$bor_menu;
      $pad_content=parseInt($(".content").css("paddingLeft"))+parseInt($(".content").css("paddingRight"));
      $content_wid=$body_wid-$menu_wid-$logo_wid;
      $content_left=$menu_wid+$logo_wid+$pad_content;
      $(".content").css("width",$content_wid);
      $(".content").css("left",$content_left);
      $(".menu").animate({"left":"30%"},700);
   });

   $("a").live("click", function(){
      var href = $(this).attr("href");
      if(href.match(document.domain+'/downloads/')){return true;}
      var expr = 'https://'+document.domain+'/files/';
      if(href.match(document.domain+'/files/') && href.length>expr.length+10 ){ return true;}
      var animDuration = 1000;
      // $(".content").animate({"left":"110%"},700);
      $(".menu").animate({"left":"110%"},1300);
      $(".fon").animate({"opacity":"0"},1300);
      var $mark=window.location;

      setTimeout(function () {
         window.location = href;
      }, animDuration);
      return false;  
      });

});

