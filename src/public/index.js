const socket = io();
let user;
let chatBox = document.getElementById('chatBox');
Swal.fire({
    title:"Identifícate",
    input:"text",
    text:"Ingresa el nombre de usuario que utilizarás en el chat",
    inputValidator: (value)=>{
        return !value && "¡Necesitas identificarte para poder usar el chat! >:("
    },
    allowOutsideClick:false
}).then(result=>{
    user=result.value;
    socket.emit('registered',user);
})

chatBox.addEventListener('keyup',(evt)=>{

    if(evt.key==="Enter"){
        if(chatBox.value.trim().length>0){
            socket.emit('message',{user:user,message:chatBox.value.trim()})
            chatBox.value="";
        }
    }
})

//SOCKETS
socket.on('newUser',(data)=>{

    //alert("New user");
    
    // Swal.fire({
    //     icon:"success",
    //     text:"Usuario nuevo conectado",
    //     toast:true,
    //     position:"top-right",
    // })
})
socket.on('log',data=>{
    let log = document.getElementById('log')
    let messages = "";
    data.forEach(message=>{
        messages  = messages+ `${message.user} dice: ${message.message}</br>`;
    })
    log.innerHTML = messages;
})