console.log("inicia aplicación")

process.on('uncaughtException',(err)=>{
    console.log(err)
})

funcioninexistente();


process.on('exit',()=>{
    console.log('aplicación terminó')
})