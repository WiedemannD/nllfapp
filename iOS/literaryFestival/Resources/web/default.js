/////////////////
// general vars and consts
/////////////////

const screenWidth = "320px";
const retina = window.devicePixelRatio > 1;
const baseUrl = "http://192.168.0.102/update/";//"file:///Users/WiedemannD/Documents/XCode/_Projects/nllfapp/update/"; //"http://192.168.0.102/update/"; // "http://192.168.0.102/update/"; //"http://daniel-wiedemann.de/test/update/";
const gmapApiKey = "AIzaSyDJeTxDvfwAmjO7GTbxL-USNBB8mmOnHkY"; // google maps API key Courtesy limit: 25,000 requests/day (middlesexunict@gmail.com)
const updateFreq = 5 * 60 * 1000;// 10 * 1000; // 5 * 60 * 1000; // 5 mins // 20 * 1000; // 20 secs
const updatePosFreq = 2 * 1000;
var content = null;
var pos; // device position var for maps

var checkInetConnectUpdateMsg = false;
var loadRemoteScriptsStarted = false;
var gmapApi = false;
var visibleSheetMapSheet = null;

/////////////////
// when the dom is ready
// and startup functions
/////////////////

window.addEvent("domready", function()
{	
	if(retina)
	{
		setRetinaImages();
	}
	setMainContainerHeight();
	parseContent();
	checkForUpdates();
	//checkInetConnectCycle();
});

// if needed set retina images
function setRetinaImages()
{
	$("backBtnImg").src = "backBtn@2x.png";
	$("headerImg").src = "header@2x.png";

	console.log("Retina images set.");
}

// ugly function to set the correct height of mainContainer to avoid scrolling issues with different screensizes of iPhone4/s and iPhone5
function setMainContainerHeight()
{
	var naviBarHeight = $("naviBar").getStyle("height").substr(0, $("naviBar").getStyle("height").indexOf("px"));
	if(retina)
	{
		naviBarHeight = naviBarHeight / 2;
	}
	
	var mainContainerHeight = window.innerHeight - naviBarHeight;
	$("mainContainer").setStyle("height", mainContainerHeight + "px");
}

// gets triggerd the first time checkInetConnect() is true (preferably triggered when checkForupdates() is called)
function loadRemoteScripts() 
{
	// google maps api
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "https://maps.googleapis.com/maps/api/js?key=" + gmapApiKey + "&sensor=true&callback=onGmapApiLoaded";
	script.onerror = function(){loadRemoteScriptsStarted = false;}
	document.body.appendChild(script);
	
	loadRemoteScriptsStarted = true;

	// other remote scripts here

	console.log("Load remote scripts started.");
}

function onGmapApiLoaded()
{
	gmapApi = true;
	console.log("Google Maps API loaded.");
	
	updatePos();
	//parseUnparsedElements();
}


/////////////////
// navigation
/////////////////

var naviPath = new Array();
naviPath[0] = "home";

function navigateTo(id)
{
	if($(id))
	{
		naviPath.push(id);

		var sheet = $(id);
		checkForMap(sheet);

		sheet.set({styles: {"display":"block", "z-index":naviPath.length + 1}});
		TweenMax.to(sheet, 0.8, {css:{left:"-" + screenWidth}, ease:Back.easeOut, onComplete:function(){$(naviPath[naviPath.length - 2]).setStyle("display", "none"); activateMissingFeatures(sheet);}});

		TweenMax.to($("mainContainer"), 0.3, {scrollTop:0});

		changeTitle(sheet.attributes["name"].value);

		if(sheet.inetNeeded && !checkInetConnect())
		{
			toggleAlert("Please connect to the Internet. Some features might be deactivated.");
		}
		
		$("naviBtnLeft").fade('in');
	}
}

function navigateBack()
{
	if(naviPath.length > 1)
	{
		var lastSheet = $(naviPath[naviPath.length - 2]);
		lastSheet.setStyle("display", "block");
		checkForMap(lastSheet);

		var sheet = $(naviPath[naviPath.length - 1]);
		TweenMax.to(sheet, 0.8, {css:{left:"0px"}, ease:Back.easeOut});
		
		TweenMax.to($("mainContainer"), 0.3, {scrollTop:0});
		
		naviPath.pop();
		
		changeTitle(lastSheet.attributes["name"].value);
		
		if(naviPath.length == 1)
		{
			$("naviBtnLeft").fade('out');
		}
	}
}

function activateMissingFeatures(sheet)
{
	var missingFeatures = sheet.getChildren(".sheetMissingFeature");
	
	if(checkInetConnect())
	{
		for(var i = 0; i < missingFeatures.length; i++)
		{
			var missingFeature = missingFeatures[i];
			if(missingFeature.placeholderFor)
			{
				content.parseElement(missingFeature.placeholderFor);
			}
		}
	}
	
	checkForMap(sheet);
}

