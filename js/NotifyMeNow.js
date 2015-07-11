// NotifyMeNow v0.1.0  |  (c) 2015 Kirtan Thakkar | MIT Licence
$(document).ready(function(){
	(function ( $ ) {
	
			//Initialization of the div to show the notifications, default false
			var initialization = false;
			
			$.fn.NotifyMeNow = function(param){
				
				// Check if initialization is false than initialize div for the use. 
				// This will be done when it is called for the first time on the page.
				if(initialization == false )
				{
					$(this).css({
						'position':'fixed',
						'top':'0px',
						'left':'0px'   //Initial Testing
					});
					// Set initialization to true after initialization is complete
					initialization = true;
				}
				
				//Create New Notification
				var newNotification = '<div>'+param+'</div>';
				$(this).append(newNotification);
				
			};
			
			
			
		}( jQuery ));
	});