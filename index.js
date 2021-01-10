const express = require('express');
const app = express();
app.listen(3000, () => console.log('3000 in use'));
app.use(express.static('webpage'));

// function setup() {
//     createCanvas(200,200);
// }

// function draw(){
//     background(0);
//     fill(100,100,100);
//     rect(100,100,100,100);
// }

