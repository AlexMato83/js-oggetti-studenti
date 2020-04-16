$(document).ready(function(){
     // creo un oggetto con dati studente Luca
     var luca = {
       "nome":"Luca",
       "cognome":"Zamboni",
       "età":21
     }
     console.log(luca);
     for (var dati in luca){
       console.log(dati + " : " +luca[dati]);
     }
    
});
