//***********DICTIONARIES*************//

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
var outputArray = [];

//**************EVENT LISTENERS***************/

var spanishButton = document.getElementById("spanish");
var germanButton = document.getElementById("german");
var esperantoButton = document.getElementById("esperanto");

spanishButton.addEventListener("click", function(){gatherIt(spanishDictionary)});
germanButton.addEventListener("click", function(){gatherIt(germanDictionary)});
esperantoButton.addEventListener("click", function(){gatherIt(esperantoDictionary)});

//***************GATHER FUNCTION**************//
// Gather user input
// Convert string to an array

function gatherIt( languageId ){
    outputArray = [];
    var input = document.getElementById("input").value;
    var words = input.toLowerCase().split(' ');
    matchIt(words, languageId);
}

//**************MATCH FUNCTION*****************//

// If chosen language object does not contain array[i], display a not found message as output variable
// If all the words match, call translate function

function matchIt(wordsArrays, dictionary){
    for (var i = 0; i < wordsArrays.length; i++){
        var wordResult = translateIt(wordsArrays[i], dictionary);
        if (!wordResult){
            prompt('Sorry, ' + wordsArrays[i] + ' is not found.');
            outputArray.push("?");
        }else{
            outputArray.push(wordResult);
        }
    }
    writeToDom(outputArray.join(" "));
}

//***************TRANSLATE FUNCTION************//

// Passes in the input array from gather function and 2nd language
// For loop to go over input array; possible 2nd for loop over language object
// display translation to output variable

function translateIt(word, language){
var answer = language[word];
return answer;
}

//******************WRITE TO THE DOM*****************//

function writeToDom(domString){
    var myDiv = document.getElementById("wordOutput");
    myDiv.value = domString;
}
