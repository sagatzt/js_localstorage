//construir un formulario que permita enviar un e-mail donde
//se deben cumplir los siguientes requisitos:

//1. Cuando se pulse enviar, redirigir a index2.html donde 
//   aparecerá un mensaje indicando que se ha enviado correctamente
//   al destinatario xxx con el asunto xxx y el mensaje xxx.
//2. Deberá guardar el email del destinatario, cuando sea nuevo,
//   en el localStorage
//3. 

//AVANZADO:
//2. En index2 habrá un link para regresar a index1 y enviar otro
//3. Transcurridos 3 segundos, redirigirá automáticamente al index1
let mensajes=[]
if(localStorage.getItem("mensajes")!=null)
    mensajes=JSON.parse(localStorage.getItem("mensajes"))
console.log(mensajes)

document.querySelector("#btnGuardar").onclick=()=>{
    let destinatario=document.querySelector("#para").value
    let email={
        fecha: new Date(),
        remitente: document.querySelector("#de").value,
        destinatario: document.querySelector("#para").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#texto").innerHTML
    }
    mensajes.push(email)
    localStorage.setItem("email", JSON.stringify(mensajes))
    //localStorage.setItem(email.destinatario,email.destinatario)
}

listaMensajes()
function listaMensajes(){
    //let destinatario=localStorage.getItem("destinatario")
    //document.querySelector("#mensaje>label[name='datos']").textContent=destinatario
    for(i=0;i<localStorage.length;i++){
        console.log(localStorage.key(i))
    }
    console.log(localStorage)
    let email = JSON.parse(sessionStorage.getItem("email"))
    console.log(email)
}
