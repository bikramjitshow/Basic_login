var userp = [
	{
		name: "Bikram",
		email: "bikram@gmail.com",
		password: "bikram123"
	},
	{
		name: "Show",
		email: "show@gmail.com",
		password: "show@123"
	},
	{
		name: "GOD",
		email: "god@gmail.com",
		password: "god@123"
	}
]


$(document).ready(function(){
	$('#submit').click(function(e){
		e.preventDefault();
		var email = $('#email').val();
		var password = $('#pwd').val();
		console.log('email :'+email+',' +'pass :'+password);
		
		for (var i = 0 ; i < userp.length; i++ ) {
			if(email == userp[i].email && password == userp[i].password){
				console.log(userp[i].name +' Loged In');
				// document.location.href = 'index.html';
				setTimeout( function(){
					$('.errmsg').css("display", "none");
					$('.msg').css({"display" : "block","right" : "45%"}).html(userp[i].name +' Loged In');
					setTimeout( function(){
						$('.msg').css("display", "none");
					} , 4000);
				} , 1500);
				return;
			}
		}
		setTimeout( function(){
			$('.msg').css("display", "none");
			$('.errmsg').css({"display" : "block","right" : "45%"}).html('Invalid User');
			setTimeout( function(){
				$('.errmsg').css("display", "none");
			} , 4000);
		} , 1500);
		console.log('! Invalid User !');

	});
});