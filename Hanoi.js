$(function(){
	for (var i=1; i<=5; i++) {
		$("<div></div>").addClass("ring").attr("id", "ring-" + (6-i)).appendTo("#tower-1");
	}
	
	var chosenRing=null; 
	var winString = "54321";

	$(".tower").on('click', function(e){
		if(chosenRing==null) {
			chosenRing = this.lastChild;
		} else {
			if(this.lastChild){
				if(this.lastChild.clientWidth>chosenRing.clientWidth) {
					$(chosenRing).remove();
					this.appendChild(chosenRing);
					chosenRing=null;
				} else {chosenRing=null;}
					
			} else {
					$(chosenRing).remove();
					this.appendChild(chosenRing);
					chosenRing=null;
				}
			
			}
			
			if(this.id=="tower-3"){
				if(this.textContent==winString){
					alert ("You win!");
				}
			}
	})	
	$(".tower").on('mouseover',function(e){
		$(this).css({opacity:'1', cursor:'pointer'});
	})
	$(".tower").on('mouseout',function(e){
		$(this).css({opacity:'0.6'});
	})
});
