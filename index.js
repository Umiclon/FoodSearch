//https://blog.bearer.sh/yelp-api-how-to/
const express = require('express');
const app = express();
app.listen(3000, () => console.log('3000 in use'));
app.use(express.static('webpage'));

const axios = require("axios");
let API_KEY = config.SECRET_API_KEY;

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
      limit: 10,
    },
  }).then(({ data }) => {
    let { businesses } = data
    businesses.forEach((b) => {
      console.log("Name: ", b.name)
    })
  })

  