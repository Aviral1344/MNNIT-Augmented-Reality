mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpMTM0NCIsImEiOiJjbHY3eGIwcHIwYzE5MmxxaWwyMzFlcnN2In0.ssp6nnC-NbtxSad_qIaKfw';

data = [
    [25.4927569,81.8611763,"gangagate"],
    [25.4927798,81.8615855,"STPI gate"],
    [25.4936128,81.8620892,"administrative building"],
    [25.49405,81.8616381,"mnnit logo"],
    [25.4936284,81.8627548,"main academics gate"],
    [25.4943278,81.862803,"biotech"],
    [25.4943241,81.8623851,"yamuna cafe"],
    [25.4943111,81.8616742,"yamuna gate"],
    [25.4926551,81.862706,"dean academics chuaraha"],
    [25.4923845,81.8627534,"dean academics"],
    [25.492109,81.8627611,"design centre"],
    [25.4917447,81.86277,"computer centre"],
    [25.4910001,81.8627484,"svbh gate"],
    [25.4910559,81.8633791,"computer department"],
    [25.490954,81.8637774,"P.G. girl hostel"],
    [25.490831,81.8643536,"SMS"],
    [25.4918483,81.8652504,"NCC BUILDING"],
    [25.491872,81.8660697,"DEWSIS CAFE"],
    [25.4922581,81.8663925,"M.P. HALL"],
    [25.4929065,81.8664154,"GYMKHANA GROUND"],
    [25.494265,81.8663642,"BOYS TUNNEL"],
    [25.4942795,81.8658614,"COURT 97"],
    [25.4943038,81.8646349,"ATHLETICS GROUND TIRAHA"],
    [25.4941223,81.8646656,"WORKSHOP LAB"],
    [25.4932948,81.8646531,"CYCLE STAND"],
    [25.4926427,81.8646301,"CAFE 96 CHAURAHA"],
    [25.4922781,81.8646058,"CAFE 96"],
    [25.4926561,81.8642658,"CENTRAL LIBRARY"],
    [25.4926716,81.8635362,"G.S. GATE ENRTY"],
    [25.4942251,81.8673497,"TILAK HOSTEL PARK"],
    [25.493726,81.86808,"PATEL GATE"],
    [25.494488,81.8679231,"TILAK HOSTEL"],
    [25.4947895,81.8684968,"MALVIYA HOSTEL"],
    [25.4948826,81.8676815,"SAC"],
    [25.4952753,81.8677309,"TANDON HOSTEL"],
    [25.4963879,81.8681097,"TANDON GATE"],
    [25.4961732,81.8685826,"NEW HOSTEL"]
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
        document.getElementById("myNav").style.width = "100%";
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'), {
                position: { lat: lat, lng: lng },
                pov: { heading: 165, pitch: 0 }, // Set the heading and pitch of the panorama
                zoom: 1 // Adjust the zoom level of the panorama
            });
    });
});

const close = document.getElementById("closer");
close.addEventListener('click', ()=> {
    document.getElementById("myNav").style.width = "0%";
});

function changeMapStyle(style) {
    map.setStyle('mapbox://styles/mapbox/' + style);
}

// document.getElementById('satellite-btn').addEventListener('click', function() {
//     changeMapStyle('satellite-v9');
// });

document.getElementById('dark-btn').addEventListener('click', function() {
    changeMapStyle('dark-v10');
});

document.getElementById('outdoors-btn').addEventListener('click', function() {
    changeMapStyle('outdoors-v11');
});

document.getElementById('satellite-streets-btn').addEventListener('click', function() {
    changeMapStyle('satellite-streets-v11');
});

// document.getElementById('satellite-streets-v10-btn').addEventListener('click', function() {
//     changeMapStyle('satellite-streets-v10');
// });
