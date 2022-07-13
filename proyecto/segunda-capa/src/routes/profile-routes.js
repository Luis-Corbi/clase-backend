import express from 'express';
import publicPath from '../config/paths';
import passport from 'passport';

app = express();
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