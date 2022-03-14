const express = require('express');
const {Server} = require('socket.io');

const port = process.env.port||8080;
const app = express();
// const multer = require('multer');
const server = app.listen(port, ()=>console.log(`Listening on ${port}`));
const io = new Server(server);

let log = [];
app.use(express.static(__dirname+'/public'))


io.on('connection',(socket)=>{
    socket.broadcast.emit('newUser')
    
    socket.on('message',data=>{
        log.push(data);
        io.emit('log',log);
    })
    socket.on('registered',data=>{
        socket.emit('log',log);
    })
})

// let counter=0;

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})
/* app.get('/visitas',async (req,res)=>{
    counter++;
    res.send(`Has visitado este endpoint ${counter} veces`)
})

app.get('/productos',async (req,res)=>{
    let productos = await contenedor.GETPRODUCTOS
}); */
app.set('view engine', 'ejs');


//Storage
/* let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/productos');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})
let uploader = multer({storage:storage}) */

app.post('/upload',uploader.single('file'),(req,res)=>{
    let file = req.file;
    console.log(req.body);
    res.send({message:file})
})
app.post('/uploadMultiple',uploader.array('files',2),(req,res)=>{
    let files = req.files;
    res.send({files:files});
})
app.get('views', '/cards',(req,res)=>{
let mostrarcontenedor = contenedor;
res.send(mostrarcontenedor);
    res.render('views/cards',{productos:productos});
});