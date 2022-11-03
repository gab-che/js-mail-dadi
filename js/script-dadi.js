const numPlayer = Math.round(Math.random()* 5 + 1);
const numComputer = Math.round(Math.random()* 5 + 1);

console.log("dado umano:", numPlayer, "dado macchina:", numComputer);

if (numPlayer > numComputer){
    console.log("ha vinto l'umano");
} else if (numPlayer < numComputer){
    console.log("ha vinto la macchina");
} else {
    console.log("parità");
}