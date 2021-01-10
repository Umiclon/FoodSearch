//https://blog.bearer.sh/yelp-api-how-to/
//setups up local server

const express = require('express');
const axios = require('axios');
const app = express();
app.listen(3000, () => console.log('localhost:3000 is running'));
app.use(express.static('webpage'));

require('dotenv').config();

let API_KEY = process.env.API_KEY;

let yelpREST = axios.create({
    baseURL: "https://api.yelp.com/v3/",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
  })
  
  yelpREST("/businesses/search", {
    params: {
      location: "vancouver",
      term: "restaurant",
      limit: 20,
    },
  }).then(({ data }) => {
    let { businesses } = data
    // I did not quite understand how to fetch and use data from APIs, 
    //so this part just creates blocks of code that I can copy paste over into the map.js file
    businesses.forEach((b) => {
      console.log("var myMarker = L.marker([", b.coordinates.latitude, ", ", b.coordinates.longitude, "]).addTo(myMap);")
      console.log("var popup = myMarker.bindPopup(\"<b>", b.name, "</b><br>Price: ", b.price, "\").openPopup();");

      })
  })