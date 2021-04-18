//funzione che varifica la validità dei dati
function numberIsValid(num) {

    if (Number.isNaN(parseInt(num))) {

        return false;
    }

    return true;
}

//funzione che varifica la validità del testo inserito
function promptValid(text) {

    if (!Number.isNaN(parseInt(text)) && text === "" && text === null && text === undefined) {

        return false;
    }

    return true;
}

//Funzione che verifica se le parole sono palindrome
function isPalindrome(text) {

    var revertedText = "";
    for (i = text.length - 1; i >= 0; i--) {

        revertedText += text[i];
    }

    console.log("La tua parola letta da destra a sinistra: " + revertedText);

    return revertedText === text;
}


//Funzione che genera numeri random
function randomNumGen(min, max) {

    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNum;
}

//Funzione che rimuove gli spazi dall'input dell'utente 
function removeSpaces(text) {

    var stringToArray = []
    for (var i = 0; i < text.length; i++) {

        stringToArray.push(text[i]);
    }

    var noSpacesText = []
    for (var j = 0; j < stringToArray.length; j++) {

        if (stringToArray[j] !== " ") {
            noSpacesText.push(stringToArray[j]);
        }
    }    

    var finalString = noSpacesText.join("");

    return finalString;
}
