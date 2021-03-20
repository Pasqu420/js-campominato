// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…

  function lvl() {
    var lvl = parseInt(prompt('scegli il livello di difficoltà: 1,2,3'));
    switch (lvl) {
      case 1:
      var lvl = 1;
      var value = 100;
        break;
      case 2:
      lvl = 2;
      value = 80;
        break;
      case 3:
        lvl = 3;
        value = 50;
        break;
      default:
        lvl = 1
        value = 100;
        break;
    }
    return value;
  }
var difficult = lvl();
//random pc
function rndPc() {
  var pcArr = [];
  while (pcArr.length<16) {
    var pc = Math.ceil(Math.random()*difficult);
    if (!pcArr.includes(pc)) {
      pcArr.push(pc);
    }
  }
  console.log(pcArr);
  return pcArr;
}
//scelta num player
function numUser() {
  var pcArr = rndPc();
  var range = difficult - pcArr.length;
  var myNum = [];
  var record = 0;
  while (myNum.length<range) {
    //num scelti dall'user
    var user = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
    //condizione se i num sono inclusi nel pcArr
    if (pcArr.includes(user)) {
      console.log("hai perso, il numero ", user, " è già compreso");
      break;
    }else if (myNum.includes(user) || user > difficult || user < 1) { //condizione se non sono numeri validi
      console.log("inserisci un numero valido");
    }else {
      myNum.push(user);
      record +=1;
    }
    console.log(user);
  }
  console.log("punteggio ",record);
  if (record==range) {
    console.log("you win");
  }
}

function game() {
  numUser();
}

// start game
var start = document.getElementById('start');
start.addEventListener('click', function() {
  game();
});
