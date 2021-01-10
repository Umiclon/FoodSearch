// TODO: receives coordinates and calls api, then returns response 
//Implementation of leaflet map relied on:    
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
//https://leafletjs.com/examples/quick-start/
//https://www.youtube.com/watch?v=nZaZ2dB6pow&ab_channel=TheCodingTrain
             
// receives location of client
if('geolocation' in navigator) {
  console.log('geolocation is available');
  navigator.geolocation.getCurrentPosition(async position => {
      //console.log(position.coords);
  });
} else {
  console.log('geolocation is unavailable');
}

// vancouver coordinates
const myMap = L.map('foodMap').setView([49.2827, -123.1207], 13);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(myMap);

// coordinates and info generated from Yelp Fusion API
var myMarker = L.marker([ 49.2679331 ,  -123.149019 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Fable </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.191657609781345 ,  -123.08112043887378 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Popeyes Louisiana Kitchen </b><br>Price:  undefined ").openPopup();
var myMarker = L.marker([ 49.2631251 ,  -123.1166034 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Saku </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.27501 ,  -123.122 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> The Flying Pig - Yaletown </b><br>Price:  $$ ").openPopup();       
var myMarker = L.marker([ 49.27497 ,  -123.06915 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Lunch Lady </b><br>Price:  undefined ").openPopup();
var myMarker = L.marker([ 49.2837849 ,  -123.1066087 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> The Flying Pig - Gastown </b><br>Price:  $$ ").openPopup();        
var myMarker = L.marker([ 49.2734341 ,  -123.1192724 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> OEB Breakfast Co. </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.2802586 ,  -123.1096376 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Jam Cafe on Beatty </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.25627292573432 ,  -123.08909775135942 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> The Peri Peri Shack </b><br>Price:  undefined ").openPopup();
var myMarker = L.marker([ 49.2801460007961 ,  -123.109925328073 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Chambar </b><br>Price:  $$$ ").openPopup();
var myMarker = L.marker([ 49.252851 ,  -123.101296 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Published </b><br>Price:  undefined ").openPopup();
var myMarker = L.marker([ 49.2765067 ,  -123.0696349 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Downlow Chicken Shack </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.2908176 ,  -123.1343912 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Dinesty Dumpling House </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.278431 ,  -123.098205 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Phnom Penh </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.2804429972571 ,  -123.117036269849 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Medina Cafe </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.2914561357511 ,  -123.127575841549 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Cardero's Restaurant & Marine Pub </b><br>Price:  $$$ ").openPopup();
var myMarker = L.marker([ 49.28707 ,  -123.12925 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Forage </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.2787525 ,  -123.1138689 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Fanny Bay Oyster Bar & Shellfish Market </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.2712685403221 ,  -123.139493380397 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Go Fish Ocean Emporium </b><br>Price:  $$ ").openPopup();
var myMarker = L.marker([ 49.290249 ,  -123.1338142 ]).addTo(myMap);
var popup = myMarker.bindPopup("<b> Guu with Garlic </b><br>Price:  $$ ").openPopup();

  