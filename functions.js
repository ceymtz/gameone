const entradas = ["piedra", "papel", "tijera"];
let pointsCPU = 0;
let pointsPlayer = 0;

function getComputerChoice() {
    const aleatorio = entradas[Math.floor(Math.random() * entradas.length
    )];
    return aleatorio;

}


function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if((playerSelection === "piedra" && computerSelection === "tijera") ||
    (playerSelection === "tijera" && computerSelection=== "papel") ||
    (playerSelection === "papel" && computerSelection=== "piedra")){
        console.log ("Player selection vence a cpu")
        console.log(`PLAYER SELECTION: ${playerSelection} gana a CPU: ${computerSelection}`)
        pointsPlayer++
    }else if(playerSelection=== computerSelection){
        console.log("Empate")
        console.log(`PLAYER SELECTION: ${playerSelection} empata con CPU: ${computerSelection}`)
    }else{
        console.log("CPU GANA")
        console.log(`PLAYER SELECTION: ${playerSelection} pierde con CPU: ${computerSelection}`)
        pointsCPU++
    }
}

function game(){
    for(let i=0; i<5; i++){
        const playerSelection = prompt("Ingrese su tiro");
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }

    if(pointsPlayer>pointsCPU){
        console.log("EL ganador de las 5 rondas es PLAYER")
    }else if(pointsPlayer===pointsCPU){
        console.log("EMPATE")
    }else{
        console.log("EL GANADOR DE LAS 5 RONDAS ES CPU")
    }

    console.log(`RESULTADOS PUNTOS TOTALES: PLAYER SELECTION ${pointsPlayer}, CPU ${pointsCPU}`)
}


game()