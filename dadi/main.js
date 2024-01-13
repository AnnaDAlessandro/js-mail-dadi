/*  *Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


const Giocatore= randomNumber(0, 6)
const computer= randomNumber(0, 6)
const RisultatoGioco= document.getElementById(`risultato`)

function randomNumber(min, max) {
    return min + Math.random() * (max - min);
  }

console.log(Giocatore,computer)


if(Giocatore>computer){
    RisultatoGioco.innerHTML=`Il vincitore è il Giocatore con il numero ${Giocatore}, mentre perde il Computer con il numero${computer}}`
}else if (computer>Giocatore ){
    RisultatoGioco.innerHTML=`Il vincitore è il Computer con il numero ${computer}, mentre perde il Giocatore con il numero${Giocatore}}`
}else if(Giocatore=computer) {
    RisultatoGioco.innerHTML=`Il risultato è pari con i numeri  ${computer}, ${Giocatore}`

}
  