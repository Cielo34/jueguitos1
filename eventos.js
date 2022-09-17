
/**JUEGO DE COLORES */

//BOTON USANDO EL METODO ADDEVENTLISTENER:
const btnIncorrecto1 = document.getElementById("btnIncorrecto1");

btnIncorrecto1.addEventListener("click", () =>{
    console.log("Nop!");
})

// BOTON UTILIZANDO LAS PROPIEDADES DEL NODO:

const btnIncorrecto2 = document.getElementById("btnIncorrecto2");

btnIncorrecto2.onclick = () =>{
    console.log("Nop!");
}

const btnIncorrecto3 = document.getElementById("btnIncorrecto3");

btnIncorrecto3.addEventListener("click", () =>{
    console.log("Nop!");
})

const btnIncorrecto4 = document.getElementById("btnIncorrecto4");

btnIncorrecto4.addEventListener("click", () =>{
    console.log("Nop!");
})

const btnIncorrecto5 = document.getElementById("btnIncorrecto5");

btnIncorrecto5.addEventListener("click", () =>{
    console.log("Nop!");
})

const btnIncorrecto6 = document.getElementById("btnIncorrecto6");

btnIncorrecto6.addEventListener("click", () =>{
    console.log("Nop!");
})

const btnIncorrecto7 = document.getElementById("btnIncorrecto7");

btnIncorrecto7.addEventListener("click", () =>{
    console.log("Nop!");
})

//EL CLICK CORRECTO: 

const btnCorrecto = document.getElementById("btnCorrecto");

btnCorrecto.addEventListener("click", () =>{
    console.log("SIIIII !!!!!!");
})


/**JUEGO DE CAMINITO */

const bordeCaja = document.getElementById("bordeCaja");
bordeCaja.onmouseover = () =>{
    console.log("Tocaste el borde")
}


const bordeCaja2 = document.getElementById("bordeCaja2");
bordeCaja2.onmouseover = () =>{
    console.log("Tocaste el borde")
}

const bordeCaja3 = document.getElementById("bordeCaja3");
bordeCaja3.onmouseover = () =>{
    console.log("Tocaste el borde")
}

const bordeCaja4 = document.getElementById("bordeCaja4");
bordeCaja4.onmouseover = () =>{
    console.log("Tocaste el borde")
}

const bordeCaja5 = document.getElementById("bordeCaja5");
bordeCaja5.onmouseover = () =>{
    console.log("Tocaste el borde")
}

const bordeCaja6 = document.getElementById("bordeCaja6");
bordeCaja6.onmouseover = () =>{
    console.log("Tocaste el borde")
}

const llegadaFrutilla = document.getElementById("llegadaFrutilla");
llegadaFrutilla.onmouseover = () =>{
    console.log("COMEME!")
}