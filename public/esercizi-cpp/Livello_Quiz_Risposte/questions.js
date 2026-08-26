
const qOrig = [{"type": "tf", "question": "In C++, l'istruzione `int x = 5.5;` assegna il valore 5.5 alla variabile x.", "options": ["Vero", "Falso"], "correct": 1}, {"type": "tf", "question": "Il ciclo `while` viene eseguito sempre almeno una volta, indipendentemente dalla condizione.", "options": ["Vero", "Falso"], "correct": 1}, {"type": "tf", "question": "L'operatore `==` viene utilizzato per verificare l'uguaglianza tra due valori.", "options": ["Vero", "Falso"], "correct": 0}, {"type": "tf", "question": "Il tipo di dato `bool` può assumere solo i valori `true` o `false`.", "options": ["Vero", "Falso"], "correct": 0}, {"type": "tf", "question": "In C++, le istruzioni terminano sempre con il punto e virgola (`;`).", "options": ["Vero", "Falso"], "correct": 0}, {"type": "tf", "question": "L'operatore `%` restituisce il risultato della divisione tra due numeri.", "options": ["Vero", "Falso"], "correct": 1}, {"type": "tf", "question": "La funzione principale di un programma C++ deve sempre chiamarsi `main`.", "options": ["Vero", "Falso"], "correct": 0}, {"type": "tf", "question": "Il blocco `else` è obbligatorio dopo ogni blocco `if`.", "options": ["Vero", "Falso"], "correct": 1}, {"type": "tf", "question": "`std::cin` viene utilizzato per stampare testo sullo schermo.", "options": ["Vero", "Falso"], "correct": 1}, {"type": "tf", "question": "I commenti su riga singola in C++ iniziano con i caratteri `//`.", "options": ["Vero", "Falso"], "correct": 0}, {"type": "mc", "question": "Quale delle seguenti librerie è necessaria per usare `cin` e `cout`?", "options": ["<math.h>", "<iostream>", "<string>", "<stdlib.h>"], "correct": 1}, {"type": "mc", "question": "Quale parola chiave si usa per dichiarare una variabile intera?", "options": ["integer", "num", "int", "float"], "correct": 2}, {"type": "mc", "question": "Cosa fa l'operatore `++`?", "options": ["Aggiunge 2 alla variabile", "Sottrae 1 alla variabile", "Moltiplica per 2", "Incrementa la variabile di 1"], "correct": 3}, {"type": "mc", "question": "Come si dichiara un carattere singolo in C++?", "options": ["char c = 'a';", "string c = 'a';", "char c = \"a\";", "letter c = 'a';"], "correct": 0}, {"type": "mc", "question": "Se `x = 10` e `y = 3`, quanto vale `x % y`?", "options": ["3", "1", "0", "3.33"], "correct": 1}, {"type": "mc", "question": "Qual è l'output di `cout << 5 / 2;` in C++?", "options": ["2.5", "2", "3", "Errore"], "correct": 1}, {"type": "mc", "question": "Quale costrutto esegue il blocco di codice almeno una volta prima di verificare la condizione?", "options": ["while", "for", "if", "do-while"], "correct": 3}, {"type": "mc", "question": "Come si scrive 'diverso' in un'espressione logica C++?", "options": ["<>", "!==", "not=", "!="], "correct": 3}, {"type": "mc", "question": "Che tipo di dato useresti per memorizzare un nome?", "options": ["char", "int", "string", "bool"], "correct": 2}, {"type": "mc", "question": "Qual è il valore di `true && false`?", "options": ["true", "false", "1", "Dipende dal compilatore"], "correct": 1}, {"type": "mc", "question": "Cosa stampa il seguente codice: `int a = 2; a += 3; cout << a;`?", "options": ["23", "2", "3", "5"], "correct": 3}, {"type": "mc", "question": "Se una condizione in un `if` è falsa, quale blocco viene eseguito (se presente)?", "options": ["if", "else", "while", "Nessuno"], "correct": 1}, {"type": "mc", "question": "In quale formato i numeri con la virgola vengono comunemente memorizzati?", "options": ["int e long", "float e double", "char e string", "bool e int"], "correct": 1}, {"type": "mc", "question": "Cosa significa l'operatore `||` in C++?", "options": ["AND Logico", "NOT Logico", "OR Logico", "XOR Logico"], "correct": 2}, {"type": "mc", "question": "Come si stampa a capo in C++?", "options": ["std::endl", "\\n", "Entrambi i precedenti", "Nessuno dei precedenti"], "correct": 2}, {"type": "mc", "question": "Qual è la sintassi corretta per un commento multilinea?", "options": ["// commento //", "/* commento */", "<!-- commento -->", "# commento #"], "correct": 1}, {"type": "mc", "question": "Quale di questi NON è un tipo di dato fondamentale in C++?", "options": ["int", "float", "array", "bool"], "correct": 2}, {"type": "mc", "question": "Se voglio ripetere un blocco di codice esattamente 10 volte, quale ciclo è più indicato?", "options": ["while", "do-while", "for", "if-else"], "correct": 2}, {"type": "mc", "question": "Quale operatore si usa per l'assegnazione di un valore a una variabile?", "options": ["==", "===", "=>", "="], "correct": 3}, {"type": "mc", "question": "Che valore assume una variabile booleana se gli si assegna il numero 0?", "options": ["true", "false", "Errore di compilazione", "Null"], "correct": 1}, {"type": "mc", "question": "In C++, da quale numero inizia a contare un ciclo standard (convenzione informatica)?", "options": ["1", "0", "-1", "Dipende dall'utente"], "correct": 1}, {"type": "mc", "question": "Qual è l'output di `cout << \"Ciao \" << \"Mondo\";`?", "options": ["Ciao Mondo", "CiaoMondo", "Ciao_Mondo", "Errore"], "correct": 0}, {"type": "mc", "question": "Quale costrutto è una valida alternativa a lunghi blocchi `if - else if` successivi?", "options": ["while", "do-while", "switch", "for"], "correct": 2}, {"type": "mc", "question": "A cosa serve l'istruzione `break` in un ciclo?", "options": ["A mettere in pausa il programma", "Ad interrompere l'iterazione attuale e saltare alla successiva", "Ad uscire definitivamente dal ciclo", "A riavviare il ciclo da capo"], "correct": 2}, {"type": "mc", "question": "Cosa fa `continue` all'interno di un ciclo?", "options": ["Esce dal ciclo", "Passa direttamente alla prossima iterazione", "Ignora tutte le condizioni", "Chiude il programma"], "correct": 1}, {"type": "mc", "question": "Una variabile dichiarata all'interno di un blocco `{}` è accessibile all'esterno?", "options": ["Sì, sempre", "No, mai", "Sì, se dichiarata come global", "Dipende dal compilatore"], "correct": 1}, {"type": "mc", "question": "Quale di questi nomi di variabile NON è valido in C++?", "options": ["mia_variabile", "Variabile1", "1Variabile", "_variabile"], "correct": 2}, {"type": "mc", "question": "Come si include una libreria standard in un file C++?", "options": ["import <libreria>", "include \"libreria\"", "#include <libreria>", "using <libreria>"], "correct": 2}, {"type": "mc", "question": "Se dichiaro `int x;` senza inizializzarla e poi la stampo, cosa ottengo?", "options": ["0", "Errore di compilazione", "Il programma va in crash", "Un valore imprevedibile (spazzatura) in memoria"], "correct": 3}, {"type": "mc", "question": "A quale spazio di nomi appartengono `cin` e `cout`?", "options": ["standard", "io", "std", "cpp"], "correct": 2}];

