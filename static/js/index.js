$(function(){
    $(".login").click(function(){
	$(this).blur();
	$("body").append('<div class="overlay"></div>');

	$(".overlay").fadeIn("slow");

	$(".modal").fadeIn("slow");
	
	centeringModalSyncer();
			//[id:modal-open]をクリックしたら起こる処理
    });

    $(".overlay,#modal-close").unbind().click(function(){

	$(".modal,.overlay").fadeOut("slow",function(){

	    $(".overlay").remove();
	});
    });
   

})
function centeringModalSyncer(){
 
	//[#modal-content]のCSSに[left]の値(pxleft)を設定
	$(".modal").css({"margin-left": "20%"});


}