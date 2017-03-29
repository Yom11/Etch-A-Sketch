$(document).ready(function(){
	
	var numGrid = 16;
	grid(numGrid);

	/*Erase the sketch when the mouse leave the container*/
	function mouseleave(){
		$('div').on('mouseleave', '.container', function(){
			$('.container').find('.grid').css('background-color', '#f6f6f6')
		});
	}
	mouseleave();

});

	/*create grid using user input*/
	function grid(numGrid){
		
	for (x= 0; x<numGrid; x++ ){
			
		for(y = 0; y<numGrid ; y++){
			$('.container').append("<div class='grid'></div>");		
		}
			
	};
		
		$('.grid').height(660/numGrid);
		$('.grid').width(660/numGrid);
		$('.grid').addClass("mouseenter");

	}

	/*function where user makes an input*/
	function gridSize(){
		var numGrid = prompt('How many squares per side?');
		if(numGrid > 64){
			alert('Your input is too high. The highest is only 64x64.')
			return false;
		}
		grid(numGrid);
	}


	/*function to sketch*/
	function hover(){
		$('div').on('mouseenter', '.grid', function(){
		$(this).css('background-color', '#000');
		// $('.grid').addClass('hovered')
		});
	}