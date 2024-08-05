const celdas=document.getElementsByClassName("celda");


for (let index = 0; index < celdas.length; index++) {

    celdas[index].addEventListener("click", function () {
        celdas[index].innerHTML = "X";  

    let numeroAleatorio = Math.floor(Math.random() * 9); 
    //ver si la celda aleatoria está ocupada
    if (celdas[numeroAleatorio].innerHTML === "") {
        celdas[numeroAleatorio].innerHTML = "O" //sino colocar O

    }else{ //sino debería buscar una celda que si esté vacía
        for (let index = 0; index < celdas.length; index++) {
            
            
            if (celdas[numeroAleatorio].innerHTML = "" ) {
                celdas[numeroAleatorio].innerHTML = "O";
                break; //ya encontró una, ya no busque
            }
    
         
        }
    }       
    })
}