function checkForMap(sheet)
{
	if(sheet.getChildren(".sheetMap").length > 0)
	{
		var showDevicePos = false;
		for(var i = 0; i < sheet.getChildren(".sheetMap").length; i++)
		{
			if(sheet.getChildren(".sheetMap")[i].map.deviceMarker)
			{
				showDevicePos = true;
			}
		}
		
		if(showDevicePos)
		{
			visibleSheetMapSheet = sheet;
			updatePos();
		}
	}
	else
	{
		visibleSheetMapSheet = null;
	}
}

function changeTitle(str)
{
	var naviTitle = document.getElementById("naviTitle");
	naviTitle.innerHTML = str;
}

function noTouchMove(e)
{ 
	e.preventDefault(); 
}


/////////////////
// toggleSound
/////////////////

var currentSound = null;
var soundPlaying = false;

function toggleSound(fileName)
{
	// create new sound when there is none initialized
	if(currentSound == null)
	{
		currentSound = document.createElement('audio');
		document.getElementById("sounds").appendChild(currentSound);
		currentSound.src = fileName;
		currentSound.load();
		currentSound.play();

		soundPlaying = true;
	}
	else
	{
		var currentSoundSrc = currentSound.src.substr(currentSound.src.lastIndexOf("/") + 1);
		
		// sound is playing
		if(soundPlaying)
		{
			currentSound.pause();
			soundPlaying = false;
			
			if(fileName != currentSoundSrc)
			{
				// remove sound
				document.getElementById("sounds").removeChild(currentSound);
				currentSound = null;
				
				// play new sound
				toggleSound(fileName);
			}
		}
		// sound is NOT playing
		else
		{
			if(fileName == currentSoundSrc)
			{
				currentSound.play();
				soundPlaying = true;
			}
			else
			{
				// remove sound
				document.getElementById("sounds").removeChild(currentSound);
				currentSound = null;
				
				// play new sound
				toggleSound(fileName);
			}
		}
	}
}


/////////////////
// check internet connectivity
/////////////////

function checkInetConnect(type)
{
	if(navigator.onLine)
	{
		checkInetConnectUpdateMsg = false;

		if(!gmapApi && !loadRemoteScriptsStarted)
		{
			loadRemoteScripts();		
		}
		
		return true;
	}
	else
	{
		switch(type)
		{
			case "update":
				if(!checkInetConnectUpdateMsg)
				{
					checkInetConnectUpdateMsg = true;
					toggleAlert("Please connect to the Internet. Updates are deactivated.");
				}
				break;
			
			case "features":
				toggleAlert("Please connect to the Internet. Some features might be deactivated.");
				break;
				
			default:
				break;
		}
		
		console.log("No internet connection.");
		
		return false;
	}
}

/*
function checkInetConnectCycle()
{
	if(checkInetConnect())
	{
		var sheet = $(naviPath[naviPath.length - 1]);
		if(sheet.inetNeeded)
		{
			activateMissingFeatures(sheet);
		}
	}
	
	checkInetConnectCycle.delay(2 * 1000);
}
*/

function toggleAlert(str)
{
	if($("alertBox").getStyle("visibility") == "hidden")
	{
		$("alertText").innerHTML = str;
		$("alertBox").fade('in');
	}
	else
	{
		$("alertBox").fade('out');
	}
}

/////////////////
// request RSS
/////////////////

function requestRSS(url)
{
	if(checkInetConnect("features"))
	{
		var request = new Request.JSONP({
		    url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=processResult&q=' + url,
		    method: 'get',
		    onRequest: function(url){
				//console.log("request "+url);
		    }
		}).send();
	}
}

function processRSS(obj)
{
	alert("entries "+obj.responseData.feed.entries.length);
}


/////////////////
// content management
/////////////////

function parseContent()
{
	/////////////////
	// interpret localContent / content in localStorage
	// set "content"
	/////////////////
	
	if(localStorage["content"] != null)
	{
		content = JSONfn.parse(localStorage["content"]);
		console.log("Content parsed from local storage. Date: " + createDateString(content.date));
	}
	else
	{
		content = localContent;
		console.log("Content parsed from local file.");
	}
	
	content.parse();
}

/*
// for remote elements like maps that couldn't be created without having the lib/api loaded, or because there was no internet connection
function parseUnparsedElements()
{
	for(var i = 0; i < content.unparsedElements.length; i++)
	{
		var cSEl = content.unparsedElements[i];
		content.parseElement(cSEl);
	}
}
*/

