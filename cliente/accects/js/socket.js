let socket = io()
//referenciamos los elemntos del DOOM
const form = document.querySelector('form')
const input = document.querySelector('input')
let mensaje = document.querySelector('ul')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if( input.value){
        socket.emit('chat', input.value)
        input.value = ''
    }
})

//Se crearan y mostraran losmensajes en el apratdao de ul
socket.on('chat',(msg)=>{
    let item =document.createElement('li')
    item.textContent = msg
    mensaje.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight) //propiedad para mostra los mensajes
})