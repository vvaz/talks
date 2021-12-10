$(document).ready(function(){
	
	$('body').addClass('light');
	
  $('ul.menu li:nth-child(1)').mouseover(function(){
		$('body').addClass('red').removeClass('light');
	});
	
  $('ul.menu li:nth-child(1)').mouseout(function(){
		$('body').addClass('light').removeClass('red');
	});
  
  $('ul.menu li:nth-child(2)').mouseover(function(){
		$('body').addClass('blue').removeClass('light');
	});
	
  $('ul.menu li:nth-child(2)').mouseout(function(){
		$('body').addClass('light').removeClass('blue');
	});
  
  $('ul.menu li:nth-child(3)').mouseover(function(){
		$('body').addClass('orange').removeClass('light');
	});
	
  $('ul.menu li:nth-child(3)').mouseout(function(){
		$('body').addClass('light').removeClass('orange');
	});
  
  $('ul.menu li:nth-child(4)').mouseover(function(){
		$('body').addClass('green').removeClass('light');
	});
	
  $('ul.menu li:nth-child(4)').mouseout(function(){
		$('body').addClass('light').removeClass('green');
	});
  
  $('ul.menu li:nth-child(5)').mouseover(function(){
		$('body').addClass('pink').removeClass('light');
	});
	
  $('ul.menu li:nth-child(5)').mouseout(function(){
		$('body').addClass('light').removeClass('pink');
	});
  
})