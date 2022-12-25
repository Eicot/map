let singapore = [1.3521, 103.8198]; //Singapore latlong
let map = L.map('map').setView(singapore, 12); //Setting center point

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

loadData();

// JavaScript has function hoisting.
// any functions we define will be automatically bring to the top of JS file
async function loadData() {
    // important: axios.get requires a URL
    // in this case we are using a relative URL
    let response = await axios.get("singapore-population.geojson");

    // display the content of the geojson file on the map
    // response.data holds the actual data from the geojson file
    // the second paramter of L.geoJson is a configuration object
    const singaporePopulation = L.geoJson(response.data, {
        // onEachFeature is a fixed function name from Leaflet
        // it is called for each feature in response.data
        onEachFeature: function(feature, layer) {
            // feature paramter to the data of the feature
            console.log(feature);

            // layer parameter is the shape, line or marker etc. that will be added to the map
            layer.bindPopup(feature.properties.PLN_AREA_N);
            layer.bindPopup(feature.properties.SUBZONE_N);
        }
    })

    // add the cycling layer to the map
    singaporePopulation.addTo(map);

    singaporePopulation.setStyle({
        color: 'blue'
    })
}  