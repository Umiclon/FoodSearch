//https://blog.bearer.sh/yelp-api-how-to/
const express = require('express');
const app = express();
app.listen(3000, () => console.log('3000 in use'));
app.use(express.static('webpage'));

require('dotenv').config();

const axios = require("axios");
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
      term: "discounts",
      limit: 10,
    },
  }).then(({ data }) => {
    let { businesses } = data
    businesses.forEach((b) => {
      console.log("Name: ", b.name)
      console.log("Latitude: ", b.coordinates.latitude)
      console.log("Longitude: ", b.coordinates.longitude)
    })
  })


  