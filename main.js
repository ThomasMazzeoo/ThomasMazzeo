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
      // Puoi aggiungere altre sezioni qui, es:
      // { id: "python", title: "Linguaggio Python", ... }
    ]
  },
  {
    id: "matematica",
    label: "Matematica",
    icon: "📐",
    color: "var(--color-magenta)",
    colorRgb: "255, 0, 255",
    desc: "Analisi, algebra lineare, geometria e probabilità.",
    sections: [
      {
        id: "analisi1",
        title: "Analisi Matematica I",
        icon: "📈",
        desc: "Limiti, derivate, integrali e serie numeriche.",
        chapters: [
          {
            title: "Capitolo 1 — Numeri Reali e Funzioni",
            topics: [
              { title: "Insiemi numerici", desc: "Naturali, interi, razionali, reali. Assioma di completezza." },
              { title: "Funzioni reali", desc: "Dominio, codominio, iniettività, suriettività, biettività, composizione." },
              { title: "Funzioni elementari", desc: "Polinomiali, esponenziali, logaritmiche, trigonometriche." },
            ]
          },
          {
            title: "Capitolo 2 — Limiti e Continuità",
            topics: [
              { title: "Definizione di limite", desc: "Limite finito e infinito, limiti destro e sinistro, definizione epsilon-delta." },
              { title: "Teoremi sui limiti", desc: "Unicità, confronto (carabinieri), operazioni con i limiti." },
              { title: "Continuità", desc: "Funzioni continue, punti di discontinuità, teoremi di Weierstrass e dei valori intermedi." },
            ]
          },
          {
            title: "Capitolo 3 — Derivate",
            topics: [
              { title: "Definizione e significato geometrico", desc: "Rapporto incrementale, retta tangente, derivabilità vs continuità." },
              { title: "Regole di derivazione", desc: "Somma, prodotto, quoziente, catena. Derivate di funzioni elementari." },
              { title: "Teoremi del calcolo differenziale", desc: "Fermat, Rolle, Lagrange, Cauchy, de l'Hôpital." },
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
        desc: "Esercizi pratici e simulatori interattivi di codice.",
        chapters: [
          {
            title: "Livello 0 — Basi (Hello C++)",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_00_Basi/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_00_Basi/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_00_Basi/soluzione.html" }
            ]
          },
          {
            title: "Livello 1 — Variabili",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_01_Variabili/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_01_Variabili/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_01_Variabili/soluzione.html" }
            ]
          },
          {
            title: "Livello 2 — Input & Math",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_02_Input_Math/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_02_Input_Math/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_02_Input_Math/soluzione.html" }
            ]
          },
          {
            title: "Livello 3 — Condizioni",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_03_Condizioni/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_03_Condizioni/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_03_Condizioni/soluzione.html" }
            ]
          },
          {
            title: "Livello 4 — Cicli (While)",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_04_Cicli_While/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_04_Cicli_While/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_04_Cicli_While/soluzione.html" }
            ]
          },
          {
            title: "Livello 5 — Statistiche",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_05_Statistiche/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_05_Statistiche/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_05_Statistiche/soluzione.html" }
            ]
          },
          {
            title: "Livello A — Torneo (Avanzato)",
            topics: [
              { title: "Consegna", desc: "L'obiettivo dell'esercizio.", url: "/esercizi-cpp/Livello_A_Torneo/consegna.html" },
              { title: "Esercizio", desc: "Scrivi il tuo codice.", url: "/esercizi-cpp/Livello_A_Torneo/esercizio.html" },
              { title: "Soluzione", desc: "Simulatore e spiegazione passo-passo.", url: "/esercizi-cpp/Livello_A_Torneo/soluzione.html" }
            ]
          }
        ]
      }
    ]
  },
];

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
function init() {
  updateStats();
  animateStatsOnLoad();
  setupEventListeners();
  renderRisorseView();
}

// ── Stats ──
function updateStats() {
  const totalTopics = MATERIE.reduce((sum, m) =>
    sum + m.sections.reduce((s2, sec) =>
      s2 + sec.chapters.reduce((s3, ch) => s3 + ch.topics.length, 0), 0), 0);
  const totalSections = MATERIE.reduce((sum, m) => sum + m.sections.length, 0);

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
    const sectionCount = materia.sections.length;
    const topicCount = materia.sections.reduce((s, sec) =>
      s + sec.chapters.reduce((s2, ch) => s2 + ch.topics.length, 0), 0);

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

  if (selectedMateria.sections.length === 0) {
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

  selectedMateria.sections.forEach((sec, i) => {
    const chapterCount = sec.chapters.length;
    const topicCount = sec.chapters.reduce((s, ch) => s + ch.topics.length, 0);

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
        <span class="section-card__badge">${topicCount} argomenti</span>
        <span class="section-card__arrow">►</span>
      </div>
    `;

    card.addEventListener('click', () => {
      selectedSectionObj = sec;
      currentView = 'chapters';
      renderRisorseView();
    });

    grid.appendChild(card);
  });

  risorseContainer.appendChild(grid);
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

    // Chapter header (clickable)
    const chapterHeader = document.createElement('button');
    chapterHeader.className = 'chapter__header';
    chapterHeader.style.setProperty('--card-color', selectedMateria.color);
    chapterHeader.style.setProperty('--card-color-rgb', selectedMateria.colorRgb);

    chapterHeader.innerHTML = `
      <span class="chapter__number" style="color:${selectedMateria.color}">${String(ci + 1).padStart(2, '0')}</span>
      <span class="chapter__title">${chapter.title}</span>
      <span class="chapter__count">${chapter.topics.length} argomenti</span>
      <span class="chapter__toggle">▼</span>
    `;

    // Topics container (hidden by default)
    const topicsContainer = document.createElement('div');
    topicsContainer.className = 'chapter__topics';

    chapter.topics.forEach((topic, ti) => {
      const topicEl = document.createElement(topic.url ? 'a' : 'div');
      topicEl.className = 'topic';
      if (topic.url) {
        topicEl.href = topic.url;
        topicEl.target = '_blank';
        topicEl.rel = 'noopener noreferrer';
        topicEl.classList.add('topic--link');
      }
      topicEl.style.setProperty('--card-color', selectedMateria.color);
      topicEl.style.setProperty('--card-color-rgb', selectedMateria.colorRgb);

      topicEl.innerHTML = `
        <div class="topic__marker" style="background:${selectedMateria.color}"></div>
        <div class="topic__content">
          <h4 class="topic__title">${topic.title}</h4>
          <p class="topic__desc">${topic.desc}</p>
        </div>
        ${topic.url ? `<div class="topic__action" style="color:${selectedMateria.color}">APRI 🚀</div>` : ''}
      `;

      topicsContainer.appendChild(topicEl);
    });

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
    chapterEl.appendChild(topicsContainer);
    chaptersWrapper.appendChild(chapterEl);
  });

  risorseContainer.appendChild(chaptersWrapper);

  // Auto-open first chapter
  const firstChapter = chaptersWrapper.querySelector('.chapter');
  if (firstChapter) firstChapter.classList.add('chapter--open');
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
