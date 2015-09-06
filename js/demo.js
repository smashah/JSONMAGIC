/*globals require, document, CodeMirror, alert*/
require.config({
    paths: {
        "crel": "../lib/crel"
    }
});
require(["../src/json.human"], function (JsonHuman) {
    "use strict";
    var textarea = document.getElementById("input"),
        output = document.getElementById("output"),
        raw = document.getElementById("output-raw"),
        formatTime = document.getElementById("format-time"),
        renderTime = document.getElementById("render-time"),
        button = document.getElementById("convert"),
        editor = CodeMirror.fromTextArea(textarea, {
            mode: "application/json",
            json: true
        });

    function convert(input, output) {
        var node, t1, t2, t3, formatTimeMs, renderTimeMs;
        t1 = Date.now();
        node = JsonHuman.format(input);
        t2 = Date.now();

        output.innerHTML = "";
        output.appendChild(node);
        t3 = Date.now();
        raw.textContent = output.innerHTML;


        formatTimeMs = t2 - t1;
        renderTimeMs = t3 - t2;

        formatTime.innerHTML = "" + formatTimeMs + "ms";
        renderTime.innerHTML = "" + renderTimeMs + "ms";
    }






var querystring = "http://api.instagram.com/publicapi/oembed/?url=https://instagram.com/p/6UMrqqi_ci/";
var x;

function getIt(querystring) {return ($.ajax({
            type: "GET",
            dataType: "jsonp",
            url: querystring, 
            success: function(data) {
                console.log( "inside function for data" + data);
                responseobject = (data)
                x = data;
                letsee(data);
                doConvert;
                return data;
            }
        }).responseText);}
function letsee(data) {console.log(data)}

var jsonx = getIt(querystring);
    function _doConvert() {
        var json = x;
        return convert(json, output);
    }

    function doConvert() {
        try {
            return _doConvert();
        } catch (error) {
            alert("Error parsing json:\n" + error.stack);
            return;
        }
    }

    button.addEventListener("click", doConvert);

    doConvert();
});
