function mostrarMensaje(){
    let edad = parseInt(document.getElementById('edad').value);

    //if (edad >= 18) {
    //   mensaje = "Sos mayor de edad" 
    //} else {
    //    mensaje = "Sos menor de edad"
    //}
    let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad"
    alert(mensaje)
    //document.write(mensaje)
}

// function mostrarMensajeDos(){
//     let edadP = parseInt(document.getElementById('edadP').value)
//     let estaturaP = parseFloat(document.getElementById('estaturaP').value)
//     let pesoP = parseInt(document.getElementById('pesoP').value)

//     let parametroEdad = 80
//     const parametroEstatura = 1.40
//     const parametroPeso = 70
//     const mensajeDesicion= ""

//     if (edadP <= parametroEdad) {
//         if (estaturaP >= parametroEstatura) {
//             if (pesoP == parametroPeso) {
//                 mensajeDesicion = "Apto para realizar el deporte"
//             } else {
//                 mensajeDesicion ="No apto. Peso no valido"
//             }
//         } else {
//             mensajeDesicion ="No apto. Estatura no valida"
//         }
//     } else {
//         mensajeDesicion ="No apto. Edad no permitida"
//     }

    //if con operador logico AND(&&)

   // alert(mensajeDesicion)
   
