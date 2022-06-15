import express from 'express';
import twilio from 'twilio';
import { createTransport } from 'nodemailer';
import session from 'express-session';
import mongoose from 'mongoose';
import User from '../primer-capa/models/user.js';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const PORT = parseInt(process.argv[2]) || 8080
const app = express();
//configuracion de req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const URL = "mongodb+srv://luiscorbi:RdoiciHvu85mOmbL@cluster0.4f9sv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true
},err=>{
    if(err) throw new Error("No se pudo conectar");
    console.log("db conectada")
})

//crear session
app.use(session({
    secret:"clave",
    resave: true,
    saveUninitialized: true
}))

//configurar passport para autenticacion
//incializar passport
app.use(passport.initialize());
//vincular esa session con passport
app.use(passport.session());

//serializacion
//{id:1, name:"fredy", username:"fredy10",.....} ->{id:1}

passport.serializeUser((user,done)=>{
    return done(null, user.id)
})

//deserializacion {id:1} -> {_id:1, name:"fredy", username:"fredy10",.....}
passport.deserializeUser((id, done)=>{
    User.findById(id,(err,user)=>{
        return done(err,user)
    })
})

//estrategia con passport del registro
passport.use('registro', new LocalStrategy(
    {
        passReqToCallback: true
    },
    (req,username,password,done)=>{
        User.findOne({username:username},(err,user)=>{
            if(err) return done(err)
            if(user) return done(null, false, {message:"user already exists"});
            const newUser = {
                name: req.body.name,
                username: username,
                password: password
            }
            User.create(newUser, (err,userCreated)=>{
                if(err) return done(err);
                return done(null,userCreated)
            })
        })
    }
))

//routes
app.get('/',(req,res)=>{
    res.sendFile(publicPath+'/index.html')
})

app.get('/signup',(req,res)=>{
    res.sendFile(publicPath+'/signup.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(publicPath+'/login.html')
})

app.get('/perfil',(req,res)=>{
    res.sendFile(publicPath+'/perfil.html')
})

app.post("/signupForm",passport.authenticate('registro',{
    failureRedirect: '/signup',
}) ,(req,res)=>{
    res.redirect("/perfil");
    // console.log(req.body)
})
app.listen(PORT, () => {
  console.log(`sever run - ${PORT}`);
});

const TEST_MAIL = 'kyle.schmidt54@ethereal.email'

const transporter = createTransport({
   host: 'smtp.ethereal.email',
   port: 587,
   auth: {
       user: TEST_MAIL,
       pass: 'QmTEND3rqH3sfd1rjf'
   }
});
const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    body: 'Este es un mail de prueba desde Node.js'
} 
try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
 } catch (error) {
    console.log(err)
}
 
const accountSid = 'AC60d1391fef82e42fc42b95ca93dca32d';
const authToken = 'bd229ad9163f34304a319b4a9af41484';
const client = twilio(accountSid, authToken);
 
client.messages 
      .create({ 
         body: 'Hola, este es un mensaje de prueba!',
         from: 'whatsapp:+14155238886',        
         to: 'whatsapp:+5492314447164' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

