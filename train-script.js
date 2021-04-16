var eurPerKm = 0.21;

//funzione: calcolo del prezzo del biglietto in base ai km
function priceCalc(numKm, costPerKm) {

    var costTicket = numKm * costPerKm;

    return costTicket;
}

//console.log(priceCalc(10, costPerKm))
//funzione: calcolo del prezzo del biglietto scontato in base all'età
function promoCalc(userAge, costTicket) {
    var promo;
    if (userAge < 18) {
        var promo = costTicket * 20 /100;
    } else if (userAge >= 65) {
        var promo = costTicket * 40 /100;
    }
    return costTicket - promo;
}

