const eleccion = ["piedra", "papel", "tijeras"];
let pointsPlayer = 0;
    let pointsCpu = 0;



function getComputerChoice() {
    const aleatorio = eleccion[Math.floor(Math.random() * eleccion.length)];
    return aleatorio;
}

//console.log(getComputerChoice());



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "piedra" && computerSelection === "tijeras") || (playerSelection === "papel" && computerSelection === "piedra") || (playerSelection === "tijeras" && computerSelection === "papel")) {
        console.log("Gano jugador real");
        console.log(`${playerSelection} vence a ${computerSelection}`);
        pointsPlayer++;
    } else if (playerSelection === computerSelection) {
        console.log("Empate");
        console.log(`${playerSelection} es igual a ${computerSelection}`)
    } else {
        console.log("Gano jugador cpu");
        console.log(`${computerSelection} vence a ${playerSelection}`);
        pointsCpu++;
    }
}



function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log("RONDA: " ,i+1)
        const playerSelection = prompt("Ingresa tu apuesta");
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
        
        
        
    }

    if(pointsPlayer>pointsCpu){
        console.log("Jugador real ha ganado")
        console.log(`Resultados: JUGADOR REAL ${pointsPlayer} vs JUGADOR CPU: ${pointsCpu}`)
    }else if(pointsPlayer<pointsCpu){
        console.log("Jugador CPU Ha ganado")
        console.log(`Resultados: JUGADOR REAL ${pointsPlayer} vs JUGADOR CPU: ${pointsCpu}`)
    }else{
        console.log("Empate")
        console.log(`Resultados: JUGADOR REAL ${pointsPlayer} vs JUGADOR CPU: ${pointsCpu}`)
    }

}

game()