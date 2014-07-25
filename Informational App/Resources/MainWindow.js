
Ti.include("JSON.js");

var currentWindow = Ti.UI.currentWindow;



//Views
var View = Ti.UI.createView({
	backgroundImage:"Images/Menu/Black.jpg",
	height: "121%"
});

var textView = Ti.UI.createView({
	backgroundColor: "#white",
	height: 65,
	top: 0	
});

var Border = Ti.UI.createView({
	backgroundColor: "black",
	height: 0,
	top: textView.height + textView.top	
});

var logo = Ti.UI.createImageView({
	image:"Images/Miami/miami-heat-logo-transparent-png.png",
	top: "50%",
	
});

var buttonImage = Ti.UI.createImageView({
image: "Images/Button/Background.png",
top: 10,
left: "62%",
width: "60%",
height: "50%"
});

var buttonImage2 = Ti.UI.createImageView({
	image: "Images/Button/Background.png",
	top: 10,
	right: "50%",
	width: "60%",
	height: "50%"
});

var button2 = Titanium.UI.createButton({
   title: 'Home',
   top: 17,
   right: "51%",
   color: " red",
   
});

var loadHome = function(){
	var loadfile = Ti.UI.createWindow({
		title:"Teams",
		url:"app.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadfile);
};

button2.addEventListener("click",loadHome);
buttonImage2.add(button2);


//Labels
var Text = Ti.UI.createLabel({
	text: MiamiInfo,
	font: {fontSize: 15, fontFamily: "Arial"},
	color: "white",
	top: textView.height + Border.top,
	left: 15,
	right: 15,
	zIndex: 2
});

//Button
var button = Titanium.UI.createButton({
   title: 'Next',
   top: 17,
   left: 57,
  // width: 100,
   //height: 50,
   color: " red",
   
});

//Functions//
var miami1 = function(){
	var loadfile = Ti.UI.createWindow({
		title:"1988-2003: Early years in Miami",
		url:"Miami1.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadfile);
};



//EventListerner//
button.addEventListener("click",miami1);
buttonImage.add(button);
View.add(Border,logo);
currentWindow.add(View,Text,buttonImage,buttonImage2);


