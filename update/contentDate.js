//////////////
// contentDate.js
// This file will be checked repeatedly by the app. If the date in the app is lower then the date below, the app will start an update process
// make changes to content.js FIRST and then set this file with the SAME new date (to avoid repeated updates)
//////////////
processContentDate
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
	
	forceUpdate:false // ONLY SET TO true WHEN YOU CAN'T USE DATE TO PERFORM AN UPDATE!!
})



















