$(function (){
	
	$('header .form-head ol li span.toggle label').click(function(){
		$('header .form-head ol li span.toggle label').removeClass('check');	
		$(this).addClass('check');
	});

	$('#username').on('input change',function() {
		if($('#username').val() !== '') {
	        $('span.error').fadeOut(400);
	    }
	});
	$('#submit').submit(function () {
		
		var username = $('#username').val();
		if ( username == "" ) {Â 
			$('span.error').text('You must enter your username before running generator').fadeIn(400);
			return false;
		}
		
		$('.fancy').fancybox({ helpers : { overlay : {locked : true, closeClick: false }}}).trigger('click');	
		var arrays = [
			'<div>Connecting to generator server....</div>',
			'<div><span style="color:green">Connected!</span></div>',
			'<div>guest@localhost:/#</div>',
			'<div>&gt;Preparing Generator!</div>',
			'<div>&gt;Importing Packets!</div>',
			'<div>&gt;Response: <span style="color:yellow;">'+ username +'</span> Authenticated.</div>',
			'<div><span style="color:green">&gt;USER IS CONNECTED!</span></div>',
			'<div><span style="color:red">&gt;SERVER IS FULL!</span></div>',
			'<div>&gt;SERVER RESPONSE IS OK.</div>',
			'<div>&gt;WAITING FOR USER</div>',
			'<div>&gt;GENERATOR WILL CONTINUE AFTER USER CONFIRMS</div>',
			'<div><span style="color:green">SUCCESS</span></div>'
		];
		count = arrays.length;
		$.each(arrays, function(idx, val) {
		    $(".consoleInfo").delay(1000).queue(function(next) {
			    
			    $('.consoleInfo').append(val);
			    next();
			    if (!--count) { 
					setTimeout(function(){
						$('#console').hide();
						$('#verfied').fadeIn();
					}, 3000);  
			    }
			    console.log(count);
			});
		});
		return false;
	});
	
	
});
