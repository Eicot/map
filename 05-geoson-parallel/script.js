// latlng is represente of an array
// index 0 is the latitude
// index 1 is the longitude
let singapore = [1.29, 103.85];

// L is provided by leaflet.js
// L is the leaflet object and it allows
// us to features from Leaflet
// the first parameter to the map function
// is the ID Of the <div> that will hold it
const map = L.map('map');
map.setView(singapore, 13);

// the tile layer basically represents
// the map that you can see
// when we set up the tile layer we're requesting
// a visual style of the map
const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
});

// reminder: univerisal thing with leaflet.
// after you created a Layer, you must add to it the map to display it
tileLayer.addTo(map);   // alternatively: map.add(tileLayer);

loadData();
loadParks();

console.log("lalalalalala")

async function loadData(){
  const response = await axios.get('cycling-path.geojson');

  // the following lines are only executed after axios.get has finished, because we use await
  const cyclingLayer = L.geoJson(response.data, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.Description);
    } // end onEachFeature 
  }); // end L.geoJson

  cyclingLayer.addTo(map);
  cyclingLayer.setStyle({
    color: 'brown'
  });

} // end loadData

async function loadParks() {
  const response = await axios.get("nparks.geojson");
  const parksLayer = L.geoJson(response.data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.Description);
    }
  })

  parksLayer.addTo(map);
  parksLayer.setStyle({
    color:'green'
  })
}









