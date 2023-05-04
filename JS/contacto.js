const entradas=document.querySelectorAll('.fuente-botones')

function respuestaClick1(){
    alert("Recibimos tu mensaje, te responderemos a la brevedad")
}
function respuestaClick2(){
    console.log("Usuario borró los datos")
}

entradas[0].addEventListener('click', respuestaClick1)
entradas[1].addEventListener('click', respuestaClick2)

const inputs=document.querySelectorAll('input')
const mensaje=document.querySelector('textarea')

const formnombre = inputs[0]
const correo = inputs[1]
const telefono = inputs[2]

formnombre.addEventListener('keyup', ()=>{
    console.log(inputs[0].value)
})

correo.addEventListener('keyup',()=>{
    console.log(inputs[1].value)
})

telefono.addEventListener('keyup',()=>{
    console.log(inputs[2].value)
})

mensaje.addEventListener('keyup', ()=>{
    console.log(mensaje.value)
})

