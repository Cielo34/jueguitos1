
/**JUEGO DE COLORES */


//Declaro la funcion para las 3 chances
let intento = 0;

let chance =()=>{
    intento += 1;
//ACA USO EL OPERADOR LOGICO AND
 intento > 2 && swal("PERDISTE!", "Para nuevo intento presione: Volver a intentar");
   
}


//VOLVER A INTENTAR
const volverIntentar = document.getElementById("volverIntentar");
volverIntentar.addEventListener("click", () =>{
    intento = 0;
})



//BOTON USANDO EL METODO ADDEVENTLISTENER:
const btnIncorrecto1 = document.getElementById("btnIncorrecto1");

btnIncorrecto1.addEventListener("click", () =>{
    console.log("Nop!");
    chance();   
})

// BOTON UTILIZANDO LAS PROPIEDADES DEL NODO:

const btnIncorrecto2 = document.getElementById("btnIncorrecto2");

btnIncorrecto2.onclick = () =>{
    console.log("Nop!");
    chance();

}

const btnIncorrecto3 = document.getElementById("btnIncorrecto3");

btnIncorrecto3.addEventListener("click", () =>{
    console.log("Nop!");
    chance();

})

const btnIncorrecto4 = document.getElementById("btnIncorrecto4");

btnIncorrecto4.addEventListener("click", () =>{
    console.log("Nop!");
    chance();

})

const btnIncorrecto5 = document.getElementById("btnIncorrecto5");

btnIncorrecto5.addEventListener("click", () =>{
    console.log("Nop!");
    chance();

})

const btnIncorrecto6 = document.getElementById("btnIncorrecto6");

btnIncorrecto6.addEventListener("click", () =>{
    console.log("Nop!");
    chance();

})

const btnIncorrecto7 = document.getElementById("btnIncorrecto7");

btnIncorrecto7.addEventListener("click", () =>{
    console.log("Nop!");
    chance();

})


//EL CLICK CORRECTO: 


const btnCorrecto = document.getElementById("btnCorrecto");


btnCorrecto.addEventListener("click", () =>{
    swal("ADIVINASTE", "Como supiste?");
})



/**JUEGO DE CAMINITO */

// CONTADOR
let counterVal = 0;

function increment(){
    update(++counterVal);
}

function update(val){
    document.getElementById("counter-label").innerHTML = val;
}


// Boton RESET de contador


const reset = document.getElementById("reset");
reset.addEventListener("click", () =>{
    update(counterVal=0)
})




//GUARDAR JUGADORES:


class Jugador {
    constructor(nombre, edad, toques){
        this.nombre = nombre;
        this.edad = edad;
        this.toques = toques;
    }
}

const jugadores = [];

//si el localstorage tiene datos, se agregan al array de jugadores

if(localStorage.getItem("jugador")){
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    
    //aca uso el operador avanzado SPREAD
    jugadores.push(...jugador);

}


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    agregarJugador();
})


function agregarJugador(){
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const toques = document.getElementById("toques").value;

    const nuevoJugador = new Jugador(nombre, edad, toques);
    jugadores.push(nuevoJugador);
    //AGREGO AL LOCALSTORAGE
    localStorage.setItem("jugador", JSON.stringify(jugadores));
    formulario.reset();

}

const contenedorJugadas = document.getElementById("contenedorJugadas");

const verJugadas = document.getElementById("verJugadas");

verJugadas.addEventListener("click", () => {
    mostrarJugadas();
})

function mostrarJugadas(){
    //esta linea reincia el contenedor, para que no muestre muchas veces lo mismo
    contenedorJugadas.innerHTML = "";
    jugadores.forEach(jugadores =>{
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <p>Nombre del Jugador: ${jugadores.nombre}</p>
                            <p>Edad del Jugador: ${jugadores.edad}</p>
                            <p>Toques del Jugador: ${jugadores.toques}</p>
                            <p></p>
                        
                        </div>
        
                         `;
         contenedorJugadas.appendChild(div);
    })
}



