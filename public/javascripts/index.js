mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpMTM0NCIsImEiOiJjbHY3eGIwcHIwYzE5MmxxaWwyMzFlcnN2In0.ssp6nnC-NbtxSad_qIaKfw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9', // Use a Mapbox style
    center: [81.86275, 25.49263], // Example: San Francisco, CA
    zoom: 17, // Adjust the initial zoom level as needed
    //pitch: 20, // Set the pitch to 45 degrees (tilted view)
     //bearing: -17.6,
    minZoom: 17, // Set the minimum zoom level
    maxZoom: 20, // Set the maximum zoom level
    //maxBounds: [[81.86237518774574, 25.499090811760308], [81.87097578439969, 25.487767252192306]]
});


map.on('load', function () {
    map.addSource('marker', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [81.862511, 25.493633] // MNNIT Allahabad coordinates (example)
                }
            }]
        }
    });

    // map.addLayer({
    //     id: 'marker',
    //     type: 'circle',
    //     source: 'marker',
    //     paint: {
    //         'circle-radius': 6,
    //         'circle-color': '#FF0000', // White color
    //         'circle-opacity': 0.6 // Adjust opacity as needed
    //     }
    // });
    map.addLayer({
        id: 'outer-circle',
        type: 'circle',
        source: 'marker',
        paint: {
            'circle-radius': 10,
            'circle-color': '#FFFFFF', // Red color
            'circle-opacity': 0.6 // Adjust opacity as needed
        }
    });
    
    // Add the inner circle layer with a smaller radius to create a gap
    map.addLayer({
        id: 'inner-circle',
        type: 'circle',
        source: 'marker',
        paint: {
            'circle-radius': 6,
            'circle-color': '#FF0000', // White color
            'circle-opacity': 1 // Make inner circle fully opaque
        }
    });
    function blinkMarker() {
        var opacity = map.getPaintProperty('outer-circle', 'circle-opacity');
        map.setPaintProperty('outer-circle', 'circle-opacity', opacity === 0 ? 0.6 : 0);
    }
    
    // Call the animation function at intervals to make the marker blink
    setInterval(blinkMarker, 500); // Adjust interval as needed (500ms for example)
});

/*
map.on('click', 'marker', function() {
    alert('MNNIT Allahabad Campus clicked!');
    // You can customize this function to perform specific actions
});
*/

map.on('click', 'marker', function(e) {
    var lat = e.lngLat.lat;
    var lng = e.lngLat.lng;
    
    // Show Street View panorama for the clicked location
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'), {
            position: { lat: lat, lng: lng },
            pov: { heading: 165, pitch: 0 }, // Set the heading and pitch of the panorama
            zoom: 1 // Adjust the zoom level of the panorama
        });
});