const emailList = ["ciao@gmail.com", "ciaociao@gmail.com", "ciaociaociao@gmail.com"];

const userEmail = prompt("Inserisci la tua email:");

let coolEmail;

for (let x = 0; x < emailList.length; x++){
    coolEmail = x;
    if (userEmail === emailList[coolEmail]){
        alert("Complimenti! Fai parte del club esclusivo.");
    }
}