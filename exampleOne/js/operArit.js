function sumar() 
{
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").value)

    //Procesar esos datos
    let resultado = parseInt(numeroU + numeroD)

    //Entregar el resultado
    document.getElementById("resulOperacion").innerHTML = resultado
    
}
