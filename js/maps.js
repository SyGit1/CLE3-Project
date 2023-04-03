function landmarkGeocode(platform) {
    const geocoder = platform.getSearchService(),
        landmarkGeocodingParameters = {
            q: 'Erasmus MC',
            at: '0,0',
            limit: 1
        };

    geocoder.discover(
        landmarkGeocodingParameters,
        onSuccess,
        onError
    );
}

/**
 * This function will be called once the Geocoder REST API provides a response
 * @param  {Object} result          A JSONP object representing the  location(s) found.
 *
 * see: http://developer.here.com/rest-apis/documentation/geocoder/topics/resource-type-response-geocode.html
 */
function onSuccess(result) {
    const locations = result.items;
    /*
     * The styling of the geocoding response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addLocationsToMap(locations);
    addLocationsToPanel(locations);
    // ... etc.
}

/**
 * This function will be called if a communication error occurs during the JSON-P request
 * @param  {Object} error  The error message received.
 */
function onError(error) {
    alert('Can\'t reach the remote server');
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
    'apikey': '9iw8-Sw_KHN2NFYkF6Bwkg3-opWgHgr3oCfbv_m-l4Q'
});
const defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Rotterdam
const map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
        center: {lat: 51.9173828, lng: 4.4846457},
        zoom: 15,
        pixelRatio: window.devicePixelRatio || 1
    });
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

const locationsContainer = document.getElementById('panel');

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
const ui = H.ui.UI.createDefault(map, defaultLayers);

// Hold a reference to any infobubble opened
let bubble;

/**
 * Opens/Closes a infobubble
 * @param  {H.geo.Point} position     The location on the map.
 * @param  {String} text              The contents of the infobubble.
 */
function openBubble(position, text){
    if(!bubble){
        bubble =  new H.ui.InfoBubble(
            position,
            {content: text});
        ui.addBubble(bubble);
    } else {
        bubble.setPosition(position);
        bubble.setContent(text);
        bubble.open();
    }
}

/**
 * Creates a series of list items for each location found, and adds it to the panel.
 * @param {Object[]} locations An array of locations as received from the
 *                             H.service.GeocodingService
 */
function addLocationsToPanel(locations){

    const nodeOL = document.createElement('ul');
    let i;

    nodeOL.style.fontSize = 'small';
    nodeOL.style.marginLeft ='5%';
    nodeOL.style.marginRight ='5%';


    for (i = 0;  i < locations.length; i += 1) {
        let location = locations[i],
            li = document.createElement('li'),
            divLabel = document.createElement('div'),
            content =  location.title  + '</br>';
        position = location.position;

        content += '<strong>Huisnummer:</strong> ' + location.address.houseNumber + '<br/>';
        content += '<strong>Straat:</strong> '  + location.address.label + '<br/>';
        content += '<strong>Stad:</strong> ' + location.address.city + '<br/>';
        content += '<strong>Postcode:</strong> ' + location.address.postalCode + '<br/>';
        content += '<strong>Provincie:</strong> ' + location.address.county + '<br/>';
        content += '<strong>Land:</strong> ' + location.address.countryName + '<br/>';
        content += 'position: ' +
            Math.abs(position.lat.toFixed(4)) + ((position.lat > 0) ? 'N' : 'S') +
            ' ' + Math.abs(position.lng.toFixed(4)) + ((position.lng > 0) ? 'E' : 'W') + '<br/>';

        divLabel.innerHTML = content;
        li.appendChild(divLabel);

        nodeOL.appendChild(li);
    }

    locationsContainer.appendChild(nodeOL);
}


/**
 * Creates a series of H.map.Markers for each location found, and adds it to the map.
 * @param {Object[]} locations An array of locations as received from the
 *                             H.service.GeocodingService
 */
function addLocationsToMap(locations){
    const group = new H.map.Group();
    let i;

    // Add a marker for each location found
    for (i = 0;  i < locations.length; i += 1) {
        let location = locations[i];
        marker = new H.map.Marker(location.position);
        marker.label = location.title;
        group.addObject(marker);
    }

    group.addEventListener('tap', function (evt) {
        map.setCenter(evt.target.getGeometry());
        openBubble(
            evt.target.getGeometry(), evt.target.label);
    }, false);

    // Add the locations group to the map
    map.addObject(group);
    map.getViewModel().setLookAtData({
        bounds: group.getBoundingBox()
    });
    map.setZoom(Math.min(map.getZoom(), 16));
}

// Now use the map as required...
landmarkGeocode(platform);
