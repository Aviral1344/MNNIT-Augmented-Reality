mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpMTM0NCIsImEiOiJjbHY3eGIwcHIwYzE5MmxxaWwyMzFlcnN2In0.ssp6nnC-NbtxSad_qIaKfw';

data = [
    [25.49263711170552, 81.86108158253262],
    [25.49422339513952, 81.8614225563476],
    [25.4926464990704, 81.86277131315323],
    [25.492001595417946, 81.86274958729267],
    [25.490729007269476, 81.86277298705144],
    [25.49069732440561, 81.86370312740776],
    [25.49349594519484, 81.86273788742386],
    [25.492571879512074, 81.86396637468694],
    [25.494187342654598, 81.86462144262866],
    [25.492573376090274, 81.86505969289885],
    [25.49191670701902, 81.86598878347161],
    [25.491742649548257, 81.86635691369564],
    [25.492707874125056, 81.86634814869024],
    [25.491236299099256, 81.86642703372917],
    [25.490682475885063, 81.86412183730805],
    [25.490967299590288, 81.86339434185852],
    [25.49166353242539, 81.86278079148028],
    [25.494179431136555, 81.86595372343876],
    [25.494155696489653, 81.86640950371975],
    [25.49417151958788, 81.8672158842612],
    [25.494092404088036, 81.86761907451323],
    [25.49439304276096, 81.86785572965914],
    [25.494646211586318, 81.86759277949702],
    [25.49504178681496, 81.86797843974082],
    [25.494717415230564, 81.86844298502702],
    [25.49631553019877, 81.86810991482778],
    [25.49645793545001, 81.8681625048602],
    [25.49586457912295, 81.86883741027627],
    [25.493641444660312, 81.86821509487409],
    [25.490043472614154, 81.86993775511792],
    [25.492019875667935, 81.86711358868325],
    [25.492784958124396, 81.86811597147243],
    [25.49209971058919, 81.8684255308606],
    [25.489901045827043, 81.8674091851805],
    [25.488884890657502, 81.86932188032627],
    [25.491575248067093, 81.8692999185686],
    [25.491584656740034, 81.86996701660308],
    [25.4920655549032, 81.86935072980823],
    [25.491595864034437, 81.86896449171975],
    [25.491605548400806, 81.86998909554319],
    [25.490554790082523, 81.86935072980557],
    [25.490118989008796, 81.86398094737662],
    [25.49056931676139, 81.86317092028014],
    [25.49186218383242, 81.8657994850661],
    [25.493188931843644, 81.86374491299762],
    [25.492341557977724, 81.86306363188608],
    [25.492046186251773, 81.86200684154821],
    [25.491721760737057, 81.862344799877],
    [25.49407987848268, 81.86369126877999],
    [25.495101553710608, 81.86472123702846],
    [25.493484300762105, 81.86593895992551],
    [25.49369251119466, 81.86493044935585],
    [25.494191246338513, 81.86635738453364],
    [25.493873987285458, 81.86767566703254],
    [25.4962514307615, 81.86880219481213],
    [25.49831410328838, 81.87047589324219],
    [25.498522305357525, 81.87019694350971],
    [25.489888879756624, 81.86742353944416],
    [25.492614338485183, 81.86532651448346]
]



var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9', // Satellite map style
    center: [81.86275619216651, 25.492636748260814], // Centered on MNNIT Allahabad (example coordinates)
    zoom: 17, // Adjust the initial zoom level as needed
    minZoom: 17, // Set the minimum zoom level
    maxZoom: 20, // Set the maximum zoom level
});

// Add markers for each coordinate
data.forEach(coordinate => {
    var lng = coordinate[1];
    var lat = coordinate[0];
    
    var marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

    // Add click event listener to each marker
    marker.getElement().addEventListener('click', function() {
        // Show Street View panorama for the clicked location
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'), {
                position: { lat: lat, lng: lng },
                pov: { heading: 165, pitch: 0 }, // Set the heading and pitch of the panorama
                zoom: 1 // Adjust the zoom level of the panorama
            });
    });
});



/*

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


data.forEach(coordinate => {
    lng = coordinate[1];
    lat = coordinate[0];

    console.log(lng, lat);
    console.log();

    map.on('load', function () {
        map.addSource('marker', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [lng, lat] // MNNIT Allahabad coordinates (example)
                    }
                }]
            }
        });
    
        map.addLayer({
            id: 'marker',
            type: 'circle',
            source: 'marker',
            paint: {
                'circle-radius': 6,
                'circle-color': '#FF0000', // White color
                'circle-opacity': 0.6 // Adjust opacity as needed
            }
        });
    });
});




map.on('click', 'marker', function() {
    alert('MNNIT Allahabad Campus clicked!');
    // You can customize this function to perform specific actions
});


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

*/