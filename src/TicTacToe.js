const celdas=document.getElementsByClassName("celda");



//JUEGA LA PERSONA
//Recorro todas las celdas
for (let index = 0; index < celdas.length; index++) {
    //agrego el evento
    celdas[index].addEventListener("click", function () {
        //verifico si está vacía la celda
        if (celdas[index].textContent === "") {
            celdas[index].textContent = "X";  // Coloca X en la celda seleccionada


//JUEGA LA COMPU
// Escoger una celda vacía para la computadora
    let celdasVacias = []; //Guardo todas las celdas que quedaron vacías después de que la persona jugó
    
    //Se vuelve a recorrer para ahora guardar las celdas vacías
    for (let index = 0; index < celdas.length; index++) {
        if (celdas[index].textContent === "") {
                        celdasVacias.push(celdas[index]);
        }
        }
        
//La compu elija al azar
//Si hay vacías, genera aleatorio entre 0 y el # de celdas que están vacías
        if (celdasVacias.length > 0) { //Comparo la cantidad de celdas vacías es mayor ">" que 0
        //si esto no es cierto no se ejecuta, la compu no juega
         let numeroAleatorio = Math.floor(Math.random() * celdasVacias.length); 
        celdasVacias[numeroAleatorio].textContent = "O"; //la que está vacía se llena con una "O"
        celdasVacias[numeroAleatorio].onclick = null
        }
        }   


    });
}















/*
for (let index = 0; index < celdas.length; index++) {

    celdas[index].addEventListener("click", function () {
    if (celdas[index].textContent === "") {
        celdas[index].textContent = "X";  // colooca x en la que yo selecciono
    }   

//Escoger una celda vacía para la compu

let celdasVacias = []

for (let index = 0; index < celdas.length; index++) {
    if (celdas[index].textContent==="") {
        celdasVacias.push(celdas[index]);
    }
}

if (celdasVacias.length > 0) {
    let numeroAleatorio = Math.floor(Math.random() * celdas.length); 
    celdas[numeroAleatorio].textContent = "O"; 
}

    if (celdas[numeroAleatorio].textContent === "") {
        celdas[numeroAleatorio].textContent = "O"; //sino colocar O

    }else{ //sino debería buscar una celda que si esté vacía

        for (let index = 0; index < celdas.length; index++) {
            
            
            if (celdas[numeroAleatorio].textContent === "") {
                celdas[numeroAleatorio].textContent = "O";
                break; //ya encontró una, ya no busque
            }
         
        }
    }       
    })
}
*/
