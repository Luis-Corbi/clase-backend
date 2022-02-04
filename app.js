const express = require('express');

const app = express();

const server = app.listen(8080,()=>{
    console.log("Listening on port 8080");
});

var fs = require('fs');

function contenedor() {
 fs.readFile('productos.txt', function(err, data) { 
    if(err) throw err; 
    var array = data.toString().split("\n"); 
    for(i in array) { 
        console.log(array[i]);
    } 
});
}
contenedor();