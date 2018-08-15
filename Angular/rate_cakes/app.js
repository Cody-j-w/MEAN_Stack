const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const PORT = 7272;

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})