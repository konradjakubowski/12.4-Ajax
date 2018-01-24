var url = 'http://api.icndb.com/jokes/random';
var paragraph = document.getElementById('joke');
var button = document.getElementById('get-joke');

button.addEventListener('click', function() {
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
       var responce = JSON.parse(xhr.response);
        paragraph.innerHTML = responce.value.joke;
    });
    xhr.send();
}

window.onload = function() {
  getJoke();
};

/* 

new XMLHttpRequest(); --> nowa instancja obiektu XHR
xhr.open('GET', url);    --> otwórz zapytanie za pomocą metody GET
xhr.addEventListener('load', function()  --> nasłuchuj odpowiedzi z serwera
i przechowaj odpowiedź w formacie JSON

paragraph.innerHTML = responce.value.joke; --> do paragrafu dodaj odpowiedź serwera - czyli dowcip.

xhr.send();  --> wyślij zapytanie do serwera (wyślij obiekt XHR który zapyta za pomocą HTTP)   
JSON.stringify(object) --> przechowuje obiekt do wysłania / uploadu na serwer
JSON.parse(string) --> zmiana formatu JSON na obiekt JS do późniejszej manipulacji
JSON.parse(xhr.response) --> wartością string jest dowcip jako odpowiedź z serwera

*/