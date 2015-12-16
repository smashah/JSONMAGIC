/*globals require, document, CodeMirror, alert*/
require.config({
	paths: {
		"crel": "../lib/crel"
	}
});
require(["../src/json.human"], function (JsonHuman) {
	"use strict";
		var output = document.getElementById("output"),
		// raw = document.getElementById("output-raw"),
		// formatTime = document.getElementById("format-time"),
		// renderTime = document.getElementById("render-time"),
		button = document.getElementById("convert");


	function convert(input, output) {
		var node, t1, t2, t3, formatTimeMs, renderTimeMs;
		// t1 = Date.now();
		node = JsonHuman.format(input);
		// t2 = Date.now();

		output.innerHTML = "";
		console.log("did it");
		output.appendChild(node);
		// t3 = Date.now();
		// raw.textContent = output.innerHTML;


		// formatTimeMs = t2 - t1;
		// renderTimeMs = t3 - t2;

		// formatTime.innerHTML = "" + formatTimeMs + "ms";
		// renderTime.innerHTML = "" + renderTimeMs + "ms";
	}

		
		var x;
		function getIt(querystring) {return ($.ajax({
			type: "GET",
			dataType: "jsonp",
			url: querystring, 
			success: function(data) {
				 // console.log( "inside function for data");
				// responseobject = (data)
				// alert(data);
				x = data;
				//letsee(data);
				doConvert();
				return data;
			}
		}).responseText);}

function letsee(data) {console.log(data)}

function letsGo(){
var url = window.location.href;
		var s; // = url.substring( url.indexOf('#xrl=') + 5);

		if (url.indexOf('#xrl=') == -1){
			s = "";
		}
		else{
		s = url.substring( url.indexOf('#xrl=') + 5);
		}

		if (decodeURIComponent(s) != s) {
			encodeURIComponent(s);
		};


		//console.log(s);
		var q = decodeURIComponent(s);//window.location.search.substring(5));
		//console.log(q);
		var querystring = q;//"http://api.instagram.com/publicapi/oembed/?url=https://instagram.com/p/6UMrqqi_ci/";


	if (querystring == "") {console.log("No link")} else {
	var jsonx = getIt(querystring);
	console.log("letsgo");
	}
	}   
		
	function _doConvert() {
		var json = x;
		console.log("doconvert");
		return convert(json, output);
	}

	function doConvert() {
		try {
			return _doConvert();
		} catch (error) {
			//console.log("Error parsing json:\n" + error.stack);
			return;
		}
	}

	button.addEventListener("click", function(){
			var x = encodeURIComponent(document.getElementById("input").value)
			console.log("Getting json from " + x);
			window.location.replace("http://smashah.github.io/JSONMAGIC/#xrl=" + x);
			//console.log(x);
			letsGo();
					});

	letsGo();
	//doConvert();
});
