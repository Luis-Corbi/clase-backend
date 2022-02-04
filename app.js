const express = require('express');
const moment = require('moment');
var fs = require('fs');
const http = require('http');

const server = http.createServer((request,response)=>{
    console.log("alguien me generó una petición");
})
    const conectedserver = server.listen(8080,()=>{
        console.log("Listening on port 8080");
});

/* const app = express();

const conectedserver = app.listen(8080,()=>{
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
app.get('/fyh',(req,res)=>{
    let dateTime = moment();
    res.send({
        fyh: dateTime.format('DD/MM/YYYY hh:mm:ss')
    })
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
contenedor(); */