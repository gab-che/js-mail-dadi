const coolButton = document.getElementById("cool_button")

coolButton.addEventListener("click", function (){
    const emailList = ["ciao@gmail.com", "ciaociao@gmail.com", "ciaociaociao@gmail.com"];

    const userEmail = document.getElementById("user_email").value;

    let found;

    for (let x = 0; x < emailList.length; x++){
        const coolEmail = emailList[x];

        if (coolEmail === userEmail){
            found = true;
        }
    }

    if (found){
        console.log("Complimenti! Fai parte del club esclusivo.");
    } else{
        console.log("Mi dispiace, non sei abbastanza cool");
    }
})