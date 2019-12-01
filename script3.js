/*    JavaScript 6th Edition
 *    Chapter 9
 *    Chapter case
 *    Eating Well in Season
 *    Author: Sunny Yim
 *    Date: November 15, 2019    
 *    Filename: script3.js
 */
 
"use strict";

function parseData()
{
	var formData = decodeURIComponent(location.search);
	var formArray = [];
	var list = document.querySelector("div.results ul");
	formData = formData.substring(1, formData.length);
	while (formData.indexOf("+") !== -1)
	{
		formData = formData.replace("+", " ");
	}
	formData = decodeURIComponent(formData);
	formArray = formData.split("&");
	for (var i =0; i < formArray.length; i++) 
	{
		var newItem =document.createElement("li");
		newItem.innerHTML = formArray[i];
		list.appendChild(newItem);
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
	window.addEventListener("load", parseData, false);
}
else if	(window.attachEvent)
{
	window.attachEvent("onload", parseData);
}
