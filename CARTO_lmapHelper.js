({
	addMarkers: function(component) {
        var markers = component.get('v.markers');
        var record = component.get('v.simpleRecord');
        var map = component.get("v.map");
        console.log("hi andrew");
        console.log(record);
        console.log("hey, UMgeolocalization lat/long updated");
        console.log(record.UMgeolocalization__Latitude__s);
        console.log(record.UMgeolocalization__Longitude__s);
        //tiles.setUrl('https://athompson.carto.com/api/v1/map/named/sfdc_statefarm_route/all/{z}/{x}/{y}.png?config={"lat":"'+ record.UMgeolocalization__Latitude__s +'","lng":"'+ record.UMgeolocalization__Longitude__s +'"}')
        
        if (markers) {
        	markers.clearLayers();
        }
        
        if (record.UMgeolocalization__Latitude__s != null & record.UMgeolocalization__Longitude__s != null)
        {
        window.L.marker([record.UMgeolocalization__Latitude__s ,record.UMgeolocalization__Longitude__s ]).addTo(markers).bindPopup(record.Subject);
        map.panTo([record.UMgeolocalization__Latitude__s ,record.UMgeolocalization__Longitude__s ], 13);
        }
    }
})
