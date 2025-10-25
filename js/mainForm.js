//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km),
//va applicato uno sconto del 20% per i minorenni,
//va applicato uno sconto del 40% per gli over 65,
//il risultato dovrà essere un numero con due decimali dopo la virgola,
//potete stampare il risultato tramite un alert o in console

//Bonus: scrivete il risultato in un elemento in pagina (es. un tag <div>)


function Price(event) {
    event.preventDefault();
    
    let age = parseFloat(document.getElementById("age").value);
    // console.log(age)
    let inputKm = parseFloat(document.getElementById("inputKm").value);
    // console.log(inputKm)
    
    const priceKm = 0.21;
    const standardTicket = inputKm * priceKm;
    // console.log(standardTicket)
    const under18 = standardTicket * 20 / 100;
    // console.log(under18)
    const over65 = standardTicket * 40 / 100;
    let ticketPrice = null; 
    
    
    // elaborazione
    if (age < 18){
        ticketPrice = (standardTicket - under18).toFixed(2)
    } else if (age > 65){
        ticketPrice = (standardTicket - over65).toFixed(2)
    } else{
        ticketPrice = standardTicket.toFixed(2)
    }
    
    const message = `Il costo del tuo viaggio di ${inputKm}km sarà di euro ${ticketPrice}`
    console.log(message)
    
    // output
     document.getElementById("result").innerHTML = message;
    // alert(message)
};
