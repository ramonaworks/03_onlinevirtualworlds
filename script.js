const app = document.getElementById("root");

var request = new XMLHttpRequest();
request.open('GET', 'https://dictionaryapi.com/api/v3/references/thesaurus/json/designer?key=4c665814-8553-4215-b500-d408595ec84d', true);
request.onload = function(){
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {
        console.log(data);


      }

}

request.send();