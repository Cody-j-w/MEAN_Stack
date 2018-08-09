const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const PORT = 1337;

app.use(session({
    secret:'notasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(flash());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})