({
    recordUpdated: function(component, event, helper) {

        var changeType = event.getParams().changeType;
        
        if (changeType === "ERROR") { /* handle error; do this first! */ }
        else if (changeType === "LOADED") { /* handle record load */ }
        else if (changeType === "REMOVED") { /* handle record removal */ }
        else if (changeType === "CHANGED") {
        	helper.addMarkers(component);
        }
    },
    
    jsLoaded: function(component, event, helper) {
        
        // record.UMgeolocalization__Latitude__s
        var recordgeo = component.get('v.simpleRecord');
        var lat = recordgeo.UMgeolocalization__Latitude__s;
        var lng = recordgeo.UMgeolocalization__Longitude__s;
        var mapDiv = component.find('mapid').getElement();
        var mymap = L.map(mapDiv, {zoomControl: true,zoom:1,zoomAnimation:false,fadeAnimation:true,markerZoomAnimation:true}).setView([40, -75], 11);
        component.set("v.map", mymap);
        //https://athompson.carto.com/api/v1/map/named/tpl_4d049280_5511_45da_a03b_45c6701dc0c2/all/10/298/387.png
        //old one https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png
        //var tiles =  for seturl later on field updates
        L.tileLayer('https://athompson.carto.com/api/v1/map/named/sfdc_statefarm_route/all/{z}/{x}/{y}.png?config={"lat":"'+ lat +'","lng":"'+ lng +'"}', {
            attribution: '© <a href="https://carto.com/attribution/">CARTO attributions</a>',
            maxZoom: 18
        }).addTo(mymap);
        
        var markers = L.layerGroup().addTo(mymap);
        component.set("v.markers", markers);
        
        var record = component.get('v.simpleRecord');
        if (record != null)
        {
        	helper.addMarkers(component);
        }
    },
        
    doInit: function(component,event,helper) {
        var record = component.get('v.simpleRecord');
        if (record != null)
        {
        	helper.addMarkers(component);
        }
    },
    
    myAction : function(component, event, helper) {
		
	}
})
