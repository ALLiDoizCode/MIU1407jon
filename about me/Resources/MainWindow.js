var currentWindow = Ti.UI.currentWindow;

var tabGroup = Ti.UI.createTabGroup();

/*var img = Ti.UI.createView({
	backgroundColor: "black",
	height: "90%",
	width: "200%"
});*/

var about = Ti.UI.createWindow({
    title:"About Me",
    url:"about.js"
});
 
var aboutTab = Ti.UI.createTab({
    title:"About",
    window:about
});

var img = Ti.UI.createWindow({
	title: "Image",
	url: "Images.js"
});

var imgTab = Ti.UI.createTab({
	title: "Image",
	window: img
});
 
tabGroup.addTab(aboutTab);
tabGroup.addTab(imgTab);
tabGroup.open();