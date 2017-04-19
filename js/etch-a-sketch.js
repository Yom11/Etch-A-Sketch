$(document).ready(function(){
	var numGrid = 16;
	grid(numGrid);
});

	/*function where user makes an input with hotkey F1*/
	shortcut.add("F1", 	function gridSize(){
		var numGrid = prompt('How many squares per side?');
		validateNumGrid(numGrid);
		grid(numGrid);
	});

	/*function where user makes an input*/
	function gridSize(){
		var numGrid = prompt('How many squares per side?');
		validateNumGrid(numGrid);
		grid(numGrid);
	}


	/*function to sketch with hotkey F2*/
	shortcut.add("F2", function hover(color){
		var color = prompt('Please choose a color? BLUE, YELLOW, RED, GREEN, ORANGE, AND PURPLE').toLowerCase();
		selectColor(color);
		validate(color);
	});


	/*function to sketch*/
	 function hover(color){
		var color = prompt('Please choose a color? BLUE, YELLOW, RED, GREEN, ORANGE, AND PURPLE').toLowerCase();
		selectColor(color);
		validateColor(color);
	}


	//reset the current sketch using f3 hotkey
	shortcut.add("F3", function reset(){
		$('.grid').css('background-color', '#FFF');
	})


	//reset the current sketch when the button is clicked
	function reset(){
		$('.grid').css('background-color', '#FFF');
	}


	
	//Erase the sketch when the mouse leave the container
	function mouseleave(){
		$('div').on('mouseleave', '.container', function(){
			$('.container').find('.grid').css('background-color', '#f6f6f6')
		});
	}


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



	//function to select the color to use in the sketch
	function selectColor(color){
		$('div').on('mouseenter', '.grid', function(){
		switch(color){
				case 'red':
					$(this).css('background-color', '#ff0000');
					break;
				case 'blue':
					$(this).css('background-color', '#00f');
					break;
				case 'yellow':
					$(this).css('background-color', '#ff0');
					break;
				case 'green':
					$(this).css('background-color', '#0f0');
					break;
				case 'orange':
					$(this).css('background-color', '#ffa500');
					break;
				case 'purple':
					$(this).css('background-color', '#551a8b');
					break;
				default:
					$(this).css('background-color', '#000');
			}
		});
	}

	//validate the numGrid that the user inputs
	function validateNumGrid(numGrid){
		var regex = /^[0-9\.]+$/;
		if(numGrid > 64){
			alert('Your input is too high. The highest is only 64x64.')
			return false;
		}

		if(regex.test(numGrid)){
	        // return true;
	    }
	    else {
	        alert("Please enter a number only. Strings is not allowed!");
	        return false;
	    }

	}

	function validateColor(color){
		var colorArray = ['blue', 'yellow', 'red', 'green', 'orange', 'purple'];
		var colorBoolean = true;
		console.log(!colorBoolean);
		do{
			if(!($.inArray(color, colorArray) != -1)){
				var color = prompt("Your desired color is not in the selection. Please choose another color that is in the selection. BLUE, YELLOW, RED, GREEN, ORANGE, AND PURPLE").toLowerCase();
				selectColor(color);
				colorBoolean = false;
			}else{
				colorBoolean = true;
			}
		}while(!colorBoolean);
	}
