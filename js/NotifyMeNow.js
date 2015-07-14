// NotifyMeNow v0.1.0  |  (c) 2015 Kirtan Thakkar | MIT Licence
$(document).ready(function(){
	(function ( $ ) {
	
			//Initialization of the div to show the notifications, default false
			var initialization = false;
			var idCounter = 0;
			
			$.fn.NotifyMeNow = function(param){
				
				// Check if initialization is false than initialize div for the use. 
				// This will be done when it is called for the first time on the page.
				if(initialization == false )
				{
					$(this).css({
						'position':'fixed',
						'top':'0px',
						'left':'45%'   //Initial Testing
					});
					
					//Initialize Function
					
					//On Close hiding the notification
					$(this).on("click",".notifyMeClose",function(){
						var notification = $(this).parent(".notifyMeNotification-container");
						notification.addClass("abcd");
						setTimeout(function(){
							notification.addClass("lol").slideUp(100,function(){
								notification.remove()
							});
						},100);
					});
					
					// Set initialization to true after initialization is complete
					initialization = true;
				}
				
				//Create New Notification
				var newNotification = '<div class="notifyMeNotification-container" id="notifyMeNowNotification'+(++idCounter)+'">'+param+'<span class="notifyMeClose">&times;</div>';
				$(this).append(newNotification);
				//$("#notifyMeNowNotification"+idCounter).addClass("abcd");
				
				
			};
			
			
			
			
			
		}( jQuery ));
	});