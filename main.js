/* =========================================
   🕹️ THOMAS MAZZEO — RETRO ARCADE CRT
   Main Application Logic
   ========================================= */

import './style.css';

// ══════════════════════════════════════════
// ── Hierarchical Data Model ──
// Materia → Sezioni → Capitoli → Argomenti
// ══════════════════════════════════════════

const MATERIE = [
  {
    id: "informatica",
    label: "Informatica",
    icon: "💻",
    color: "var(--color-cyan)",
    colorRgb: "0, 245, 255",
    desc: "Programmazione, algoritmi, reti e sistemi operativi.",
    sections: [
      {
        id: "cpp",
        title: "Linguaggio C++",
        icon: "⚙️",
        desc: "Dalle basi alla programmazione ad oggetti in C++.",
        chapters: [
          {
            title: "Capitolo 1 — Introduzione al C++",
            topics: [
              { title: "Cos'è il C++ e la sua storia", desc: "Origini, evoluzione da C, standard ISO e versioni moderne (C++11, 14, 17, 20)." },
              { title: "Ambiente di sviluppo", desc: "Installazione di un compilatore (GCC, Clang, MSVC), IDE consigliati e configurazione." },
              { title: "Il primo programma: Hello World", desc: "Struttura base di un programma C++, #include, main(), cout e compilazione." },
              { title: "Compilazione e linking", desc: "Preprocessore, compilazione, assemblaggio, linking. Differenza tra file .cpp e .h." },
            ]
          },
          {
            title: "Capitolo 2 — Variabili e Tipi di Dato",
            topics: [
              { title: "Tipi fondamentali", desc: "int, float, double, char, bool, void. Dimensioni e range." },
              { title: "Variabili e costanti", desc: "Dichiarazione, inizializzazione, const, constexpr, auto." },
              { title: "Operatori", desc: "Aritmetici, relazionali, logici, bitwise, assegnamento e operatore ternario." },
              { title: "Casting e conversioni", desc: "Conversioni implicite, static_cast, dynamic_cast, reinterpret_cast." },
            ]
          },
          {
            title: "Capitolo 3 — Strutture di Controllo",
            topics: [
              { title: "Condizionali: if, else, switch", desc: "Costrutti condizionali, operatore ternario, switch-case con break e default." },
              { title: "Cicli: for, while, do-while", desc: "Iterazione, range-based for, cicli annidati e controllo del flusso." },
              { title: "Break, continue e goto", desc: "Istruzioni di salto, quando usarle e quando evitarle." },
            ]
          },
          {
            title: "Capitolo 4 — Funzioni",
            topics: [
              { title: "Dichiarazione e definizione", desc: "Prototipi, parametri, valore di ritorno, void functions." },
              { title: "Passaggio per valore e per riferimento", desc: "Differenze, reference (&), const reference, quando usare quale." },
              { title: "Overloading delle funzioni", desc: "Funzioni con lo stesso nome ma parametri diversi, risoluzione." },
              { title: "Funzioni inline e ricorsione", desc: "Keyword inline, funzioni ricorsive, stack overflow e ottimizzazione." },
            ]
          },
          {
            title: "Capitolo 5 — Array e Puntatori",
            topics: [
              { title: "Array statici e multidimensionali", desc: "Dichiarazione, accesso, iterazione, limiti degli array C-style." },
              { title: "Puntatori: concetti base", desc: "Indirizzo di memoria, operatore &, dereferenziazione *, puntatori null." },
              { title: "Aritmetica dei puntatori", desc: "Incremento, decremento, differenza tra puntatori, relazione array-puntatori." },
              { title: "Allocazione dinamica: new e delete", desc: "Heap vs stack, new, delete, memory leak, array dinamici." },
            ]
          },
          {
            title: "Capitolo 6 — Classi e OOP",
            topics: [
              { title: "Classi e oggetti", desc: "Definizione di classe, attributi, metodi, istanziazione di oggetti." },
              { title: "Costruttori e distruttori", desc: "Costruttore di default, parametrizzato, di copia. Distruttore e RAII." },
              { title: "Incapsulamento", desc: "Access specifiers: public, private, protected. Getter e setter." },
              { title: "Ereditarietà", desc: "Classi derivate, ereditarietà singola e multipla, virtual, override." },
              { title: "Polimorfismo", desc: "Funzioni virtuali, classi astratte, vtable, dynamic dispatch." },
            ]
          },
        ]
      },
      {
        id: "excel",
        title: "Office Excel",
        icon: "📊",
        desc: "Dalle basi ai fogli di calcolo avanzati con Microsoft Excel.",
        chapters: [
          {
            title: "Lezione 1 — Le Basi di Excel",
            topics: [
              { title: "Tutorial Interattivo", desc: "Impara l'interfaccia, le celle, le formule e la formattazione con un simulatore animato passo-passo.", url: "/office-excel/Lezione_01_Basi/lezione.html" }
            ]
          }
        ]
      },
      // Puoi aggiungere altre sezioni qui, es:
      // { id: "python", title: "Linguaggio Python", ... }
    ]
  },
  {
    id: "fisica-laboratorio",
    label: "Fisica - Laboratorio",
    icon: "🔬",
    color: "var(--color-green)",
    colorRgb: "57, 255, 20",
    desc: "Esperimenti di laboratorio, misure, circuiti e relazioni scientifiche.",
    sections: [
      {
        id: "lab-fisica",
        title: "Laboratorio di Fisica",
        icon: "⚡",
        desc: "Esperimenti pratici, raccolta dati, analisi degli errori e strumenti.",
        chapters: [
          {
            title: "Modulo 1 — Misure ed Errori",
            topics: [
              { title: "Strumenti di misura", desc: "Sensibilità, portata, calibro ventesimale, micrometro e cronometro." },
              { title: "Teoria degli errori", desc: "Errori sistematici e casuali, valor medio, incertezza assoluta e percentuale." },
              { title: "Propagazione degli errori", desc: "Incertezze nelle somme, differenze, prodotti e quozienti." },
            ]
          },
          {
            title: "Modulo 2 — Esperimenti di Meccanica",
            topics: [
              { title: "Misure con il piano inclinato", desc: "Accelerazione, forza peso, scomposizione dei vettori e attrito." },
              { title: "Il moto armonico della molla", desc: "Costante elastica, legge di Hooke e periodo di oscillazione." },
              { title: "Il pendolo semplice", desc: "Misura del periodo al variare della lunghezza e calcolo di g." },
            ]
          },
          {
            title: "Modulo 3 — Elettricità e Circuiti",
            topics: [
              { title: "Uso del multimetro", desc: "Misura di tensione, corrente e resistenza nei circuiti elettrici." },
              { title: "Leggi di Ohm e resistenze", desc: "Verifica sperimentale delle leggi di Ohm, serie e parallelo." },
              { title: "Relazione di laboratorio", desc: "Guida alla stesura della relazione: introduzione, dati, grafici e conclusioni." },
            ]
          },
        ]
      }
    ]
  },
  {
    id: "altro",
    label: "Altro",
    icon: "🌟",
    color: "var(--color-yellow)",
    colorRgb: "255, 238, 0",
    desc: "Metodo di studio, risorse utili, strumenti e guide varie.",
    sections: [
      {
        id: "cpp-basi",
        title: "Le basi del C++",
        icon: "⌨️",
        hidden: true,
        desc: "Esercizi pratici e simulatori interattivi di codice.",
        chapters: [
          {
            title: "Livello 0 — Basi (Hello C++)",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio: struttura base, main() e std::cout.", url: "/esercizi-cpp/Livello_00_Basi/consegna.html" },
              { title: "Soluzione", desc: "Simulatore CRT interattivo e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_00_Basi/soluzione.html" }
            ]
          },
          {
            title: "Livello 1 — Variabili",
            variants: [
              {
                id: "1.0",
                badge: "BASE",
                name: "1.0 — Statistiche Eroe",
                desc: "Dichiarazione di variabili di diversi tipi di dato (nome, livello, salute).",
                topics: [
                  { title: "Consegna (Base)", desc: "L'obiettivo dell'esercizio base con le statistiche dell'eroe.", url: "/esercizi-cpp/Livello_01_Variabili/consegna.html" },
                  { title: "Soluzione (Base)", desc: "Simulatore interattivo passo-passo con RAM.", url: "/esercizi-cpp/Livello_01_Variabili/soluzione.html" }
                ]
              },
              {
                id: "1.1",
                badge: "VARIANTE 1.1",
                name: "1.1 — Telemetria Drone Spaziale",
                desc: "Gestione telemetria con string, int, double e bool (senza char).",
                topics: [
                  { title: "Consegna (1.1)", desc: "L'obiettivo della variante 1.1 (Drone Scout-X).", url: "/esercizi-cpp/Livello_01_1_Variabili/consegna.html" },
                  { title: "Soluzione (1.1)", desc: "Simulatore interattivo passo-passo con RAM e telemetria.", url: "/esercizi-cpp/Livello_01_1_Variabili/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello 2 — Input & Math",
            variants: [
              {
                id: "2.0",
                badge: "BASE",
                name: "2.0 — Danni Eroe",
                desc: "Lettura da tastiera con cin e calcolo somma dei danni (attacco + bonus).",
                topics: [
                  { title: "Consegna (Base)", desc: "L'obiettivo dell'esercizio base (attacco + bonus).", url: "/esercizi-cpp/Livello_02_Input_Math/consegna.html" },
                  { title: "Soluzione (Base)", desc: "Simulatore interattivo con RAM e cin.", url: "/esercizi-cpp/Livello_02_Input_Math/soluzione.html" }
                ]
              },
              {
                id: "2.1",
                badge: "VARIANTE 2.1",
                name: "2.1 — Propulsione Iperspaziale",
                desc: "Calcolo consumo carburante e riserva per salto spaziale (senza char).",
                topics: [
                  { title: "Consegna (2.1)", desc: "L'obiettivo della variante 2.1 (Distanza, consumo e riserva).", url: "/esercizi-cpp/Livello_02_1_Input_Math/consegna.html" },
                  { title: "Soluzione (2.1)", desc: "Simulatore interattivo con formula aritmetica e RAM.", url: "/esercizi-cpp/Livello_02_1_Input_Math/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello 3 — Condizioni",
            variants: [
              {
                id: "3.0",
                badge: "BASE",
                name: "3.0 — Punti Vita Eroe",
                desc: "Controllo se l'eroe è vivo o morto con if/else sui Punti Vita (HP).",
                topics: [
                  { title: "Consegna (Base)", desc: "L'obiettivo dell'esercizio base con HP.", url: "/esercizi-cpp/Livello_03_Condizioni/consegna.html" },
                  { title: "Soluzione (Base)", desc: "Simulatore interattivo con ALU e bivi condizionali.", url: "/esercizi-cpp/Livello_03_Condizioni/soluzione.html" }
                ]
              },
              {
                id: "3.1",
                badge: "VARIANTE 3.1",
                name: "3.1 — Monitor Reattore a Fusione",
                desc: "Diagnostica termica a 3 stati con if, else if ed else (senza char).",
                topics: [
                  { title: "Consegna (3.1)", desc: "L'obiettivo della variante 3.1 (Allarme sovraccarico / soglia minima).", url: "/esercizi-cpp/Livello_03_1_Condizioni/consegna.html" },
                  { title: "Soluzione (3.1)", desc: "Simulatore interattivo con comparatore logico ALU.", url: "/esercizi-cpp/Livello_03_1_Condizioni/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello 4 — Cicli (While)",
            variants: [
              {
                id: "4.0",
                badge: "BASE",
                name: "4.0 — Conto alla Rovescia",
                desc: "Countdown da 3 a 1 e annuncio di partenza con ciclo while.",
                topics: [
                  { title: "Consegna (Base)", desc: "L'obiettivo del countdown con while.", url: "/esercizi-cpp/Livello_04_Cicli_While/consegna.html" },
                  { title: "Soluzione (Base)", desc: "Simulatore interattivo con loop arrow e decremento.", url: "/esercizi-cpp/Livello_04_Cicli_While/soluzione.html" }
                ]
              },
              {
                id: "4.1",
                badge: "VARIANTE 4.1",
                name: "4.1 — Ricarica Scudi (+20%)",
                desc: "Ricarica progressiva degli scudi fino al 100% con SOLO ciclo while.",
                topics: [
                  { title: "Consegna (4.1)", desc: "L'obiettivo della variante 4.1 (Ricarica a passi di +20).", url: "/esercizi-cpp/Livello_04_1_Cicli_While/consegna.html" },
                  { title: "Soluzione (4.1)", desc: "Simulatore interattivo con iterazioni del while.", url: "/esercizi-cpp/Livello_04_1_Cicli_While/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello 4.5 — Pratica (While)",
            variants: [
              {
                id: "4.5.1",
                badge: "PRATICA 1",
                name: "4.5.1 — Somma fino a Zero",
                desc: "Continuare a sommare valori in input finché non si inserisce lo 0 (Sentinella).",
                topics: [
                  { title: "Consegna (1)", desc: "Somma continua di numeri con blocco allo 0.", url: "/esercizi-cpp/Livello_04b_1_Somma_Zero/consegna.html" },
                  { title: "Soluzione (1)", desc: "Simulatore interattivo.", url: "/esercizi-cpp/Livello_04b_1_Somma_Zero/soluzione.html" }
                ]
              },
              {
                id: "4.5.2",
                badge: "PRATICA 2",
                name: "4.5.2 — Indovina il Numero Segreto",
                desc: "Continuare a chiedere un tentativo finché non si indovina il numero.",
                topics: [
                  { title: "Consegna (2)", desc: "Trova il codice segreto.", url: "/esercizi-cpp/Livello_04b_2_Indovina_Numero/consegna.html" },
                  { title: "Soluzione (2)", desc: "Simulatore interattivo.", url: "/esercizi-cpp/Livello_04b_2_Indovina_Numero/soluzione.html" }
                ]
              },
              {
                id: "4.5.3",
                badge: "PRATICA 3",
                name: "4.5.3 — Potenze di Due (< 1000)",
                desc: "Raddoppiare iterativamente un valore finché è minore di 1000.",
                topics: [
                  { title: "Consegna (3)", desc: "Algoritmo per il raddoppio.", url: "/esercizi-cpp/Livello_04b_3_Potenze_Di_Due/consegna.html" },
                  { title: "Soluzione (3)", desc: "Simulatore interattivo.", url: "/esercizi-cpp/Livello_04b_3_Potenze_Di_Due/soluzione.html" }
                ]
              },
              {
                id: "4.5.4",
                badge: "PRATICA 4",
                name: "4.5.4 — Password Sicura",
                desc: "Continuare a richiedere l'inserimento finché la stringa non è lunga almeno 8 caratteri.",
                topics: [
                  { title: "Consegna (4)", desc: "Controllo lunghezza su input stringa.", url: "/esercizi-cpp/Livello_04b_4_Password_Sicura/consegna.html" },
                  { title: "Soluzione (4)", desc: "Simulatore interattivo.", url: "/esercizi-cpp/Livello_04b_4_Password_Sicura/soluzione.html" }
                ]
              },
              {
                id: "4.5.5",
                badge: "PRATICA 5",
                name: "4.5.5 — Prelievi dal Bancomat",
                desc: "Prelevare finché ci sono fondi (saldo > 0).",
                topics: [
                  { title: "Consegna (5)", desc: "Sottrazione continua su un saldo limitato.", url: "/esercizi-cpp/Livello_04b_5_Bancomat/consegna.html" },
                  { title: "Soluzione (5)", desc: "Simulatore interattivo.", url: "/esercizi-cpp/Livello_04b_5_Bancomat/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello 5 — Statistiche",
            variants: [
              {
                id: "5.0",
                badge: "BASE",
                name: "5.0 — Il Raccoglitore d'Oro",
                desc: "Accumulatore += e contatore ++ per il conteggio dei bauli aperti.",
                topics: [
                  { title: "Consegna (Base)", desc: "L'obiettivo dell'esercizio base sui bauli.", url: "/esercizi-cpp/Livello_05_Statistiche/consegna.html" },
                  { title: "Soluzione (Base)", desc: "Simulatore interattivo con accumulatori.", url: "/esercizi-cpp/Livello_05_Statistiche/soluzione.html" }
                ]
              },
              {
                id: "5.1",
                badge: "VARIANTE 5.1",
                name: "5.1 — Scanner Risorse (Solo While)",
                desc: "Scanner minerario con sentinella 0 usando SOLO ciclo while (senza do-while, senza char).",
                topics: [
                  { title: "Consegna (5.1)", desc: "L'obiettivo della variante 5.1 con solo while.", url: "/esercizi-cpp/Livello_05_1_Statistiche/consegna.html" },
                  { title: "Soluzione (5.1)", desc: "Simulatore interattivo con sentinella e accumulatore nel while.", url: "/esercizi-cpp/Livello_05_1_Statistiche/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello A — Sfide (Avanzate)",
            variants: [
              {
                id: "A.0",
                badge: "BASE",
                name: "A.0 — Il Torneo Scolastico",
                desc: "Gestione di un torneo con regole matematiche.",
                topics: [
                  { title: "Consegna (Base)", desc: "L'obiettivo dell'esercizio del torneo.", url: "/esercizi-cpp/Livello_A_Torneo/consegna.html" },
                  { title: "Soluzione (Base)", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_A_Torneo/soluzione.html" }
                ]
              },
              {
                id: "A.1",
                badge: "VARIANTE A.1",
                name: "A.1 — Gestione Negozio",
                desc: "Sconti e tasse basati sulle quantità e sulle categorie.",
                topics: [
                  { title: "Consegna (A.1)", desc: "L'obiettivo dell'esercizio del negozio.", url: "/esercizi-cpp/Livello_A1_Negozio/consegna.html" },
                  { title: "Soluzione (A.1)", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_A1_Negozio/soluzione.html" }
                ]
              },
              {
                id: "A.2",
                badge: "VARIANTE A.2",
                name: "A.2 — Flotta Spaziale",
                desc: "Calcolo carburante in base a equipaggio e missioni.",
                topics: [
                  { title: "Consegna (A.2)", desc: "L'obiettivo dell'esercizio della flotta.", url: "/esercizi-cpp/Livello_A2_Flotta/consegna.html" },
                  { title: "Soluzione (A.2)", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_A2_Flotta/soluzione.html" }
                ]
              },
              {
                id: "A.3",
                badge: "VARIANTE A.3",
                name: "A.3 — Pronto Soccorso",
                desc: "Attribuzione priorità per il triage ospedaliero.",
                topics: [
                  { title: "Consegna (A.3)", desc: "L'obiettivo dell'esercizio del pronto soccorso.", url: "/esercizi-cpp/Livello_A3_Ospedale/consegna.html" },
                  { title: "Soluzione (A.3)", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_A3_Ospedale/soluzione.html" }
                ]
              },
              {
                id: "A.4",
                badge: "VARIANTE A.4",
                name: "A.4 — Smart City",
                desc: "Calcolo consumi energetici per vari edifici.",
                topics: [
                  { title: "Consegna (A.4)", desc: "L'obiettivo dell'esercizio della smart city.", url: "/esercizi-cpp/Livello_A4_Citta/consegna.html" },
                  { title: "Soluzione (A.4)", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_A4_Citta/soluzione.html" }
                ]
              }
            ]
          },
          {
            title: "Livello 10 — Mega Quiz",
            topics: [
              { title: "Esercizio Domande Risposta Multipla", desc: "Mettiti alla prova con 80 domande a risposta multipla interattive.", url: "/esercizi-cpp/Livello_Quiz_Risposte/consegna.html" }
            ]
          }
        ]
      },
      {
        id: "info-regole",
        title: "Info & Regole",
        icon: "📋",
        desc: "Informazioni generali, regolamento del corso e struttura delle verifiche.",
        chapters: [
          {
            title: "Struttura verifica",
            topics: [
              {
                title: "Composizione della Prova",
                desc: "Schema grafico interattivo della verifica di teoria del PC: intestazione, risorse utili, domande aperte (70%) e risposta multipla (30%).",
                url: "/info-regole/struttura-verifica.html"
              },
              {
                title: "Suggerimenti per la Verifica",
                desc: "3 suggerimenti fondamentali per la teoria informatica: risposte complete sui componenti del PC, gestione del tempo e tentare sempre.",
                url: "/info-regole/consigli-verifica.html"
              },
              {
                title: "Il Meccanismo dei +",
                desc: "Come guadagnare fino a +1 punto bonus sulla verifica di teoria: appunti a mano a fine lezione, 1 '+' a settimana e rispetto delle regole.",
                url: "/info-regole/meccanismo-piu.html"
              }
            ]
          }
        ]
      }
    ]
  },
];

// ══════════════════════════════════════════
// ── Helper per conteggio topic ──
// ══════════════════════════════════════════
function getChapterTopicCount(chapter) {
  if (chapter.variants && chapter.variants.length > 0) {
    return chapter.variants.reduce((sum, v) => sum + v.topics.length, 0);
  }
  return chapter.topics ? chapter.topics.length : 0;
}

// ══════════════════════════════════════════
// ── State ──
// ══════════════════════════════════════════
let currentSection = 'home';
let currentView = 'materie'; // 'materie' | 'sections' | 'chapters'
let selectedMateria = null;
let selectedSectionObj = null;

// ══════════════════════════════════════════
// ── DOM Elements ──
// ══════════════════════════════════════════
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const ctaBtn = document.getElementById('cta-explore');
const risorseContainer = document.getElementById('risorse-content');
const breadcrumbContainer = document.getElementById('breadcrumb');

// ══════════════════════════════════════════
// ── Initialize ──
// ══════════════════════════════════════════
function handleHashRoute() {
  const rawHash = window.location.hash.replace('#', '');
  if (!rawHash) return;

  for (const materia of MATERIE) {
    const sec = materia.sections.find(s => s.id === rawHash && !s.hidden);
    if (sec) {
      selectedMateria = materia;
      selectedSectionObj = sec;
      currentView = 'chapters';
      switchSection('risorse');
      renderRisorseView();
      return;
    }
  }

  if (rawHash === 'risorse') {
    switchSection('risorse');
  }
}

function init() {
  updateStats();
  animateStatsOnLoad();
  setupEventListeners();
  renderRisorseView();
  handleHashRoute();
  window.addEventListener('hashchange', handleHashRoute);
}

// ── Stats ──
function updateStats() {
  const totalTopics = MATERIE.reduce((sum, m) =>
    sum + m.sections.filter(s => !s.hidden).reduce((s2, sec) =>
      s2 + sec.chapters.reduce((s3, ch) => s3 + getChapterTopicCount(ch), 0), 0), 0);
  const totalSections = MATERIE.reduce((sum, m) => sum + m.sections.filter(s => !s.hidden).length, 0);

  document.getElementById('stat-total').textContent = totalTopics;
  document.getElementById('stat-subjects').textContent = MATERIE.length;
  document.getElementById('stat-types').textContent = totalSections;
}

function animateStatsOnLoad() {
  document.querySelectorAll('.stat-box__number').forEach(el => {
    const target = parseInt(el.textContent, 10);
    el.textContent = '0';
    animateNumber(el, 0, target, 800);
  });
}

function animateNumber(el, start, end, duration) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (end - start) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ══════════════════════════════════════════
// ── Navigation ──
// ══════════════════════════════════════════
function switchSection(section) {
  currentSection = section;
  navBtns.forEach(btn => btn.classList.toggle('nav-btn--active', btn.dataset.section === section));
  sections.forEach(sec => {
    const name = sec.id.replace('section-', '');
    sec.classList.toggle('active', name === section);
  });
  // Reset risorse view when switching back
  if (section === 'risorse') {
    renderRisorseView();
  }
  // Re-trigger fade
  const active = document.getElementById(`section-${section}`);
  if (active) { active.style.animation = 'none'; active.offsetHeight; active.style.animation = ''; }
}

// ══════════════════════════════════════════
// ── Risorse Rendering ──
// ══════════════════════════════════════════
function renderRisorseView() {
  switch (currentView) {
    case 'materie': renderMaterieView(); break;
    case 'sections': renderSectionsView(); break;
    case 'chapters': renderChaptersView(); break;
  }
  renderBreadcrumb();
}

// ── Breadcrumb ──
function renderBreadcrumb() {
  breadcrumbContainer.innerHTML = '';

  // Always show "Materie" root
  const root = document.createElement('button');
  root.className = 'breadcrumb__item';
  root.innerHTML = '<span class="breadcrumb__icon">🏠</span> MATERIE';
  if (currentView === 'materie') root.classList.add('breadcrumb__item--active');
  root.addEventListener('click', () => { currentView = 'materie'; selectedMateria = null; selectedSectionObj = null; renderRisorseView(); });
  breadcrumbContainer.appendChild(root);

  if (selectedMateria) {
    const sep1 = document.createElement('span');
    sep1.className = 'breadcrumb__sep';
    sep1.textContent = '►';
    breadcrumbContainer.appendChild(sep1);

    const materiaBtn = document.createElement('button');
    materiaBtn.className = 'breadcrumb__item';
    materiaBtn.style.setProperty('--bc-color', selectedMateria.color);
    materiaBtn.innerHTML = `${selectedMateria.icon} ${selectedMateria.label.toUpperCase()}`;
    if (currentView === 'sections') materiaBtn.classList.add('breadcrumb__item--active');
    materiaBtn.addEventListener('click', () => { currentView = 'sections'; selectedSectionObj = null; renderRisorseView(); });
    breadcrumbContainer.appendChild(materiaBtn);
  }

  if (selectedSectionObj) {
    const sep2 = document.createElement('span');
    sep2.className = 'breadcrumb__sep';
    sep2.textContent = '►';
    breadcrumbContainer.appendChild(sep2);

    const secBtn = document.createElement('button');
    secBtn.className = 'breadcrumb__item breadcrumb__item--active';
    secBtn.style.setProperty('--bc-color', selectedMateria.color);
    secBtn.innerHTML = `${selectedSectionObj.icon} ${selectedSectionObj.title.toUpperCase()}`;
    breadcrumbContainer.appendChild(secBtn);
  }
}

// ── View: Materie Selection ──
function renderMaterieView() {
  risorseContainer.innerHTML = '';

  const title = document.createElement('h2');
  title.className = 'view-title pixel-text';
  title.textContent = 'SELEZIONA UNA MATERIA';
  risorseContainer.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'materie-grid';

  MATERIE.forEach((materia, i) => {
    const visibleSections = materia.sections.filter(sec => !sec.hidden);
    const sectionCount = visibleSections.length;
    const topicCount = visibleSections.reduce((s, sec) =>
      s + sec.chapters.reduce((s2, ch) => s2 + getChapterTopicCount(ch), 0), 0);

    const card = document.createElement('button');
    card.className = 'materia-card';
    card.style.setProperty('--card-color', materia.color);
    card.style.setProperty('--card-color-rgb', materia.colorRgb);
    card.style.animationDelay = `${i * 0.12}s`;

    card.innerHTML = `
      <div class="materia-card__icon-wrap">
        <span class="materia-card__icon">${materia.icon}</span>
      </div>
      <h3 class="materia-card__title">${materia.label}</h3>
      <p class="materia-card__desc">${materia.desc}</p>
      <div class="materia-card__stats">
        <span class="materia-card__stat">${sectionCount} ${sectionCount === 1 ? 'sezione' : 'sezioni'}</span>
        <span class="materia-card__stat-sep">·</span>
        <span class="materia-card__stat">${topicCount} argomenti</span>
      </div>
      <span class="materia-card__arrow">►</span>
    `;

    card.addEventListener('click', () => {
      selectedMateria = materia;
      currentView = 'sections';
      renderRisorseView();
    });

    grid.appendChild(card);
  });

  risorseContainer.appendChild(grid);
}

// ── View: Sections of a Materia ──
function renderSectionsView() {
  if (!selectedMateria) return;
  risorseContainer.innerHTML = '';

  const title = document.createElement('h2');
  title.className = 'view-title pixel-text';
  title.style.color = selectedMateria.color;
  title.textContent = `${selectedMateria.icon} ${selectedMateria.label.toUpperCase()}`;
  risorseContainer.appendChild(title);

  const visibleSections = selectedMateria.sections.filter(sec => !sec.hidden);

  if (visibleSections.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <span class="empty-state__icon">📭</span>
      <p class="empty-state__text pixel-text">NESSUNA SEZIONE ANCORA</p>
      <p class="empty-state__sub">Prossimamente...</p>
    `;
    risorseContainer.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'sections-grid';

  visibleSections.forEach((sec, i) => {
    const chapterCount = sec.chapters.length;
    const topicCount = sec.chapters.reduce((s, ch) => s + getChapterTopicCount(ch), 0);

    const card = document.createElement('button');
    card.className = 'section-card';
    card.style.setProperty('--card-color', selectedMateria.color);
    card.style.setProperty('--card-color-rgb', selectedMateria.colorRgb);
    card.style.animationDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <div class="section-card__header">
        <span class="section-card__icon">${sec.icon}</span>
        <div>
          <h3 class="section-card__title">${sec.title}</h3>
          <p class="section-card__desc">${sec.desc}</p>
        </div>
      </div>
      <div class="section-card__meta">
        <span class="section-card__badge">${chapterCount} capitoli</span>
        <span class="section-card__badge">${topicCount} risorse</span>
        <span class="section-card__arrow">►</span>
      </div>
    `;

    card.addEventListener('click', () => {
      selectedSectionObj = sec;
      currentView = 'chapters';
      history.replaceState(null, '', `#${sec.id}`);
      renderRisorseView();
    });

    grid.appendChild(card);
  });

  risorseContainer.appendChild(grid);
}

// ── Helper: Render Topics list ──
function renderTopicsInto(container, topics, color, colorRgb) {
  container.innerHTML = '';
  topics.forEach((topic) => {
    const topicEl = document.createElement(topic.url ? 'a' : 'div');
    topicEl.className = 'topic';
    if (topic.url) {
      topicEl.href = topic.url;
      topicEl.target = '_self';
      topicEl.classList.add('topic--link');
    }
    topicEl.style.setProperty('--card-color', color);
    topicEl.style.setProperty('--card-color-rgb', colorRgb);

    topicEl.innerHTML = `
      <div class="topic__marker" style="background:${color}"></div>
      <div class="topic__content">
        <h4 class="topic__title">${topic.title}</h4>
        <p class="topic__desc">${topic.desc}</p>
      </div>
      ${topic.url ? `<div class="topic__action" style="color:${color}">APRI 🚀</div>` : ''}
    `;

    container.appendChild(topicEl);
  });
}

// ── View: Chapters accordion ──
function renderChaptersView() {
  if (!selectedMateria || !selectedSectionObj) return;
  risorseContainer.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'chapters-header';
  header.innerHTML = `
    <span class="chapters-header__icon">${selectedSectionObj.icon}</span>
    <div>
      <h2 class="chapters-header__title pixel-text" style="color:${selectedMateria.color}">${selectedSectionObj.title}</h2>
      <p class="chapters-header__desc">${selectedSectionObj.desc}</p>
    </div>
  `;
  risorseContainer.appendChild(header);

  const chaptersWrapper = document.createElement('div');
  chaptersWrapper.className = 'chapters-list';

  selectedSectionObj.chapters.forEach((chapter, ci) => {
    const chapterEl = document.createElement('div');
    chapterEl.className = 'chapter';
    chapterEl.style.animationDelay = `${ci * 0.08}s`;

    const hasVariants = chapter.variants && chapter.variants.length > 0;
    const countLabel = hasVariants 
      ? `${chapter.variants.length} versioni`
      : `${chapter.topics.length} argomenti`;

    // Chapter header (clickable)
    const chapterHeader = document.createElement('button');
    chapterHeader.className = 'chapter__header';
    chapterHeader.style.setProperty('--card-color', selectedMateria.color);
    chapterHeader.style.setProperty('--card-color-rgb', selectedMateria.colorRgb);

    chapterHeader.innerHTML = `
      <span class="chapter__number" style="color:${selectedMateria.color}">${String(ci + 1).padStart(2, '0')}</span>
      <span class="chapter__title">${chapter.title}</span>
      <span class="chapter__count">${countLabel}</span>
      <span class="chapter__toggle">▼</span>
    `;

    // Topics & Variant Container
    const chapterBody = document.createElement('div');
    chapterBody.className = 'chapter__topics';

    if (hasVariants) {
      // ── Render Variant Selector Bar ──
      const variantSelector = document.createElement('div');
      variantSelector.className = 'chapter__variant-bar';

      const variantLabel = document.createElement('span');
      variantLabel.className = 'variant-bar__label pixel-text';
      variantLabel.textContent = 'SELEZIONA VARIANTE:';
      variantSelector.appendChild(variantLabel);

      const variantTabsWrapper = document.createElement('div');
      variantTabsWrapper.className = 'variant-tabs-wrapper';

      const variantContent = document.createElement('div');
      variantContent.className = 'chapter__variant-content';

      chapter.variants.forEach((v, vi) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = `variant-tab ${vi === 0 ? 'variant-tab--active' : ''}`;
        tabBtn.style.setProperty('--card-color', selectedMateria.color);
        tabBtn.style.setProperty('--card-color-rgb', selectedMateria.colorRgb);
        tabBtn.innerHTML = `
          <span class="variant-tab__badge">${v.badge}</span>
          <span class="variant-tab__name">${v.name}</span>
        `;

        tabBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          variantTabsWrapper.querySelectorAll('.variant-tab').forEach(b => b.classList.remove('variant-tab--active'));
          tabBtn.classList.add('variant-tab--active');
          displayVariant(v, variantContent, selectedMateria.color, selectedMateria.colorRgb);
        });

        variantTabsWrapper.appendChild(tabBtn);
      });

      variantSelector.appendChild(variantTabsWrapper);
      chapterBody.appendChild(variantSelector);
      chapterBody.appendChild(variantContent);

      // Display default first variant
      displayVariant(chapter.variants[0], variantContent, selectedMateria.color, selectedMateria.colorRgb);

    } else {
      // Standard topics rendering
      const standardTopicsContainer = document.createElement('div');
      renderTopicsInto(standardTopicsContainer, chapter.topics, selectedMateria.color, selectedMateria.colorRgb);
      chapterBody.appendChild(standardTopicsContainer);
    }

    // Toggle logic
    chapterHeader.addEventListener('click', () => {
      const isOpen = chapterEl.classList.contains('chapter--open');
      // Close all other chapters
      chaptersWrapper.querySelectorAll('.chapter--open').forEach(el => {
        el.classList.remove('chapter--open');
      });
      if (!isOpen) {
        chapterEl.classList.add('chapter--open');
      }
    });

    chapterEl.appendChild(chapterHeader);
    chapterEl.appendChild(chapterBody);
    chaptersWrapper.appendChild(chapterEl);
  });

  risorseContainer.appendChild(chaptersWrapper);

  // Auto-open first chapter
  const firstChapter = chaptersWrapper.querySelector('.chapter');
  if (firstChapter) firstChapter.classList.add('chapter--open');
}

// ── Helper: Display active variant details ──
function displayVariant(variant, container, color, colorRgb) {
  container.innerHTML = '';

  const infoBox = document.createElement('div');
  infoBox.className = 'variant-desc-box';
  infoBox.style.setProperty('--card-color', color);
  infoBox.style.setProperty('--card-color-rgb', colorRgb);
  infoBox.innerHTML = `
    <span class="variant-desc-badge">${variant.badge}</span>
    <span class="variant-desc-text">${variant.desc}</span>
  `;
  container.appendChild(infoBox);

  const topicsWrap = document.createElement('div');
  topicsWrap.className = 'variant-topics-wrap';
  renderTopicsInto(topicsWrap, variant.topics, color, colorRgb);
  container.appendChild(topicsWrap);
}

// ══════════════════════════════════════════
// ── Event Listeners ──
// ══════════════════════════════════════════
function setupEventListeners() {
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.section === 'risorse') {
        currentView = 'materie';
        selectedMateria = null;
        selectedSectionObj = null;
      }
      switchSection(btn.dataset.section);
    });
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      currentView = 'materie';
      selectedMateria = null;
      selectedSectionObj = null;
      switchSection('risorse');
    });
  }
}

// ── Start ──
document.addEventListener('DOMContentLoaded', init);
