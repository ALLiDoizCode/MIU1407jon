//FUNCTIONS

//function//
var aboutDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		
		
	});
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			//Reserved Properties
			backgroundImage: "#white",
			height: 65,
			top: 0		
		});
		
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: detailTextView.height + detailTextView.top
			
		});
		
		//Function Labels
			var detailLabel = Ti.UI.createLabel({	
			text: this.title,
			color: "black",
			textAlign: "center"
		});
		
		var aboutText = Ti.UI.createLabel({
				text: this.desc,
				font: {fontSize: 15, fontFamilly: "Arial"},
				top: detailBorder.height + detailBorder.top + 40,
				left: 15,
				right: 15,
			});
			
		var returnButton = Ti.UI.createLabel({
				text: "Return",
				backgroundColor: "black",
				color: "silver",
				height: 50,
				font: {fontSize: 13, fontFamily: "Arial"},
				width: "100%",
				bottom: 0,
				textAlign: "center"
		});
		
		var closeWindow = function(){
			detailWindow.close();
		};
		
		//EventListener
		returnButton.addEventListener("click", closeWindow);
		
	// Function Element loaders		
	detailTextView.add(detailLabel);	
	detailWindow.add(detailTextView, detailBorder, aboutText,returnButton);
	
	detailWindow.open();
};

//Load Data
var Sections = [aboutSec];
Table.setData(Sections);

//Rows
for(var i=0, j=info.length; i<j; i++){
	var aboutRow = Ti.UI.createTableViewRow({
		title: info[i].question,
		desc: info[i].answer,
		hasChild: true,
		
	});
	aboutRow.addEventListener("click", aboutDetail);
	aboutSec.add(aboutRow);
}


Table.addEventListener("click", function(event){
	console.log(event);
});