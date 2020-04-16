$(document).ready(function(){
  // INIZIO PRIMA PARTE
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
  // FINE PRIMA PARTE
  // INIZIO SECONDA PARTE
  // creo elenco studenti
     var studenti = [{
       "nome" : "Carlo",
       "cognome" : "Mazzetti",
       "età" : 29
     },
     {
       "nome" : "Francesca",
       "cognome" : "Suppiniddi",
       "età" : 38
     },
     {
       "nome" : "Franco",
       "cognome" : "Sgaramarreddu",
       "età" : 32
     }
   ]
   console.log(studenti);
   // ciclo gli studenti
    for (var i = 0; i < studenti.length; i++){
      // salvo ogni studente
      var eachStud = studenti[i];
      // salvo il nome di ogni studente ciclato
      var nameStud = eachStud.nome;
      // salvo il cognome di ogni studente ciclato
      var surnameStud = eachStud.cognome;
      console.log(nameStud + " " + surnameStud);
      
    }
  // FINE SECONDA PARTE

});
