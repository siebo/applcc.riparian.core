function init() {
	//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";

//********OpenLayers Map**********
        bounds = new OpenLayers.Bounds(-2493045, 177285, 2342655, 3310005);

        options = {controls: [], allOverlays: true, maxExtent: bounds, maxResolution: "auto", maxScale: 20000000, minScale: 1000, numZoomLevels: 30, projection: "EPSG:5070", units: "m"};

        map = new OpenLayers.Map('map', options);

//********WMS layers**********
	layerVar = [];
	radioID = "All Layers";

        landCov = new OpenLayers.Layer.WMS( "Land Cover",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:lan_cov_06', format: "image/png", transparent: true}
            );
	    layerVar.push(landCov);

        surfLith = new OpenLayers.Layer.WMS( "Surficial Lithology",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:surf_lith_10', format: "image/png", transparent: true}
            );
	    layerVar.push(surfLith);

        /*landCov = new OpenLayers.Layer.WMS( "Land Cover",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:lan_cov_06', format: "image/png", transparent: true}, 
            {attribution: "<img src='images/Land_Cover_2006_Legend.jpg'/>"}
            );*/

        elevation = new OpenLayers.Layer.WMS( "Elevation",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:ned_10_EBTJV', format: "image/png", transparent: true} 
            );
	    layerVar.push(elevation);

        baseFlow = new OpenLayers.Layer.WMS( "Base Flow Index",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:base_flow_03', format: "image/png", transparent: true} 
            );
	    layerVar.push(baseFlow);

        precip = new OpenLayers.Layer.WMS( "Mean Precipitation",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:precip_1981_2010', format: "image/png", transparent: true} 
            );
	    layerVar.push(precip);

        tempMax = new OpenLayers.Layer.WMS( "Mean Maximum Temperature",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:temp_max_1981_2010', format: "image/png", transparent: true} 
            );
	    layerVar.push(tempMax);

        tempMin = new OpenLayers.Layer.WMS( "Mean Minimum Temperature",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:temp_min_1981_2010', format: "image/png", transparent: true} 
            );
	    layerVar.push(tempMin);

        no3dep = new OpenLayers.Layer.WMS( "NO3 Deposition",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:no3_dep_11', format: "image/png", transparent: true}
            );
	    layerVar.push(no3dep);
        
        so4dep = new OpenLayers.Layer.WMS( "SO4 Deposition",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:so4_dep_11', format: "image/png", transparent: true}
            );
	    layerVar.push(so4dep);

        canCov = new OpenLayers.Layer.WMS( "Canopy Cover",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:can_cov_01', format: "image/png", transparent: true} 
            );
	    layerVar.push(canCov);

        solGain = new OpenLayers.Layer.WMS( "Solar Gain",
             ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:solar_gain1', format: "image/png", transparent: true} 
            );
	    layerVar.push(solGain);

        impSur = new OpenLayers.Layer.WMS( "Impervious Surface",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:imp_sur_06', format: "image/png", transparent: true} 
            );
	    layerVar.push(impSur);

        USstates = new OpenLayers.Layer.WMS( "US States",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:US_States', format: "image/png", transparent: true} 
            );
	    layerVar.push(USstates);

        states = new OpenLayers.Layer.WMS( "EBTJV States",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:EBTJV_States', format: "image/png", transparent: true} 
            );
	    layerVar.push(states);

        rivers = new OpenLayers.Layer.WMS( "Major Rivers",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:US_Rivers', format: "image/png", transparent: true} 
            );
	    layerVar.push(rivers);

        streams = new OpenLayers.Layer.WMS( "Streams",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:NHDPlus2_Streams_Clipped', format: "image/png", transparent: true} 
            );
	    layerVar.push(streams);

        corridor = new OpenLayers.Layer.WMS( "100 M Stream Corridor",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:EBTJV_NHD_corridor', format: "image/png", transparent: true} 
            );
	    layerVar.push(corridor);

        waterbodies = new OpenLayers.Layer.WMS( "Waterbodies",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:NHDPlus_Waterbodies', format: "image/png", transparent: true} 
            );
	    layerVar.push(waterbodies);

        primRoads = new OpenLayers.Layer.WMS( "Primary Roads",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:US_Primary_Roads_2012', format: "image/png", transparent: true} 
            );
	    layerVar.push(primRoads);

        secRoads = new OpenLayers.Layer.WMS( "Secondary Roads",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:US_Secondary_Roads_2012', format: "image/png", transparent: true} 
            );
	    layerVar.push(secRoads);

        boundary = new OpenLayers.Layer.WMS( "EBTJV Boundary",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:EBTJV_Boundary', format: "image/png", transparent: true} 
            );
	    layerVar.push(boundary);

        chesBay = new OpenLayers.Layer.WMS( "Chesapeake Bay Boundary",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:Chesapeake_Bay_Boundary', format: "image/png", transparent: true} 
            );
	    layerVar.push(chesBay);

        huc6 = new OpenLayers.Layer.WMS( "HUC 6",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:HUC_6', format: "image/png", transparent: true} 
            );
	    layerVar.push(huc6);

        huc8 = new OpenLayers.Layer.WMS( "HUC 8",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:HUC_8', format: "image/png", transparent: true} 
            );
	    layerVar.push(huc8);

        huc10 = new OpenLayers.Layer.WMS( "HUC 10",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:HUC_10', format: "image/png", transparent: true} 
            );
	    layerVar.push(huc10);

        huc12 = new OpenLayers.Layer.WMS( "HUC 12",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:HUC_12', format: "image/png", transparent: true} 
            );
	    layerVar.push(huc12);

        catchments = new OpenLayers.Layer.WMS( "NHDPlus Catchments",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:NHDPlus_Catchments', format: "image/png", transparent: true} 
            );
	    layerVar.push(catchments);

        patches = new OpenLayers.Layer.WMS( "BKT Patches",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:BKT_Patches', format: "image/png", transparent: true} 
            );
	    layerVar.push(patches);

        vulPatches = new OpenLayers.Layer.WMS( "BKT Patch Vulnerability",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:Patch_Vulnerability_2005', format: "image/png", transparent: true} 
            );
	    layerVar.push(vulPatches);

        dams = new OpenLayers.Layer.WMS( "Dams",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:NABD_2012_Clipped', format: "image/png", transparent: true} 
            );
	    layerVar.push(dams);

        mines = new OpenLayers.Layer.WMS( "Mines",
            ["http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms","http://localhost/geoserver/EBTJV/wms"], 
            {layers: 'EBTJV:Mines_2003', format: "image/png", transparent: true} 
            );
	    layerVar.push(mines);
 	

//********WFS layers**********
	/*patchesWFS = new OpenLayers.Layer.Vector(
           "WFS Patches", {
           strategies: [new OpenLayers.Strategy.BBOX()],
           protocol: new OpenLayers.Protocol.WFS({
             url: "http://localhost/geoserver/wfs",
             featureType: "BKT_Patches",
             featureNS: "http://localhost/geoserver/EBTJV"
             })
           });

        damsWFS = new OpenLayers.Layer.Vector(
           "WFS dams", {
           strategies: [new OpenLayers.Strategy.BBOX()],
           protocol: new OpenLayers.Protocol.WFS({
             url: "http://localhost/geoserver/wfs",
             featureType: "NABD_2012_Clipped",
             featureNS: "http://localhost/geoserver/EBTJV"
             })
           });*/

//*******Set initial visibility*******
	surfLith.setVisibility(false);
	elevation.setVisibility(false);
        baseFlow.setVisibility(false);
        precip.setVisibility(false);
	tempMax.setVisibility(false);
	tempMin.setVisibility(false);
        no3dep.setVisibility(false);
	so4dep.setVisibility(false);
        canCov.setVisibility(false);
        solGain.setVisibility(false);
	corridor.setVisibility(false);
	primRoads.setVisibility(false);
	secRoads.setVisibility(false);
	impSur.setVisibility(false);
	chesBay.setVisibility(false);
	huc6.setVisibility(false);
	huc8.setVisibility(false);
	huc10.setVisibility(false);
	huc12.setVisibility(false);
	catchments.setVisibility(false);
        patches.setVisibility(false);
	vulPatches.setVisibility(false);
        dams.setVisibility(false);
	mines.setVisibility(false);

        map.addLayers([landCov, surfLith, elevation, baseFlow, precip, tempMin, tempMax, no3dep, so4dep, canCov, solGain, impSur, USstates, states, boundary, chesBay, huc6, huc8, huc10, huc12, catchments, rivers, streams, waterbodies, corridor, primRoads, secRoads, patches, vulPatches, dams, mines]);

//******Map Controls*******
	controlList = []

	extPanel = new OpenLayers.Control.Panel({div: document.getElementById('panel')});
	map.addControl(extPanel);

	control_zoom_in = new OpenLayers.Control.ZoomIn({title: "Fixed Zoom In"});
	control_zoom_out = new OpenLayers.Control.ZoomOut({title: "Fixed Zoom Out"});
	maxExtent = new OpenLayers.Control.ZoomToMaxExtent({title: "Zoom to Max Extent"});
	zoomBox = new OpenLayers.Control.ZoomBox({title: "Zoom In Select"});
	zoomBoxOut = new OpenLayers.Control.ZoomBox({title: "Zoom Out Select", out: true, displayClass: 'olControlZoomBoxOut'});
	navPan = new OpenLayers.Control.Navigation({title: "Pan", dragPanOptions: {enableKinetic: true}, zoomWheelEnabled: true, documentDrag: true});
	controlList.push(navPan);
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
	selFeat = new OpenLayers.Control.Button({title: "Select Features", displayClass: "olControlGetFeature"});
	selFeatLayer = new OpenLayers.Control.Button({id: "FSLayerSelect", title: "Choose Layer for Feature Select", displayClass: "olControlFSLayer", trigger: getFSLayer});
	download = new OpenLayers.Control.GetFeature({title: "Download Layers", displayClass: "olControlDownload", trigger: getDownload});

	navHistory = new OpenLayers.Control.NavigationHistory({displayClass: 'olControlNavHist'});
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
	map.addControl(download);

	extPanel.addControls([control_zoom_in, control_zoom_out, maxExtent, zoomBox, zoomBoxOut, navPan, navHistory.previous, navHistory.next, identify, IdLayer, selFeat, selFeatLayer, download]);
	
	navPan.deactivate();
	navPan.activate();

	ls = new OpenLayers.Control.LayerSwitcher({title: "Add/remove layers", div: document.getElementById("legend")});
	ls.useLegendGraphics = true;
	map.addControl(ls);

	//map.addControl(new OpenLayers.Control.NavToolbar());
        //map.addControl(new OpenLayers.Control.PanZoom());
        //map.addControl(new OpenLayers.Control.LayerSwitcher({title: "Add/remove layers", div: document.getElementById("legend")}));
        //map.addControl(new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}, zoomWheelEnabled: true}));
        map.addControl(new OpenLayers.Control.Attribution());
        map.addControl(new OpenLayers.Control.ArgParser());
        map.addControl(new OpenLayers.Control.MousePosition({div: document.getElementById("location")}));
        map.addControl(new OpenLayers.Control.ScaleLine({div: document.getElementById("scaleline-id")}));
        map.addControl(new OpenLayers.Control.Scale("scale-id"));
        map.addControl(new OpenLayers.Control.NavigationHistory());
        //map.addControl(new OpenLayers.Control.KeyboardDefaults());
	//map.addControl(new OpenLayers.Control.Graticule());

        map.zoomToExtent(bounds);
        //map.setOptions({restrictedExtent: bounds});
}