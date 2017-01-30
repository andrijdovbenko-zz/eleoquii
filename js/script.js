$(document).ready(function(){

	/* toggle read more - read less*/
    $(".review p:last-child").click(function(event){
    	if(!$(event.delegateTarget).prev().hasClass('read_more')){
    		$(event.delegateTarget).prev().addClass('read_more');
    		$(event.delegateTarget).html('Read More  <i class="fa fa-caret-right" aria-hidden="true">')
    	}
    	else{
    		$(event.delegateTarget).prev().removeClass('read_more');
    		$(event.delegateTarget).html('Read Less  <i class="fa fa-caret-up" aria-hidden="true"></i>')
    	}
        
    });

    /*new review*/

    $(".reviews_header p").click(function(){
    	$(".new_review").slideToggle("slow");

    });

    /*nav on small divices*/

    $("#navigation").click(function(){
    	$(".nav_and_form nav").slideToggle("fast");
    });

    /*stars rating*/

    $(".stars>span").click(function(event){
    	$(event.delegateTarget).parent().children().removeClass("blue_star")
    	$(event.delegateTarget).addClass("blue_star");
    	$(event.delegateTarget).prevAll().addClass("blue_star");
    });

    $(".stars>span").click(function(event){
    	$(event.delegateTarget).parent().children().removeClass("blue_star")
    	$(event.delegateTarget).addClass("blue_star");
    	$(event.delegateTarget).prevAll().addClass("blue_star");
    });

    $(".stars>span").hover(function(event){
    	$(event.delegateTarget).addClass("gold_star");
    	$(event.delegateTarget).prevAll().addClass("gold_star");
    },function(event){
    	$(event.delegateTarget).parent().children().removeClass("gold_star")
    }); 
});