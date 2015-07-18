// NotifyMeNow v0.1.0  |  (c) 2015 Kirtan Thakkar | MIT Licence
$(document).ready(function(){
	(function ( $ ) {
	
			//Initialization of the div to show the notifications, default false
			var initialization = false;
			var idCounter = 0;
			var notificationTimeout = 10000;   //10 Seconds (Default Notification hiding time)
			
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
					
					//Initialize Functions
					
					//On Close hiding the notification by delay 0 sec
					$(this).on("click",".notifyMeClose",function(){
						hideNotification($(this).parent(".notifyMeNotification-container"),0);
					});
					
					// Set initialization to true after initialization is complete
					initialization = true;
				}
				
				//Create New Notification
				var newNotification = '<div class="notifyMeNotification-container" id="notifyMeNowNotification'+(++idCounter)+'">'+param+'<span class="notifyMeClose">&times;</div>';
				
				// Add the notification to notification container
				$(this).append(newNotification);
				
				//Add a entry Animation class to show the notification
				$("#notifyMeNowNotification"+idCounter).addClass("entryAnimation");
				
				//Autohide notification call
				hideNotification($("#notifyMeNowNotification"+idCounter),notificationTimeout);
				
			};
			
			function hideNotification(notificationDiv,hideDelayTime)
			{
				// Calling setTimeout to hide notification after called delay time
				setTimeout(function(){
					// Calling exit animation class to hide the notification
					notificationDiv.addClass("exitAnimation");
					
					// After hiding the notification, make that hidden div close with slideUp function to move notification below that to move up.
					setTimeout(function(){
						notificationDiv.slideUp(100,function(){
							notificationDiv.remove()
						});
					},100);
				},hideDelayTime);
			}
			
			
			
		}( jQuery ));
	});