$(document).ready(function(){
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

    $(".reviews_header p").click(function(){
    	$(".new_review").slideToggle("slow");

    });

    $("#navigation").click(function(){
    	$(".nav_and_form nav").slideToggle("fast");
    })

    $(".stars>span").click(function(event){
    	$(event.delegateTarget).parent().children().removeClass("gold_star")
    	$(event.delegateTarget).addClass("gold_star");
    	$(event.delegateTarget).prevAll().addClass("gold_star");
    })
});