
document.querySelector("body").onload=()=>{
    console.log("hola")
    let email=JSON.parse(sessionStorage.getItem("email"))
    console.log(email)
    document.querySelector("#de").textContent=email.remitente
    document.querySelector("#para").textContent=email.destinatario
    document.querySelector("#asunto").textContent=email.asunto
    document.querySelector("#mensaje").textContent=email.mensaje
    
    
}

