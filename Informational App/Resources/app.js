var mainWindow = Ti.UI.createWindow({
	backgroundImage:"Images/Splash/background.jpg",
	width: "120%",
	bottom: "0%"
});

var splash = Ti.UI.createImageView({
	image: "Images/Splash/Players.png",
	zIndex: 1,
	width: "88%",
	top: "15.7%"
});

var splash2 = Ti.UI.createImageView({
	image: "Images/Splash/nba_logo_110421.jpg",
	zIndex: 2,
	top: "67%",
	width:"85%"
});

mainWindow.add(splash,splash2); 
mainWindow.open();

var startupAnimation = Titanium.UI.createAnimation({
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
    opacity: 1,
    duration: 3000,
    delay: 1500
});
startupAnimation.addEventListener('complete', function() {
    Ti.API.log('Completed');
    splash.animate({ 
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
        opacity: 0, 
        duration: 5000
    });
});

startupAnimation.addEventListener('complete', function() {
    Ti.API.log('Completed');
    splash2.animate({ 
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
        opacity: 0, 
        duration: 5000
    });
});

startupAnimation.addEventListener('complete', function() {
    Ti.API.log('Completed');
    mainWindow.animate({ 
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
        opacity: 0, 
        duration: 5000
    });
});
 
splash.animate(startupAnimation);
splash2.animate(startupAnimation);
mainWindow.animate(startupAnimation);