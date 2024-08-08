const celdas = document.getElementsByClassName("celda");
const aviso = document.getElementById("aviso");
const iconoReiniciar = document.getElementById("reiniciar");


//JUEGA LA PERSONA
//Recorro todas las celdas
for (let index = 0; index < celdas.length; index++) {
    //agrego el evento
    celdas[index].addEventListener("click", function () {
        console.log(celdas[index])
        //verifico si está vacía la celda
        if (celdas[index].textContent === "") {
            celdas[index].textContent = "X";  // Coloca X en la celda seleccionada
            celdas[index].style.backgroundColor= "#FFE3FD"
    
console.log(celdas[index]);

//Verifico si la persona gana
const combinacionesGanadoras= [
    [0,1,2], //filas
    [3,4,5],
    [6,7,8],
    [0,3,6], //columnas
    [1,4,7],
    [2,5,8],
    [0,4,8], //Diagonales
    [2,4,6],
]
//un for para recorrer todas esa combinaciones
for (let index = 0; index < combinacionesGanadoras.length; index++) { 
    const combinación = combinacionesGanadoras[index] //cada que itera esa varieble obtiene una combinación
// agrego cada elemento a una varieble, separo
    const a = combinación [0];
    const b = combinación [1];
    const c = combinación [2];

//valido, para ver si las celdas correspondientes a los índices a, b y c tienen una "X"
    if (celdas[a].textContent === "X" && celdas[b].textContent === "X" && celdas[c].textContent === "X") {
        aviso.textContent = "¡Ganaste!"
        break; 
    }
}

//JUEGA LA COMPU
// Escoger una celda vacía para la computadora
    let celdasVacias = []; //Guardo todas las celdas que quedaron vacías después de que la persona jugó

    //Se vuelve a recorrer para ahora guardar las celdas vacías
    for (let index = 0; index < celdas.length; index++) {
        if (celdas[index].textContent === "") {
        celdasVacias.push(celdas[index]);
        }
    }

console.log(celdasVacias);
        
//La compu elija al azar
//Si hay vacías, genera aleatorio entre 0 y el # de celdas que están vacías
        if (celdasVacias.length > 0) { //Comparo la cantidad de celdas vacías es mayor ">" que 0
        //si esto no es cierto no se ejecuta, la compu no juega
         let numeroAleatorio = Math.floor(Math.random() * celdasVacias.length); 
        celdasVacias[numeroAleatorio].textContent = "O"; //la que está vacía se llena con una "O"

        for (let index = 0; index < combinacionesGanadoras.length; index++) {
            const combinación = combinacionesGanadoras[index]
            const a = combinación [0];
            const b = combinación [1];
            const c = combinación [2];
        
        
            if (celdas[a].textContent === "O" && celdas[b].textContent === "O" && celdas[c].textContent === "O") {
                aviso.textContent = "¡Ganó la compu! ¡Sigue intentándolo!"
                break; 
            }
        }
       
        }
        empate(); //llamo a la función empate
        }   
    })
}

//Creo una función para el EMPATE y la llamo después de cada jugada

function empate() { // recorre todas las celdas para ver si alguna está vacía
    let celdasLlenas = true //para ver que todas las celdas estén llenas
 
    for (let index = 0; index < celdas.length; index++) {
     if (celdas[index].textContent === "") {
         celdasLlenas = false; //si encontró celda vacía, ahora es falso
         break; 
     }
     console.log(empate);
     
    }
 //EMPATE
 //celdasLlenas debería seguir siendo true y el texto de aviso debería estár vacío
 //eso indica que aún no hay ganador en el aviso, entonces el texto cambia a empate
    if (celdasLlenas && aviso.textContent === "") { 
     aviso.textContent = "¡Empate!"
    }
 }

 //REINICIAR
iconoReiniciar.addEventListener("click", function () {
    for (let index = 0; index < celdas.length; index++) {
        celdas[index].textContent = ""; //limpia el contenido de la celda
        celdas[index].style.backgroundColor= "" //restablece el color
    }
    aviso.textContent = "" //limpia el aviso
})














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
