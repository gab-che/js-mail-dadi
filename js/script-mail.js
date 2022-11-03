const coolButton = document.getElementById("cool_button")

coolButton.addEventListener("click", function (){
    const emailList = ["ciao@gmail.com", "ciaociao@gmail.com", "ciaociaociao@gmail.com"];

    const userEmail = document.getElementById("user_email");

    const answer = document.getElementById("answer");

    let found;

    for (let x = 0; x < emailList.length; x++){
        const coolEmail = emailList[x];

        if (coolEmail === userEmail.value){
            found = true;
        }
    }

    if (found){
        answer.innerHTML = "Complimenti! Fai parte del club esclusivo.";
    } else{
        answer.innerHTML = "Mi dispiace, non sei abbastanza cool.";
    }

    coolButton.setAttribute("disabled", "");
    userEmail.setAttribute("disabled", "");
})

const tryAgain = document.getElementById("try_again");

tryAgain.addEventListener("click", function (){
    const userEmail = document.getElementById("user_email");
    userEmail.value = "";
    userEmail.removeAttribute("disabled", "");
    const answer = document.getElementById("answer");
    answer.innerHTML = "";
    coolButton.removeAttribute("disabled", "");
})