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

          //solo per prova(da fare con input)
var lvDifficult = parseInt(prompt('scegli il livello: 1,2,3'));
value = 0;
if (lvDifficult == 1) {
  value=100;
}else if (lvDifficult == 2) {
  value=80;
}else if (lvDifficult == 3) {
  value=50;
}else if (lvDifficult == 4) { //solo per prova
  value= 13;
}

function rndPc() {
  //random pc
  pcArr = [];
  for (var i=0;i<10;i++) {
    var pc = Math.ceil(Math.random()*value);
    if (pcArr.includes(pc)) {
      i--
    }else {
      pcArr.push(pc);
    }
  }
  console.log(pcArr);
}

function numUser() {
  var range = value - pcArr.length;
  var record = 0;
  for (var i=0; i<range;i++) {
    //num scelti dall'user
    var user = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
   //condizione se i num sono inclusi nel pcArr
    if (pcArr.includes(user)) {
      console.log("hai perso, il numero ", user, " è già compreso");
      break;
    }else if (user > 20) { // se supera il range
      alert('inserisci un numero compreso tra 1 e 100');
      i--
    }else { // se non sono inclusi
      pcArr.push(user);
      record +=1
    }
    console.log(user);
  }
  console.log(pcArr);
  console.log("punteggio ",record);
}

function game() {
  rndPc();
  numUser();
}

game();
