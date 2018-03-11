//***********Dictionaries*************//

var availableWords = ["happy", "merry", "new", "christmas", "year", "you", "hope", "i", "and", "hanukah", "kwanzaa", "jingle", "bells", "deck", "the", "halls", "wish", "joy", "of", "holly", "any", "returns", "seasons", "greetings", "holiday", "wishes", "greeting", "love", "let", "it", "snow",]

var spanishDictionary = 
    {
    happy: "feliz", merry: "alegre", new: "nuevo", christmas: "navidad", year: "ano", 
    you: "tu", hope: "esperanza", i: "yo", and: "y", hanukah: "hanukkah", kwanzaa: "kwanzaa", jingle: "tintineo", bells: "campanas", deck: "cubierta", the: "el", 
    halls: "pasillos", wish: "deseo", joy: "alegría", of: "de", holly: "acebo", 
    any: "muchos", returns: "devoluciones", seasons: "estaciones", greetings: "saludos",holiday: "fiesta", wishes: "deseos", greeting: "saludo", love: "amor", let: "dejar",it: "eso", snow: "nieve", 
    };

var germanDictionary = 
    {
    happy: "glücklich", merry: "fröhlich", new: "neu", christmas: "weihnachten", year: "jahr", you: "sie", hope: "hoffnung", i: "ich", and: "und",hanukah: "hanukkah", kwanzaa: "kwanzaa", jingle: "klimpern", bells: "glocken", deck: "deck", the: "das",halls: "hallen", wish: "wunsch", joy: "freude", of: "von", holly: "stechpalme", any: "viele", returns: "kehrt zurück", seasons: "jahreszeiten", greetings: "schöne grüße", holiday: "urlaub", wishes: "wünscht sich", greeting: "grüß", love: "liebe", 
    let: "lassen", it: "es", snow: "nieve",
    };
  var esperantoDictionary =
  {
    happy: "feliĉa", merry: "gaja", new: "nova", christmas: "kristnasko", year: "jaro",you: "vi", hope: "espero", i: "i", and: "kaj", hanukah: "hanukkah", kwanzaa: "kwanzaa", jingle: "enreta", bells: "sonoriloj", deck: "ferdeko", the: "la", halls: "salonoj", wish: "deziras", joy: "ĝojo", of: "deziras", holly: "hipo", any: "multaj", returns: "revenas", seasons:  "sezonoj", greetings: "salutoj", holiday: "feriado", wishes: "deziras", greeting: "saluto", love: "amo", let: "lasu", it: "gi", snow: "nego",
   };
var input = ""; // placing the user's message in a variable
var inputArray = [];
var outputArray = [];
var output = ""; // returns translated message to the user

//***************Gather Function**************//
// Gather user input
// Convert string to an array

function gatherIt(input, languageId){
    inputArray = input.toString(' ');
    return;
}

//**************Match Function*****************//

// If chosen language object does not contain array[i], display a not found message as output variable
// If all the words match, call translate function

function matchIt(gatherIt){
    for (var i = 0; i < inputArray.length; i++){
        // for (var j = 0; j < availableWords.length; j++){
            if (inputArray[i].includes(availableWords[i])){ 
            translateIt();
            // }
        } else{
            output = prompt('Sorry, ' + inputArray[i] + ' is not found.');
        }
    }
}
console.log("merry christmas", spanishDictionary);
//***************Translate Function************//

// Passes in the input array from gather function and 2nd language
// For loop to go over input array; possible 2nd for loop over language object
// display translation to output variable

// function translateIt(matchIt, languageId){

// }

//******************Write to the DOM*****************//

// function writeToDom(domString, domId){
//     var myDiv = document.getElementById(domId);
//     myDiv.innerHTML += domString;
// }

// gatherIt(input, languageId);



