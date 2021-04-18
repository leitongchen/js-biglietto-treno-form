// Event listener per il caricamento della pagina prima di eseguire il codice js 
window.addEventListener('load', function() {

    onWindowLoad();

}); 

// Tutto il codice viene contenuto dentro la funzione onWindowLoad,
// eseguito dentro l'event listener di window 
function onWindowLoad() {

    // ANIMAZIONE SUI PULSANTI
    /* var btn1 = document.getElementById('btn-1');
    var btn2 = document.getElementById('btn-2');
    var arrayBtn = [btn1, btn2]; */

    var buttonsHtml = document.getElementsByTagName('button');

    for (var j = 0; j < buttonsHtml.length; j++) {
        var btnElement = buttonsHtml[j]; 

        btnElement.addEventListener('mousedown', function(event) {
            scale(event);
        });    

        btnElement.addEventListener('mouseup', function(event) {
            deleteScale(event);
        });   
    }
   

    // FORM
    var ticketForm = document.getElementById("myForm");

    //Aggiungere listener sul form 
    ticketForm.addEventListener('submit', function (event) {
    
        event.preventDefault();

        //recupera elemento form al quale ho associato l'evento submit
        var form = event.currentTarget;
        //recupera la lista di elementi input presenti nel form
        var formElements = form.elements;
    
    
        //recupero il contenuto degli input 
        var intestatario = formElements.nomeUtente.value;
        var userKm = formElements.kmViaggio.value;
        var fasciaEta = formElements.promoSelect.value;
    
    
        if (inputDetected(intestatario, userKm, fasciaEta)) {

            var ilTuoBiglietto = document.getElementById("ilTuoBiglietto");
            ilTuoBiglietto.className = "ilTuoBiglietto-visible"

            //Stampo nella pagina le info dell'utente e prezzo ticket
            document.getElementById("nomePasseggero").innerHTML = intestatario;
    
            document.getElementById("promo").innerHTML = printPromo(fasciaEta);
    
            document.getElementById("nCarrozza").innerHTML = randomCarrozza();
    
            document.getElementById("codiceCP").innerHTML = randomNumGen(90000, 99999);
    
            document.getElementById("costoBiglietto").innerHTML = "&#8364; " + priceCalc(userKm, fasciaEta).toFixed(2);
    
            function printPromo(promoValue) {
    
                if (promoValue === "young") {
                    return "Promo young <br> under 18";
                } else if (promoValue === "senior") {
                    return "Promo senior <br>  over 18";
                }
                return "Nessuna offerta"
            }
            
        } else {
            document.getElementById("message-box").innerHTML = "Per generare il tuo biglietto devi prima inserire i dati."
        }
    });
    
    // RESET
    // cancella tutte le voci nel box "il mio biglietto" quando utente clicca ANNULLA
    ticketForm.addEventListener('reset', function () {
    
        var yourTicketSpans = document.querySelectorAll(".your-ticket .title_container + span, #message-box")
    
        for (var i = 0; i < yourTicketSpans.length; i++) {
            var spanElement = yourTicketSpans[i];
    
            spanElement.innerHTML = "";
        }
    
    });

}


// aggiunge e toglie animazione pulsante
function scale(event) {
    event.currentTarget.classList.add('btn-animation');
}
function deleteScale(event) {
    event.currentTarget.classList.remove('btn-animation');
}


// Funzione per verificare che l'utente abbia inserito i dati richiesti 
function inputDetected(dato1, dato2, dato3) {

    if (dato1 === "" || dato2 === "" || dato3 === "") {
        return false;
    }
    return true;
}


// Funzione che calcola il prezzo del biglietto (con sconto quando c'è)
function priceCalc(numKm, promoValue) {

    var costPerKm = 0.21;
    var costTicket = numKm * costPerKm;
    var promo;

    if (promoValue === "adult") {
        return costTicket;

    } else if (promoValue === "young") {

        var promo = costTicket * 20 / 100;

    } else if (promoValue === "senior") {

        var promo = costTicket * 40 / 100;

    }
    return costTicket - promo;
}


//Funzione che genera numeri random tra 1 e 9
function randomCarrozza() {

    var randomNum = Math.ceil(Math.random() * 9);

    return randomNum;
}

