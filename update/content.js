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
		day:"26",		// e.g. 04
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
					label:"Special Events",
					sublabel:"E"
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
					label:"4:45pm: Flash Fiction"
				},
				{
					type:"tableBtn",
					rel:"day1_8",
					label:"5:15pm: Michele Roberts"
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
						text:"How to get two minutes face to face with a top literary agent.<br/><br/>The event begins with a workshop from the Luigi Bonomiagents, giving guidance on presentation, what works, what doesn’t and the areas you might be able to take your idea in. There will also be a chance to ask general questions about the role of an agent and the industry in general.<br/><br/>Any specific questions about your piece will be addressed in the face to face.<br/><br/>What you will need:<br/>- One sheet of A4 with an extract from your piece, roughly 200 – 300 words<br/>- One sheet outlining the idea – again 200 – 300 words<br/>- Something to edit your piece on, a laptop, tablet or mobile BUT the agent will only read paper. A printer will be available.<br/>- Several copies of your contact details, business cards are good, but a printed piece of paper is acceptable.<br/>- Bring your manners with you. Getting this to run smoothly will require you to be polite if you are rejected, and to leave the table when the bell rings.<br/><br/>For full details of how to book your place on the workshop and speed pitch, contact Richard on the North London Literary Festival student team on 07830 378071 or via email, rw443@live.mdx.ac.uk.<br/>To read about the agents you will be pitching to, click on Speed-pitch website."
					},
					{
						type:"linkBtn",
						label:"rw443@live.mdx.ac.uk",
						extOpen:true,
						url:"mailto:rw443@live.mdx.ac.uk"
					},
					{
						type:"linkBtn",
						label:"Speed-pitch website",
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
					},
					{
						type:"sheetImg",
						src:"img_jamesHeartfield.jpg",
						styles:
						{
							marginTop:"30px"
						}
					},
					{
						type:"sheetCopy",
						text:"James Heartfield writes about the things that make him cross, and that make him laugh.<br/><br/>In 2005 he wrote Let's Build! Why we need five million new homes - a warning about the burgeoning housing crisis that sadly was ignored. He also exposed the hype around 'creative Britain'. In 2010 he wrote Green Capitalism - about the snake-oil salesmen that scare us into giving them money.<br/><br/>More recently James has been working on historical research, and published The Aborigines' Protection Society 1836-1909 with Hurst in 2011, and an Unpatriotic History of the Second World War with Zer0 Press last year.<br/><br/>His European Union and the End of Politics is published by Zer0 this May, and he is working on a history of the British and Foreign Anti-Slavery Society for Hurst.<br/><br/>James teaches at Arcadia University, and also at Queen Mary's University of London"
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
						text:"Small Publishing Forum – Books and Beyond"
					},
					{
						type:"sheetImg",
						src:"img_smallPubForum.jpg"
					},
					{
						type:"sheetCopy",
						text:"The publishing industry is in a blender as newspapers and books go online, and writers swerve traditional routes to print to go their own way. How does the traditional paper-printed word stay in the mix? How do you find your place in the fast changing world of the printed word?<br/><br/>The Small Publisher Platform will look at the way people from across the industry are responding to the challenge; the problems they encounter, the success they have and how you can be part of the process.<br/><br/>Lucy Bagnall is a leading light in the industry, both successfully published and influential in the Literary Salon scene. She specializes in supporting ‘cross platform’ literature with her colleagues at the Literary Platform.<br/><br/>Kit Caless and Gary Budden from Influx Press and Adele Ward from Ward & Woodward Publishers have met with success in the industry while keeping things small and the Big Green Book Company – Woodgreen’s best independent bookshop; are looking to extend their shelving into cyberspace, while filling them with content from authors they encourage. The discussion will be chaired by Middlesex’s very own Josie Barnard who will keep things to the point; and make a few points herself."
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
						text:"4:45pm: Flash Fiction"
					},
					{
						type:"sheetImg",
						src:"img_flashFiction.jpg"
					},
					{
						type:"sheetCopy",
						text:"Flash Fiction is an exciting event taking place on the 26th March 2013; all students and the public are invited to join us at 4:45pm in the afternoon for an array of short fiction. Held in the Rickett Quadrangle in the College Building at Middlesex University’s Hendon Campus you can listen to inspired writers taking the plunge and reading some of their best fiction.<br/><br/>There are only 10-12 places available with each reading lasting between 5-7 minutes. We are looking for a maximum of 300 words so keep it short but have fun with it; if you have an interest in writing and want to release your creative flare then get in touch and take your opportunity. The event will be compered by Helen Bagnall from Salon and The Literary Platform.<br/>You never know what you can find; there could be everything from romance to horror or you could even hear something completely new."
					},
					{
						type:"linkBtn",
						label:"Salon",
						extOpen:true,
						url:"http://www.salon-london.com"
					},
					{
						type:"linkBtn",
						label:"The Literary Platform",
						extOpen:true,
						url:"http://www.theliteraryplatform.com"
					},
					{
						type:"sheetCopy",
						text:"So come along because you may even stumble upon the next famous fiction writer or it even might be you!<br/><br/>For full details of how to book your place on the Flash Fiction stage contact Lucy on the North London Literary Festival student team by ld454@live.mdx.ac.uk."
					},
					{
						type:"linkBtn",
						label:"ld454@live.mdx.ac.uk",
						extOpen:true,
						url:"mailto:ld454@live.mdx.ac.uk"
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
				type:"list",
				id:"day1_9",
				name:"Gala",
				elements:
				[
					{
						type:"tableBtn",
						rel:"gala_0",
						label:"Gala"
					},
					{
						type:"tableBtn",
						rel:"gala_1",
						label:"Feona Attwood"
					},
					{
						type:"tableBtn",
						rel:"gala_2",
						label:"Josie Barnard"
					},
					{
						type:"tableBtn",
						rel:"gala_3",
						label:"Maggie Butt"
					},
					{
						type:"tableBtn",
						rel:"gala_4",
						label:"James Charlton"
					},
					{
						type:"tableBtn",
						rel:"gala_5",
						label:"Lorna Gibb"
					},
					{
						type:"tableBtn",
						rel:"gala_6",
						label:"David Rain"
					}
				]
			},
				// gala
				{
					type:"detail",
					id:"gala_0",
					name:"Gala",
					elements:
					[
						{
							type:"sheetHL",
							text:"6pm: Gala"
						},
						{
							type:"sheetImg",
							src:"img_gala.jpg"
						},
						{
							type:"sheetCopy",
							text:"Turning Facts into Narratives: A Gala evening showcasing faculty members’ recent publications: featuring a screening and a panel discussion, embracing fiction, drama and non-fiction, and with subjects ranging from sex, friendship,the Second World War and Noël Coward to Nagasaki and Rebecca West, this event focuses on how facts, dates, figures can be turned into flowing narratives.  The Gala authors are: Feona Attwood, Josie Barnard, Maggie Butt, James Martin Charlton, Lorna Gibb and David Rain."
						}
					]
				},
				{
					type:"detail",
					id:"gala_1",
					name:"Attwood",
					elements:
					[
						{
							type:"sheetHL",
							text:"Feona Attwood"
						},
						{
							type:"sheetImg",
							src:"img_feonaAttwood.jpg"
						},
						{
							type:"sheetCopy",
							text:"Feona Attwood is a Professor in the Media Department at Middlesex University, UK.<br/><br/>Her research is in the area of sex in contemporary culture; and in particular, in onscenity; sexualization; sexual cultures; new technologies, identity and the body; and controversial media.<br/><br/>She is the editor of ‘Mainstreaming Sex: The Sexualization of Western Culture’ (2009), ‘porn.com: Making Sense of Online Pornography’ (2010) and (with Vincent Campbell, I.Q. Hunter and Sharon Lockyer) ’Controversial Images’ (2012) and the co-editor of journal special issues on Controversial Images (with Sharon Lockyer, ‘Popular Communication’, 2009), Researching and Teaching Sexually Explicit Media (with I.Q. Hunter, ‘Sexualities’, 2009), and Investigating Young People’s Sexual Cultures (with Clarissa Smith, ‘Sex Education’, 2011).<br/><br/>Her recent publications have focused on online culture, aesthetics, sex and the media, and public engagement.<br/><br/>She is leading an international research network on onscenity, funded by the AHRC and is at the start of an AHRC Fellowship project. Her current book project is ‘Sex, Media Technology’."
						}
					]
				},
				{
					type:"detail",
					id:"gala_2",
					name:"Barnard",
					elements:
					[
						{
							type:"sheetHL",
							text:"Josie Barnard"
						},
						{
							type:"sheetImg",
							src:"img_josieBarnard.jpg"
						},
						{
							type:"sheetCopy",
							text:"Josie Barnard is the author of five books, ranging from her recent creative non-fiction ‘The Book of Friendship’ (‘fascinating’, Guardian; ‘discerning’, Observer) to the novels ‘Poker Face’, which won the Betty Trask Award and was made into a Film Four short, and ‘The Pleasure Dome’, which was described by Gavin Turk in Tatler as, ‘A sexy new novel’.  She has produced/presented radio strands, features and programmes for the BBC (including co-presenting a GLR strand with Mariella Frostrup). Barnard has worked as an editor and journalist, writing features and reviews for newspapers and magazines including the Guardian, the Telegraph and the TLS.  Now Senior Lecturer in Creative Writing with Journalism here at Middlesex University, she has spoken at festivals including Cheltenham and Dartington. You can follow Josie on Twitter: @josiebarnard<br/><br/>Copyright for Josie’s Photo: Heather McDonough"
						},
						{
							type:"linkBtn",
							label:"@josiebarnard",
							extOpen:true,
							url:"https://twitter.com/josiebarnard"
						}
					]
				},
				{
					type:"detail",
					id:"gala_3",
					name:"Butt",
					elements:
					[
						{
							type:"sheetHL",
							text:"Maggie Butt"
						},
						{
							type:"sheetImg",
							src:"img_maggieButt.jpg"
						},
						{
							type:"sheetCopy",
							text:"Maggie Butt’s publications include four poetry collections.  Her latest book ‘Sancti Clandestini – Undercover Saints’, is sumptuously illustrated by staff and students of Middlesex University’s BA Illustration programme. An exhibition to accompany the book was held at The Poetry Cafe in Covent Garden.<br/>Maggie’s poetry is widely published in international magazines and has escaped the page onto the internet, choreography, BBC Radio 4, readings, festivals, and schools.<br/><br/>Her first full collection, ‘Lipstick‘, was published in 2007,  a collection of short poems, ‘petite’, in 2010 and ‘Ally Pally Prison Camp’, the story of 3,000 civilians imprisoned at Alexandra Palace during the First World War, in 2011.  Her edited collection of essays: ‘Story The Heart of the Matter’ was published in 2007."
						},
						{
							type:"linkBtn",
							label:"Lipstick",
							extOpen:true,
							url:"http://www.maggiebutt.co.uk/lipstick/"
						},
						{
							type:"sheetCopy",
							text:"Maggie returned to poetry after a career spanning many other forms of writing. After an English degree she became a newspaper reporter, moving to BBC TV as a documentary writer/producer/director.<br/><br/>She is a Deputy Dean at Middlesex University, London, England, where she taught on the Creative and Media Writing degree. She has been Chair of the Subject Association for Creative Writing and recently written the new Creative Writing A Level.<br/><br/>Maggie has a PhD in creative writing from Cardiff University and is a University Teaching Fellow and University Orator."
						}
					]
				},
				{
					type:"detail",
					id:"gala_4",
					name:"Charlton",
					elements:
					[
						{
							type:"sheetHL",
							text:"James Charlton"
						},
						{
							type:"sheetImg",
							src:"img_jamesMartinCharlton.jpg"
						},
						{
							type:"sheetCopy",
							text:"James Martin Charlton has written for stage, television and screen. His plays include Fat Souls [winner of International Playwriting Festival, nominated Writers Guild Best Fringe Play], ‘Coming Up’ (Warehouse Theatre, Croydon); an adaptation of ‘The Pilgrim’s Progress’ for the RSC; ‘ecstasy + GRACE’ (Finborough Theatre), ‘The World and his Wife, I Really Must be Getting Off’ (White Bear), Battis Boy (Paines Plough at Trafalgar Studios), ‘Fellow Creature’ (Miniaturists at Arcola) and ‘Coward’ (Just Some Theatre); ‘Coward’ will be released as an audio drama in early 2013.<br/><br/>He wrote & directed the short films ‘Apeth’ (2007) & Academic (2011). He lectures on Scriptwriting at Middlesex University (both BA and Postgraduate levels) and Birkbeck College."
						}
					]
				},
				{
					type:"detail",
					id:"gala_5",
					name:"Gibb",
					elements:
					[
						{
							type:"sheetHL",
							text:"Lorna Gibb"
						},
						{
							type:"sheetImg",
							src:"img_lornaGibb.jpg"
						},
						{
							type:"sheetCopy",
							text:"Lorna was born in Bellshill, Scotland and worked as a dancer in Italy and the UK before going to University in London. She took her PhD at Edinburgh and has subsequently lectured in various countries including Finland, the former USSR, the Netherlands, Austria and the Middle East. Her first book Lady Hester was published in 2005. Lorna loves the opera, good food, movies, a wide variety of music from Tori Amos to Puccini and Jan Garbarek and is a member of the Royal Overseas League. She has watched the soap operaNeighbours since she was a student with frequent gaps for travelling. She now lives in London with her Dutch-Kiwi husband, a Spanish car and several cats, from Qatar, Italy and the UK."
						}
					]
				},
				{
					type:"detail",
					id:"gala_6",
					name:"Rain",
					elements:
					[
						{
							type:"sheetHL",
							text:"David Rain"
						},
						{
							type:"sheetImg",
							src:"img_davidRain.jpg"
						},
						{
							type:"sheetCopy",
							text:"With Sophie Tucker belting from his hand-crank phonograph and a circle of boarding-school admirers laughing uproariously around him, we first meet Ben “Trouble” Pinkerton through the amazed eyes of his orphaned schoolmate Woodley Sharpless – and ever after, though their paths at times diverge, their lives continue to intersect.<br/><br/>Trouble, the son of Lieutenant Benjamin Pinkerton and the geisha Madame Butterfly, is being raised in the United States, by (now) Senator Pinkerton and his upper-class wife, Kate. From early on, Trouble’s privileged upbringing and rebellious charisma combine to involve him in many important events of the twentieth century: from Greenwich Village in the roaring twenties, through WPA work during the Great Depression; from secret government work outside Los Alamos, to a revelation on a Nagasaki hillside by the sea. Woodley Sharpless witnesses these events, too – along with plenty of Pinkerton family drama.<br/><br/>David Rain’s first novel is a high-wire act of sustained invention – as playful as it is ambitious, as moving as it is theatrical, and as historically resonant as it is evocative of the powerful bonds of friendship and of love."
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
					label:"12pm: Laura Hird"
				},
				{
					type:"tableBtn",
					rel:"day2_2",
					label:"1pm: Abimbola Dare"
				},
				/*{
					type:"tableBtn",
					rel:"day2_3",
					label:"Small Publishing Forum"
				},*/
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
					label:"4:30pm: Poetry Slam"
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
						text:"12pm: Laura Hird"
					},
					{
						type:"sheetImg",
						src:"img_lauraHird.jpg"
					},
					{
						type:"sheetCopy",
						text:"Laura Hird is the award-winning author of the collections, Nail and Other Stories(Canongate, 1997) and Hope and Other Urban Tales (Canongate, 2006) and novel,Born Free (Canongate 2007) which was nominated for the Whitbread and Orange Prizes. Her short stories have been published in numerous magazines and anthologies internationally and her work translated into a number of European languages. A book based around her mother's letters, Dear Laura was published by Canongate in March 2007. A regular tutor for the Arvon Foundation and the Scottish Book Trust , she also teaches creative writing in secondary schools and colleges throughout the UK."
					}
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
						text:"Small Publishing Forum – Books and Beyond"
					},
					{
						type:"sheetImg",
						src:"img_smallPubForum.jpg"
					},
					{
						type:"sheetCopy",
						text:"The publishing industry is in a blender as newspapers and books go online, and writers swerve traditional routes to print to go their own way. How does the traditional paper-printed word stay in the mix? How do you find your place in the fast changing world of the printed word?<br/><br/>The Small Publisher Platform will look at the way people from across the industry are responding to the challenge; the problems they encounter, the success they have and how you can be part of the process.<br/><br/>Lucy Bagnall is a leading light in the industry, both successfully published and influential in the Literary Salon scene. She specializes in supporting ‘cross platform’ literature with her colleagues at the Literary Platform.<br/><br/>Kit Caless and Gary Budden from Influx Press and Adele Ward from Ward & Woodward Publishers have met with success in the industry while keeping things small and the Big Green Book Company – Woodgreen’s best independent bookshop; are looking to extend their shelving into cyberspace, while filling them with content from authors they encourage. The discussion will be chaired by Middlesex’s very own Josie Barnard who will keep things to the point; and make a few points herself."
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
						src:"img_johnLucas.jpg"
					},
					{
						type:"sheetCopy",
						text:"John Lucas was born in Whitechapel, east London, in 1978. He was brought up nearby in the borough of Hackney, and continues to live in the area. The youngest of six boys, he comes from a large family of writers and artists, although he did not immediately follow the same path. He took a degree in Creative Writing at Middlesex University, graduating in 2007and two years ago left his job to try and concentrate on his writing, supporting himself by working in an independent Hackney book shop.<br/><br/>In Turf, John drew upon his own experiences of growing up in Hackney, and on the numerous stories of young gang violence in the press. He is currently working on his second novel."
					},
					{
						type:"sheetImg",
						src:"img_mattHaig.jpg",
						styles:
						{
							marginTop:"30px"
						}
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
						text:"4:30pm: Poetry Slam"
					},
					{
						type:"sheetImg",
						src:"img_poetrySlam.jpg"
					},
					{
						type:"sheetCopy",
						text:"‘Do not be afraid of your own words!’<br/><br/>(Slammer is the one who transforms himself on the stage into his own words.)<br/><br/><br/>Poetry slam is a verbal battle between poets, all trying to outdo each other. It is open to anyone who thinks that has something to say and finds the courage to perform their own texts in front of an audience. The rules are simple: the contestants have three minutes to present their prepared (or completely improvised) pieces, and thus compete for the favour of the judges, that are chosen from the audience present. The competition puts emphasis on good imagery and original presentation.<br/><br/>The contestants must not use any props, costumes or musical instruments. Victory depends on each contestant to take their courage and words in both hands and come up with the original topic, content and form. Spontaneous, enthusiastic and critical reactions of an audience are the best feedback, and often even inconspicuous influence of the judges.<br/><br/>Unusual verses, unconventional recitations and contact with the audience defeats all the other boring literary parties. Love or social poetry, bittersweet personal confessions, or comic pieces – our poetry slam offers you all this and more! It is one of the things that makes our North London Literary festival special."
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
					type:"sheetImg",
					src:"img_twiction.jpg"
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
					rel:"gala_1",
					label:"Feona Attwood"
				},
				{
					type:"tableBtn",
					rel:"gala_2",
					label:"Josie Barnard"
				},
				{
					type:"tableBtn",
					rel:"author1",
					label:"Elizabeth Buchan"
				},
				{
					type:"tableBtn",
					rel:"gala_3",
					label:"Maggie Butt"
				},
				{
					type:"tableBtn",
					rel:"author2",
					label:"Lucy Caldwell"
				},
				{
					type:"tableBtn",
					rel:"gala_4",
					label:"James Charlton"
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
					rel:"gala_5",
					label:"Lorna Gibb"
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
					rel:"gala_6",
					label:"David Rain"
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
						text:"James Heartfield"
					},
					{
						type:"sheetImg",
						src:"img_jamesHeartfield.jpg"
					},
					{
						type:"sheetCopy",
						text:"James Heartfield writes about the things that make him cross, and that make him laugh.<br/><br/>In 2005 he wrote Let's Build! Why we need five million new homes - a warning about the burgeoning housing crisis that sadly was ignored. He also exposed the hype around 'creative Britain'. In 2010 he wrote Green Capitalism - about the snake-oil salesmen that scare us into giving them money.<br/><br/>More recently James has been working on historical research, and published The Aborigines' Protection Society 1836-1909 with Hurst in 2011, and an Unpatriotic History of the Second World War with Zer0 Press last year.<br/><br/>His European Union and the End of Politics is published by Zer0 this May, and he is working on a history of the British and Foreign Anti-Slavery Society for Hurst.<br/><br/>James teaches at Arcadia University, and also at Queen Mary's University of London"
					}
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
						type:"sheetImg",
						src:"img_lauraHird.jpg"
					},
					{
						type:"sheetCopy",
						text:"Laura Hird is the award-winning author of the collections, Nail and Other Stories(Canongate, 1997) and Hope and Other Urban Tales (Canongate, 2006) and novel,Born Free (Canongate 2007) which was nominated for the Whitbread and Orange Prizes. Her short stories have been published in numerous magazines and anthologies internationally and her work translated into a number of European languages. A book based around her mother's letters, Dear Laura was published by Canongate in March 2007. A regular tutor for the Arvon Foundation and the Scottish Book Trust , she also teaches creative writing in secondary schools and colleges throughout the UK."
					}
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
					},
					{
						type:"sheetImg",
						src:"img_johnLucas.jpg"
					},
					{
						type:"sheetCopy",
						text:"John Lucas was born in Whitechapel, east London, in 1978. He was brought up nearby in the borough of Hackney, and continues to live in the area. The youngest of six boys, he comes from a large family of writers and artists, although he did not immediately follow the same path. He took a degree in Creative Writing at Middlesex University, graduating in 2007and two years ago left his job to try and concentrate on his writing, supporting himself by working in an independent Hackney book shop.<br/><br/>In Turf, John drew upon his own experiences of growing up in Hackney, and on the numerous stories of young gang violence in the press. He is currently working on his second novel."
					}
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
			name:"Special Events",
			elements:
			[
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
					rel:"workshop5",
					label:"Flash Fiction"
				},
				{
					type:"tableBtn",
					rel:"day1_9",
					label:"Gala"
				},
				{
					type:"tableBtn",
					rel:"workshop4",
					label:"Poetry Slam"
				},
				{
					type:"tableBtn",
					rel:"workshop1",
					label:"Faber Academy"
				},
				{
					type:"tableBtn",
					rel:"twiction",
					label:"Twiction"
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
						text:"How to get two minutes face to face with a top literary agent.<br/><br/>The event begins with a workshop from the Luigi Bonomiagents, giving guidance on presentation, what works, what doesn’t and the areas you might be able to take your idea in. There will also be a chance to ask general questions about the role of an agent and the industry in general.<br/><br/>Any specific questions about your piece will be addressed in the face to face.<br/><br/>What you will need:<br/>- One sheet of A4 with an extract from your piece, roughly 200 – 300 words<br/>- One sheet outlining the idea – again 200 – 300 words<br/>- Something to edit your piece on, a laptop, tablet or mobile BUT the agent will only read paper. A printer will be available.<br/>- Several copies of your contact details, business cards are good, but a printed piece of paper is acceptable.<br/>- Bring your manners with you. Getting this to run smoothly will require you to be polite if you are rejected, and to leave the table when the bell rings.<br/><br/>For full details of how to book your place on the workshop and speed pitch, contact Richard on the North London Literary Festival student team on 07830 378071 or via email, rw443@live.mdx.ac.uk.<br/>To read about the agents you will be pitching to, click on Speed-pitch website."
					},
					{
						type:"linkBtn",
						label:"rw443@live.mdx.ac.uk",
						extOpen:true,
						url:"mailto:rw443@live.mdx.ac.uk"
					},
					{
						type:"linkBtn",
						label:"Speed-pitch website",
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
						text:"Small Publishing Forum – Books and Beyond"
					},
					{
						type:"sheetImg",
						src:"img_smallPubForum.jpg"
					},
					{
						type:"sheetCopy",
						text:"The publishing industry is in a blender as newspapers and books go online, and writers swerve traditional routes to print to go their own way. How does the traditional paper-printed word stay in the mix? How do you find your place in the fast changing world of the printed word?<br/><br/>The Small Publisher Platform will look at the way people from across the industry are responding to the challenge; the problems they encounter, the success they have and how you can be part of the process.<br/><br/>Lucy Bagnall is a leading light in the industry, both successfully published and influential in the Literary Salon scene. She specializes in supporting ‘cross platform’ literature with her colleagues at the Literary Platform.<br/><br/>Kit Caless and Gary Budden from Influx Press and Adele Ward from Ward & Woodward Publishers have met with success in the industry while keeping things small and the Big Green Book Company – Woodgreen’s best independent bookshop; are looking to extend their shelving into cyberspace, while filling them with content from authors they encourage. The discussion will be chaired by Middlesex’s very own Josie Barnard who will keep things to the point; and make a few points herself."
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
						type:"sheetImg",
						src:"img_poetrySlam.jpg"
					},
					{
						type:"sheetCopy",
						text:"‘Do not be afraid of your own words!’<br/><br/>(Slammer is the one who transforms himself on the stage into his own words.)<br/><br/><br/>Poetry slam is a verbal battle between poets, all trying to outdo each other. It is open to anyone who thinks that has something to say and finds the courage to perform their own texts in front of an audience. The rules are simple: the contestants have three minutes to present their prepared (or completely improvised) pieces, and thus compete for the favour of the judges, that are chosen from the audience present. The competition puts emphasis on good imagery and original presentation.<br/><br/>The contestants must not use any props, costumes or musical instruments. Victory depends on each contestant to take their courage and words in both hands and come up with the original topic, content and form. Spontaneous, enthusiastic and critical reactions of an audience are the best feedback, and often even inconspicuous influence of the judges.<br/><br/>Unusual verses, unconventional recitations and contact with the audience defeats all the other boring literary parties. Love or social poetry, bittersweet personal confessions, or comic pieces – our poetry slam offers you all this and more! It is one of the things that makes our North London Literary festival special."
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
						type:"sheetImg",
						src:"img_flashFiction.jpg"
					},
					{
						type:"sheetCopy",
						text:"Flash Fiction is an exciting event taking place on the 26th March 2013; all students and the public are invited to join us at 4:45pm in the afternoon for an array of short fiction. Held in the Rickett Quadrangle in the College Building at Middlesex University’s Hendon Campus you can listen to inspired writers taking the plunge and reading some of their best fiction.<br/><br/>There are only 10-12 places available with each reading lasting between 5-7 minutes. We are looking for a maximum of 300 words so keep it short but have fun with it; if you have an interest in writing and want to release your creative flare then get in touch and take your opportunity. The event will be compered by Helen Bagnall from Salon and The Literary Platform.<br/>You never know what you can find; there could be everything from romance to horror or you could even hear something completely new."
					},
					{
						type:"linkBtn",
						label:"Salon",
						extOpen:true,
						url:"http://www.salon-london.com"
					},
					{
						type:"linkBtn",
						label:"The Literary Platform",
						extOpen:true,
						url:"http://www.theliteraryplatform.com"
					},
					{
						type:"sheetCopy",
						text:"So come along because you may even stumble upon the next famous fiction writer or it even might be you!<br/><br/>For full details of how to book your place on the Flash Fiction stage contact Lucy on the North London Literary Festival student team by ld454@live.mdx.ac.uk."
					},
					{
						type:"linkBtn",
						label:"ld454@live.mdx.ac.uk",
						extOpen:true,
						url:"mailto:ld454@live.mdx.ac.uk"
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
					text:"For  the latest updates and information, please follow us on Twitter or visit our website."
				},
				{
					type:"linkBtn",
					label:"Twitter #nllf13",
					extOpen:true,
					url:"https://twitter.com/search?q=%23nllf13&src=typd"
				},
				{
					type:"linkBtn",
					label:"Website",
					extOpen:true,
					url:"http://northlondonlitfest.com/"
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
			type:"list",
			id:"northLondon",
			name:"North London",
			elements:
			[
				{
					type:"tableBtn",
					rel:"nl_1",
					label:"North London Map"
				},
				{
					type:"tableBtn",
					rel:"nl_2",
					label:"Looking back while writing the future"
				},
				{
					type:"tableBtn",
					rel:"nl_3",
					label:"Tube Trails"
				}
			]
		},
			{
				type:"detail",
				id:"nl_1",
				name:"North London Map",
				elements:
				[
					{
						type:"sheetHL",
						text:"North London Map",
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
			},
			{
				type:"detail",
				id:"nl_2",
				name:"Looking back while writing the future",
				elements:
				[
					{
						type:"sheetHL",
						text:"Looking back while writing the future: a history of Middlesex University",
					},
					{
						type:"sheetCopy",
						text:"While we get ready to launch the North London Literary Festival with an eye on the future of publishing, we are experiencing a sense of nostalgia fuelled by an awareness of the rich local history, and Middlesex University’s role as the cultural centre in the locality.<br/><br/>By Maitrayee Basu & Anne Hansen<br/><br/>1878 is the year we can trace back the beginning of the institutions that would eventually become Middlesex University. It was the year St. Katherine’s College opened, and shortly followed by Hornsey College of Art in 1882 and Ponders End Technical Institute in 1901. Hendon Technical Institute opened in 1939 and after the war in 1947 Trent Park College of education opened. So it has been a significant while that Middlesex University, or rather the institutions that constitute the university in its modern form, has been a major seat of learning and innovative thought in North London.<br/><br/>In 1973 all of these and more educational institutes dotted around North London (or Middlesex according to the Saxons) joined together to form Middlesex Polytechnic. A number of more educational institutes joined in 1992 when the polytechnic by Royal Assent became Middlesex University. Thus Middlesex University in its current form is an amalgamation or union of the various seats of learning in North London. We are extremely proud to carry forth this legacy of forward thinking sitting on the cutting edge of culture propelled forth by the socio-technological landscape of our times.<br/><br/>Join us for the North London Literary Festival 2013 and you will get a chance to enjoy the wonderful ambiance of the University’s flagship building in the College Building (originally built in 1938) with its now covered courtyard, where all of our exciting events will be held."
					}
				]
			},
			{
				type:"detail",
				id:"nl_3",
				name:"Tube Trails",
				elements:
				[
					{
						type:"sheetHL",
						text:"Tube Trails",
					},
					{
						type:"sheetCopy",
						text:"By James Huntingdon<br/><br/>The Tube! The most efficient travel system in London?  Most Londoners will have encountered at it some point in their life.<br/><br/>Isn’t it funny how when you ride the tube everything washes over you especially when you’re with a companion? Every time I travel, I cannot help but notice the journey changes. Not the journey itself (for the tube will always go the same route and I always get off at the station), but my perception changes with every ride I take. For every journey I take the mood in the carriage is different; each time I am travelling with different people.<br/><br/>A group of loud teenagers rush past giggling in hordes and oinking at childish things, dominating the carriage. Yet you somehow do not realise it because you’re in a group yourself or you’re looking safely at the person next to you and salute the other passenger who shares the annoyance.<br/><br/>Isn’t it funny how people ignore people that can be bothering them yet the old dearie now sitting opposite is the same one that told me my iPod was too loud not five minutes ago on the platform.<br/><br/>Isn’t it funny how people ignore loud groups of people causing a fuss, or the homeless person begging on the carriage for one stop, yet somehow they can look and notice a gay couple. The stares follow you through each stop and you try to avoid holding hands too much.<br/><br/>Isn’t it funny when your alone the tube seems louder and the dark tunnels echo more through the carriage; that people can bother you more or you can just bury yourself in your book or iPod.<br/><br/>You tackle the crowds either lost, or with conviction. You are a Londoner so you feel you know the tube and the system for London. If you have to change lines it is not too confusing yet the moment something changes you become lost in the crowd following a maze of signs trying to get out the underground faster than your usual pace. It becomes an angry frenzy with some woman causing a scene with the staff who are trying to help - the same person you want to ask help from because you cannot find the correct route home.<br/><br/>Isn’t it funny how suddenly the delusion you knew London has become totally destroyed in a small error. It feels like a strange joke somehow. When the train stops in a tunnel a small shock runs through your body temporarily ‘how long will I be stuck here’. The pause is magnified with discomfort and fear.<br/><br/>Isn’t it funny that the tube draws us in somehow? We become accustomed to the noise, the inconvenience. Even the smelly men that always seem to board the carriage when it is compacted with too many people (like a tin of sardines). Tube travel is like a cigarette it doesn’t taste good at first, but eventually it becomes embedded in your life."
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
					
					div.appendChild(new Element("div", {"class":"sheetSpace", "styles":{"background-color":"#E60B22"}}));
					
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



















