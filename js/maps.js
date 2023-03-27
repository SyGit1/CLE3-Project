let platform = new H.service.Platform({
    'apikey': '9iw8-Sw_KHN2NFYkF6Bwkg3-opWgHgr3oCfbv_m-l4Q'
});

// Obtain the default map types from the platform object:
let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
let map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
    });
