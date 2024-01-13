/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


const emailUtenteHtml= document.getElementById(`emailUtente`)
const risultatoEmailHtml = document.getElementById(`risultatoEmail`)
const risultatoFinaleEmailHtml= document.getElementById(`risultatoFinaleEmail`)
const emailArray=[
    "random_email_1@example.com",
    "user123@mail.net",
    "john.doe42@gmail.com",
    "test_user@hotmail.com",
    "alice.smith@outlook.org",
    "email_user_007@yahoo.com",
    "my_random_email@mail.co",
    "demo.email@example.net"
]

let variabileControllore= false;

risultatoEmailHtml.addEventListener(`click`, function(){
    let emailUtente=emailUtenteHtml.value

    for(let i=0; i<emailArray.length; i++){
      if(emailArray[i]=== emailUtenteHtml.value){
        variabileControllore= true
      }
    }

    if(variabileControllore=== true){
        risultatoFinaleEmailHtml.innerHTML="L'Email è presente"
    }else{
        risultatoFinaleEmailHtml.innerHTML="L'Email non è presente"
 
    }

    
})