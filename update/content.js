//////////////
// content.json
// before uploading to the server test it for syntax consistency using the localContent.parse() on a website like the project related index.html or testContent.html
// check javascript console for any relevant errors!!!
// sheetImg: for new images, that are not on the device use a base64 encoder (e.g.http://www.base64-image.de or http://www.askapache.com/online-tools/base64-image-converter) and then copy the complete bas64 string (including "data:image ..." --> The value of the url or src attribute) to the src attribute of the sheetImg element you want to create in this file
// max filesize of this file is 5MB as this object will be stored in localStorage on the device including base64 encoded images (happens client side)
//////////////

processContentUpdate
({ 
	// date must be in this format(2 digits for all fields except the year!!) and updated to force an update on devices
	date:
	{
		year:"2013",	// e.g. 2013
		month:"02",		// e.g. 02
		day:"21",		// e.g. 04
		hour:"21",		// e.g. 03
		minute:"22"		// e.g. 05
	},
	
	forceUpdate:false, // ONLY SET TO true WHEN YOU CAN'T USE DATE TO PERFORM AN UPDATE!!
	
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
					rel:"programme",
					label:"Programme",
					sublabel:"P"
				},
				{
					type:"homeBtn",
					rel:"authors",
					label:"Authors",
					sublabel:"A"
				},
				{
					type:"homeBtn",
					rel:"workshops",
					label:"Workshops",
					sublabel:"W"
				},
				{
					type:"homeBtn",
					rel:"latestUpdates",
					label:"Latest updates",
					sublabel:"U"
				},
				{
					type:"homeBtn",
					rel:"directions",
					label:"Directions",
					sublabel:"D"
				},
				{
					type:"homeBtn",
					rel:"northLondon",
					label:"North London",
					sublabel:"N"
				}
			]
		},
		
		// programme
		{
			type:"list",
			id:"programme",
			name:"Programme",
			elements:
			[
				{
					type:"tableBtn",
					rel:"day1",
					label:"Tuesday 26th March"
				},
				{
					type:"tableBtn",
					rel:"day2",
					label:"Wednesday 27th March"
				},
				{
					type:"tableBtn",
					rel:"twiction",
					label:"Twiction"
				}
			]
		},
		
		{
			type:"list",
			id:"day1",
			name:"Tuesday 26th March",
			elements:
			[
				{
					type:"tableBtn",
					rel:"day1_1",
					label:"12pm: Speed-pitch"
				},
				{
					type:"tableBtn",
					rel:"day1_2",
					label:"1pm: Andrew Simms & James Heartfield"
				},
				{
					type:"tableBtn",
					rel:"day1_3",
					label:"2pm: Chibundu Onuzo"
				},
				{
					type:"tableBtn",
					rel:"day1_4",
					label:"Small Publishing Forum"
				},
				{
					type:"tableBtn",
					rel:"day1_5",
					label:"3pm: Philippa Perry"
				},
				{
					type:"tableBtn",
					rel:"day1_6",
					label:"4pm: Rowan Coleman"
				},
				{
					type:"tableBtn",
					rel:"day1_7",
					label:"Flash Fiction"
				},
				{
					type:"tableBtn",
					rel:"day1_8",
					label:"5.15pm: Michele Roberts"
				},
				{
					type:"tableBtn",
					rel:"day1_9",
					label:"6pm: Gala"
				}
			]
		},
			{
				type:"detail",
				id:"day1_1",
				name:"Speed-pitch",
				elements:
				[
					{
						type:"sheetHL",
						text:"12pm: Speed-pitch"
					},
					{
						type:"sheetImg",
						src:"img_lba.png"
					},
					{
						type:"sheetCopy",
						text:"The literary Agency LBA was established by Luigi Bonomi and Amanda Preston in March 2005 and it has one of the most high profile client lists in the business.  They represent a large number of very successful authors and indeed celebrities including Richard Hammond, James May, Dr Alice Roberts, Richard Madeley and Judy Finnigan to name a few. They also represent a large number of Sunday Times bestselling fiction authors including Simon Kernick, Josephine Cox, Karen Swan, Alan Titchmarsh, Sam Christer, Amanda Brooke and Fern Britton."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/speed-pitching-with-lba/"
					}
				]
			},
			{
				type:"detail",
				id:"day1_2",
				name:"Simms & Heartfield",
				elements:
				[
					{
						type:"sheetHL",
						text:"1pm: Andrew Simms & James Heartfield"
					},
					{
						type:"sheetImg",
						src:"img_andrewSimms.jpg"
					},
					{
						type:"sheetCopy",
						text:"Andrew Simms is the author of several books including the bestselling ‘Tescopoly’. He is a Fellow of nef (the new economics foundation) where he was policy director for many years, trained at the London School of Economics and was described by New Scientist magazine as, ‘a master at joined-up progressive thinking.’ He is also one of the UK’s leading campaigners who coined the term ‘Clone Towns,’ co-authored the groundbreaking ‘Green New Deal’, was one of the original organisers of the campaign to cancel poor country debt, and devised how to mark the day in the year when the world enters ‘ecological debt.’ Andrew lives, runs and rides his bicycle in London where he plans to practice another of his ideas, ‘National Gardening Leave.’ He has witnessed first-hand for more than twenty years failed international efforts to solve critical economic and environmental problems, from extreme poverty to climate change. His new book is the result of his search for something better."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/andrew-simms/"
					}
				]
			},
			{
				type:"detail",
				id:"day1_3",
				name:"Onuzo",
				elements:
				[
					{
						type:"sheetHL",
						text:"2pm: Chibundu Onuzo"
					},
					{
						type:"sheetImg",
						src:"img_chibunduOnuzo.jpg"
					},
					{
						type:"sheetCopy",
						text:"Chibundu Onuzo was born in Nigeria in 1991 and is the youngest of four children. She was signed by Faber at the age of 19 and her first novel ‘The Spider King’s Daughter’ was published in March 2012 and has gone on to be longlisted for the Desmond Elliott Prize and shortlisted for the Dylan Thomas Prize. Chibundu is currently doing an Msc in Public Policy at University College London. When not writing, Chibundu can be found playing the piano or singing."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/20/chibundu-onuzo/"
					}
				]
			},
			{
				type:"detail",
				id:"day1_4",
				name:"Publishing Forum",
				elements:
				[
					{
						type:"sheetHL",
						text:"Small Publishing Forum"
					},
					{
						type:"sheetCopy",
						text:"Small Publishing Forum"
					}
				]
			},
			{
				type:"detail",
				id:"day1_5",
				name:"Perry",
				elements:
				[
					{
						type:"sheetHL",
						text:"3pm: Philippa Perry"
					},
					{
						type:"sheetImg",
						src:"img_philippaPerry.jpg"
					},
					{
						type:"sheetCopy",
						text:"Ex-psychotherapist Philippa Perry is an author, journalist and broadcaster. Amongst other publications she has written for The Guardian, The Observer, Time Out, The Times and has a regular column in Psychologies Magazine. She also contributes to the BBC Culture Show and has appeared on Women’s Hour on radio 4. She is also a regular guest on the ResonanceFM show, Group Therapy. Her graphic novel ‘Couch Fiction’ was published by Palgrave Macmillan in 2010. In 2012, her next book ‘How to Stay Sane’ was brought out by Pan Macmillan as part of The School of Life series, edited by Alain de Botton. She is married to the artist, Turner Prize winner and broadcaster, Grayson Perry.<br/><br/>Philippa has the knack of showing you what is possible and in her talk illustrated with images, anecdotes and citations Philippa Perry will share with us her creative process that produced her best selling self-help book ‘How to Stay Sane’."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/19/philippa-perry/"
					}
				]
			},
			{
				type:"detail",
				id:"day1_6",
				name:"Coleman",
				elements:
				[
					{
						type:"sheetHL",
						text:"4pm: Rowan Coleman"
					},
					{
						type:"sheetImg",
						src:"img_rowanColeman.jpg"
					},
					{
						type:"sheetCopy",
						text:"Rowan Coleman grew up in Hertfordshire longing to be a writer despite battling with dyslexia. After graduating from Middlesex university she worked in bookselling and publishing for seven years before winning Company Magazine Young Writer of the Year in 2001. Her first novel ‘Growing Up Twice’ was published in 2002.<br/><br/>Rowan has gone on to write twelve novels for adults including the international bestsellers ‘The Accidental Mother’ , ‘The Baby Group’ and ‘The Accidental Wife’ and eight novels for children and teens, including the paranormal adventure novels ‘Nearly Departed’ and ‘Immortal Remains’ under the name Rook Hastings. Her books are published around the world in several different languages. Her latest novel ‘Dearest Rose’ won Festival of Romance Best Romantic Read 2012, and as also been shortlist for the RNA Epic Romantic Novel of the Year. She now lives in Hertfordshire with her husband, and four children and is working on her next novel."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/15/rowan-coleman/"
					}
				]
			},
			{
				type:"detail",
				id:"day1_7",
				name:"Flash Fiction",
				elements:
				[
					{
						type:"sheetHL",
						text:"Flash Fiction"
					},
					{
						type:"sheetCopy",
						text:"Flash Fiction"
					}
				]
			},
			{
				type:"detail",
				id:"day1_8",
				name:"Roberts",
				elements:
				[
					{
						type:"sheetHL",
						text:"5.15pm: Michele Roberts"
					},
					{
						type:"sheetCopy",
						text:"Michèle Roberts is the author of twelve highly acclaimed novels, including ‘The Looking Glass’ and ‘Daughters of the House’ which won the WHSmith Literary Award and was shortlisted for the Booker Prize. Her memoir ‘Paper Houses’ was BBC Radio 4′s Book of the Week in June 2007. She has also published poetry and short stories, most recently collected in ‘Mud – stories of sex and love’ (2010). Her latest novel ‘Ignorance’ (2012) will be out in paperback in March 2013 so please have  Half-English and half-French, Michèle Roberts lives in London and in the Mayenne, France. She is Emeritus Professor of Creative Writing at the University of East Anglia.<br/><br/>”Michèle Roberts is one of those writers descended perhaps as much from Monet and Debussy as Virginia Woolf or Keats… To read a book by her is to savour colour, sound, taste, texture and touch as never before.” The Times"
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/19/michele-roberts/"
					}
				]
			},
			{
				type:"detail",
				id:"day1_9",
				name:"Gala",
				elements:
				[
					{
						type:"sheetHL",
						text:"6pm: Gala"
					},
					{
						type:"sheetCopy",
						text:"Turning Facts into Narratives: A Gala evening showcasing faculty members’ recent publications: featuring a screening and a panel discussion, embracing fiction, drama and non-fiction, and with subjects ranging from sex, friendship,the Second World War and Noël Coward to Nagasaki and Rebecca West, this event focuses on how facts, dates, figures can be turned into flowing narratives.  The Gala authors are: Feona Attwood, Josie Barnard, Maggie Butt, James Martin Charlton, Lorna Gibb and David Rain."
					}
				]
			},
		{
			type:"list",
			id:"day2",
			name:"Wednesday 27th March",
			elements:
			[
				{
					type:"tableBtn",
					rel:"day2_1",
					label:"Laura Hird"
				},
				{
					type:"tableBtn",
					rel:"day2_2",
					label:"1pm: Abimbola Dare"
				},
				{
					type:"tableBtn",
					rel:"day2_3",
					label:"Small Publishing Forum"
				},
				{
					type:"tableBtn",
					rel:"day2_4",
					label:"2pm: Lucy Caldwell & Elizabeth Buchan"
				},
				{
					type:"tableBtn",
					rel:"day2_5",
					label:"3pm: John Lucas & Matt Haig"
				},
				{
					type:"tableBtn",
					rel:"day2_6",
					label:"Poetry Slam"
				},
				{
					type:"tableBtn",
					rel:"day2_7",
					label:"5.30pm: Faber How to Get Published"
				},
				{
					type:"tableBtn",
					rel:"day2_8",
					label:"7pm: James Herbert"
				}
			]
		},
			{
				type:"detail",
				id:"day2_1",
				name:"Hird",
				elements:
				[
					{
						type:"sheetHL",
						text:"Laura Hird"
					},
					{
						type:"sheetCopy",
						text:"Laura Hird"
					}/*,
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/19/michele-roberts/"
					}*/
				]
			},
			{
				type:"detail",
				id:"day2_2",
				name:"Dare",
				elements:
				[
					{
						type:"sheetHL",
						text:"1pm: Abimbola Dare"
					},
					{
						type:"sheetImg",
						src:"img_abimbolaDare.jpg"
					},
					{
						type:"sheetCopy",
						text:"Abimbola Dare commenced her writing career as a blogger in 2006. Her hilarious blog which documented the life of an immigrant learning to adjust to life in the UK soon became one of the most visited blogs in Nigeria at the time. In 2008, she took a maternity break-which essentially became an opportunity for her to write her first Inspirational (christian) novel, ‘The Small Print’. Having sought for, and finding no Christian fiction publisher in the UK, she decided to establish her own company. ‘The Small Print’ was released in 2011 and became one of the best selling e-books in Religious romance genre on Amazon UK-for more than six months.  For a self published author in a relatively unknown genre within the UK, the success of The Small Print was a welcomed surprise and driver for exploring a niche with potential for massive growth. She has written a number of short stories, including the hugely popular, ‘The No-nonsense wife’ which instantly became an internet sensation.  In January 2013, she was nominated as author of the year by the Women4Africa panel, alongside fellow Nigerian author, Chibundu Onuzo. Her second novel, ‘When Broken Chords Sing’, will be released in May, 2013. She has been featured in major newspapers and magazines across Nigeria, and juggles novel writing with working full time for one of the largest publishing firms in the world."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/21/401/"
					}
				]
			},
			{
				type:"detail",
				id:"day2_3",
				name:"Publishing Forum",
				elements:
				[
					{
						type:"sheetHL",
						text:"Small Publishing Forum"
					},
					{
						type:"sheetCopy",
						text:"Small Publishing Forum"
					}
				]
			},
			{
				type:"detail",
				id:"day2_4",
				name:"Caldwell & Buchan",
				elements:
				[
					{
						type:"sheetHL",
						text:"2pm: Lucy Caldwell & Elizabeth Buchan"
					},
					{
						type:"sheetImg",
						src:"img_lucyCaldwell.jpg"
					},
					{
						type:"sheetCopy",
						text:"Lucy Caldwell was born in Belfast in 1981. She has written two novels, Where They Were Missed (2006) and The Meeting Point (2011) which won the Dylan Thomas Prize. Lucy has previously won the Rooney Prize for Irish Literature and was recently shortlisted for the BBC International Short Story Award. She is also an award-winning playwright."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/lucy-caldwell/"
					},
					{
						type:"sheetImg",
						src:"img_elizabethBuchan.jpg",
						styles:
						{
							marginTop:"30px"
						}
					},
					{
						type:"sheetCopy",
						text:"Elizabeth Buchan began her career as a blurb writer at Penguin Books after graduating from the University of Kent with a double degree in English and History. She moved on to become a fiction editor at Random House before leaving to write full time. Her novels include the prizewinning ‘Light of the Moon’ and ’Consider the Lily’ – reviewed in the Independent as ‘a gorgeously well written tale: funny, sad and sophisticated’. A subsequent novel, ‘Revenge of the Middle-Aged Woman’ became an international bestseller and was made into a CBS Primetime Drama. This was followed by several other novels, including ‘The Second Wife’, ‘Separate Beds’ and ‘Daughters’. She has just finished ‘A Thousand Little Lies’,  a novel about the SOE operating in Denmark during the Second World War.<br/><br/>Elizabeth Buchan’s short stories are broadcast on BBC Radio 4 and published in magazines. She reviews for the Sunday Times, and has chaired the Betty Trask and Desmond Elliot literary prizes, and also been a judge for the Whitbread (now Costa) awards. She is a patron of the Guildford Book Festival and of The National Academy of Writing."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/elizabeth-buchan/"
					}
				]
			},
			{
				type:"detail",
				id:"day2_5",
				name:"Lucas & Haig",
				elements:
				[
					{
						type:"sheetHL",
						text:"3pm: John Lucas & Matt Haig"
					},
					{
						type:"sheetImg",
						src:"img_mattHaig.jpg"
					},
					{
						type:"sheetCopy",
						text:"Matt Haig was born in Sheffield in 1975. He is the author of novels for both adults and children. His adult novels include the bestsellers ‘The Last Family in England’, the film rights of which were sold to Brad Pitt, and ‘The Radleys’, which was a TV Book Club ‘Best Read’. His novels for children include ‘Shadow Forestwhich’ was a Blue Peter Book of the Year, won a Nestle Gold Medal, and picked up eight regional book awards. His latest children’s novel ‘To Be A Cat’, is about a boy who wakes up one morning in feline form. His works have been translated into over 20 languages. He is currently working on the screenplay for his next adult novel, ‘The Humans’. That novel has received glowing praise from Jeanette Winterson, Joanne Harris, Patrick Ness and SJ Watson, among others. The Guardian summed up his writing as ‘delightfully weird’ and the New York Times called him ‘a writer of great talent’. In 2011 he was named Yorkshire’s Young Achiever in the Arts. He lives in a house in York and a boat in London with his wife and children."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/matt-haig/"
					}
				]
			},
			{
				type:"detail",
				id:"day2_6",
				name:"Poetry Slam",
				elements:
				[
					{
						type:"sheetHL",
						text:"Poetry Slam"
					},
					{
						type:"sheetCopy",
						text:"Poetry Slam"
					}
				]
			},
			{
				type:"detail",
				id:"day2_7",
				name:"Faber Academy",
				elements:
				[
					{
						type:"sheetHL",
						text:"5.30pm: Faber How to Get Published"
					},
					{
						type:"sheetImg",
						src:"img_faberAcademy.jpg"
					},
					{
						type:"sheetCopy",
						text:"On Wednesday the 27th of March, the second day of North London Literary Festival, Faber Academy will chair a panel on how to get published. We have had a look at how it all started as a warm up for this exciting event. Faber How to Get Published panel will consist of Clare Conville (Literary Agent at Conville & Walsh), Angus Cargill (Senior Editor, Faber & Faber) and will be chaired by Richard Skinner (Author and Director of Fiction Programme, Faber Academy)."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/faber-and-faber/"
					}
				]
			},
			{
				type:"detail",
				id:"day2_8",
				name:"Herbert",
				elements:
				[
					{
						type:"sheetHL",
						text:"7pm: James Herbert"
					},
					{
						type:"sheetImg",
						src:"img_jamesHerbert.jpg"
					},
					{
						type:"sheetCopy",
						text:"We are happy to announce our keynote speaker: MacMillan’s James Herbert, award winning horror author of ‘Ash’ and ‘The Secret of Crickley Hall’."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/04/presenting-our-keynote-speaker/"
					}
				]
			},
			
		{
			type:"detail",
			id:"twiction",
			name:"Twiction",
			elements:
			[
				{
					type:"sheetHL",
					text:"Twiction"
				},
				{
					type:"sheetCopy",
					text:"Twiction"
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
					rel:"author1",
					label:"Elizabeth Buchan"
				},
				{
					type:"tableBtn",
					rel:"author2",
					label:"Lucy Caldwell"
				},
				{
					type:"tableBtn",
					rel:"author3",
					label:"Rowan Coleman"
				},
				{
					type:"tableBtn",
					rel:"author4",
					label:"Abimbola Dare"
				},
				{
					type:"tableBtn",
					rel:"author5",
					label:"Matt Haig"
				},
				{
					type:"tableBtn",
					rel:"author6",
					label:"James Heartfield"
				},
				{
					type:"tableBtn",
					rel:"author7",
					label:"James Herbert"
				},
				{
					type:"tableBtn",
					rel:"author8",
					label:"Laura Hird"
				},
				{
					type:"tableBtn",
					rel:"author9",
					label:"John Lucas"
				},
				{
					type:"tableBtn",
					rel:"author10",
					label:"Chibundu Onuzo"
				},
				{
					type:"tableBtn",
					rel:"author11",
					label:"Philippa Perry"
				},
				{
					type:"tableBtn",
					rel:"author12",
					label:"Michele Roberts"
				},
				{
					type:"tableBtn",
					rel:"author13",
					label:"Andrew Simms"
				}
			]
		},
			{
				type:"detail",
				id:"author1",
				name:"Buchan",
				elements:
				[
					{
						type:"sheetHL",
						text:"Elizabeth Buchan"
					},
					{
						type:"sheetImg",
						src:"img_elizabethBuchan.jpg"
					},
					{
						type:"sheetCopy",
						text:"Elizabeth Buchan began her career as a blurb writer at Penguin Books after graduating from the University of Kent with a double degree in English and History. She moved on to become a fiction editor at Random House before leaving to write full time. Her novels include the prizewinning ‘Light of the Moon’ and ’Consider the Lily’ – reviewed in the Independent as ‘a gorgeously well written tale: funny, sad and sophisticated’. A subsequent novel, ‘Revenge of the Middle-Aged Woman’ became an international bestseller and was made into a CBS Primetime Drama. This was followed by several other novels, including ‘The Second Wife’, ‘Separate Beds’ and ‘Daughters’. She has just finished ‘A Thousand Little Lies’,  a novel about the SOE operating in Denmark during the Second World War.<br/><br/>Elizabeth Buchan’s short stories are broadcast on BBC Radio 4 and published in magazines. She reviews for the Sunday Times, and has chaired the Betty Trask and Desmond Elliot literary prizes, and also been a judge for the Whitbread (now Costa) awards. She is a patron of the Guildford Book Festival and of The National Academy of Writing."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/elizabeth-buchan/"
					}
				]
			},
			{
				type:"detail",
				id:"author2",
				name:"Caldwell",
				elements:
				[
					{
						type:"sheetHL",
						text:"Lucy Caldwell"
					},
					{
						type:"sheetImg",
						src:"img_lucyCaldwell.jpg"
					},
					{
						type:"sheetCopy",
						text:"Lucy Caldwell was born in Belfast in 1981. She has written two novels, Where They Were Missed (2006) and The Meeting Point (2011) which won the Dylan Thomas Prize. Lucy has previously won the Rooney Prize for Irish Literature and was recently shortlisted for the BBC International Short Story Award. She is also an award-winning playwright."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/lucy-caldwell/"
					}
				]
			},
			{
				type:"detail",
				id:"author3",
				name:"Coleman",
				elements:
				[
					{
						type:"sheetHL",
						text:"Rowan Coleman"
					},
					{
						type:"sheetImg",
						src:"img_rowanColeman.jpg"
					},
					{
						type:"sheetCopy",
						text:"Rowan Coleman grew up in Hertfordshire longing to be a writer despite battling with dyslexia. After graduating from Middlesex university she worked in bookselling and publishing for seven years before winning Company Magazine Young Writer of the Year in 2001. Her first novel ‘Growing Up Twice’ was published in 2002.<br/><br/>Rowan has gone on to write twelve novels for adults including the international bestsellers ‘The Accidental Mother’ , ‘The Baby Group’ and ‘The Accidental Wife’ and eight novels for children and teens, including the paranormal adventure novels ‘Nearly Departed’ and ‘Immortal Remains’ under the name Rook Hastings. Her books are published around the world in several different languages. Her latest novel ‘Dearest Rose’ won Festival of Romance Best Romantic Read 2012, and as also been shortlist for the RNA Epic Romantic Novel of the Year. She now lives in Hertfordshire with her husband, and four children and is working on her next novel."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/15/rowan-coleman/"
					}
				]
			},
			{
				type:"detail",
				id:"author4",
				name:"Dare",
				elements:
				[
					{
						type:"sheetHL",
						text:"Abimbola Dare"
					},
					{
						type:"sheetImg",
						src:"img_abimbolaDare.jpg"
					},
					{
						type:"sheetCopy",
						text:"Abimbola Dare commenced her writing career as a blogger in 2006. Her hilarious blog which documented the life of an immigrant learning to adjust to life in the UK soon became one of the most visited blogs in Nigeria at the time. In 2008, she took a maternity break-which essentially became an opportunity for her to write her first Inspirational (christian) novel, ‘The Small Print’. Having sought for, and finding no Christian fiction publisher in the UK, she decided to establish her own company. ‘The Small Print’ was released in 2011 and became one of the best selling e-books in Religious romance genre on Amazon UK-for more than six months.  For a self published author in a relatively unknown genre within the UK, the success of The Small Print was a welcomed surprise and driver for exploring a niche with potential for massive growth. She has written a number of short stories, including the hugely popular, ‘The No-nonsense wife’ which instantly became an internet sensation.  In January 2013, she was nominated as author of the year by the Women4Africa panel, alongside fellow Nigerian author, Chibundu Onuzo. Her second novel, ‘When Broken Chords Sing’, will be released in May, 2013. She has been featured in major newspapers and magazines across Nigeria, and juggles novel writing with working full time for one of the largest publishing firms in the world."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/21/401/"
					}
				]
			},
			{
				type:"detail",
				id:"author5",
				name:"Haig",
				elements:
				[
					{
						type:"sheetHL",
						text:"Matt Haig"
					},
					{
						type:"sheetImg",
						src:"img_mattHaig.jpg"
					},
					{
						type:"sheetCopy",
						text:"Matt Haig was born in Sheffield in 1975. He is the author of novels for both adults and children. His adult novels include the bestsellers ‘The Last Family in England’, the film rights of which were sold to Brad Pitt, and ‘The Radleys’, which was a TV Book Club ‘Best Read’. His novels for children include ‘Shadow Forestwhich’ was a Blue Peter Book of the Year, won a Nestle Gold Medal, and picked up eight regional book awards. His latest children’s novel ‘To Be A Cat’, is about a boy who wakes up one morning in feline form. His works have been translated into over 20 languages. He is currently working on the screenplay for his next adult novel, ‘The Humans’. That novel has received glowing praise from Jeanette Winterson, Joanne Harris, Patrick Ness and SJ Watson, among others. The Guardian summed up his writing as ‘delightfully weird’ and the New York Times called him ‘a writer of great talent’. In 2011 he was named Yorkshire’s Young Achiever in the Arts. He lives in a house in York and a boat in London with his wife and children."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/matt-haig/"
					}
				]
			},
			{
				type:"detail",
				id:"author6",
				name:"Heartfield",
				elements:
				[
					{
						type:"sheetHL",
						text:"Heartfield"
					}/*,
					{
						type:"sheetImg",
						src:"img_andrewSimms.jpg"
					},
					{
						type:"sheetCopy",
						text:"Andrew Simms is the author of several books including the bestselling ‘Tescopoly’. He is a Fellow of nef (the new economics foundation) where he was policy director for many years, trained at the London School of Economics and was described by New Scientist magazine as, ‘a master at joined-up progressive thinking.’ He is also one of the UK’s leading campaigners who coined the term ‘Clone Towns,’ co-authored the groundbreaking ‘Green New Deal’, was one of the original organisers of the campaign to cancel poor country debt, and devised how to mark the day in the year when the world enters ‘ecological debt.’ Andrew lives, runs and rides his bicycle in London where he plans to practice another of his ideas, ‘National Gardening Leave.’ He has witnessed first-hand for more than twenty years failed international efforts to solve critical economic and environmental problems, from extreme poverty to climate change. His new book is the result of his search for something better."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/andrew-simms/"
					}*/
				]
			},
			{
				type:"detail",
				id:"author7",
				name:"Herbert",
				elements:
				[
					{
						type:"sheetHL",
						text:"James Herbert"
					},
					{
						type:"sheetImg",
						src:"img_jamesHerbert.jpg"
					},
					{
						type:"sheetCopy",
						text:"We are happy to announce our keynote speaker: MacMillan’s James Herbert, award winning horror author of ‘Ash’ and ‘The Secret of Crickley Hall’."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/04/presenting-our-keynote-speaker/"
					}
				]
			},
			{
				type:"detail",
				id:"author8",
				name:"Hird",
				elements:
				[
					{
						type:"sheetHL",
						text:"Laura Hird"
					},
					{
						type:"sheetCopy",
						text:"Laura Hird"
					}/*,
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/19/michele-roberts/"
					}*/
				]
			},
			{
				type:"detail",
				id:"author9",
				name:"Lucas",
				elements:
				[
					{
						type:"sheetHL",
						text:"John Lucas"
					}/*,
					{
						type:"sheetImg",
						src:"img_mattHaig.jpg"
					},
					{
						type:"sheetCopy",
						text:"Matt Haig was born in Sheffield in 1975. He is the author of novels for both adults and children. His adult novels include the bestsellers ‘The Last Family in England’, the film rights of which were sold to Brad Pitt, and ‘The Radleys’, which was a TV Book Club ‘Best Read’. His novels for children include ‘Shadow Forestwhich’ was a Blue Peter Book of the Year, won a Nestle Gold Medal, and picked up eight regional book awards. His latest children’s novel ‘To Be A Cat’, is about a boy who wakes up one morning in feline form. His works have been translated into over 20 languages. He is currently working on the screenplay for his next adult novel, ‘The Humans’. That novel has received glowing praise from Jeanette Winterson, Joanne Harris, Patrick Ness and SJ Watson, among others. The Guardian summed up his writing as ‘delightfully weird’ and the New York Times called him ‘a writer of great talent’. In 2011 he was named Yorkshire’s Young Achiever in the Arts. He lives in a house in York and a boat in London with his wife and children."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/matt-haig/"
					}*/
				]
			},
			{
				type:"detail",
				id:"author10",
				name:"Onuzo",
				elements:
				[
					{
						type:"sheetHL",
						text:"Chibundu Onuzo"
					},
					{
						type:"sheetImg",
						src:"img_chibunduOnuzo.jpg"
					},
					{
						type:"sheetCopy",
						text:"Chibundu Onuzo was born in Nigeria in 1991 and is the youngest of four children. She was signed by Faber at the age of 19 and her first novel ‘The Spider King’s Daughter’ was published in March 2012 and has gone on to be longlisted for the Desmond Elliott Prize and shortlisted for the Dylan Thomas Prize. Chibundu is currently doing an Msc in Public Policy at University College London. When not writing, Chibundu can be found playing the piano or singing."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/20/chibundu-onuzo/"
					}
				]
			},
			{
				type:"detail",
				id:"author11",
				name:"Perry",
				elements:
				[
					{
						type:"sheetHL",
						text:"Philippa Perry"
					},
					{
						type:"sheetImg",
						src:"img_philippaPerry.jpg"
					},
					{
						type:"sheetCopy",
						text:"Ex-psychotherapist Philippa Perry is an author, journalist and broadcaster. Amongst other publications she has written for The Guardian, The Observer, Time Out, The Times and has a regular column in Psychologies Magazine. She also contributes to the BBC Culture Show and has appeared on Women’s Hour on radio 4. She is also a regular guest on the ResonanceFM show, Group Therapy. Her graphic novel ‘Couch Fiction’ was published by Palgrave Macmillan in 2010. In 2012, her next book ‘How to Stay Sane’ was brought out by Pan Macmillan as part of The School of Life series, edited by Alain de Botton. She is married to the artist, Turner Prize winner and broadcaster, Grayson Perry.<br/><br/>Philippa has the knack of showing you what is possible and in her talk illustrated with images, anecdotes and citations Philippa Perry will share with us her creative process that produced her best selling self-help book ‘How to Stay Sane’."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/19/philippa-perry/"
					}
				]
			},
			{
				type:"detail",
				id:"author12",
				name:"Roberts",
				elements:
				[
					{
						type:"sheetHL",
						text:"Michele Roberts"
					},
					{
						type:"sheetCopy",
						text:"Michèle Roberts is the author of twelve highly acclaimed novels, including ‘The Looking Glass’ and ‘Daughters of the House’ which won the WHSmith Literary Award and was shortlisted for the Booker Prize. Her memoir ‘Paper Houses’ was BBC Radio 4′s Book of the Week in June 2007. She has also published poetry and short stories, most recently collected in ‘Mud – stories of sex and love’ (2010). Her latest novel ‘Ignorance’ (2012) will be out in paperback in March 2013 so please have  Half-English and half-French, Michèle Roberts lives in London and in the Mayenne, France. She is Emeritus Professor of Creative Writing at the University of East Anglia.<br/><br/>”Michèle Roberts is one of those writers descended perhaps as much from Monet and Debussy as Virginia Woolf or Keats… To read a book by her is to savour colour, sound, taste, texture and touch as never before.” The Times"
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/19/michele-roberts/"
					}
				]
			},
			{
				type:"detail",
				id:"author13",
				name:"Simms",
				elements:
				[
					{
						type:"sheetHL",
						text:"Andrew Simms"
					},
					{
						type:"sheetImg",
						src:"img_andrewSimms.jpg"
					},
					{
						type:"sheetCopy",
						text:"Andrew Simms is the author of several books including the bestselling ‘Tescopoly’. He is a Fellow of nef (the new economics foundation) where he was policy director for many years, trained at the London School of Economics and was described by New Scientist magazine as, ‘a master at joined-up progressive thinking.’ He is also one of the UK’s leading campaigners who coined the term ‘Clone Towns,’ co-authored the groundbreaking ‘Green New Deal’, was one of the original organisers of the campaign to cancel poor country debt, and devised how to mark the day in the year when the world enters ‘ecological debt.’ Andrew lives, runs and rides his bicycle in London where he plans to practice another of his ideas, ‘National Gardening Leave.’ He has witnessed first-hand for more than twenty years failed international efforts to solve critical economic and environmental problems, from extreme poverty to climate change. His new book is the result of his search for something better."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/andrew-simms/"
					}
				]
			},
		
		
		// workshops
		{
			type:"list",
			id:"workshops",
			name:"Workshops",
			elements:
			[
				{
					type:"tableBtn",
					rel:"workshop1",
					label:"Faber Academy"
				},
				{
					type:"tableBtn",
					rel:"workshop2",
					label:"Speed-pitch"
				},
				{
					type:"tableBtn",
					rel:"workshop3",
					label:"Small Publishing Forum"
				},
				{
					type:"tableBtn",
					rel:"workshop4",
					label:"Poetry Slam"
				},
				{
					type:"tableBtn",
					rel:"workshop5",
					label:"Flash Fiction"
				},
				{
					type:"tableBtn",
					rel:"workshop6",
					label:"Gala"
				}
			]
		},	
			{
				type:"detail",
				id:"workshop1",
				name:"Faber Academy",
				elements:
				[
					{
						type:"sheetHL",
						text:"Faber Academy"
					},
					{
						type:"sheetImg",
						src:"img_faberAcademy.jpg"
					},
					{
						type:"sheetCopy",
						text:"On Wednesday the 27th of March, the second day of North London Literary Festival, Faber Academy will chair a panel on how to get published. We have had a look at how it all started as a warm up for this exciting event. Faber How to Get Published panel will consist of Clare Conville (Literary Agent at Conville & Walsh), Angus Cargill (Senior Editor, Faber & Faber) and will be chaired by Richard Skinner (Author and Director of Fiction Programme, Faber Academy)."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/faber-and-faber/"
					}
				]
			},
			{
				type:"detail",
				id:"workshop2",
				name:"Speed-pitch",
				elements:
				[
					{
						type:"sheetHL",
						text:"Speed-pitch"
					},
					{
						type:"sheetImg",
						src:"img_lba.png"
					},
					{
						type:"sheetCopy",
						text:"The literary Agency LBA was established by Luigi Bonomi and Amanda Preston in March 2005 and it has one of the most high profile client lists in the business.  They represent a large number of very successful authors and indeed celebrities including Richard Hammond, James May, Dr Alice Roberts, Richard Madeley and Judy Finnigan to name a few. They also represent a large number of Sunday Times bestselling fiction authors including Simon Kernick, Josephine Cox, Karen Swan, Alan Titchmarsh, Sam Christer, Amanda Brooke and Fern Britton."
					},
					{
						type:"linkBtn",
						label:"More ...",
						extOpen:true,
						url:"http://northlondonlitfest.com/2013/02/18/speed-pitching-with-lba/"
					}
				]
			},
			{
				type:"detail",
				id:"workshop3",
				name:"Publishing Forum",
				elements:
				[
					{
						type:"sheetHL",
						text:"Small Publishing Forum"
					},
					{
						type:"sheetCopy",
						text:"Small Publishing Forum"
					}
				]
			},
			{
				type:"detail",
				id:"workshop4",
				name:"Poetry Slam",
				elements:
				[
					{
						type:"sheetHL",
						text:"Poetry Slam"
					},
					{
						type:"sheetCopy",
						text:"Poetry Slam"
					}
				]
			},
			{
				type:"detail",
				id:"workshop5",
				name:"Flash Fiction",
				elements:
				[
					{
						type:"sheetHL",
						text:"Flash Fiction"
					},
					{
						type:"sheetCopy",
						text:"Flash Fiction"
					}
				]
			},
			{
				type:"detail",
				id:"workshop6",
				name:"Gala",
				elements:
				[
					{
						type:"sheetHL",
						text:"Gala"
					},
					{
						type:"sheetCopy",
						text:"Turning Facts into Narratives: A Gala evening showcasing faculty members’ recent publications: featuring a screening and a panel discussion, embracing fiction, drama and non-fiction, and with subjects ranging from sex, friendship,the Second World War and Noël Coward to Nagasaki and Rebecca West, this event focuses on how facts, dates, figures can be turned into flowing narratives.  The Gala authors are: Feona Attwood, Josie Barnard, Maggie Butt, James Martin Charlton, Lorna Gibb and David Rain."
					}
				]
			},
		
		
		// latest updates
		{
			type:"detail",
			id:"latestUpdates",
			name:"Updates",
			elements:
			[
				{
					type:"sheetHL",
					text:"Latest updates"
				},
				{
					type:"sheetCopy",
					text:"Latest updates"
				},
				{
					type:"linkBtn",
					label:"Website",
					extOpen:true,
					url:"http://northlondonlitfest.com/"
				},
				{
					type:"linkBtn",
					label:"Twitter #nllf13",
					extOpen:true,
					url:"https://twitter.com/search?q=%23nllf13&src=typd"
				}
			]
		},
		
		
		// directions
		{
			type:"detail",
			id:"directions",
			name:"Directions",
			elements:
			[
				{
					type:"sheetHL",
					text:"Directions",
				},
				{
					type:"sheetMap",
					fallbackSrc:"img_directionsMap.jpg",
					zoom:"12", // 0-18
					showDevicePosition:true,
					styles:
					{
						width:"280px",
						height:"300px",
					},
					markers:
					[
						{
							title:"Middlesex University",
							lat:"51.589949",
							lon:"-0.228975",
							desc:"This is a little test description for the marker MDX UNI"
						}
					]
				}
			]
		},
		
			
		// north london
		{
			type:"detail",
			id:"northLondon",
			name:"North London",
			elements:
			[
				{
					type:"sheetHL",
					text:"North London",
				},
				{
					type:"sheetMap",
					zoom:"15", // 0-18
					showDevicePosition:true,
					styles:
					{
						width:"280px",
						height:"300px",
					},
					markers:
					[
						{
							title:"Middlesex University",
							lat:"51.589949",
							lon:"-0.228975",
							desc:"This is a little test description for the marker MDX UNI"
						},
						{
							title:"Kaifeng",
							lat:"51.589896",
							lon:"-0.224158",
							desc:"This is a little test description for the marker Kaifeng"
						},
						{
							title:"The Claddagh Ring",
							lat:"51.590183",
							lon:"-0.226078",
							desc:"This is a little test description for the marker Claddagh Ring"
						}
					]
				}
			]
		}
	],
	
	
	
	
	
	
	
	
	
	
	
	
	
	//////////////
	// instructions/templates to parse the content:
	// ONLY TOUCH WHEN YOU NEED TO ADD OR CHANGE TEMPLATES AND YOU KNOW WHAT YOU ARE DOING!!
	//////////////
	unparsedElements:[],
	
	parse:function()
	{
		/////////////////
		// interpret content
		/////////////////

		// create each contentSheet
		for(i = 0; i < this.contentSheets.length; i++)
		{
			var inetNeeded = false;
			var cS = this.contentSheets[i];

			var div = new Element("div", {"id":cS.id, "name":cS.name, "class":"contentSheet"});
			
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
				
				if(el.inetNeeded)
				{
					div.inetNeeded = true;
				}
				
				div.appendChild(el);
			}
			
			
			// perform contentsheet type specific tasks AFTER creating elements
			switch(cS.type)
			{
				case "list":
					// add class tableBtnAlt to every second list element
					var tableBtns = div.getChildren(".tableBtn");
					
					for(k = 0; k < tableBtns.length; k++)
					{
						if(k % 2 > 0)
						{
							tableBtns[k].addClass("tableBtnAlt");
						}
					}
					
					// set background-color
					div.addClass("contentSheetList");
					break;
				
				case "detail":
					var hls = div.getChildren(".sheetHL");
					var imgs = div.getChildren(".sheetImg");
					
					if(hls.length > 0 || imgs.length > 0)
					{
						var sheetHeader = new Element("div", {"class":"sheetHeader"});
						
						sheetHeader.inject(div, 'top');
						
						if(hls.length > 0)
						{
							hls[0].inject(sheetHeader);
						}
						
						if(imgs.length > 0)
						{
							imgs[0].inject(sheetHeader);
						}
					}
					
					div.getChildren()[div.getChildren().length - 1].set("styles", {"margin-bottom":"50px"});
					
					div.addClass("contentSheetDetail");
					break;
				
				default:
					break;
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
				el.set({"rel":cSEl.rel, "class":"homeBtnContainer", "onclick":"navigateTo(this.rel)"});
				el.innerHTML = '<div class="homeBtn">' + cSEl.sublabel + '</div><div class="homeBtnLabel">' + cSEl.label + '</div>';
				
				if(cSEl.url)
				{
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
						
						el.set({"target":"about:blank"});
					}
					
					el.set({"onclick":"", "href":url});
				}
				break;

			case "tableBtn":
				el = document.createElement("a");
				el.set({"rel":cSEl.rel, "class":"tableBtn", "onclick":"navigateTo(this.rel)"});
				el.innerHTML = cSEl.label;
				
				if(cSEl.url)
				{
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
						
						el.set({"target":"about:blank"});
					}
					
					el.set({"onclick":"", "href":url});
				}				
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
				
				if(cSEl.extOpen)
				{
					el.set({"target":"about:blank"});
				}
				
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
				// create the google map
				if(gmapApi && $(cSEl.placeholderId))
				{
					// use placeholder
					el = $(cSEl.placeholderId);	
					
					// create the map				
					el.set({"class":"sheetMap", "frameborder":"0", "scrolling":"no", "marginheight":"0", "marginwidth":"0"});
					el.set({styles:cSEl.styles});
					el.innerHTML = "Map loading ...";
					el.inetNeeded = true;
					var mapOptions = 
					{
					    zoom: parseInt(cSEl.zoom),
					    center: new google.maps.LatLng(51.589949, -0.228975),
					    mapTypeId: google.maps.MapTypeId.ROADMAP,
						disableDefaultUI: true,
						zoomControl: false,
						overviewMapControl: false,
						streetViewControl: true
					}

					var map = new google.maps.Map(el, mapOptions);
					el.map = map;
					map.info = new google.maps.InfoWindow();
					
					// set the markers
					for(var i = 0; i < cSEl.markers.length; i++)
					{
						var m = cSEl.markers[i];
						var marker = new google.maps.Marker({position: new google.maps.LatLng(m.lat, m.lon), map: map, title: m.title});
						marker.titleDesc = "<div style='font-size:12px; width:210px;'><b>" + m.title + "</b><br/>" + m.desc + "</div>";
						google.maps.event.addListener(marker, 'click', function() {map.info.setOptions({content:this.titleDesc, maxWidth:251}); map.info.open(map, this);});
					}
					
					// add device position marker
					if(cSEl.showDevicePosition)
					{
						if(!pos)
						{
							pos = new google.maps.LatLng(0, 0);
						}
						
						var deviceMarkerText = "<div style='font-size:12px; width:210px;'><b>You are here!</b></div>";
						map.deviceMarker = new google.maps.Marker({position: pos, map: map, title: "You are here.", icon: "deviceLocationPointer.png"});
						google.maps.event.addListener(map.deviceMarker, 'click', function() {map.info.setOptions({content:deviceMarkerText, maxWidth:251}); map.info.open(map, this);});
					}
					
					this.unparsedElements.erase(cSEl);
				}
				// create a placeholder
				else if(!this.unparsedElements.contains(cSEl))
				{
					var id = "unparsedElement_0"; 
					if(this.unparsedElements.length > 0)
					{
						var lastPlaceholderId = this.unparsedElements[this.unparsedElements.length - 1].placeholderId;
						var newId = lastPlaceholderId.substr(lastPlaceholderId.indexOf("_") + 1);
						newId++;
						id = "unparsedElement_" + newId;
					}

					el = document.createElement("div");
					el.set({"class":"sheetMissingFeature"});
					el.id = id;
					el.inetNeeded = true;
					el.placeholderFor = cSEl;

					if(cSEl.fallbackSrc)
					{
						el.innerHTML = "Map deactivated<br/><img src='" + cSEl.fallbackSrc + "' />";
					}
					else
					{
						el.innerHTML = "Map deactivated";
					}
					
					cSEl.placeholderId = el.id;
					this.unparsedElements.push(cSEl);
				}
				else
				{
					el = $(cSEl.placeholderId);
				}
				
				break;
				
			case "iframe":
				el = document.createElement("iframe");
				el.set({"width":cSEl.width, "height":cSEl.height, "frameborder":"0", "scrolling":"no", "marginheight":"0", "marginwidth":"0"});
				el.src = cSEl.src.replace(/&amp;/g, "&");
				el.inetNeeded = true;
				break;
		}
		
		// apply optional css styles to sub element
		if(el && cSEl.styles)
		{
			el.set({styles:cSEl.styles});
		}
		
		return el;
	}
})



















