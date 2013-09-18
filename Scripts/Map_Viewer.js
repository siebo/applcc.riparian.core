function init() {
	//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
	x = mapSize();

//********OpenLayers Map**********
        bounds = new OpenLayers.Bounds(-2493045, 177285, 2342655, 3310005);

        options = {controls: [], allOverlays: true, maxExtent: bounds, maxResolution: "auto", maxScale: 30000000, minScale: 1000, numZoomLevels: 50, projection: "EPSG:5070", units: "m"};

        map = new OpenLayers.Map('map', options);

//********WMS layers**********
	layerVar = [];  //Enter the variable name of the layer
	layerNS = [];   //Enter in the Geoserver workspace and layer name
	layerType = []; //Enter either raster or point or line or polygon
	legSpec = [];   //SCALE rules for legend graphics
	radioID = "formSelect-All Layers";
	radioFS = null;
	dloadIndex = 0;

        landCov = new OpenLayers.Layer.WMS( "Land Cover",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: 'EBTJV:lan_cov_06', format: "image/png", transparent: true}
	    );
	    layerVar.push(landCov);
	    layerNS.push("EBTJV:lan_cov_06");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(landCov);

        surfLith = new OpenLayers.Layer.WMS( "Surficial Lithology",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:surf_lith_10", format: "image/png", transparent: true}
            );
	    layerVar.push(surfLith);
	    layerNS.push("EBTJV:surf_lith_10");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(surfLith);
	    surfLith.setVisibility(false);

        elevation = new OpenLayers.Layer.WMS( "Elevation",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:ned_10_EBTJV", format: "image/png", transparent: true} 
            );
	    layerVar.push(elevation);
	    layerNS.push("EBTJV:ned_10_EBTJV");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(elevation);
	    elevation.setVisibility(false);

        baseFlow = new OpenLayers.Layer.WMS( "Base Flow Index",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:base_flow_03", format: "image/png", transparent: true} 
            );
	    layerVar.push(baseFlow);
	    layerNS.push("EBTJV:base_flow_03");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(baseFlow);
            baseFlow.setVisibility(false);

        precip = new OpenLayers.Layer.WMS( "Mean Precipitation",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:precip_1981_2010", format: "image/png", transparent: true} 
            );
	    layerVar.push(precip);
	    layerNS.push("EBTJV:precip_1981_2010");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(precip);
            precip.setVisibility(false);

        tempMax = new OpenLayers.Layer.WMS( "Mean Maximum Temperature",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:temp_max_1981_2010", format: "image/png", transparent: true} 
            );
	    layerVar.push(tempMax);
	    layerNS.push("EBTJV:temp_max_1981_2010");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(tempMax);
	    tempMax.setVisibility(false);

        tempMin = new OpenLayers.Layer.WMS( "Mean Minimum Temperature",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:temp_min_1981_2010", format: "image/png", transparent: true} 
            );
	    layerVar.push(tempMin);
	    layerNS.push("EBTJV:temp_min_1981_2010");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(tempMin);
	    tempMin.setVisibility(false);

        no3dep = new OpenLayers.Layer.WMS( "NO3 Deposition",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:no3_dep_11", format: "image/png", transparent: true}
            );
	    layerVar.push(no3dep);
	    layerNS.push("EBTJV:no3_dep_11");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(no3dep);
            no3dep.setVisibility(false);

        so4dep = new OpenLayers.Layer.WMS( "SO4 Deposition",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:so4_dep_11", format: "image/png", transparent: true}
            );
	    layerVar.push(so4dep);
	    layerNS.push("EBTJV:so4_dep_11");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(so4dep);
	    so4dep.setVisibility(false);

        canCov = new OpenLayers.Layer.WMS( "Canopy Cover",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:can_cov_01", format: "image/png", transparent: true} 
            );
	    layerVar.push(canCov);
	    layerNS.push("EBTJV:can_cov_01");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(canCov);
            canCov.setVisibility(false);

        solGain = new OpenLayers.Layer.WMS( "Solar Gain",
             "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:solar_gain", format: "image/png", transparent: true} 
            );
	    layerVar.push(solGain);
	    layerNS.push("EBTJV:solar_gain");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(solGain);
            solGain.setVisibility(false);

        impSur = new OpenLayers.Layer.WMS( "Impervious Surface",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:imp_sur_06", format: "image/png", transparent: true} 
            );
	    layerVar.push(impSur);
	    layerNS.push("EBTJV:imp_sur_06");
	    layerType.push("raster");
	    legSpec.push("none");
	    map.addLayer(impSur);
	    impSur.setVisibility(false);

        USstates = new OpenLayers.Layer.WMS( "US States",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:US_States", format: "image/png", transparent: true} 
            );
	    layerVar.push(USstates);
	    layerNS.push("EBTJV:US_States");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(USstates);

        states = new OpenLayers.Layer.WMS( "EBTJV States",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:EBTJV_States", format: "image/png", transparent: true} 
            );
	    layerVar.push(states);
	    layerNS.push("EBTJV:EBTJV_States");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(states);

        rivers = new OpenLayers.Layer.WMS( "Major Rivers",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:US_Rivers", format: "image/png", transparent: true} 
            );
	    layerVar.push(rivers);
	    layerNS.push("EBTJV:US_Rivers");
	    layerType.push("line");
	    legSpec.push("&SCALE=2000000");
	    map.addLayer(rivers);

        streams = new OpenLayers.Layer.WMS( "Streams",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:NHDPlus2_Streams_Clipped", format: "image/png", transparent: true} 
            );
	    layerVar.push(streams);
	    layerNS.push("EBTJV:NHDPlus2_Streams_Clipped");
	    layerType.push("line");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(streams);

        corridor = new OpenLayers.Layer.WMS( "100 M Stream Corridor",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:EBTJV_NHD_corridor", format: "image/png", transparent: true} 
            );
	    layerVar.push(corridor);
	    layerNS.push("EBTJV:EBTJV_NHD_corridor");
	    layerType.push("polygon");
	    map.addLayer(corridor);
	    legSpec.push("&SCALE=1000");
	    corridor.setVisibility(false);

        waterbodies = new OpenLayers.Layer.WMS( "Waterbodies",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:NHDPlus_Waterbodies", format: "image/png", transparent: true} 
            );
	    layerVar.push(waterbodies);
	    layerNS.push("EBTJV:NHDPlus_Waterbodies");
	    layerType.push("polygon");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(waterbodies);

        primRoads = new OpenLayers.Layer.WMS( "Primary Roads",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:US_Primary_Roads_2012", format: "image/png", transparent: true} 
            );
	    layerVar.push(primRoads);
	    layerNS.push("EBTJV:US_Primary_Roads_2012");
	    layerType.push("line");
	    legSpec.push("&SCALE=2000000");
	    map.addLayer(primRoads);
	    primRoads.setVisibility(false);

        secRoads = new OpenLayers.Layer.WMS( "Secondary Roads",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:US_Secondary_Roads_2012", format: "image/png", transparent: true} 
            );
	    layerVar.push(secRoads);
	    layerNS.push("EBTJV:US_Secondary_Roads_2012");
	    layerType.push("line");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(secRoads);
	    secRoads.setVisibility(false);

        catchments = new OpenLayers.Layer.WMS( "NHDPlus Catchments",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:NHDPlus_Catchments", format: "image/png", transparent: true} 
            );
	    layerVar.push(catchments);
	    layerNS.push("EBTJV:NHDPlus_Catchments");
	    layerType.push("polygon");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(catchments);
	    catchments.setVisibility(false);

        huc12 = new OpenLayers.Layer.WMS( "HUC 12",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:HUC_12", format: "image/png", transparent: true} 
            );
	    layerVar.push(huc12);
	    layerNS.push("EBTJV:HUC_12");
	    layerType.push("polygon");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(huc12);
	    huc12.setVisibility(false);

        huc10 = new OpenLayers.Layer.WMS( "HUC 10",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:HUC_10", format: "image/png", transparent: true} 
            );
	    layerVar.push(huc10);
	    layerNS.push("EBTJV:HUC_10");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(huc10);
	    huc10.setVisibility(false);

        huc8 = new OpenLayers.Layer.WMS( "HUC 8",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:HUC_8", format: "image/png", transparent: true} 
            );
	    layerVar.push(huc8);
	    layerNS.push("EBTJV:HUC_8");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(huc8);
	    huc8.setVisibility(false);

        huc6 = new OpenLayers.Layer.WMS( "HUC 6",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:HUC_6", format: "image/png", transparent: true} 
            );
	    layerVar.push(huc6);
	    layerNS.push("EBTJV:HUC_6");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(huc6);
	    huc6.setVisibility(false);

        patches = new OpenLayers.Layer.WMS( "BKT Patches",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:BKT_Patches", format: "image/png", transparent: true} 
            );
	    layerVar.push(patches);
	    layerNS.push("EBTJV:BKT_Patches");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(patches);
            patches.setVisibility(false);

        vulPatches = new OpenLayers.Layer.WMS( "BKT Patch Vulnerability",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:Patch_Vulnerability_2005", format: "image/png", transparent: true} 
            );
	    layerVar.push(vulPatches);
	    layerNS.push("EBTJV:Patch_Vulnerability_2005");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(vulPatches);
	    vulPatches.setVisibility(false);

        boundary = new OpenLayers.Layer.WMS( "EBTJV Boundary",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:EBTJV_Boundary", format: "image/png", transparent: true} 
            );
	    layerVar.push(boundary);
	    layerNS.push("EBTJV:EBTJV_Boundary");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(boundary);

        chesBay = new OpenLayers.Layer.WMS( "Chesapeake Bay Boundary",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:Chesapeake_Bay_Boundary", format: "image/png", transparent: true} 
            );
	    layerVar.push(chesBay);
	    layerNS.push("EBTJV:Chesapeake_Bay_Boundary");
	    layerType.push("polygon");
	    legSpec.push("none");
	    map.addLayer(chesBay);
	    chesBay.setVisibility(false);

        dams = new OpenLayers.Layer.WMS( "Dams",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:NABD_2012_Clipped", format: "image/png", transparent: true} 
            );
	    layerVar.push(dams);
	    layerNS.push("EBTJV:NABD_2012_Clipped");
	    layerType.push("point");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(dams);
            dams.setVisibility(false);

        mines = new OpenLayers.Layer.WMS( "Mines",
            "http://localhost/geoserver/EBTJV/wms", 
            {layers: "EBTJV:Mines_2003", format: "image/png", transparent: true} 
            );
	    layerVar.push(mines);
 	    layerNS.push("EBTJV:Mines_2003");
	    layerType.push("point");
	    legSpec.push("&SCALE=1000");
	    map.addLayer(mines);
	    mines.setVisibility(false);

