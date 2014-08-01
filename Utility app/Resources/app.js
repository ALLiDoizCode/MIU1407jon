
//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
window: mainWindow
});

//Window
var mainWindow = Ti.UI.createWindow({
title: "Utility"
});

//VIEW
var splashView = Ti.UI.createView({
	backgroundImage:"Images/Splash/background.jpg",
	zIndex: 2
});
var splash = Ti.UI.createImageView({
	image: "Images/Splash/Players.png",
	zIndex: 1,
	width: "100%",
	top: "18.7%",
});

var splash2 = Ti.UI.createImageView({
	image: "Images/Splash/nba_logo_110421.jpg",
	zIndex: 2,
	top: "67%",
	width:"100%",
	
});	

var login = Ti.UI.createImageView({
	image: "Images/Backgroundtextcopy.png",
	width: "120%",
	height: "90%",
	top: "30%",
	left: "2%",
	
});

var backGround = Ti.UI.createView({
	backgroundImage:"Images/mesh.jpg",
	width:"200%",
	height:"100%"
});

var rose = Ti.UI.createImageView({
	image: "Images/Derrick2.png",
	bottom: "-11%",
	left: "25%",
	width: "200%"
});

var wade = Ti.UI.createImageView({
	image: "Images/wade.png",
	bottom: "-.5%",
	right: "50%",
	width: "70%"
});

//Splash//
var startupAnimation = Titanium.UI.createAnimation({
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
    opacity: 1,
    duration: 3000,
    delay: 1500
});

//EventListeners
startupAnimation.addEventListener('complete', function() {
    Ti.API.log('Completed');
    splashView.animate({ 
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
        opacity: 0, 
        duration: 4000
    });
});

splashView.animate(startupAnimation);

//FUNCTION//
var introWindow = function(){
		var loadFile = Ti.UI.createWindow({
				layout: "vertical",
				url:"MainWindow.js",
				nav: navWindow
});
		navWindow.openWindow(loadFile);

};
//EventListeners
login.addEventListener("click", introWindow);

splashView.add(splash,splash2);
mainWindow.add(splashView,backGround,rose,wade,login);
mainWindow.open();
