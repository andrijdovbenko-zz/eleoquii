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
});