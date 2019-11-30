/*    JavaScript 6th Edition
 *    Chapter 9
 *    Chapter case
 *    Eating Well in Season
 *    Author: Sunny Yim
 *    Date: November 15, 2019    
 *    Filename: script2.js
 */
 
"use strict";

// global variables
var queryArray = [];

function populateInfo()
{
	if (location.search)
	{ 
		var queryData = location.search;
		queryData = queryData.substring(1, queryData.length);
		queryArray = queryData.split("&");
	}
}
   
/* function createEventListeners()
{ 
	var fname = document.getElementById("fnameinput"); 
	var lname = document.getElementById("lnameinput"); 
	var zip = document.getElementById("zipinput"); 
	if	(fname.addEventListener)
	{ 
		fname.addEventListener("change", createID, false); 
		lname.addEventListener("change", createID, false); 
		zip.addEventListener("change", createID, false); 
	}
	else if	(fname.attachEvent)
	{
		fname.attachEvent("onchange", createID);
		lname.attachEvent("onchange", createID);
		zip.attachEvent("onchange", createID);
	}
}

if (window.addEventListener)
{
	window.addEventListener("load", createEventListeners,false);
}
else if	(window.attachEvent)
{
	window.attachEvent("onload", createEventListeners);
}
*/

if (window.addEventListener)
{
	window.addEventListener("load", populateInfo,false);
}
else if	(window.attachEvent)
{
	window.attachEvent("onload", populateInfo);
}
