var prefix = 'https://cors-anywhere.herokuapp.com/';
var url = 'http://api.icndb.com/jokes/random';
var fullUrl = prefix + url;
var paragraph = document.getElementById('joke');
var button = document.getElementById('get-joke');

button.addEventListener('click', function() {
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fullUrl);
    xhr.addEventListener('load', function() {
       var responce = JSON.parse(xhr.response);
        paragraph.innerHTML = responce.value.joke;
    });
    xhr.send();
}

window.onload = function() {
  getJoke();
};