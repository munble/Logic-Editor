/**
 * Methods for downloading tables/proofs as images or copying HTML code to clipboard
 * University of Pittsburgh IS2470 Fall 2017
 * Jeffrey James, Chakra Neopaney, Sanika Athaley, Wennong Song, John Falconi
 */

// Download Truth Table as an image
function takeScreenshot_T() {
	tinyMCE.triggerSave();
	var copyText = document.getElementById("TruthTable");
	copyText.select();
	document.execCommand("copy");
	var iframe=document.createElement('iframe');
	document.body.appendChild(iframe);
	setTimeout(function(){
	    var iframedoc=iframe.contentDocument||iframe.contentWindow.document;
	    iframedoc.body.innerHTML=copyText.value;
	    html2canvas(iframedoc.body, {
	    		//useCORS: true,
	    		allowTaint: true,
	    		background: '#fff',
	    		scale: 1.5,
	    		onrendered: function(canvas) {
	    			var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAsT").value;
	    			var downloadLink = document.createElement("a");
	    			downloadLink.download = fileNameToSaveAs + ".png";
	    			downloadLink.innerHTML = "Download File";
	    			downloadLink.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	    			downloadLink.onclick = destroyClickedElement;
	    			downloadLink.style.display = "none";
	    			document.body.appendChild(downloadLink);
	    			downloadLink.click();
	    			document.body.removeChild(iframe);
	        }
	    });
	}, 10);
}

//Download Proof as an image
function takeScreenshot_P() {
	tinyMCE.triggerSave();
	var copyText = document.getElementById("Proof");
	copyText.select();
	document.execCommand("copy");
	var iframe=document.createElement('iframe');
	document.body.appendChild(iframe);
	setTimeout(function(){
	    var iframedoc=iframe.contentDocument||iframe.contentWindow.document;
	    iframedoc.body.innerHTML=copyText.value;
	    html2canvas(iframedoc.body, {
	    		//useCORS: true,
	    		allowTaint: true,
	    		background: '#fff',
	    		scale: 1.5,
	    		onrendered: function(canvas) {
	    			var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAsP").value;
	    			var downloadLink = document.createElement("a");
	    			downloadLink.download = fileNameToSaveAs + ".png";
	    			downloadLink.innerHTML = "Download File";
	    			downloadLink.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	    			downloadLink.onclick = destroyClickedElement;
	    			downloadLink.style.display = "none";
	    			document.body.appendChild(downloadLink);
	    			downloadLink.click();
	    			document.body.removeChild(iframe);
	        }
	    });
	}, 10);
}

//Download statement as an image
function takeScreenshot_S() {
	tinyMCE.triggerSave();
	var copyText = document.getElementById("Statement");
	copyText.select();
	document.execCommand("copy");
	var iframe=document.createElement('iframe');
	document.body.appendChild(iframe);
	setTimeout(function(){
	    var iframedoc=iframe.contentDocument||iframe.contentWindow.document;
	    iframedoc.body.innerHTML=copyText.value;
	    html2canvas(iframedoc.body, {
	    		//useCORS: true,
	    		allowTaint: true,
	    		background: '#fff',
	    		scale: 1.5,
	    		onrendered: function(canvas) {
	    			var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAsS").value;
	    			var downloadLink = document.createElement("a");
	    			downloadLink.download = fileNameToSaveAs + ".png";
	    			downloadLink.innerHTML = "Download File";
	    			downloadLink.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	    			downloadLink.onclick = destroyClickedElement;
	    			downloadLink.style.display = "none";
	    			document.body.appendChild(downloadLink);
	    			downloadLink.click();
	    			document.body.removeChild(iframe);
	        }
	    });
	}, 10);
}

//Show pop-up of HTML code for user to copy Truth Table and paste into CourseWeb
function copyMCE_T() {
	tinyMCE.triggerSave();
	//var copyText = document.getElementById("TruthTable");
    var copyText = tinyMCE.activeEditor.getContent({format : 'raw'});
	copyText.select();
//	document.execCommand("copy");
	//alert("Copied the text: " + copyText.value);
	prompt(
			"Copy to clipboard: Ctrl+C OR Cmd+C, Enter\n\nClick \"HTML\" button in CourseWeb and paste: (Ctrl+V or Cmd+V)\n\nClick \"Update\"",
			copyText.value);
}

//Show pop-up of HTML code for user to copy Truth Table and paste into CourseWeb
function copyMCE_P() {
	tinyMCE.triggerSave();
	var copyText = document.getElementById("Proof");
	copyText.select();
	document.execCommand("copy");
	//alert("Copied the text: " + copyText.value);
	prompt(
			"Copy to clipboard: Ctrl+C OR Cmd+C, Enter\n\nClick \"HTML\" button in CourseWeb and paste: (Ctrl+V or Cmd+V)\n\nClick \"Update\"",
			copyText.value);
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}