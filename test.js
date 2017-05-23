const siege = require("siege");

siege()
    .on(228)
    .for(100).times
    .get('/api/domains')
    .attack();







/*
* node index.js
* node test
* +
* pm2 start index
* node test
* pm2 stop index
* */