var express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Home page TBD');
});


app.listen(3000, 'localhost', function(){
    console.log("listening for requests at localhost:3000/");
});