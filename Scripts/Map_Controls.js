function getIdLayer() {
	layerDiv = document.getElementById("layerList");
	if (layerDiv.style.visibility == "visible") {
		layerDiv.style.visibility = "hidden";
		return;
		} 
	tmpLayers = map.layers;
	layerList = ["All Layers"];
	for (var i=0;i<tmpLayers.length;i++) {
		if (tmpLayers[i].visibility == true && tmpLayers[i].displayInLayerSwitcher == true) {
			layerList.push(tmpLayers[i].name);
			}
		}
	if (document.getElementById("formLayers") != null) {
		child = document.getElementById("formLayers");
		layerDiv.removeChild(child);
		}
	formElement = document.createElement("form");
	formElement.id = "formLayers";
	layerDiv.appendChild(formElement);
	for (var i=0; i<layerList.length;i++) {
		formSelect = document.createElement("input");
		formSelect.setAttribute("type", "radio");
		formSelect.setAttribute("onclick", "setIdLayer(this.id, this.value)");
		formSelect.name = "layers";
		formSelect.id = "formSelect-" + layerList[i];
		formSelect.value = layerList[i];
		formLabel = document.createElement("label");
		formLabel.appendChild(formSelect);
		formLabel.innerHTML += layerList[i] + "<br>";
		formElement.appendChild(formLabel);
		}
	if (document.getElementById(radioID) != null) {
		document.getElementById(radioID).checked = true;
		}
	else {
		setIdLayer("formSelect-All Layers", layerList[0]);
		document.getElementById(radioID).checked = true;
		}
	tmpLayer = document.getElementById("IdLayerSelect");
	x = tmpLayer.getBoundingClientRect();
	layerDiv.style.left=x.left + 269;
	layerDiv.style.top=x.bottom - 5;
	layerDiv.style.visibility="visible";
	}

function setIdLayer(layerID, layerVal) {
	if (layerID == "formSelect-All Layers") {
		identify.layers = []
		for (var a=0; a<layerList.length; a++) {
			for (var i=0; i<layerVar.length; i++) {
				if (layerVar[i].name == layerList[a]) {
					identify.layers.push(layerVar[i]);
					break;
					}
				}
			}
		}
	else {
		for (var i=0; i<layerVar.length; i++) {
			if (layerVar[i].name == layerVal) {
				identify.layers = [layerVar[i]];
				break;
				}
			}
		}
	layerDiv.style.visibility="hidden";
	radioID = layerID;
	}

function getFSLayer() {
	layerDiv = document.getElementById("layerList");
	if (layerDiv.style.visibility == "visible") {
		layerDiv.style.visibility = "hidden";
		return;
		} 
	tmpLayers = map.layers;
	layerList = [];
	for (var i=0;i<tmpLayers.length;i++) {
		if (tmpLayers[i].visibility == true && tmpLayers[i].displayInLayerSwitcher == true && layerType[i] != "raster") {
			layerList.push(tmpLayers[i].name);
			}
		}
	if (document.getElementById("formLayers") != null) {
		child = document.getElementById("formLayers");
		layerDiv.removeChild(child);
		}
	formElement = document.createElement("form");
	formElement.id = "formLayers";
	layerDiv.appendChild(formElement);
	for (var i=0; i<layerList.length;i++) {
		formSelect = document.createElement("input");
		formSelect.setAttribute("type", "radio");
		formSelect.setAttribute("onclick", "setFSLayer(this.id, this.value)");
		formSelect.name = "layers";
		formSelect.id = "formSelect-" + layerList[i];
		formSelect.value = layerList[i];
		formLabel = document.createElement("label");
		formLabel.appendChild(formSelect);
		formLabel.innerHTML += layerList[i] + "<br>";
		formElement.appendChild(formLabel);
		}
	if (document.getElementById(radioFS) != null) {
		document.getElementById(radioFS).checked = true;
		}
	else {
		setFSLayer("formSelect-" + layerList[0], layerList[0]);
		document.getElementById(radioFS).checked = true;
		}
	tmpLayer = document.getElementById("FSLayerSelect");
	x = tmpLayer.getBoundingClientRect();
	layerDiv.style.left=x.left + 314;
	layerDiv.style.top=x.bottom - 5;
	layerDiv.style.visibility="visible";
	}

