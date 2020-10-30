/**
 * cartella/repo: js-oggetti-studenti
Descrizione
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
 * 
 */


$(document).ready( function() {

    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
    var studente = {
      name: 'Felice',
      surname: 'Pollo',
      age: 40,
    }
  
    for (var key in studente) {
      console.log(key + ':', studente[key]);
    }
  
  }); 

  //Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

  var classe = [
    {
      'nome': 'Felice',
      'cognome': 'Pozzessere',
      'eta' : '22',
    },
    {
      'nome': 'Dino',
      'cognome': 'Citta',
      'eta' : '19',
    },
    {
      'nome': 'Speranza',
      'cognome': 'Avanti',
      'eta' : '32',
    },
  ];
  
  for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].nome + ' ' + classe[i].cognome);
  }
  
  //Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

  var nuovoStudente = {
    'nome' : prompt('Inserisci il nome dell\'alunno'),
    'cognome': prompt('Inserisci il cognome dell\'alunno'),
    'eta': prompt('Inserisci l\ età'),
  };
  console.log(nuovoStudente);
  classe.push(nuovoStudente);
  console.log(classe);