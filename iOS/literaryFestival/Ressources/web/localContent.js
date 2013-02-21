//////////////
// localContent.js
// before uploading to the server test it for syntax consistency using the localContent.parse() on a website like the project related index.html or testContent.html
// check javascript console for any relevant errors!!!
//////////////

localContent =
{
	// date must be in this format(!!) and updated to force an update on devices
	date:
	{
		year:"2013",
		month:"02",
		day:"15",
		hour:"21",
		minute:"22"
	},
	
	contentSheets:
	[
		// main menu / home screen
		{
			type:"main",
			id:"home",
			name:"Home",
			elements:
			[
				{
					type:"homeBtn",
					rel:"events",
					label:"Events"
				},
				{
					type:"homeBtn",
					rel:"authors",
					label:"Authors"
				},
				{
					type:"homeBtn",
					rel:"map",
					label:"Map"
				},
				{
					type:"homeBtn",
					rel:"info",
					label:"Info"
				},
				{
					type:"homeBtn",
					rel:"topics",
					label:"Topics"
				},
				{
					type:"homeBtn",
					rel:"news",
					label:"News"
				}
			]
		},
		
		// events
		{
			type:"list",
			id:"events",
			name:"Events",
			elements:
			[
				{
					type:"tableBtn",
					rel:"event0",
					label:"Event 0"
				},
				{
					type:"tableBtn",
					rel:"event1",
					label:"Event 1"
				},
				{
					type:"tableBtn",
					rel:"event2",
					label:"Event 2"
				}
			]
		},
		
		{
			type:"detail",
			id:"event0",
			name:"Event 0",
			elements:
			[
				{
					type:"sheetHL",
					text:"Event 0"
				},
				{
					type:"sheetImg",
					src:"cal.jpg"
				},
				{
					type:"sheetCopy",
					text:"Lorem ipsum \"dolor\" sit amet, consectetur adipiscing elit. Proin fermentum, ipsum vitae semper ornare, leo nisi tincidunt eros, id posuere tortor est ut erat. Nullam vestibulum orci vel urna lobortis id venenatis lacus ornare. Morbi facilisis convallis laoreet. Etiam sit amet est eget tortor interdum pulvinar."
				}
			]
		},
		
		{
			type:"detail",
			id:"event1",
			name:"Event 1",
			elements:
			[
				{
					type:"sheetHL",
					text:"Event 1 on Friday 13th 2013 at 17:30 o'clock"
				},
				{
					type:"sheetImg",
					src:"cal.jpg"
				},
				{
					type:"sheetCopy",
					text:"Lorem ipsum \"dolor\" sit amet, consectetur adipiscing elit. Proin fermentum, ipsum vitae semper ornare, leo nisi tincidunt eros, id posuere tortor est ut erat. Nullam vestibulum orci vel urna lobortis id venenatis lacus ornare. Morbi facilisis convallis laoreet. Etiam sit amet est eget tortor interdum pulvinar."
				}
			]
		},
		
		{
			type:"detail",
			id:"event2",
			name:"Event 2",
			elements:
			[
				{
					type:"sheetHL",
					text:"Event 2"
				},
				{
					type:"sheetImg",
					src:"cal.jpg"
				},
				{
					type:"sheetCopy",
					text:"Lorem ipsum \"dolor\" sit amet, consectetur adipiscing elit. Proin fermentum, ipsum vitae semper ornare, leo nisi tincidunt eros, id posuere tortor est ut erat. Nullam vestibulum orci vel urna lobortis id venenatis lacus ornare. Morbi facilisis convallis laoreet. Etiam sit amet est eget tortor interdum pulvinar."
				}
			]
		},
		
		// authors
		{
			type:"list",
			id:"authors",
			name:"Authors",
			elements:
			[
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author0",
					label:"Author 0"
				},
				{
					type:"tableBtn",
					rel:"author1",
					label:"Author 1"
				}
			]
		},
		
		{
			type:"detail",
			id:"author0",
			name:"Author 0",
			elements:
			[
				{
					type:"sheetHL",
					text:"Author 0"
				},
				{
					type:"sheetImg",
					src:"author.jpg"
				},
				{
					type:"sheetCopy",
					text:"<a href='http://test.de?extOpen'>test1</a> <a href='http://test.de'>test2</a> Lorem ipsum \"dolor\" sit amet, consectetur adipiscing elit. Proin fermentum, ipsum vitae semper ornare, leo nisi tincidunt eros, id posuere tortor est ut erat. Nullam vestibulum orci vel urna lobortis id venenatis lacus ornare. Morbi facilisis convallis laoreet. Etiam sit amet est eget tortor interdum pulvinar."
				},
				{
					type:"soundBtn",
					label:"Play sound",
					src:"sound1.mp3"
				},
				{
					type:"linkBtn",
					label:"Website",
					extOpen:true,
					url:"http://test.de"
				},
				{
					type:"linkBtn",
					label:"Website?test",
					extOpen:true,
					url:"http://test.de?test"
				},
				{
					type:"linkBtn",
					label:"Website3",
					extOpen:false,
					url:"http://test.de"
				}
			]
		},
		
		{
			type:"detail",
			id:"author1",
			name:"Author 1",
			elements:
			[
				{
					type:"sheetHL",
					text:"Author 1"
				},
				{
					type:"sheetImg",
					src:"author.jpg"
				},
				{
					type:"sheetCopy",
					text:"Lorem ipsum \"dolor\" sit amet, consectetur adipiscing elit. Proin fermentum, ipsum vitae semper ornare, leo nisi tincidunt eros, id posuere tortor est ut erat. Nullam vestibulum orci vel urna lobortis id venenatis lacus ornare. Morbi facilisis convallis laoreet. Etiam sit amet est eget tortor interdum pulvinar."
				}
			]
		},
		
		// main map
		{
			type:"detail",
			id:"map",
			name:"Map",
			elements:
			[
				{
					type:"sheetHL",
					text:"The map",
				},
				{
					type:"iframe",
					width:"300",
					height:"300",
					src:"https://maps.google.com/maps?f=q&source=s_q&hl=de&amp;geocode=&amp;q=Middlesex+University,+The+Burroughs,+London,+Vereinigtes+K%C3%B6nigreich&amp;aq=1&amp;oq=middlese&amp;sll=42.491062,-96.965062&amp;sspn=60.01188,56.25&amp;ie=UTF8&amp;hq=Middlesex+University,+The+Burroughs,&amp;hnear=London,+Vereinigtes+K%C3%B6nigreich&amp;t=m&amp;ll=51.583043,-0.179214&amp;spn=0.128,0.205994&amp;z=11&output=embed"
				},
				{
					type:"sheetImg",
					src:"map.png",
					styles:
					{
						paddingTop:"20px"
					}
				}
			]
		}
	],
	
	
	
	
	
	
	
	
	
	
	
	
	
	//////////////
	// instructions/templates to parse the content:
	// ONLY TOUCH WHEN YOU NEED TO ADD OR CHANGE TEMPLATES AND YOU KNOW WHAT YOU ARE DOING!!
	//////////////
	parse:function()
	{
		/////////////////
		// interpret localContent
		/////////////////

		// create each contentSheet
		for(i = 0; i < this.contentSheets.length; i++)
		{
			var inetNeeded = false;
			var cS = this.contentSheets[i];

			var div = document.createElement("div");
			div.set({"id":cS.id, "name":cS.name, "class":"contentSheet"});//, "ontouchmove":"noTouchMove()"});
			
			if($("contentContainer"))
			{
				$("contentContainer").appendChild(div);
			}
			else
			{
				document.body.appendChild(div);
			}


			// create elements of contentSheet
			for(j = 0; j < cS.elements.length; j++)
			{
				var cSEl = cS.elements[j];
				var el = this.parseElement(cSEl);
				
				if(inetNeeded)
				{
					div.inetNeeded = true;
				}
				
				div.appendChild(el);
			}
		}
	},
	
	parseElement:function(cSEl)
	{
		/////////////////
		// element templates
		/////////////////
		var el;
		
		switch(cSEl.type)
		{
			case "homeBtn":
				el = document.createElement("a");
				el.set({"rel":cSEl.rel, "class":"homeBtn", "onclick":"navigateTo(this.rel)"});
				el.innerHTML = cSEl.label;
				break;

			case "tableBtn":
				el = document.createElement("a");
				el.set({"rel":cSEl.rel, "class":"tableBtn", "onclick":"navigateTo(this.rel)"});
				el.innerHTML = cSEl.label;
				break;
				
			case "soundBtn":
				el = document.createElement("a");
				el.set({"class":"soundBtn", "onclick":"toggleSound('" + cSEl.src + "')"});
				el.innerHTML = cSEl.label;
				break;
				
			case "linkBtn":
				var url = cSEl.url;
				if(cSEl.extOpen)
				{
					if(url.indexOf("?") > 0)
					{
						url = url + "&extOpen=true";
					}
					else
					{
						url = url + "?extOpen=true";
					}
				}
				
				el = document.createElement("a");
				el.set({"class":"linkBtn", "href":url});
				el.innerHTML = cSEl.label;
				break;

			case "sheetHL":
				el = document.createElement("div");
				el.set({"class":"sheetHL"});
				el.innerHTML = cSEl.text;
				break;

			case "sheetCopy":
				el = document.createElement("div");
				el.set({"class":"sheetCopy"});
				el.innerHTML = cSEl.text;
				break;

			case "sheetImg":
				el = document.createElement("img");
				el.set({"class":"sheetImg"});
				el.src = cSEl.src;
				break;
				
			case "sheetMap":
				if(gmapApi)
				{
					
				}
				else
				{
					el = document.createElement("div");
					el.set({"class":"sheetMissingFeature"});
					el.innerHTML = "Map deactivated";
				}
				break;
				
			case "iframe":
				el = document.createElement("iframe");
				el.set({"width":cSEl.width, "height":cSEl.height, "frameborder":"0", "scrolling":"no", "marginheight":"0", "marginwidth":"0"});
				el.src = cSEl.src.replace(/&amp;/g, "&");
				
				inetNeeded = true;
				break;
		}
		
		// apply optional css styles to sub element
		if(cSEl.styles)
		{
			el.set({styles:cSEl.styles});
		}
		
		return el;
	}
}



