function setFSLayer(layerID, layerVal) {
	if (layerID != radioFS) {
		numFeats = featureLayer.features;
		for (var i=numFeats.length-1;i>=0;i--) {
			featureLayer.removeFeatures([numFeats[i]]);
			}
		}
	for (var i=0; i<layerVar.length; i++) {
		if (layerVar[i].name == layerVal) {
				selFeat.protocol = OpenLayers.Protocol.WFS.fromWMSLayer(layerVar[i]);
				break;
			}
		}
	layerDiv.style.visibility="hidden";
	radioFS = layerID;
	}

function clearSelFeat() {
	numFeats = featureLayer.features;
	for (var i=numFeats.length-1;i>=0;i--) {
		featureLayer.removeFeatures([numFeats[i]]);
		}
	}

function getDownload() {
	dloadDiv = document.getElementById("download");
	if (dloadDiv.style.visibility == "visible") {
		dloadDiv.style.visibility = "hidden";
		return;
		}
	for (var i=dloadDiv.childNodes.length - 1; i>=0; i--) {
		dloadDiv.removeChild(dloadDiv.childNodes[i]);
		}
	dloadP = document.createElement("p");
	dloadP.innerHTML = "Layer to download";
	dloadP.style.textAlign = "center";
	dloadP.style.margin = "0px";
	dloadDiv.appendChild(dloadP);
	dloadSel = document.createElement("select");
	dloadSel.setAttribute("onchange", "setSaveType(this.selectedIndex)");
	dloadSel.setAttribute("onclick", "setLink()");
	dloadSel.multiple = false;
	dloadSel.name = "dloadSel";
	dloadSel.id = "dloadSel";
	dloadSel.style.margin = "5px";
	tmpLayers = map.layers;
	for (var i=0; i<tmpLayers.length-2; i++) {
		dloadOpt = document.createElement("option");
		dloadOpt.value = i;
		dloadOpt.id = "dloadOpt" + i;
		dloadOpt.innerHTML = tmpLayers[i].name;
		dloadSel.appendChild(dloadOpt);
		}
	dloadDiv.appendChild(dloadSel);
	dloadSel.selectedIndex = dloadIndex;

	saveTypeP = document.createElement("p");
	saveTypeP.style.textAlign = "center";
	saveTypeP.innerHTML = "File Type";
	saveTypeP.style.margin = "0px";
	saveTypeP.style.marginTop = "10px";
	dloadDiv.appendChild(saveTypeP);
	saveTypeSel = document.createElement("select");
	saveTypeSel.multiple = false;
	saveTypeSel.name = "saveTypeSel";
	saveTypeSel.id = "saveTypeSel";
	saveTypeSel.setAttribute("onclick", "setLink()");
	saveTypeSel.style.margin = "5px";
	if (layerType[dloadIndex] == "raster") {
		for (var i=0; i<=2; i++) {
			saveOpt = document.createElement("option");
			saveOpt.value = i;
			saveOpt.id = "saveOpt" + i;
			switch(i) {
				case 0:
					saveOpt.innerHTML = "GEOTIFF";
					break;
				case 1:
					saveOpt.innerHTML = "JPEG";
					break;
				case 2:
					saveOpt.innerHTML = "PNG"
					break;
				}
			saveTypeSel.appendChild(saveOpt);
			}
		}
	else {
		for (var i=0; i<=1; i++) {
			saveOpt = document.createElement("option");
			saveOpt.value = i;
			saveOpt.id = "saveOpt" + i;
			switch(i) {
				case 0:
					saveOpt.innerHTML = "SHAPE-ZIP";
					break;
				case 1:
					saveOpt.innerHTML = "CSV";
					break;
				}
			saveTypeSel.appendChild(saveOpt);
			}
		}
		
	dloadDiv.appendChild(saveTypeSel);
	saveTypeSel.selectedIndex = 0;
	saveTypeSel.style.marginLeft = (dloadDiv.offsetWidth - saveTypeSel.offsetWidth)/2;

	spaceP = document.createElement("p");
	spaceP.innerHTML = "<br>";
	spaceP.style.margin = "0px";
	dloadDiv.appendChild(spaceP);

	dloadButton = document.createElement("input");
	dloadButton.setAttribute("type", "button");
	dloadButton.value = "Download";
	dloadButton.id = "downloadButton";
	dloadButton.setAttribute("onmouseup", "hideDownload()");
	dloadButton.style.margin = "5px";
	dloadDiv.appendChild(dloadButton);
	dloadButton.style.marginLeft = (dloadDiv.offsetWidth - dloadButton.offsetWidth)/2;

	tmpButton = document.getElementById("dloadButton");
	x = tmpButton.getBoundingClientRect();
	dloadDiv.style.left=x.left + 392;
	dloadDiv.style.top=x.bottom - 5;
	dloadDiv.style.visibility="visible";
	}

