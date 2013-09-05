function checker() {
	{landCov.setVisibility(element.checked);}
	{USstates.setVisibility(element.checked);}
	}

function getIdLayer() {
	layerDiv = document.getElementById("layerList");
	if (layerDiv.style.visibility == "visible") {
		layerDiv.style.visibility = "hidden";
		return;
		} 
	tmpLayers = map.layers;
	layerList = ["All Layers"];
	for (var i=0;i<tmpLayers.length;i++) {
		if (tmpLayers[i].visibility == true) {
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
		formItem = document.createElement("input");
		formItem.setAttribute("type", "radio");
		formItem.setAttribute("onclick", "setIdLayer(this.value)");
		formItem.name = "layers";
		formItem.id = layerList[i];
		formItem.value = layerList[i];
		formLabel = document.createElement("label");
		formLabel.appendChild(formItem);
		formLabel.innerHTML += layerList[i] + "<br>";
		formElement.appendChild(formLabel);
		}
	document.getElementById(radioID).checked = true;
	tmpLayer = document.getElementById("IdLayerSelect");
	x = tmpLayer.getBoundingClientRect();
	layerDiv.style.left=x.left + 269;
	layerDiv.style.top=x.bottom - 7;
	layerDiv.style.visibility="visible";
	}

function setIdLayer(layerStr) {
	if (layerStr == "All Layers") {
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
			if (layerVar[i].name == layerStr) {
				identify.layers = [layerVar[i]];
				break;
				}
			}
		}
	layerDiv.style.visibility="hidden";
	radioID = layerStr;
	}

function getFSLayer() {
	alert(elevation.opacity);
	elevation.setOpacity(0.2);
	alert(elevation.opacity);
	}

function changeUnits() {
	alert("It works");
	}

function changeProj(index) {
	switch(index) {
		case 0:
			bounds = new OpenLayers.Bounds(-2493045, 177285, 2342655, 3310005);
			map.setOptions({maxExtent: bounds, projection: "EPSG:5070", units: 'm'});
			map.zoomToExtent(bounds);		
			tmpLayers = map.layers
			map.removeLayer(landCov);
			break;
		case 1:
 		       	bounds = new OpenLayers.Bounds(-130.2328, 21.7423, -63.6722, 52.8733);
	        	map.setOptions({maxExtent: bounds, projection: "EPSG:3395", units: 'dd'});
			map.zoomToExtent(bounds);
			tmpLayers = map.layers;
			map.addLayer(landCov);
			/*for (var i=0;i<tmpLayers.length;i++) {
				//map.removeLayer(tmpLayers[i].id;
				tmpLayers[i].projection = "EPSG:3395";
				tmpLayers[i].units = "dd";
				tmpLayers[i].redraw();
				alert (tmpLayers[i].name + " " + tmpLayers[i].projection);
				}*/
			break;
		}
}

/* map.events.register("mousemove", map, function(e) {
        var position = e.map.getLonLatFromViewPortPx(e.xy);
        OpenLayers.Util.getElement("coords").innerHTML = position;
    });*/