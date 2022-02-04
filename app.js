const express = require('express');
var fs = require('fs');

const app = express();

const server = app.listen(8080,()=>{
    console.log("Listening on port 8080");
});

let counter=0;

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})
app.get('/visitas',async (req,res)=>{
    counter++;
    res.send(`Has visitado este endpoint ${counter} veces`)
})

//Idea de cómo utilizar para traer productos de tu fs en tu desafí
app.get('/productos',async (req,res)=>{
    let productos = await contenedor.GETPRODUCTOS
});

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