

var ticketForm = document.getElementById("myForm");

//Aggiungere listener sul form 
ticketForm.addEventListener('submit', function(event) {

    event.preventDefault();

    //recupera elemento form al quale ho associato l'evento submit
    var form = event.currentTarget;
    //recupera la lista di elementi input presenti nel form
    var formElements = form.elements; 


    //recupero il contenuto degli input 
    var intestatario = formElements.nomeUtente.value;
    var userKm = formElements.kmViaggio.value;
    var fasciaEta = formElements.promoSelect.value;
    

    //Stampo nella pagina le info dell'utente e prezzo ticket

    document.getElementById("nomePasseggero").innerHTML = intestatario;

    document.getElementById("promo").innerHTML = printPromo(fasciaEta);

    document.getElementById("nCarrozza").innerHTML = randomCarrozza();

    document.getElementById("codiceCP").innerHTML = randomNumGen(90000, 99999);

    document.getElementById("costoBiglietto").innerHTML = "&#8364; " + priceCalc(userKm, fasciaEta).toFixed(2);


    function printPromo(promoValue) {

        if (promoValue === "young") {
            return "Promo young - under 18";
        } else if (promoValue === "senior") {
            return "Promo senior - over 18";
        }
        return "Nessuna offerta"
    }

}); 

// cancella tutte le voci nel box "il mio biglietto" quando utente clicca ANNULLA
ticketForm.addEventListener('reset', function() {

    var yourTicketSpans = document.querySelectorAll(".your-ticket h6 + span")
    
    for (var i = 0; i < yourTicketSpans.length; i++) {
        var spanElement = yourTicketSpans[i];

        spanElement.innerHTML = "";

    }


})






function priceCalc(numKm, promoValue) {

    var costPerKm = 0.21;
    var costTicket = numKm * costPerKm;
    var promo; 

    if (promoValue === "adult") {
        return costTicket;

    } else if (promoValue === "young") {

        var promo = costTicket * 20 /100;

    } else if (promoValue === "senior") {

        var promo = costTicket * 40 /100;

    } 
    return costTicket - promo;
}


//Funzione che genera numeri random tra 1 e 9
function randomCarrozza() {

    var randomNum = Math.ceil(Math.random() * 9);

    return randomNum;
}

