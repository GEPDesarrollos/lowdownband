		$('h2').css('cursor' , 'pointer');
		$('h1').css('cursor' , 'pointer');
		var playing = false;
		

		$('h1').click(escucharBanda);
		$('h2.spoti').click(toggleSpotify);
		$('h2.youtube').click(toggleYoutube);

		function toggleSpotify () {
			// body... 
			//alert($('.contenedor').css("color"));
			$('#youtube').fadeOut();
			$('#bio').fadeOut();
			audio.pause();
			$('#spoti').fadeToggle();
			$('h2.spoti').fadeOut();
			$('h2.spoti').fadeIn();
			
			console.log('estoy en SPOTIFY');

		}

		function toggleYoutube () {
			// body... 
			$("#youtube").fadeToggle();
			//if(($("#spoti").show())){
			//}	
			audio.pause();
			$('#spoti').fadeOut();
			$('#bio').fadeOut();
			$('h2.youtube').fadeOut();
			$('h2.youtube').fadeIn();
			console.log('estoy en YOUTUBE');
		}
		function escucharBanda () {
			// body... 
			var audio = document.getElementById("audio");
			if (!playing) {
				audio.currentTime= 0;
				audio.play();
				playing = true;
				$('h1').fadeOut();
				$('h1').fadeIn();
				$('#spoti').fadeOut();
				$('#youtube').fadeOut();
				$('#bio').fadeIn();

			} else {
				audio.pause();
				playing = false;
				$('h1').fadeOut();
				$('h1').fadeIn();
				$('#bio').fadeOut();
				//$('audio').fadeOut();
				
			}
		}

		document.querySelector("#caja").onwheel = function () {
			// body... 
			console.log('está scroleando');
			$("#scrolling").fadeIn();
			setTimeout(function(){ $("#scrolling").fadeOut(); }, 5000);
		}
		
		function recagarTitulo () {
			// body... 
			setInterval(function () {
				/* body... */
				$('h1').fadeOut();
				$('h1').fadeIn();
			}, 5200);
			setInterval(function () {
				/* body... */
			$('h2.spoti').fadeOut();
			$('h2.spoti').fadeIn();
			},5300);
			
			setInterval(function (
		  ) {
				/* body... */
			$('h2.youtube').fadeOut();
			$('h2.youtube').fadeIn();
			},5500);
		}
	 	
	 	recagarTitulo();
		
	