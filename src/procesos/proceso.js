process.on('exit',()=>{
    console.log('aplicacion termino')
})

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
for(let i =0;i<2e9;i++){
    console.log(i)
    if(i===10000){
        // metodo para terminar el proceso
        process.exit();
    }
}

console.log(7)

process.on('beforeExit',()=>{
    console.log('justo antes de que termine la aplicacion')
})