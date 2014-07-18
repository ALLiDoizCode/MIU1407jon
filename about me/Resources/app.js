//Window
var mainWindow = Ti.UI.createWindow({
	title: "Jonathan Green",
	backgroundColor: "#white",	
});

//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

//VIEW
var Image = Ti.UI.createImageView({
	image: "Images/jon.jpg",
	align: "center",
	top: "28%"
});

//FUNCTION//
var Window2 = function(){
	var loadFile = Ti.UI.createWindow({
		//title: "Mobile",
		layout: "vertical",
		url:"MainWindow.js",
	});
	navWindow.openWindow(loadFile);
	
};
//EventListenersa
Image.addEventListener("click", Window2);

mainWindow.add(Image);
navWindow.open();
