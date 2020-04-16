$(document).ready(function(){
  // INIZIO stampa dati di uno studente
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
  // FINE stampa dati di uno studente
  // INIZIO stampa nome e cognome studenti
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
  // FINE stampa nome e cognome studenti
  // INIZIO aggiunta nuovo studente tramite prompt
   // salvo prompt nome

   var nome = prompt("inserisci nome");
   console.log(nome);
   // salvo prompt cognome
   var cognome = prompt("inserisci cognome");
   console.log(cognome);
   // salvo prompt età
   var eta = parseInt(prompt("inserisci età"));
   console.log(eta);
   // creo push coi dati inseriti dall'utente
   studenti.push({
     "nome": nome,
     "cognome": cognome,
     "eta": eta
   })
   console.log(studenti);
  // FINE aggiunta nuovo studente tramite prompt
  // INIZIO creazione blocchi studenti tramite handlebars
  //INIZIO OPERAZIONI HANDLEBARS
   // creo var associata all'html dentro #mex-template
    var source = $('.students-template').html();
    // faccio analizzare il suo contenuto da Handlebars
    var template = Handlebars.compile(source);
    // attribuisco il messaggio dell'input a "mex"
    var context = {
      "name": nome,
      "surname": cognome,
      "age" : eta
      // "classeMessaggio": "chat-main-bloc-int",
      // "mex": "ok"
    };
    // salvo il valore dell'input all'interno di handlebars
    var html = template(context);
    $("body").append(html);
  //FINE OPERAZIONI HANDLEBARS

});
