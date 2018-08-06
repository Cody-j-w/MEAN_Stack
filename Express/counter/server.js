var express = require('express');
var app = express();
var session = require('express-session');
var  bodyParser = require('body-parser');
app.use(session({
    secret:'notasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);


app.listen(8000, function(){
    console.log('listening on port 8000')
})