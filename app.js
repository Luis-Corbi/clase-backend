const express = require('express');
var fs = require('fs');
const multer = require('multer');

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

//Storage
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/productos');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})
let uploader = multer({storage:storage})

app.post('/upload',uploader.single('file'),(req,res)=>{
    let file = req.file;
    console.log(req.body);
    res.send({message:file})
})
app.post('/uploadMultiple',uploader.array('files',2),(req,res)=>{
    let files = req.files;
    res.send({files:files});
})
}
contenedor();