//********WFS layers**********
	selectStyle = new OpenLayers.Style({"fillColor": "#FFFF00", "fillOpacity": 0.3, "strokeColor": "#FFFF00", "strokeOpacity": 0.8, "strokeWidth": 2});
	featureLayer = new OpenLayers.Layer.Vector("Selected Features", {
            displayInLayerSwitcher: false, 
            isBaseLayer: false,
            styleMap: selectStyle
            });
            map.addLayer(featureLayer);

	hoverLayer = new OpenLayers.Layer.Vector("Hovered Features", {
            displayInLayerSwitcher: false, 
            isBaseLayer: false 
            });
            map.addLayer(hoverLayer);

	//*********Example WFS data layer
	/*patchesWFS = new OpenLayers.Layer.Vector(
           "WFS Patches", {
           strategies: [new OpenLayers.Strategy.BBOX()],
           protocol: new OpenLayers.Protocol.WFS({
             url: "http://localhost/geoserver/wfs",
             featureType: "BKT_Patches",
             featureNS: "http://localhost/geoserver/EBTJV"
             })
           });*/

//******Map Controls*******
	extPanel = new OpenLayers.Control.Panel({div: document.getElementById("panel")});
	map.addControl(extPanel);

	control_zoom_in = new OpenLayers.Control.ZoomIn({title: "Fixed Zoom In"});
	control_zoom_out = new OpenLayers.Control.ZoomOut({title: "Fixed Zoom Out"});
	maxExtent = new OpenLayers.Control.ZoomToMaxExtent({title: "Zoom to Max Extent"});
	zoomBox = new OpenLayers.Control.ZoomBox({title: "Zoom In Select"});
	zoomBoxOut = new OpenLayers.Control.ZoomBox({title: "Zoom Out Select", out: true, displayClass: "olControlZoomBoxOut"});
	navPan = new OpenLayers.Control.Navigation({title: "Pan", dragPanOptions: {enableKinetic: true}, zoomWheelEnabled: true, documentDrag: true});
	identify = new OpenLayers.Control.WMSGetFeatureInfo({title: "Identify Features", url: "http://localhost/geoserver/EBTJV/wms", queryVisible: true, 
		eventListeners: {
			getfeatureinfo: function(event) {
			map.addPopup(new OpenLayers.Popup.Anchored(
			"attributes", 
			map.getLonLatFromPixel(event.xy),
 			new OpenLayers.Size(400,200),
			event.text,
			null,
			true
			), true);
                	}
			}
		});

	IdLayer = new OpenLayers.Control.Button({id: "IdLayerSelect", title: "Choose Layer to Identify", displayClass: "olControlIdLayer", trigger: getIdLayer});

	selFeat = new OpenLayers.Control.GetFeature({
		title: "Select Features",
		displayClass: "olControlGetFeature",
                protocol: OpenLayers.Protocol.WFS.fromWMSLayer(boundary),
                box: true,
                hover: false, 
                multipleKey: "shiftKey",
                toggleKey: "ctrlKey"
            });
            selFeat.events.register("featureselected", this, function(e) {
                featureLayer.addFeatures([e.feature]);
            });
            selFeat.events.register("featureunselected", this, function(e) {
                featureLayer.removeFeatures([e.feature]);
            });
            selFeat.events.register("hoverfeature", this, function(e) {
                hoverLayer.addFeatures([e.feature]);
            });
            selFeat.events.register("outfeature", this, function(e) {
                hoverLayer.removeFeatures([e.feature]);
            });

	selFeatLayer = new OpenLayers.Control.Button({id: "FSLayerSelect", title: "Choose Layer for Feature Select", displayClass: "olControlFSLayer", trigger: getFSLayer});
	unSelFeat = new OpenLayers.Control.Button({title: "Clear Selected Features", displayClass: "olControlClear", trigger: clearSelFeat});
	download = new OpenLayers.Control.Button({id: "dloadButton", title: "Download Layers", displayClass: "olControlDownload", trigger: getDownload});
	riparian = new OpenLayers.Control.Button({id: "riparianButton", title: "Riparian Planting Tool", displayClass: "olControlRiparian", trigger: getRiparian});

	navHistory = new OpenLayers.Control.NavigationHistory({displayClass: "olControlNavHist"});
	navHistory.previous.title = "Previous Extent";
	navHistory.next.title = "Next Extent";

	map.addControl(control_zoom_in);
	map.addControl(control_zoom_out);
	map.addControl(maxExtent);
	map.addControl(zoomBox);
	map.addControl(zoomBoxOut);
	map.addControl(navPan);
	map.addControl(navHistory);
	map.addControl(identify);
	map.addControl(IdLayer);
	map.addControl(selFeat);
	map.addControl(selFeatLayer);
	map.addControl(unSelFeat);
	map.addControl(download);
	map.addControl(riparian);

	extPanel.addControls([control_zoom_in, control_zoom_out, maxExtent, zoomBox, zoomBoxOut, navPan, navHistory.previous, navHistory.next, identify, IdLayer, selFeat, selFeatLayer, unSelFeat, download, riparian]);
	
	navPan.deactivate();
	navPan.activate();

        map.addControl(new OpenLayers.Control.Attribution());
        map.addControl(new OpenLayers.Control.ArgParser());
        map.addControl(new OpenLayers.Control.MousePosition({div: document.getElementById("location")}));

	/*map.events.register("mousemove", map, function(e) {
            position = map.getLonLatFromViewPortPx(e.xy);
            OpenLayers.Util.getElement("coords").innerHTML = position;
            });*/

        map.addControl(new OpenLayers.Control.ScaleLine({div: document.getElementById("scaleline-id")}));
        map.addControl(new OpenLayers.Control.Scale("scale-id"));
	//map.addControl(new OpenLayers.Control.NavToolbar());
        //map.addControl(new OpenLayers.Control.PanZoom());
        //map.addControl(new OpenLayers.Control.LayerSwitcher({title: "Add/remove layers", div: document.getElementById("legend")}));
        //map.addControl(new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}, zoomWheelEnabled: true}));
        //map.addControl(new OpenLayers.Control.NavigationHistory());
        //map.addControl(new OpenLayers.Control.KeyboardDefaults());
	//map.addControl(new OpenLayers.Control.Graticule());
	
        //map.setOptions({restrictedExtent: bounds});
        map.zoomToExtent(bounds);
	createLegend();
}

function mapSize() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	temp = document.getElementById("map");
	temp.style.width = w - document.getElementById("legend").offsetWidth;
	temp.style.height = h - document.getElementById("panel").offsetHeight - document.getElementById("measures").offsetHeight
	
	temp = document.getElementById("panel")
	temp.style.width = w - document.getElementById("legend").offsetWidth;

	temp = document.getElementById("measures")
	temp.style.width = w - document.getElementById("legend").offsetWidth;
	
	pct = (temp.offsetWidth / w);
	temp = document.getElementById("scaleline-id")
	temp.style.marginLeft = 45 * pct + "%";
	}
