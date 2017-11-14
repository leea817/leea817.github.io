$('.nav-item').click(function() {
	var button_name = $(this).data('button');
	$('.content').attr('class', 'column content');
	// you do this to go in any order and get the color the buttons are assigned. it means, find content div, find class, you're trying to remove unnecessary classes after you click on one. column content changes to 
	$('.content').addClass(button_name);

	$('.nav-item').removeClass('active'); //so that it doesnt stay black once you click it aka active, this is looking at all items on the page. in fact, it is making an array. 
	$(this).addClass('active');

	if (button_name== 'green') {
		$('.1').removeClass('hide');
		$('.2').addClass('hide');
		$('.3').addClass('hide');
		$('.4').addClass('hide');
		$('.5').addClass('hide');
	}
	if (button_name== 'blue') {
		$('.2').removeClass('hide');
		$('.1').addClass('hide');
		$('.3').addClass('hide');
		$('.4').addClass('hide');
		$('.5').addClass('hide');
	}
	if (button_name== 'red') {
		$('.3').removeClass('hide');
		$('.2').addClass('hide');
		$('.1').addClass('hide');
		$('.4').addClass('hide');
		$('.5').addClass('hide');
	}
	if (button_name== 'sol-lewitt') {
		$('.4').removeClass('hide');
		$('.2').addClass('hide');
		$('.3').addClass('hide');
		$('.1').addClass('hide');
		$('.5').addClass('hide');
	}
	if (button_name== 'about') {
		$('.5').removeClass('hide');
		$('.2').addClass('hide');
		$('.3').addClass('hide');
		$('.4').addClass('hide');
		$('.1').addClass('hide');
	}


});



