const express = require('express');
const {Server} = require('socket.io');

const port = process.env.PORT||8080;
const multer = require('multer');
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

app.get('/', function(req, res) {
      var productos = [
         {name: "Apple IPhone 13 Pro", price: 1299.99, img: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp",},
         {name: "Apple IPhone 12 Pro", price: 1099.99, img: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp",},
         {name: "Samsung Galaxy S21+", price: 849.99, img: "https://http2.mlstatic.com/D_NQ_NP_976371-MLA45566612445_042021-O.webp",},
         {name: "Xiaomi Mi 11 Ultra", price: 919.99, img: "https://http2.mlstatic.com/D_NQ_NP_751583-MLA46773535610_072021-O.webp",}
        ]
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
app.get('views', '/cards',(req,res)=>{
let mostrarcontenedor = contenedor;
res.send(mostrarcontenedor);
    res.render('views/cards',{productos:productos});
});