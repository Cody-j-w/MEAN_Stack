const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const PORT = 1337;

app.use(bodyParser.json());


require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})