const qCode = [
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int x = 5;<br>if (x = 10) { cout << \"Dieci\"; }</code><br>È corretto? Cosa stampa?",
    "options": [
      "È sbagliato, l'assegnazione `=` nell'if restituisce true, stamperà 'Dieci' introducendo un bug",
      "È corretto e non stamperà nulla perché 5 non è 10",
      "È sbagliato, dà errore di compilazione perché l'if richiede un booleano",
      "È corretto e stamperà 'Dieci' perché 5 e 10 sono numeri interi",
      "È sbagliato, stamperà 'Dieci' ma darà un'eccezione a runtime",
      "È corretto ma l'IDE andrà in crash"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int i = 0;<br>while(i < 5); {<br>&nbsp;&nbsp;cout << i;<br>&nbsp;&nbsp;i++;<br>}</code><br>Qual è il problema?",
    "options": [
      "Manca la dichiarazione di `i` nel while",
      "Il while non può usare il minore `<` ma solo `<=`",
      "C'è un punto e virgola subito dopo la condizione del while, causando un loop infinito",
      "Le parentesi graffe non sono necessarie per il while",
      "Il comando cout non supporta i numeri interi",
      "Nessun problema, stampa 01234"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int arr[3] = {1, 2, 3};<br>cout << arr[3];</code><br>È corretto?",
    "options": [
      "Corretto, stampa il numero 3",
      "Sbagliato, gli indici partono da 0, `arr[3]` va fuori dai limiti dell'array (Out of Bounds)",
      "Sbagliato, bisogna usare le parentesi tonde `arr(3)`",
      "Corretto, stampa l'indirizzo di memoria del terzo elemento",
      "Sbagliato, l'array non è stato allocato dinamicamente",
      "Corretto, riempie l'array con zeri"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>float pi = 3.14;<br>int x = pi;<br>cout << x;</code><br>Cosa succede?",
    "options": [
      "Errore di compilazione, i tipi sono incompatibili",
      "Stampa 3.14",
      "Stampa 3 perché avviene una conversione implicita (troncamento) del float in int",
      "Il programma va in crash per perdita di dati",
      "Stampa 4 per arrotondamento",
      "Stampa un numero casuale"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>string s = 'Ciao';<br>cout << s;</code><br>Dov'è l'errore?",
    "options": [
      "Non c'è errore",
      "La stringa necessita di doppi apici `\"Ciao\"`, gli apici singoli `' '` sono per i `char`",
      "Manca std:: davanti a string",
      "Cout non può stampare una string",
      "La S maiuscola su String è obbligatoria in C++",
      "Il punto e virgola è superfluo"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int main() {<br>&nbsp;&nbsp;int x;<br>&nbsp;&nbsp;cout << x;<br>&nbsp;&nbsp;return 0;<br>}</code><br>Cosa succede?",
    "options": [
      "Stampa 0",
      "Stampa un valore spazzatura (garbage) perché `x` non è stata inizializzata",
      "Errore di compilazione, variabile non inizializzata",
      "Il programma si blocca",
      "Viene lanciata un'eccezione a runtime",
      "Non stampa nulla"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>switch(scelta) {<br>&nbsp;&nbsp;case 1: cout << \"Uno\";<br>&nbsp;&nbsp;case 2: cout << \"Due\";<br>}</code><br>Se scelta=1, cosa stampa?",
    "options": [
      "Stampa 'Uno'",
      "Stampa 'Uno' e poi si ferma",
      "Stampa 'UnoDue' a causa del fall-through (manca il `break`)",
      "Dà errore di compilazione perché manca default",
      "Non stampa nulla",
      "Crash a runtime"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>if (a > 10)<br>&nbsp;&nbsp;cout << \"A\";<br>&nbsp;&nbsp;cout << \"B\";</code><br>Se a=5, cosa stampa?",
    "options": [
      "Non stampa nulla",
      "Stampa 'B' perché l'indentazione inganna, ma il secondo `cout` è fuori dall'if",
      "Stampa 'AB'",
      "Dà errore per mancanza di graffe",
      "Stampa 'A'",
      "Stampa 'B' solo perché è un else nascosto"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int *p = nullptr;<br>cout << *p;</code><br>È corretto?",
    "options": [
      "Sì, stampa nullptr",
      "Sì, stampa 0",
      "No, causa un Segmentation Fault dereferenziando un puntatore nullo",
      "No, dà errore di compilazione",
      "Sì, stampa l'indirizzo di memoria",
      "No, il puntatore deve chiamarsi ptr"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>double d = 10 / 3;</code><br>Quanto vale `d`?",
    "options": [
      "3.3333",
      "3.0, perché la divisione tra due interi (10 e 3) restituisce un intero, convertito poi in double",
      "3",
      "Errore di sintassi",
      "3.3",
      "0"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>for(int i=0; i<10; i--) { cout << i; }</code><br>Qual è l'errore?",
    "options": [
      "L'output andrà a capo in automatico",
      "Manca la graffa di chiusura",
      "Il contatore viene decrementato invece che incrementato, causando un loop quasi infinito o underflow",
      "Non si può dichiarare la variabile nel for",
      "Il minor rigido `<` causa un errore, serve `<=`",
      "Nessun errore"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int array[5];<br>array[0] = \"Test\";</code><br>Cosa succede?",
    "options": [
      "Assegna la parola 'Test' alla prima posizione",
      "Errore di compilazione: impossibile assegnare un `const char*` a un `int`",
      "Corretto, salva la lunghezza della stringa",
      "Corretto, C++ converte automaticamente in intero ASCII",
      "Viene emesso un warning ma compila",
      "Il compilatore trasforma l'array in stringhe"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>cin << nome;</code><br>Dov'è l'errore?",
    "options": [
      "Manca `std::` prima di `nome`",
      "Bisogna usare l'operatore di estrazione `>>` con `cin`, non `<<` (che è di inserimento)",
      "Non c'è errore",
      "Il nome deve essere inizializzato prima",
      "`cin` accetta solo numeri",
      "Non si può usare `cin` senza un `cout` prima"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>char c = 'ABC';</code><br>È corretto?",
    "options": [
      "Sì, è corretto",
      "Sì, ma terrà in memoria solo la 'A'",
      "No, il tipo `char` contiene un solo carattere. Per più caratteri serve una stringa o array di char.",
      "Sì, e stampa ABC",
      "No, andava scritto con i doppi apici",
      "No, le lettere maiuscole non sono supportate da char"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>bool flag = False;</code><br>Dov'è l'errore?",
    "options": [
      "Nessun errore",
      "Bisogna usare le virgolette: 'False'",
      "In C++ i booleani sono tutti minuscoli: `false`, non `False`",
      "Il tipo si chiama `boolean` e non `bool`",
      "Manca il costruttore booleano",
      "Serve l'header `<stdbool>`"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>const int max;</code><br>Qual è l'errore?",
    "options": [
      "Una costante `const` deve sempre essere inizializzata al momento della dichiarazione",
      "Le costanti si scrivono tutte in MAIUSCOLO per obbligo di compilatore",
      "Manca la keyword `final`",
      "Nessun errore, varrà 0 di default",
      "Nessun errore, prenderà un valore spazzatura",
      "Non si possono dichiarare interi come const"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int a=5, b=2;<br>float c = static_cast<float>(a)/b;</code><br>È corretto? Cosa restituisce?",
    "options": [
      "Sbagliato, `static_cast` non funziona così",
      "Sbagliato, bisogna usare le parentesi tonde `static_cast(float)`",
      "Corretto, esegue il casting di `a` a float, garantendo che la divisione restituisca `2.5`",
      "Corretto, ma restituisce `2.0` perché valuta prima la divisione intera",
      "Dà errore di sintassi sulle parentesi angolari",
      "Restituisce 0"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>void saluta() { return \"Ciao\"; }</code><br>Dov'è l'errore?",
    "options": [
      "Nessun errore",
      "Manca il main",
      "Una funzione `void` non può restituire un valore; doveva essere `string saluta()`",
      "La stringa va ritornata tra apici singoli",
      "La keyword `return` è obsoleta",
      "Manca `cout`"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int val = 10;<br>if(10 < val < 20) { ... }</code><br>È corretto in C++?",
    "options": [
      "Sì, è la sintassi standard matematica",
      "No, il C++ valuterà `(10 < val)` (booleano) e lo comparerà a 20. Bisogna usare `(val > 10 && val < 20)`",
      "Sì, ma con un warning",
      "No, dà errore di sintassi sulla doppia angolare",
      "Sì, funziona solo per gli interi",
      "No, i due controlli vanno messi tra parentesi quadre"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Analizza il codice:<br><code>int n = 10;<br>int array[n];</code><br>È corretto in Standard C++ (ISO)?",
    "options": [
      "Sì, sempre",
      "No, in C++ standard la dimensione di un array statico deve essere nota a tempo di compilazione (costante). È un Variable Length Array (VLA) estensione di GCC.",
      "Sì, ma solo con il namespace std",
      "No, l'array deve contenere solo stringhe",
      "Sì, l'array scalerà automaticamente",
      "No, manca il distruttore dell'array"
    ],
    "correct": 1
  }
];

const qWhile = [
  {
    "type": "mc",
    "question": "A cosa serve principalmente un ciclo `while`?",
    "options": [
      "A eseguire un blocco di codice per un numero noto a priori di volte",
      "A ripetere un blocco di codice fintanto che una condizione rimane vera (true)",
      "A creare una variabile globale",
      "A interrompere l'esecuzione del programma",
      "A saltare alcune righe di codice se non sono necessarie",
      "Esclusivamente a validare input testuali"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Qual è la sintassi corretta per un ciclo `while` in C++?",
    "options": [
      "while (condizione) { ... }",
      "while { condizione } ( ... )",
      "loop while (condizione) { ... }",
      "while condizione: ...",
      "while (condizione); { ... }",
      "for (while : condizione) { ... }"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Cosa succede se la condizione di un `while` è `false` alla primissima valutazione?",
    "options": [
      "Il corpo del ciclo viene eseguito una sola volta (come nel do-while)",
      "Il programma va in crash",
      "Il compilatore segnala un errore",
      "Il corpo del ciclo viene saltato completamente e non viene mai eseguito",
      "Il ciclo si avvia ma genera un'eccezione",
      "L'IDE chiede all'utente di confermare l'arresto"
    ],
    "correct": 3
  },
  {
    "type": "mc",
    "question": "Cosa causa un 'Loop Infinito' (Ciclo Infinito) in un `while`?",
    "options": [
      "Quando si dimentica di mettere le parentesi tonde nella condizione",
      "Quando la condizione è sempre `true` e non c'è modo di farla diventare `false` (es. si omette l'incremento di un contatore)",
      "Quando il ciclo viene eseguito più di 100 volte",
      "Quando si usa un while al posto di un for",
      "Quando si inserisce la parola chiave `infinite`",
      "Quando il compilatore non è aggiornato"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Quale parola chiave si usa per uscire forzatamente e immediatamente da un ciclo `while`?",
    "options": [
      "stop",
      "exit",
      "break",
      "continue",
      "return",
      "halt"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa fa la parola chiave `continue` all'interno di un ciclo `while`?",
    "options": [
      "Esce definitivamente dal ciclo",
      "Mette in pausa il programma e attende un input",
      "Ignora il resto del corpo del ciclo nell'iterazione corrente e torna immediatamente alla valutazione della condizione",
      "Continua a eseguire il ciclo anche se la condizione diventa falsa",
      "Passa al prossimo ciclo nidificato",
      "Riavvia il programma dall'inizio"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Nel contesto di un ciclo `while`, cos'è una variabile 'Sentinella'?",
    "options": [
      "Una variabile di sistema che monitora la RAM",
      "Una variabile usata solo per causare un loop infinito",
      "Un valore speciale (es. -1 o 0) inserito in input che segnala al ciclo quando deve fermarsi",
      "Una libreria esterna per la sicurezza del codice",
      "Un tipo di dato inventato nel C++11",
      "Il nome tecnico dell'operatore =="
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Che output produce: <code>int i = 3; while(i > 0) { cout << i; i--; }</code>?",
    "options": [
      "123",
      "3210",
      "321",
      "0123",
      "Nessun output",
      "Errore: i-- non è supportato"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Se si desidera che un ciclo venga eseguito *ALMENO* una volta garantita, quale struttura iterativa conviene usare rispetto al `while`?",
    "options": [
      "for",
      "switch-case",
      "do-while",
      "if-else",
      "while(true)",
      "goto"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Dato <code>while(true) { ... }</code>, come è possibile uscire da questo ciclo?",
    "options": [
      "Non è possibile uscirne, è un errore semantico",
      "Inviando un segnale di stop via console",
      "Esclusivamente tramite l'istruzione `return 0` alla fine",
      "Attraverso un'istruzione `break` o `return` inserita condizionalmente al suo interno",
      "Attendendo che la CPU si surriscaldi",
      "Cambiare il true in false all'interno del blocco"
    ],
    "correct": 3
  },
  {
    "type": "mc",
    "question": "Quale delle seguenti è un'affermazione corretta riguardo al ciclo `while`?",
    "options": [
      "La condizione viene controllata *prima* di eseguire il corpo del ciclo",
      "La condizione viene controllata *dopo* l'esecuzione del corpo del ciclo",
      "Non prevede una condizione, si basa su un contatore implicito",
      "Supporta un solo statement al suo interno, le graffe sono proibite",
      "Sostituisce completamente le funzioni matematiche",
      "È obbligatorio dichiarare le variabili contatore al suo interno"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Che differenza c'è tra `while(x == 5)` e `while(x = 5)`?",
    "options": [
      "Nessuna, sono due modi equivalenti di scrivere la stessa cosa",
      "Il primo verifica se x vale 5. Il secondo *assegna* 5 a x, valuta l'assegnazione come vera (non nulla), e crea un loop infinito.",
      "Il primo dà errore di sintassi, il secondo è corretto",
      "Il secondo causa un'eccezione a runtime, il primo crea un loop infinito",
      "Entrambi valutano la condizione e ritornano un intero anziché un booleano",
      "Dipende solo dal compilatore utilizzato"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "In un ciclo che richiede dati finché l'utente inserisce numeri positivi, quale condizione del while andrebbe usata? (assumendo input nella var `numero`)",
    "options": [
      "while (numero == 0)",
      "while (numero < 0)",
      "while (numero != 0)",
      "while (numero >= 0)",
      "while (numero == positivo)",
      "while (!numero)"
    ],
    "correct": 3
  },
  {
    "type": "mc",
    "question": "Qual è il limite di iterazioni massime per un ciclo `while` standard?",
    "options": [
      "1000 iterazioni",
      "Non esiste un limite predefinito nel linguaggio, il ciclo continua finché la condizione è vera o interrotto, potenzialmente all'infinito.",
      "Il limite della memoria RAM disponibile (OutOfMemoryException)",
      "Un milione di iterazioni",
      "Il numero massimo rappresentabile da un int (2147483647)",
      "Esattamente 32767 cicli in C++ ISO"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Può un ciclo `while` avere un altro ciclo `while` al suo interno?",
    "options": [
      "No, la sintassi C++ vieta i cicli while nidificati",
      "Sì, ma solo usando funzioni ricorsive separate",
      "Sì, prende il nome di ciclo while annidato o nidificato (nested while loop)",
      "No, causerebbe automaticamente uno stack overflow",
      "Sì, ma massimo 2 livelli di nidificazione per direttiva standard",
      "Sì, ma il ciclo interno deve essere di tipo diverso, ad esempio for"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "In <code>int a=0; while(a<10) a++;</code>, quante volte l'espressione <code>a<10</code> viene valutata dal compilatore a runtime?",
    "options": [
      "Nessuna",
      "Esattamente 10 volte (quando è true)",
      "Esattamente 11 volte (10 true e l'ultima false che fa terminare il ciclo)",
      "Esattamente 1 volta (la prima)",
      "Infinitamente a causa dell'incremento scorretto",
      "9 volte"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Che cosa accade al flusso di esecuzione (control flow) quando si usa un `while`?",
    "options": [
      "Il flusso va indietro alla fine del blocco per rivalutare la condizione finché è vera.",
      "Il flusso procede ignorando le istruzioni successive fino a spegnimento.",
      "Il programma genera dei multi-thread per ogni iterazione.",
      "Si attiva un timer e al termine esce.",
      "Il programma ricomincia dalla funzione main() in caso di loop infinito.",
      "Il sistema operativo blocca il processo per consumo eccessivo."
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Spesso in informatica i cicli iniziano da 0 invece che da 1. Come si traduce questo in un while per ripetere 5 volte?",
    "options": [
      "int i = 0; while (i <= 5)",
      "int i = 0; while (i < 5)",
      "int i = 1; while (i < 5)",
      "int i = 0; while (i == 5)",
      "int i = 0; while (i != 6)",
      "int i = 5; while (i > 0) ma partendo da 0 è impossibile"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Qual è il rischio del seguente ciclo? <code>double x = 0.0; while(x != 1.0) { x += 0.1; }</code>",
    "options": [
      "Nessun rischio, terminerà dopo 10 passaggi esatti.",
      "Errore di sintassi sull'operatore != con tipi double.",
      "Poiché i numeri a virgola mobile hanno precisione approssimata, `x` potrebbe saltare esattamente 1.0 (es. arrivando a 1.0000000000000002), causando un loop infinito.",
      "L'operatore += non può essere usato con i double.",
      "A causa del tempo di CPU, un incremento di 0.1 è troppo piccolo ed è scartato.",
      "Non compilerà senza includere math.h"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Un ciclo while è logicamente equivalente a un ciclo for. Qual è la differenza principale nel loro uso convenzionale?",
    "options": [
      "Non c'è differenza, sono la stessa identica cosa ma di anni storici diversi.",
      "Il `for` si usa di solito quando si sa già a priori quante volte iterare (contatore esplicito). Il `while` si usa quando la fine dipende da un evento o condizione ignota a priori.",
      "Il while è più veloce in esecuzione del for.",
      "Il for è un costrutto del C mentre il while è stato aggiunto in C++.",
      "Il while non può usare variabili intere come condizione, solo bool.",
      "Il for si chiude automaticamente dopo 1 millisecondo."
    ],
    "correct": 1
  }
];

const qComp = [
  {
    "type": "mc",
    "question": "Quale operatore serve per verificare se due valori sono identici (uguali)?",
    "options": [
      "=",
      "==",
      "===",
      "!==",
      "EQUALS",
      "::"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Qual è la differenza tra l'operatore `=` e l'operatore `==`?",
    "options": [
      "Non c'è alcuna differenza.",
      "`=` è usato per le stringhe, `==` per i numeri.",
      "`=` esegue un'assegnazione (imposta un valore), `==` esegue una comparazione (restituisce vero o falso).",
      "`=` è un operatore booleano, `==` è matematico.",
      "`=` verifica la disuguaglianza, `==` l'uguaglianza.",
      "`==` assegna il valore e lo protegge da modifiche (costante)."
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa restituisce un'espressione di comparazione come `5 > 3` in C++?",
    "options": [
      "Il valore 5.",
      "La differenza (2).",
      "Un valore booleano (`true` o `1`).",
      "Una stringa 'Vero'.",
      "Niente, è un errore di sintassi perché i numeri non sono variabili.",
      "Stampa a schermo automaticamente il risultato."
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "L'operatore `!=` significa:",
    "options": [
      "Non eseguire",
      "Diversamente identico",
      "Maggiore o minore",
      "Diverso da (Not Equal)",
      "Somma vettoriale",
      "Fattoriale inverso"
    ],
    "correct": 3
  },
  {
    "type": "mc",
    "question": "Come si scrive 'Maggiore o Uguale' in C++?",
    "options": [
      "=>",
      ">=",
      ">==",
      "==>",
      "++>",
      "M="
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Se si usa l'operatore `&&` (AND logico), quando l'intera espressione è vera?",
    "options": [
      "Quando almeno una delle condizioni è vera.",
      "Quando entrambe/tutte le condizioni sono vere.",
      "Quando la prima condizione è vera, a prescindere dalla seconda.",
      "Quando sono entrambe false.",
      "Quando la somma dei risultati booleani è 1.",
      "Solo se vengono comparati dei numeri interi."
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Se si usa l'operatore `||` (OR logico), quando l'intera espressione è falsa?",
    "options": [
      "Quando entrambe le condizioni sono false.",
      "Quando almeno una delle condizioni è falsa.",
      "Quando la prima condizione è vera e la seconda falsa.",
      "Quando sono entrambe vere.",
      "Mai, restituisce sempre un numero.",
      "Quando il compilatore lo rileva."
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Cosa significa il punto esclamativo `!` posto davanti a una condizione o variabile booleana, ad esempio `!vivo`?",
    "options": [
      "Rende la variabile immutabile.",
      "Rappresenta il NOT logico (nega il valore: se era true diventa false e viceversa).",
      "Segnala un pericolo al compilatore.",
      "È l'operatore fattoriale (es. 5!).",
      "Obbliga l'esecuzione a prescindere dal valore.",
      "Svuota la variabile azzerandola."
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa valuta l'espressione: `(true || false) && true`?",
    "options": [
      "false",
      "true",
      "Errore: operatori non mistabili senza conversioni",
      "Null",
      "0",
      "2"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Quale espressione verifica se una variabile intera `eta` è compresa strettamente tra 18 e 30 (estremi esclusi)?",
    "options": [
      "18 < eta < 30",
      "eta > 18 || eta < 30",
      "eta > 18 && eta < 30",
      "eta >= 18 && eta <= 30",
      "eta == (19...29)",
      "eta > 18 AND < 30"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cos'è la valutazione 'Short-Circuit' (Cortocircuito) in C++ quando si usa `&&`?",
    "options": [
      "È un errore a runtime che fa crashare il programma.",
      "Se la prima condizione è `false`, il C++ non valuta nemmeno la seconda perché l'AND sarà sicuramente `false`.",
      "Significa che il C++ salta l'IF per andare più veloce.",
      "L'operatore brucia memoria heap non deallocata.",
      "La conversione rapida dei tipi da int a bool.",
      "Nessuna delle precedenti."
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa succede in `if(a == 5 || ++b > 10)` se `a` vale 5, grazie allo Short-Circuit?",
    "options": [
      "Il ++b viene eseguito lo stesso per garantire correttezza.",
      "Il compilatore dà errore per ++b dentro un if.",
      "La prima parte (a==5) è vera. Nell'OR logico, basta un true, quindi la seconda parte (++b > 10) non viene eseguita e `b` NON si incrementa.",
      "`b` si incrementa prima che l'espressione sia valutata.",
      "L'espressione vale false.",
      "L'espressione crasha a runtime."
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Qual è il valore numerico equivalente a `true` e `false` nel C++ classico?",
    "options": [
      "1 per true, 0 per false",
      "0 per true, -1 per false",
      "-1 per true, 1 per false",
      "Nessun valore numerico, sono tipi incompatibili con l'int",
      "Qualsiasi numero positivo è true, qualsiasi negativo è false",
      "255 per true, 0 per false"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Se si fa `if ( -5 ) { ... }`, il blocco if viene eseguito?",
    "options": [
      "No, perché -5 è un numero negativo.",
      "No, perché -5 è false.",
      "Sì, perché in C++ qualsiasi valore diverso da 0 è considerato `true`.",
      "Errore di compilazione: serve un operatore di comparazione.",
      "Sì, ma prima lo converte a +5 (modulo).",
      "Dipende dal compilatore."
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "A quale ordine di precedenza obbediscono gli operatori AND (`&&`) e OR (`||`)?",
    "options": [
      "Hanno la stessa identica precedenza (si valuta da sinistra a destra).",
      "AND (`&&`) ha la precedenza maggiore rispetto all'OR (`||`).",
      "OR (`||`) ha la precedenza maggiore rispetto all'AND (`&&`).",
      "La precedenza è casuale, servono sempre le parentesi.",
      "L'operatore OR non fa parte del set standard.",
      "L'ordine dipende da quali variabili sono state dichiarate prima."
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa significa `!(!true)`?",
    "options": [
      "Un errore di sintassi",
      "false",
      "true",
      "0",
      "Un doppio loop",
      "Puntatore nullo"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Quale combinazione usa l'operatore Not-Equal (Diverso) insieme all'OR?",
    "options": [
      "!= ||",
      "!||=",
      "NOT OR",
      "<> &&",
      "==! OR",
      "!= &&"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Quale di questi NON è un operatore di comparazione (relazionale)?",
    "options": [
      "==",
      ">=",
      "<",
      "+=",
      "!=",
      ">"
    ],
    "correct": 3
  },
  {
    "type": "mc",
    "question": "Se comparo `5.0 == 5`, quale operazione compie il C++ in background?",
    "options": [
      "Confronto fallito per mismatch di tipo.",
      "Crash a runtime (Type mismatch).",
      "Niente, li ignora.",
      "Promozione implicita (Type Promotion) dell'intero 5 a double 5.0, per poi compararli e restituire `true`.",
      "Demozione del double 5.0 a int 5 per renderlo più rapido.",
      "Concatena i valori stringa."
    ],
    "correct": 3
  },
  {
    "type": "mc",
    "question": "In un'espressione `if(a > b && b > c)`, qual è la proprietà che si sta verificando?",
    "options": [
      "Che a sia uguale a c.",
      "Che a, b, c formino una successione decrescente (a è il massimo, c il minimo).",
      "Che siano tutti maggiori di zero.",
      "La proprietà commutativa dell'addizione.",
      "Che l'utente abbia inserito valori stringa validi.",
      "Che il codice non dia errori."
    ],
    "correct": 1
  }
];

const qDesign = [
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Memorizza l'età di una persona in modo ottimizzato per la memoria, sapendo che non supererà mai i 130 anni'?",
    "options": [
      "unsigned short int",
      "double",
      "long long int",
      "string",
      "bool",
      "float"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Devi chiedere ripetutamente una password finché non è corretta, costringendo l'utente a inserirla almeno una volta'?",
    "options": [
      "for",
      "while",
      "do-while",
      "switch",
      "if-else annidati",
      "Nessuna struttura iterativa, basta un if"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Calcola la somma dei primi N numeri pari noti a priori e stampa i passaggi'?",
    "options": [
      "while",
      "for",
      "do-while",
      "goto",
      "if (ricorsivo)",
      "Un operatore logico &&"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Gestisci le 4 direzioni del personaggio (N, S, E, W) usando i tasti W, A, S, D, ognuno con una logica diversa e distinta'?",
    "options": [
      "Una lunga catena di 50 `if` sequenziali",
      "`switch` sulle lettere preimpostate (char)",
      "Un ciclo `for` da 1 a 4",
      "Un array di booleani",
      "Un ciclo `while(true)` senza uscita",
      "L'operatore ternario annidato 10 volte"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Salva lo stato di accensione di una lampadina'?",
    "options": [
      "string (\"acceso\" / \"spento\")",
      "int (1 o 0)",
      "bool (true o false)",
      "char ('a' / 's')",
      "double (1.0 o 0.0)",
      "Array di byte"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Mantieni un registro del saldo di un conto corrente bancario al centesimo'?",
    "options": [
      "int",
      "short",
      "float o double (preferibilmente tipi decimali ad alta precisione o interi per i centesimi)",
      "char",
      "bool",
      "Un array di caratteri string"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Scegli quale dei due valori, a o b, è il maggiore e assegnalo subito in una sola piccola riga di codice'?",
    "options": [
      "If else lungo 4 righe",
      "Un ciclo for",
      "L'operatore ternario: `max = (a > b) ? a : b;`",
      "Un casting dinamico",
      "La keyword switch",
      "Un'istruzione goto"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Ripeti un'azione un numero infinito di volte per un gioco (Game Loop) fino a un segnale di uscita'?",
    "options": [
      "Un ciclo `for` da 1 a un milione",
      "Un blocco `if`",
      "Un `while(true)` o `for(;;)` con un break condizionale interno",
      "Un distruttore di classe",
      "Un blocco di codice senza cicli (va in automatico all'infinito)",
      "Un operatore ||"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Esci dal ciclo corrente immediatamente senza finire le istruzioni rimanenti del blocco'?",
    "options": [
      "return (se voglio uscire da tutto, non solo dal ciclo)",
      "break",
      "continue",
      "halt",
      "exit(0)",
      "pause"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Assicurati che una variabile PI_GRECO (3.14159) non venga mai modificata nel resto del programma'?",
    "options": [
      "La dichiari globale in cima al file",
      "Le metti un nome tutto MAIUSCOLO e speri che nessuno la tocchi",
      "Usi la parola chiave `const` (es. `const double PI_GRECO = 3.14159;`)",
      "La metti in un file txt esterno",
      "Usi un booleano",
      "Metti un if che controlla se cambia e la resetta"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Raccogli 10 voti degli studenti e salva tutti questi numeri vicini in memoria per calcolarne la media alla fine'?",
    "options": [
      "10 variabili intere separate (v1, v2, v3... v10)",
      "Una sola variabile `int` che viene sovrascritta (perdendo i vecchi dati)",
      "Un Array (vettore) di int di dimensione 10",
      "10 costanti",
      "Una lunghissima stringa con i voti separati da virgole",
      "Nessuna delle precedenti"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Verifica se un numero N è perfettamente pari'?",
    "options": [
      "if (N / 2 == 0)",
      "if (N % 2 == 0)",
      "if (N > 0 && N < 100)",
      "if (N == pari)",
      "if (N // 2)",
      "if (N != disperi)"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Verifica che il personaggio abbia trovato la chiave O abbia rotto la porta (per poter passare)'?",
    "options": [
      "Operatore AND logico (`&&`)",
      "Operatore OR logico (`||`)",
      "Operatore NOT logico (`!`)",
      "Operatore Bitwise XOR (`^`)",
      "Ciclo while infinito",
      "Somma matematica"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Gestisci le possibili eccezioni o errori che potrebbero far crashare un'apertura file'?",
    "options": [
      "Un blocco `try-catch`",
      "Un ciclo `for`",
      "Una variabile stringa per l'errore",
      "Un casting forzato per evitare il crash",
      "Un commento che avvisa di non rompere il programma",
      "L'operatore ternario"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Vuoi includere nel programma la possibilità di usare funzioni matematiche complesse come le potenze pow() e le radici sqrt()?'",
    "options": [
      "#include <iostream>",
      "#include <string>",
      "#include <cmath> (o math.h in C)",
      "Basta usare std::",
      "Uso un ciclo while per calcolare tutte le radici manualmente",
      "Nessuna libreria serve"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Convertire esplicitamente un numero con la virgola `float` in un intero `int`, tranciando i decimali, usando il cast moderno C++'?",
    "options": [
      "(int)numero",
      "int(numero)",
      "static_cast<int>(numero)",
      "convert(int, numero)",
      "numero.toInt()",
      "Cast->int(numero)"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Controllare che l'utente inserisca una lettera minuscola dell'alfabeto e non altri simboli'?",
    "options": [
      "if (char == minuscola)",
      "if (c >= 'a' && c <= 'z')",
      "if (c == a || b || c || d ...)",
      "if (c > 'Z' && c < 'A')",
      "while(lettera)",
      "switch(tutto_alfabeto)"
    ],
    "correct": 1
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Suddividere il codice in parti più piccole, riutilizzabili ed evitare di avere un main() lungo mille righe'?",
    "options": [
      "Array di puntatori",
      "Classi senza metodi",
      "Funzioni (metodi/procedure custom)",
      "Strutture cicliche con gotos",
      "Commenti elaborati //",
      "Il preprocessore #define"
    ],
    "correct": 2
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Creare un ciclo che salta i numeri pari e stampa solo i dispari, andando avanti all'iterazione successiva'?",
    "options": [
      "if(numero%2==0) { continue; }",
      "if(numero%2==0) { break; }",
      "if(numero%2==0) { return; }",
      "if(numero%2!=0) { stop; }",
      "goto salto_pari",
      "exit(0)"
    ],
    "correct": 0
  },
  {
    "type": "mc",
    "question": "Cosa useresti se la consegna ti chiede: 'Incrementare una variabile di 5 unità ad ogni ciclo nel modo più compatto e ottimizzato possibile'?",
    "options": [
      "variabile = variabile + 5;",
      "variabile + 5;",
      "variabile += 5;",
      "variabile +++++;",
      "5 += variabile;",
      "++variabile5;"
    ],
    "correct": 2
  }
];


const questionsData = [
  ...qOrig,
  ...qCode,
  ...qWhile,
  ...qComp,
  ...qDesign
];
