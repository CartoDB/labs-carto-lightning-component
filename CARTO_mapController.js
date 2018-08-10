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
        
        var mapDiv = component.find('mapid').getElement();
        var mymap = L.map(mapDiv, {zoomControl: true,zoom:1,zoomAnimation:true,fadeAnimation:true,markerZoomAnimation:true}).setView([40, -75], 11);
        component.set("v.map", mymap);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
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
