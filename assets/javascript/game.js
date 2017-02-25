$(document).ready(function() {

	crystals = ["images/redcrystal.png","images/bluecrystal.png","images/yellowcrystal.png","images/greencrystal.png"];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		//it makes 4 random number which is not same
		var numbers = [];
		console.log(numbers);
			while(numbers.length < 4){

			//Math.ceil is a Round a number upward to its nearest integer  
			//Return a random number between 1 and 12
			  var randomnumber = Math.ceil(Math.random()*12 )
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)
			  	{numbers[numbers.length]=randomnumber;}
			}
		console.log(numbers);		
        //it makes 4 <img> as crysta with diffrent value
		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $("<img>");
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	function newGame() {

		counter = 0;
		$("#yourScore").text(counter);

		function randomIntFromInterval(min,max){
			//make random between 19 and 120
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var GuessNum = randomIntFromInterval(19,120);

		$(".value").text(GuessNum);


		$(".crystalImage").on("click", function(){

		    counter = counter + parseInt($(this).attr("data-num"));

		    console.log($(this).data("num"));
		    $('#yourScore').text(counter);
		    if (counter == GuessNum){
		      $('#status').text("You won!");
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > GuessNum){
		        $('#status').text("You lost!")
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});