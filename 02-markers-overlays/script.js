let singapore = [1.3521, 103.8198]; //Singapore latlong
let singaporeZoo = [1.4043, 103.793];
let map = L.map('map').setView(singapore, 12); //Setting center point

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

let singaporeMarker = L.marker(singapore)
singaporeMarker.addTo(map)
singaporeMarker.bindPopup("<p>Singapore</p>")

singaporeMarker.addEventListener('click', function(){
    alert("Singapore");
})

let circle = L.circle(singaporeZoo, {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
})

// add it to the map
circle.addTo(map);