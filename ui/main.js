// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    var request = new XMLHttpResponse();
    request.onreadystatechange = function () {
     if(request.readystate === XMLHttpResponse.DONE) {
         if(request.status === 200) {
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString(); 
         }
     }
      
    };
 request.open('GET', 'http://gowthamgowda57.imad.hasura-app.io/counter', true);
 request.send(null);
};