function setSaveType(tmpIndex) {
	dloadSel = document.getElementById("saveTypeSel");
	for (var i=dloadSel.length-1; i>=0; i--) {
		dloadSel.remove(i);
		}
	if (layerType[tmpIndex] == "raster") {
		for (var i=0; i<=2; i++) {
			saveOpt = document.createElement("option");
			saveOpt.value = i;
			saveOpt.id = "saveOpt" + i;
			switch(i) {
				case 0:
					saveOpt.innerHTML = "GEOTIFF";
					break;
				case 1:
					saveOpt.innerHTML = "JPEG";
					break;
				case 2:
					saveOpt.innerHTML = "PNG"
					break;
				}
			saveTypeSel.appendChild(saveOpt);
			}
		}
	else {
		for (var i=0; i<=1; i++) {
			saveOpt = document.createElement("option");
			saveOpt.value = i;
			saveOpt.id = "saveOpt" + i;
			switch(i) {
				case 0:
					saveOpt.innerHTML = "SHAPE-ZIP";
					break;
				case 1:
					saveOpt.innerHTML = "CSV";
					break;
				}
			saveTypeSel.appendChild(saveOpt);
			}
		}
	}

function setLink() {
	dloadDiv = document.getElementById("download");
	dloadSel = document.getElementById("dloadSel");
	saveTypeSel = document.getElementById("saveTypeSel");
	dloadIndex = dloadSel.selectedIndex;
	if (layerType[dloadIndex] == "raster") {
		tmpStr = "http://localhost/geoserver/wcs?SERVICE=wcs&VERSION=1.0.0&REQUEST=GetCoverage&CRS=EPSG:5070";
		tmpStr += "&COVERAGE=" + layerNS[dloadIndex];
		tmpStr += "&BBOX=" + String(layerVar[dloadIndex].getMaxExtent());
		tmpStr += "&WIDTH=1000&HEIGHT=" + getHeight(1000);
		tmpStr += "&FORMAT=" + document.getElementById("saveOpt" + document.getElementById("saveTypeSel").selectedIndex).innerHTML;
		dloadButton = document.getElementById("downloadButton");
		if (document.getElementById("saveOpt" + document.getElementById("saveTypeSel").selectedIndex).innerHTML == "GEOTIFF") {
			dloadButton.setAttribute("onclick", "window.location.href='" + tmpStr + "'");
			}
		else {
			dloadButton.setAttribute("onclick", "window.open('" + tmpStr + "')");
			}			
		}
	else {
		tmpStr = "http://localhost/geoserver/wfs?SERVICE=wfs&VERSION=2.0.0&REQUEST=getFeature";
		tmpStr += "&TYPENAME=" + layerNS[dloadIndex];
		tmpStr += "&OUTPUTFORMAT=" + document.getElementById("saveOpt" + document.getElementById("saveTypeSel").selectedIndex).innerHTML;
		dloadButton = document.getElementById("downloadButton");
		dloadButton.setAttribute("onclick", "window.location.href='" + tmpStr + "'");
		//linkP = document.getElementById("linkP");
		//linkP.innerHTML = "<a href='" + tmpStr + "' target='_blank'>Follow Link</a>"
		}
	}

function hideDownload() {
	dloadDiv.style.visibility = "hidden";
	}

function getHeight(useWidth) {
	tmpExt = layerVar[dloadIndex].maxExtent;
	tmpStr2 = String(tmpExt);
	tmpExtArray = tmpStr2.split(",");
	tmpHeight = Math.abs(tmpExtArray[0]-tmpExtArray[2]);
	tmpWidth = Math.abs(tmpExtArray[1]-tmpExtArray[3]);
	xHeight = tmpHeight/tmpWidth;
	useHeight = Math.round(useWidth * xHeight);
	return useHeight;
	}

