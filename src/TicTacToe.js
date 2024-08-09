const celdas = document.getElementsByClassName("celda");
const aviso = document.getElementById("aviso");
const iconoReiniciar = document.getElementById("reiniciar");
const marcadorPersona = document.getElementById ("marcadorPersona");
const marcadorCompu = document.getElementById("marcadorCompu");
const btnResetScore = document.getElementById("btnResetScore")



let ganesPersona = parseInt(localStorage.getItem("ganesPersona")) || 0;
let ganesCompu = parseInt(localStorage.getItem("ganesCompu")) || 0;

marcadorPersona.innerHTML = ganesPersona;
marcadorCompu.innerHTML = ganesCompu;

// Al cargar la página, reiniciar el marcador en el DOM a 0
window.onload = function() {
};

//JUEGA LA PERSONA
//Recorro todas las celdas   
for (let index = 0; index < celdas.length; index++) {
    celdas[index].addEventListener("click", function () {
        console.log(celdas[index])

        if (celdas[index].textContent === "") {
            celdas[index].textContent = "🤍";  // Coloca X en la celda seleccionada
            celdas[index].style.backgroundColor= "#FFE3FD"
    
console.log(celdas[index]);

const combinacionesGanadoras= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [0,4,8], 
    [2,4,6],
]
//un for para recorrer todas esa combinaciones
for (let index = 0; index < combinacionesGanadoras.length; index++) { 
    const combinación = combinacionesGanadoras[index] //cada que itera esa varieble obtiene una combinación

    const indiceA = combinación [0];
    const indiceB = combinación [1];
    const indiceC = combinación [2];
    console.log(combinación);
//valido, para ver si las celdas correspondientes a los índices a, b y c tienen "🤍"
    if (celdas[indiceA].textContent === "🤍" && celdas[indiceB].textContent === "🤍" && celdas[indiceC].textContent === "🤍") {
        aviso.textContent = "🤍¡Ganaste!🤍";
        resaltarGanador([indiceA, indiceB, indiceC]);
        terminarJuego();
        return; 
        
    }   
}

//JUEGA LA COMPU
// Escoger una celda vacía para la computadora

setTimeout(function () {
    
    let celdasVacias = []; //Guardo todas las celdas que quedaron vacías después de que la persona jugó

    //Se vuelve a recorrer para ahora guardar las celdas vacías
    for (let index = 0; index < celdas.length; index++) {

        if (celdas[index].textContent === "") {
        celdasVacias.push(celdas[index]);
        }
    }

     
//La compu elija al azar
        if (celdasVacias.length > 0) { //Comparo la cantidad de celdas vacías es mayor ">" que 0
        //si esto no es cierto no se ejecuta, la compu no juega
         let numeroAleatorio = Math.floor(Math.random() * celdasVacias.length); 
         celdasVacias[numeroAleatorio].textContent = "💫";

        for (let index = 0; index < combinacionesGanadoras.length; index++) {
            const combinación = combinacionesGanadoras[index]
            const indiceA = combinación [0];
            const indiceB = combinación [1];
            const indiceC = combinación [2];
        
        
        if (celdas[indiceA].textContent === "💫" && celdas[indiceB].textContent === "💫" && celdas[indiceC].textContent === "💫") {
            aviso.textContent = "¡Sigue intentándolo!";
            resaltarGanador([indiceA, indiceB, indiceC]);
            terminarJuego();
            return; 
            }
        }
        }
        empate(); //llamo a la función empate

    }, 300); // milisegundos 0.3 segundos
}

});
}

 //EMPATE
//Creo una función y la llamo después de cada jugada

function empate() { // recorre todas las celdas para ver si alguna está vacía

    let celdasLlenas = true //se asume que están llenas
 
    for (let index = 0; index < celdas.length; index++) {
     if (celdas[index].textContent === "") {
         celdasLlenas = false; //si encontró celda vacía, ahora es falso
         break; 
     }
    }
 //celdasLlenas debería seguir siendo true y el texto de aviso debería estár vacío
 //eso indica que aún no hay ganador en el aviso, entonces el texto cambia a empate
    if (celdasLlenas && aviso.textContent === "") { 
     aviso.textContent = "¡Empate!"
    }
 };

 
//RESALTAR AL GANADOR
function resaltarGanador(combinacionesGanadoras) {
    for (let index = 0; index < combinacionesGanadoras.length; index++) {
        const indice = combinacionesGanadoras[index];
        celdas[indice].classList.add("celdasGanadoras");
    }
};


//TERMINAR JUEGO
function terminarJuego() {
for (let index = 0; index < celdas.length; index++) {
        celdas[index].style.pointerEvents = "none"; // desactiva todas las celdas
}
    if (aviso.textContent === "🤍¡Ganaste!🤍") {
        // Incrementa y guarda los ganes del jugador
        ganesPersona++;       
        localStorage.setItem("ganesPersona", ganesPersona);
        marcadorPersona.innerHTML = ganesPersona;


    } else if (aviso.textContent === "¡Sigue intentándolo!") {
        // Incrementa y guarda los ganes de la computadora
        ganesCompu++;
        localStorage.setItem("ganesCompu", ganesCompu);
        marcadorCompu.innerHTML = ganesCompu;

    }
}

// REINICIAR JUEGO
iconoReiniciar.addEventListener("click", function () {
    for (let index = 0; index < celdas.length; index++) {
        celdas[index].style.pointerEvents = "auto";
        celdas[index].textContent = "";
        celdas[index].style.backgroundColor = "";
        celdas[index].classList.remove("celdasGanadoras");
    }
    aviso.textContent = "";
});

btnResetScore.addEventListener("click", function () {
    ganesPersona = 0;
    ganesCompu = 0;
    localStorage.setItem("ganesPersona", ganesPersona);
    localStorage.setItem("ganesCompu", ganesCompu);
    location.reload();
})