function dateIsNewer(newDate)
{
	var currentDate = localContent.date;
	
	if(content != null)
	{
		currentDate = content.date;
	}
	
	var cDate = createDateString(currentDate);
	var nDate = createDateString(newDate);
	
	if(cDate < nDate)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function dateIsDifferent(newDate)
{
	var currentDate = localContent.date;
	
	if(content != null)
	{
		currentDate = content.date;
	}
	
	var cDate = createDateString(currentDate);
	var nDate = createDateString(newDate);
	
	if(cDate != nDate)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function createDateString(date)
{
	var str = "";
	
	if(date)
	{
		str = date.year;
		str += date.month;
		str += date.day;
		str += date.hour;
		str += date.minute;
	}
	else
	{
		var now = new Date();
		str = now.getFullYear() +""+ now.getMonth() +""+ now.getDate() +""+ now.getHours() +""+ now.getMinutes() +""+ now.getSeconds();
	}
	
	/*
	if(date.month < 10)
	{
		str += "0" + date.month;
	}
	else
	{
		str += date.month;
	}
	
	if(date.day < 10)
	{
		str += "0" + date.day;
	}
	else
	{
		str += date.day;
	}
	
	if(date.hour < 10)
	{
		str += "0" + date.hour;
	}
	else
	{
		str += date.hour;
	}
	
	if(date.minute < 10)
	{
		str += "0" + date.minute;
	}
	else
	{
		str += date.minute;
	}*/
	
	return str;
}

function checkForUpdates()
{
	if(checkInetConnect("update"))
	{
		var url = baseUrl + "contentDate.js?reqDate=" + createDateString();
		var request = new Request.JSONP({
		    url: url,
		    method: 'get',
		    onRequest: function(url){
				//console.log("request "+url);
		    }
		}).send();
		
		console.log("Check for updates.");
	}
	
	checkForUpdates.delay(updateFreq);
}

function processContentDate(contentDate)
{
	if(dateIsDifferent(contentDate.date) || contentDate.forceUpdate == true)
	{
		if(contentDate.forceUpdate == true)
		{
			console.log("Force update!");
		}
		console.log("Update is available. Start loading ...");
		loadUpdate();
	}
	else
	{
		console.log("No update is available.");
	}
}

function loadUpdate()
{
	if(checkInetConnect("update"))
	{
		var url = baseUrl + "content.js?reqDate=" + createDateString();
		var request = new Request.JSONP({
		    url: url,
		    method: 'get',
		    onRequest: function(url){
				//console.log("request "+url);
		    }
		}).send();
	}
}

function processContentUpdate(contentUpdate)
{
	if(dateIsDifferent(contentUpdate.date) || contentUpdate.forceUpdate == true)
	{
		resetContent();
		localStorage["content"] = JSONfn.stringify(contentUpdate);
		content = JSONfn.parse(localStorage["content"]);
		
		if(contentUpdate.forceUpdate == true)
		{
			console.log("Force update!");
		}
		else
		{
			toggleAlert("An update has been performed.");
		}
		console.log("Content update saved to localStorage. Date: " + createDateString(content.date));
		
		content.parse();
	}
	else
	{
		console.log("Content update (Date: " + createDateString(contentUpdate.date) + ") seems older than current saved content (Date: " + createDateString(content.date) + ") and was ignored.");
	}
}

function resetContent()
{
	$("contentContainer").innerHTML = "";
	localStorage.clear();
	changeTitle("Home");
	
	naviPath = new Array();
	naviPath[0] = "home";
	
	console.log("Content and localStorage reset.");
}


/////////////////
// image processing
/////////////////

function getBase64Image(imgEl) 
{
	/*
	code based on Matthew Crumley example:
	http://stackoverflow.com/questions/934012/get-image-data-in-javascript
	*/
	
    var canvas = document.createElement("canvas");
    canvas.width = imgEl.width;
    canvas.height = imgEl.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgEl, 0, 0);

    var dataURL = canvas.toDataURL("image/jpg"); // canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


/////////////////
// geo location update
/////////////////

function updatePos()
{
	if(visibleSheetMapSheet && navigator.geolocation) 
	{
		// get geo data
		navigator.geolocation.getCurrentPosition(function(position){pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); /*console.log("Position set: "+position.coords.latitude+" - "+position.coords.longitude+".");*/}, function(){/*console.log("Geo location currently unavailable.")*/});
		
		// apply pos to all visible maps
		var sheetMaps = visibleSheetMapSheet.getChildren(".sheetMap");
		
		for(var i = 0; i < sheetMaps.length; i++)
		{
			var sheetMap = sheetMaps[i];
			
			if(sheetMap.map.deviceMarker)
			{
				sheetMap.map.deviceMarker.setPosition(pos);				
			}
		}
		
		updatePos.delay(updatePosFreq);
	}
}




















