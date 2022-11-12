const aleatorio = (max, min) => Math.floor(Math.random() * (max - min + 1) + 1)

const eleccion = (elegido) => {
    if (elegido == 1) {
        return "Piedra"
    }
    if (elegido == 2) {
        return "Papel"
    }
    return (elegido == 3) ? "Tijera" : "no valido"
}

const juego = (escogidoJugador, escogidoPc) => {
    let condicionParaGanar = (escogidoJugador == 3 && escogidoPc == 2) || (escogidoJugador == 2 && escogidoPc == 1) || (escogidoJugador == 1 && escogidoPc == 3)

    if (escogidoJugador == escogidoPc) {
        return alert("Empate")
    }
    if (condicionParaGanar) {
        alert("Ganaste")
        return triunfos++
    }
    alert("Perdiste")
    return perdidas++
}

let ganador  = true
let triunfos = 0
let perdidas = 0
let Jugador  = 0
let pc       = 0

while (ganador) {
    Jugador = prompt("Ingresa 1 para Piedra 2 Para Papel o 3 para Tijera")
    pc = aleatorio(3, 1)

    if (Jugador == 1 || Jugador == 2 || Jugador == 3) {
        alert("Jugador lanzo " + eleccion(Jugador))
        alert("PC lanzo " + eleccion(pc))
        juego(Jugador, pc)
        alert("resultado pc " + perdidas + " y Resultado Jugador " + triunfos)
    }

    ganador = (triunfos < 3 && perdidas < 3)
}

alert("recarga para volver a Jugar")
