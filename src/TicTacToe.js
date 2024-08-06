const celdas=document.getElementsByClassName("celda");


for (let index = 0; index < celdas.length; index++) {

    celdas[index].addEventListener("click", function () {
    if (celdas[index].textContent === "") {
        celdas[index].textContent = "X";  // colooca x en la que yo selecciono
    }   

//Escoger una celda vacía para la compu

let celdasVacias = []

for (let index = 0; index < celdas.length; index++) {
    if (celdas[index].textContent==="") {
        celdasVacias.push(index);
    }
}

if (celdasVacias.length > 0) {
    let numeroAleatorio = Math.floor(Math.random() * celdasVacias.length); 
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

