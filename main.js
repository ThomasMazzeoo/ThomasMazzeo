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

    desc: "Materiali didattici, lezioni ed esercitazioni per le classi.",

    sections: [

      {

        id: "3l-relazioni-internazionali",

        title: "3°L Relazioni Internazionali",

        icon: "🌐",

        desc: "Materiali didattici, lezioni ed esercitazioni per la classe 3°L RIM.",

        chapters: [

          {

            title: "Sicurezza informatica",

            topics: [

              {

                title: "Slide 1: Autenticazione e Protezione dell'Identità Digitale",

                desc: "Modulo 1 con simulatori: potenza GPU per attacchi brute force, data breach, gestione password vault e 2FA TOTP.",

                url: "/informatica/sicurezza/sicurezza-informatica-1.html?classe=3l"

              },

              {

                title: "🧪 Laboratorio Pratico: Cyber-Security Audit — Analisi delle Vulnerabilità",

                desc: "Attività pratica guidata: test di forza bruta, sfida Master Passphrase, indagine sui Data Breach e consegna Report di Vulnerabilità in PDF compatto.",

                url: "/informatica/sicurezza/laboratorio-cybersecurity-audit.html?classe=3l"

              },

              {

                title: "Slide 2: Ingegneria Sociale e Phishing",

                desc: "Modulo 2 con simulatori: la mente umana come bersaglio, leve psicologiche (urgenza, autorità, paura), spoofing ed email malevole.",

                url: "/informatica/sicurezza/sicurezza-informatica-2.html?classe=3l"

              },

              {

                title: "Slide 3: I Permessi dello Smartphone e la Tua Privacy",

                desc: "Modulo 3 con simulatori: modello di business delle app gratuite, data broker, analisi permessi (microfono, GPS, contatti) e privacy settings.",

                url: "/informatica/sicurezza/sicurezza-informatica-3.html?classe=3l"

              },

              {

                title: "Slide 4: Navigazione Invisibile e Reti Pubbliche",

                desc: "Modulo 4 con simulatori: pericoli del Wi-Fi pubblico aperto, scanner tracciatori X-Ray, Man-in-the-Middle 'Il Postino Curioso', HTTPS e VPN.",

                url: "/informatica/sicurezza/sicurezza-informatica-4.html?classe=3l"

              },

              {

                title: "Slide 5: Resilienza Digitale (Backup e Aggiornamenti)",

                desc: "Modulo 5 con simulatori: sincronizzazione vs backup effettivo, la regola 3-2-1, allarme vulnerabilità Zero-Day e patch di sicurezza.",

                url: "/informatica/sicurezza/sicurezza-informatica-5.html?classe=3l"

              }

            ]

          }

        ]

      },

      {

        id: "2h-finanza-marketing",

        title: "2H Finanza & Marketing",

        icon: "📈",

        desc: "Materiali didattici, lezioni ed esercitazioni per la classe 2H AFM.",

        bonusUrl: "/informatica/bonus/punti-bonus.html?classe=2h",

        chapters: [

          {

            title: "Sicurezza informatica",

            topics: [

              {

                title: "Slide 1: Autenticazione e Protezione dell'Identità Digitale",

                desc: "Modulo 1 con simulatori: potenza GPU per attacchi brute force, data breach, gestione password vault e 2FA TOTP.",

                url: "/informatica/sicurezza/sicurezza-informatica-1.html?classe=2h"

              },

              {

                title: "🧪 Laboratorio Pratico: Cyber-Security Audit — Analisi delle Vulnerabilità",

                desc: "Attività pratica guidata: test di forza bruta, sfida Master Passphrase, indagine sui Data Breach e consegna Report di Vulnerabilità in PDF compatto.",

                url: "/informatica/sicurezza/laboratorio-cybersecurity-audit.html?classe=2h"

              },

              {

                title: "Slide 2: Ingegneria Sociale e Phishing",

                desc: "Modulo 2 con simulatori: la mente umana come bersaglio, leve psicologiche (urgenza, autorità, paura), spoofing ed email malevole.",

                url: "/informatica/sicurezza/sicurezza-informatica-2.html?classe=2h"

              },

              {

                title: "Slide 3: I Permessi dello Smartphone e la Tua Privacy",

                desc: "Modulo 3 con simulatori: modello di business delle app gratuite, data broker, analisi permessi (microfono, GPS, contatti) e privacy settings.",

                url: "/informatica/sicurezza/sicurezza-informatica-3.html?classe=2h"

              },

              {

                title: "Slide 4: Navigazione Invisibile e Reti Pubbliche",

                desc: "Modulo 4 con simulatori: pericoli del Wi-Fi pubblico aperto, scanner tracciatori X-Ray, Man-in-the-Middle 'Il Postino Curioso', HTTPS e VPN.",

                url: "/informatica/sicurezza/sicurezza-informatica-4.html?classe=2h"

              },

              {

                title: "Slide 5: Resilienza Digitale (Backup e Aggiornamenti)",

                desc: "Modulo 5 con simulatori: sincronizzazione vs backup effettivo, la regola 3-2-1, allarme vulnerabilità Zero-Day e patch di sicurezza.",

                url: "/informatica/sicurezza/sicurezza-informatica-5.html?classe=2h"

              }

            ]

          }

        ]

      },

      {

        id: "2g-finanza-marketing",

        title: "2G Finanza & Marketing",

        icon: "💼",

        desc: "Materiali didattici, lezioni ed esercitazioni per la classe 2G AFM.",

        bonusUrl: "/informatica/bonus/punti-bonus.html?classe=2g",

        chapters: [

          {

            title: "Sicurezza informatica",

            topics: [

              {

                title: "Slide 1: Autenticazione e Protezione dell'Identità Digitale",

                desc: "Modulo 1 con simulatori: potenza GPU per attacchi brute force, data breach, gestione password vault e 2FA TOTP.",

                url: "/informatica/sicurezza/sicurezza-informatica-1.html?classe=2g"

              },

              {

                title: "🧪 Laboratorio Pratico: Cyber-Security Audit — Analisi delle Vulnerabilità",

                desc: "Attività pratica guidata: test di forza bruta, sfida Master Passphrase, indagine sui Data Breach e consegna Report di Vulnerabilità in PDF compatto.",

                url: "/informatica/sicurezza/laboratorio-cybersecurity-audit.html?classe=2g"

              },

              {

                title: "Slide 2: Ingegneria Sociale e Phishing",

                desc: "Modulo 2 con simulatori: la mente umana come bersaglio, leve psicologiche (urgenza, autorità, paura), spoofing ed email malevole.",

                url: "/informatica/sicurezza/sicurezza-informatica-2.html?classe=2g"

              },

              {

                title: "Slide 3: I Permessi dello Smartphone e la Tua Privacy",

                desc: "Modulo 3 con simulatori: modello di business delle app gratuite, data broker, analisi permessi (microfono, GPS, contatti) e privacy settings.",

                url: "/informatica/sicurezza/sicurezza-informatica-3.html?classe=2g"

              },

              {

                title: "Slide 4: Navigazione Invisibile e Reti Pubbliche",

                desc: "Modulo 4 con simulatori: pericoli del Wi-Fi pubblico aperto, scanner tracciatori X-Ray, Man-in-the-Middle 'Il Postino Curioso', HTTPS e VPN.",

                url: "/informatica/sicurezza/sicurezza-informatica-4.html?classe=2g"

              },

              {

                title: "Slide 5: Resilienza Digitale (Backup e Aggiornamenti)",

                desc: "Modulo 5 con simulatori: sincronizzazione vs backup effettivo, la regola 3-2-1, allarme vulnerabilità Zero-Day e patch di sicurezza.",

                url: "/informatica/sicurezza/sicurezza-informatica-5.html?classe=2g"

              }

            ]

          }

        ]

      }

    ]

  },

  {

    id: "fisica-laboratorio",

    label: "Fisica Lab",

    icon: "🔬",

    color: "var(--color-green)",

    colorRgb: "57, 255, 20",

    desc: "Esperimenti di laboratorio, misure, circuiti e relazioni scientifiche.",

    sections: [

      {

        id: "iss-giordano-bruno",

        title: "ISS Giordano Bruno",

        icon: "🏫",

        desc: "Attività sperimentali, protocolli di laboratorio e relazioni scientifiche.",

        subsections: [

          {
            id: "giordano-bruno-prime",
            title: "1° classi",
            icon: "🧪",
            desc: "Attività sperimentali, misure, vettori e protocolli di laboratorio per le classi prime.",
            chapters: [
              {
                title: "🧪 Laboratorio & Metodo Scientifico",
                topics: [
                  {
                    title: "Lezione Interattiva & Laboratorio Pratico (1h)",
                    desc: "Workshop pratico per studenti: caccia agli errori, i 6 pilastri scientifici, simulatore live con calcolo incertezze e generatore di relazione in PDF.",
                    url: "/fisica/giordano-bruno/relazione-laboratorio.html"
                  }
                ]
              },
              {
                title: "🧭 1. Grandezze Scalari e Vettoriali (Distanza vs Spostamento)",
                topics: [
                  {
                    title: "🧭 Esercizio Guidato LIM: Distanza Scalare vs Spostamento (Quesito 2)",
                    desc: "Animazione passo-passo del Test pag. 106: percorso 300 m Nord e 400 m Est, differenza tra cammino effettivo (700 m) e spostamento in linea d'aria con Pitagora (500 m).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-3.html"
                  },
                  {
                    title: "🏎️ Esercizio Guidato LIM: Gran Premio di Monaco — Circuito Chiuso (Es. 1)",
                    desc: "Animazione passo-passo di pag. 86: circuito di Monte Carlo di 3,3 km per 78 giri, calcolo della distanza scalare totale (257,4 km) e dimostrazione dello spostamento nullo (0 km).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-7.html"
                  },
                  {
                    title: "🐕 Esercizio Guidato LIM: Il Cane al Guinzaglio — Traiettoria Circolare (Es. 3)",
                    desc: "Problema guidato di pag. 86: guinzaglio di 6,0 m e mezza circonferenza, calcolo della distanza curva (18,8 m) vs spostamento diametrale (12 m) e caso di due giri completi (0 m).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-8.html"
                  },
                  {
                    title: "🏫 Esercizio Guidato LIM: Il Percorso di Giorgia verso Scuola (Es. 4)",
                    desc: "Ora prova tu di pag. 86: piano cartesiano con fattore di scala u = 20 m, cammino a piedi (160 m) e modulo del vettore spostamento con Teorema di Pitagora (117 m).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-9.html"
                  },
                  {
                    title: "♟️ Esercizio Guidato LIM: Gli Scacchi di Marostica — Mossa del Cavallo (Es. 5)",
                    desc: "Animazione passo-passo di pag. 86: scacchiera gigante di 16 m con casella da 2,0 m, mossa a 'L' del cavallo da B8 a C6 e modulo dello spostamento con Pitagora (4,5 m).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-10.html"
                  }
                ]
              },
              {
                title: "📏 2. Le Operazioni con i Vettori (Punta-Coda & Scalari)",
                topics: [
                  {
                    title: "📐 Esercizio Guidato LIM: Metodo Punta-Coda nei 4 Casi (Es. 11)",
                    desc: "Problema guidato di pag. 108: addizione grafica vettoriale su carta quadrettata. Vettori paralleli concordi, paralleli discordi, inclinati generici e ortogonali con Pitagora.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-11.html"
                  },
                  {
                    title: "🚶‍♂️ Esercizio Guidato LIM: Somma di Tre Spostamenti Successivi (Es. 12)",
                    desc: "Ora prova tu di pag. 108: spezzata poligonale aperta formata da s_1 (6 m E), s_2 (3 m S) e s_3 (2 m O). Costruzione della risultante e calcolo del modulo (5 m).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-12.html"
                  },
                  {
                    title: "🎯 Esercizio Guidato LIM: Prodotto di un Vettore per uno Scalare (Es. 13)",
                    desc: "Esercizio 16 di pag. 108: vettore v di modulo 2,0 cm moltiplicato per scalari positivi e negativi. Studio di 2v, -(1/2)v e -3v con variazione di modulo, direzione e verso.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-13.html"
                  },
                  {
                    title: "⭕ Esercizio Guidato LIM: Quattro Vettori sull'Anello Centrale (Es. 14)",
                    desc: "Esercizio 17 di pag. 108: quattro vettori applicati all'origine (1 m N, 5 m S, 6 m O, 3 m E). Riduzione a due componenti perpendicolari e modulo risultante di 5 m.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-14.html"
                  }
                ]
              },
              {
                title: "📐 3. Il Metodo del Parallelogramma & Composizione Grafica",
                topics: [
                  {
                    title: "📐 Esercizio Guidato LIM: La Prima Parte dei Vettori (Es. 1)",
                    desc: "Risoluzione animata passo-passo per LIM: coordinate cartesiane, modulo con Pitagora, metodo punta-coda e vettore risultante.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-1.html"
                  },
                  {
                    title: "📐 Esercizio Guidato LIM: Il Metodo del Parallelogramma (Es. 2)",
                    desc: "Risoluzione animata passo-passo per LIM: vettori con origine comune sul piano cartesiano, costruzione geometrica del parallelogramma, diagonale risultante e proprietà commutativa.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-2.html"
                  },
                  {
                    title: "⚖️ Esercizio Guidato LIM: Disposizione Vettori & Risultante Minima (Quesito 6)",
                    desc: "Animazione passo-passo del Test pag. 106: forze da 30 N e 50 N con risultante 20 N, confronto geometrico delle 4 configurazioni angolari e condizione di versi opposti.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-4.html"
                  },
                  {
                    title: "⚡ Esercizio Guidato LIM: Forze Perpendicolari — Giochi di Anacleto (Quesito 8)",
                    desc: "Animazione passo-passo del Test pag. 106: due forze ortogonali da 24 N e 15 N, diagonale del rettangolo con Pitagora (28,3 N) e strategie per test a risposta multipla.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-6.html"
                  },
                  {
                    title: "📐 Esercizio Guidato LIM: Parallelogramma su Assi Cartesiani (Problema Svolto 20)",
                    desc: "Problema svolto di pag. 109: vettori a=(8,0) e b=(4,9), costruzione del parallelogramma, triangolo rettangolo rettificato OAB (12, 9) e modulo c=15 con Pitagora.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-15.html"
                  }
                ]
              },
              {
                title: "📈 4. Le Componenti Cartesiane di un Vettore & Trigonometria",
                topics: [
                  {
                    title: "Lezione Interattiva — Componenti Cartesiane & Trigonometria (1h)",
                    desc: "Trigonometria del triangolo rettangolo (seno, coseno, angoli notevoli), scomposizione a_x = a·cos(α) e a_y = a·sin(α), segni nei 4 quadranti, angoli orari negativi, esempio svolto e algebra vettoriale.",
                    url: "/fisica/giordano-bruno/vettori-parte-2.html"
                  },
                  {
                    title: "📐 Esercizio Guidato LIM: Scomposizione Cartesiana & Componente Incognita (Quesito 7)",
                    desc: "Animazione passo-passo del Test pag. 106: modulo 75 N e componente orizzontale 45 N, ricavo del cateto verticale (60 N) con la formula inversa del Teorema di Pitagora.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-5.html"
                  },
                  {
                    title: "📈 Esercizio Guidato LIM: Scomposizione Trigonometrica con Angolo 60° (Problema Guidato 28)",
                    desc: "Problema guidato di pag. 110: vettore u di modulo 6,2 a 60°. Calcolo con coseno (u_x = 3,1) e seno (u_y = 5,4), legame col triangolo equilatero e verifica con Pitagora.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-16.html"
                  },
                  {
                    title: "⚡ Esercizio Guidato LIM: Algebra delle Componenti & Differenza Vettoriale (Problema a Passi 33)",
                    desc: "Problema a passi di pag. 110: vettori p=(12,-5) e q=(-8,10). Calcolo analitico di r=-2q, differenza s=q-p con modulo terna 15-20-25 (|s|=25) e combinazione t=r+p=(28,-25).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-17.html"
                  },
                  {
                    title: "🚤 Esercizio Guidato LIM: Composizione di Spostamenti — Il Motoscafo (Problema Modello 35)",
                    desc: "Problema modello di pag. 110: moto su assi Est/Nord con virata a Sud. Componenti nette s_x = 8,7 km Est e s_y = 3,0 km Nord, modulo risultante s_tot = 9,2 km e angolo di rotta 19°.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-18.html"
                  }
                ]
              },
              {
                title: "⚖️ 5. Le Forze & l'Equilibrio (Forza Risultante & Scomposizione)",
                topics: [
                  {
                    title: "🪢 Esercizio Guidato LIM: Gara di Tiro alla Fune — Forze Parallele (Es. 44)",
                    desc: "Esercizio 44 di pag. 111: Paola, Carlo e Marco (1640 N a sinistra) contro Franco, Alessandra e Matteo (1560 N a destra). Calcolo della risultante netta (80 N verso sinistra) e vittoria della fune.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-19.html"
                  },
                  {
                    title: "🚛 Esercizio Guidato LIM: La Bambina e il Camion — Scomposizione di una Forza (Es. 46)",
                    desc: "Esercizio 46 di pag. 112: trazione con cordicella F = 3,0 N inclinata di 30° rispetto al prato. Calcolo della componente motrice utile F_x = 2,6 N e della componente di alleggerimento F_y = 1,5 N.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-20.html"
                  },
                  {
                    title: "🚗 Esercizio Guidato LIM: L'Auto in Panne — Forze Parallele vs a 90° (Es. 50)",
                    desc: "Esercizio 50 di pag. 112: due spinte da 500 N e 400 N. Confronto tra spinta massima concorde (900 N) e spinta ortogonale con Teorema di Pitagora (640 N con deviazione di 39°).",
                    url: "/fisica/giordano-bruno/esercizio-vettori-21.html"
                  },
                  {
                    title: "⚖️ Esercizio Guidato LIM: Equilibrio di Tre Forze Concorrenti — Problema a Passi (Es. 51)",
                    desc: "Problema a passi di pag. 112: forze a=5,0 N a 53° e b=4,0 N su -y. Scomposizione cartesiana terna 3-4-5, bilanciamento asse y e calcolo della forza incognita F = 3 N per l'equilibrio statico.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-22.html"
                  }
                ]
              },
              {
                title: "🌍 6. La Forza-Peso & Gravità (Massa vs Peso)",
                topics: [
                  {
                    title: "🚀 Esercizio Guidato LIM: Curiosity su Marte — Massa Invariante vs Peso Variabile (Es. 64)",
                    desc: "Esercizio 64 di pag. 113: peso sulla Terra di 8820 N e su Marte di 3357 N. Calcolo della massa invariante m = 900 kg, ricavo della gravità marziana g_M = 3,73 N/kg e rapporto del 38%.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-23.html"
                  },
                  {
                    title: "🧱 Esercizio Guidato LIM: Il Mobile Pensile — Ripartizione del Peso sui Tasselli (Es. 61)",
                    desc: "Esercizio 61 di pag. 113: pensile di 27 kg e carico di 50 kg (m_tot = 77 kg). Forza-peso complessiva 755 N e ripartizione simmetrica sui due tasselli a gancio T = 3,8·10² N ciascuno.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-24.html"
                  },
                  {
                    title: "⚽ Esercizio Guidato LIM: Il Calcio di Rigore — Spinta del Tiro vs Forza-Peso (Es. 62)",
                    desc: "Esercizio 62 di pag. 113: tiro da 100 N a 35° e pallone da 0,41 kg. Scomposizione cartesiana, contrasto con la forza-peso discendente di 4,0 N e modulo risultante F_ris = 98 N.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-25.html"
                  },
                  {
                    title: "🌐 Esercizio Guidato LIM: La Climatologa al Polo Nord — Variazione di g (Es. 65)",
                    desc: "Esercizio 65 di pag. 113: climatologa di 60,0 kg dall'equatore (g=9,78 N/kg) al Polo Nord (g=9,83 N/kg). Dimostrazione dell'aumento di peso di 3 N con spiegazione geofisica del geoide.",
                    url: "/fisica/giordano-bruno/esercizio-vettori-26.html"
                  }
                ]
              }
            ]
          },
          {

            id: "giordano-bruno-seconde",

            title: "2° classi",

            icon: "📐",

            desc: "Attività sperimentali e simulazioni avanzate per le classi seconde.",

            chapters: [
              {
                title: "⚡ Lavoro ed Energia (Test Pag. 362 - 363)",
                topics: [
                  {
                    title: "⚡ Quesito 1: Lavoro della Forza-Peso (Funambolo vs Dislivello)",
                    desc: "Animazione passo-passo del Test pag. 362: funambolo a 30 m di altezza, dimostrazione vettoriale di P ⊥ Δs (α = 90° => L = 0 J) e confronto con scalatore, scoiattolo e montacarichi.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-1.html"
                  },
                  {
                    title: "📐 Quesito 2: Energia Potenziale Gravitazionale e Livello di Riferimento",
                    desc: "Simulazione interattiva del Test pag. 362: quota zero h = 0 sul tavolo, calcolo U = mgh = 0 J per la bottiglia, quote positive/negative e indipendenza del lavoro ΔU dal riferimento.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-2.html"
                  },
                  {
                    title: "🧗 Quesito 7: Scalatrice e Altezza della Parete di Roccia (Formula Inversa)",
                    desc: "Problema guidato del Test pag. 363: scalatrice di 50 kg con lavoro L = 6000 J, ricavo dell'altezza con formula inversa h = L/(mg) ≈ 12 m e analisi dimensionale.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-3.html"
                  },
                  {
                    title: "🏍️ Quesito 8: Energia Cinetica della Moto e Dipendenza Quadratica",
                    desc: "Animazione geometrica del Test pag. 363: moto di 300 kg a v = 6 m/s, calcolo Ek = ½mv² = 5400 J, rappresentazione geometrica 3Blue1Brown di v² e quadruplicazione dell'energia al raddoppio di v.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-4.html"
                  }
                ]
              },
              {
                title: "🏋️ Il Lavoro di una Forza — Problemi Guidati (Pag. 364 - 365)",
                topics: [
                  {
                    title: "🐴 Problema a Passi 17: Il Mulo di Gianni e Anna (Pag. 364)",
                    desc: "Due persone tirano le briglie di un mulo con forze inclinate F₁ = 400 N a 45° e F₂ = 480 N a 36° per s = 12 m. Calcolo dei lavori parziali e lavoro totale L_tot ≈ 8,1 kJ.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-5.html"
                  },
                  {
                    title: "🏋️ Problema 4: Il Bilanciere di Francesco (Pag. 364)",
                    desc: "Distensione su panca a v costante per h = 60 cm con bilanciere da 510 N. Lavoro motore in salita (+3,1 · 10² J), resistente in discesa (-3,1 · 10² J) e ciclo totale nullo (0 J).",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-6.html"
                  },
                  {
                    title: "🪁 Problema 6: L'Aquilone in Riva al Mare (Pag. 364)",
                    desc: "Trascina un aquilone con filo inclinato a α = 60° compiendo L = 630 J su s = 50 m. Formula inversa passo-passo F = L / [s · cos(60°)] = 25 N e analisi delle componenti.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-7.html"
                  },
                  {
                    title: "🚆 Problema 8: La Frenata del Treno (Pag. 364)",
                    desc: "Frenata di emergenza con forza frenante F = 3,4 · 10⁵ N per s = 62 m. Analisi dell'angolo piatto α = 180°, lavoro resistente L = -2,1 · 10⁷ J (-21 MJ) e dissipazione termica.",
                    url: "/fisica/giordano-bruno/esercizio-lavoro-8.html"
                  }
                ]
              },
              {
                title: "⚡ La Potenza — Problemi Guidati (Pag. 365 - 366)",
                topics: [
                  {
                    title: "⚙️ Problema 22: Il Montacarichi da Cantiere (Pag. 365)",
                    desc: "Sollevamento al 4° piano (h = 15 m) di un carico da 100 kg in Δt = 40 s. Forza peso F = 980 N, lavoro W = 14,7 kJ e calcolo della potenza media sviluppata P ≈ 3,7 · 10² W.",
                    url: "/fisica/giordano-bruno/esercizio-potenza-1.html"
                  },
                  {
                    title: "⚡ Problema 21: Aumentare il Lavoro o Diminuire il Tempo? (Pag. 365)",
                    desc: "Dilemma ingegneristico: +50% lavoro (P_A = 1,5 P₀) vs -50% tempo (P_B = 2,0 P₀). Analisi della frazione P = W / Δt, proporzionalità diretta e inversa e quiz per la LIM.",
                    url: "/fisica/giordano-bruno/esercizio-potenza-2.html"
                  },
                  {
                    title: "🏗️ Problema 29: La Gru di Cantiere — Formula Inversa (Pag. 366)",
                    desc: "Gru da 9,8 kW che solleva a v costante un blocco di cemento a h = 20 m in 10 s. Calcolo lavoro W = 98 kJ, formula inversa m = W/(gh) e determinazione della massa m = 5,0 · 10² kg.",
                    url: "/fisica/giordano-bruno/esercizio-potenza-3.html"
                  },
                  {
                    title: "🚗 Problema 31: L'Auto in Autostrada — P = F · v (Pag. 366)",
                    desc: "Auto a velocità costante di 72 km/h (20 m/s) per 5,0 min (300 s) con motore da 60 kW. Calcolo lavoro W = 1,8 · 10⁷ J (18 MJ) e forza motrice F = P/v = 3,0 kN.",
                    url: "/fisica/giordano-bruno/esercizio-potenza-4.html"
                  }
                ]
              },
              {
                title: "🏃 L'Energia Cinetica — Problemi Guidati (Pag. 367 - 368)",
                topics: [
                  {
                    title: "📈 Problema 34: Leggi il Grafico — L'Energia Cinetica e la Velocità (Pag. 367)",
                    desc: "Dipendenza quadratica K = ½mv². Cosa accade raddoppiando v? Analisi comparativa dei 4 grafici A, B, C, D: dimostrazione del fattore 4 e identificazione del ramo di parabola (Curva A).",
                    url: "/fisica/giordano-bruno/esercizio-cinetica-1.html"
                  },
                  {
                    title: "🚗 Problema 36: L'Auto di 1200 kg e il Teorema dell'Energia Cinetica (Pag. 367)",
                    desc: "Lavoro necessario per accelerare da 60 a 80 km/h (W₁ = 1,3 · 10⁵ J) vs da 80 a 100 km/h (W₂ = 1,7 · 10⁵ J). Perché a parità di Δv serve il 31% di energia in più?",
                    url: "/fisica/giordano-bruno/esercizio-cinetica-2.html"
                  },
                  {
                    title: "⚪ Problema a Passi 40: La Biglia sulla Sabbia (Pag. 367)",
                    desc: "Biglia da 10 g frenata da attrito F_att = 0,078 N per s = 55 cm. Calcolo lavoro resistente W = -4,3 · 10⁻² J e determinazione velocità di lancio iniziale v₀ = 2,9 m/s.",
                    url: "/fisica/giordano-bruno/esercizio-cinetica-3.html"
                  },
                  {
                    title: "⛰️ Problema Modello 43: Pietra che Cade dalla Montagna (Pag. 367)",
                    desc: "Pietra di 2,4 kg in caduta libera per 18,0 m. Lavoro nei primi 12,0 m (W₁ = 2,8 · 10² J), verifica del teorema dell'energia cinetica e variazione nei successivi 6,0 m (ΔK₂ = 1,4 · 10² J).",
                    url: "/fisica/giordano-bruno/esercizio-cinetica-4.html"
                  }
                ]
              },
              {
                title: "⚡ Conservazione dell'Energia Meccanica — Problemi Guidati (Pag. 370 - 371)",
                topics: [
                  {
                    title: "🎢 Problema Modello 77: Le Montagne Russe da 94 m (Pag. 370)",
                    desc: "Discesa da fermo da h₀ = 94 m. Calcolo velocità a metà quota (v₁ = 30 m/s) e a fine discesa (v₂ = 43 m/s). Dimostrazione dell'indipendenza dalla massa.",
                    url: "/fisica/giordano-bruno/esercizio-meccanica-1.html"
                  },
                  {
                    title: "⚽ Problema 76: Il Calcio al Pallone in Verticale (Pag. 370)",
                    desc: "Tiro a v₀ = 50 km/h (13,9 m/s) da quota h₀ = 1,0 m. Conservazione dell'energia cinetica e potenziale per determinare la quota massima raggiunta h_max = 10,8 m.",
                    url: "/fisica/giordano-bruno/esercizio-meccanica-2.html"
                  },
                  {
                    title: "🎢 Problema 78: Il Vagone delle Montagne Russe sui Punti A, B e C (Pag. 371)",
                    desc: "Vagone da fermo da A (30 m). Calcolo della velocità nel punto più basso B a 5,0 m (v_B = 22 m/s) e dell'altezza del colle C dove v_C = 16 m/s (h_C = 17 m).",
                    url: "/fisica/giordano-bruno/esercizio-meccanica-3.html"
                  },
                  {
                    title: "🏎️ Problema 80: La Macchinina e la Molla sulla Rampa (Pag. 371)",
                    desc: "Lancio a v₀ = 5,7 m/s, salita sulla rampa con velocità residua v₁ = 1,8 m/s e compressione della molla (k = 1300 N/m). Calcolo quota h = 1,5 m e compressione Δx = 4,0 cm.",
                    url: "/fisica/giordano-bruno/esercizio-meccanica-4.html"
                  }
                ]
              },
              {
                title: "🔥 L'Energia Totale e la Dissipazione — Problemi Guidati (Pag. 372 - 373)",
                topics: [
                  {
                    title: "🏀 Problema 82: Il Rimbalzo del Pallone da Basket e la Dissipazione (Pag. 372)",
                    desc: "Caduta da h₁ = 1,30 m e risalita a h₂ = 0,80 m per un pallone da 600 g. Calcolo dell'energia meccanica trasformata in calore e deformazione (E_diss = 2,9 J, pari al 38,5% dell'energia iniziale).",
                    url: "/fisica/giordano-bruno/esercizio-totale-1.html"
                  },
                  {
                    title: "🪂 Problema 83: Il Salto col Parapendio dalla Rupe di 500 m (Pag. 372)",
                    desc: "Volo di Davide (90 kg) da h₀ = 500 m con atterraggio a v_f = 5,0 m/s. Dimostrazione della dissipazione del 99,7% dell'energia meccanica iniziale per attrito viscoso dell'aria (ΔE = 4,4 · 10⁵ J).",
                    url: "/fisica/giordano-bruno/esercizio-totale-2.html"
                  },
                  {
                    title: "🎯 Problema 94: Il Fucile a Molla e il Lancio Verticale (Pag. 373)",
                    desc: "Molla compressa di Δx = 20 cm (k = 20 N/m) che spara una pallina da 25 g. Conversione integrale da energia elastica (0,40 J) a potenziale gravitazionale per raggiungere la quota massima h = 1,6 m.",
                    url: "/fisica/giordano-bruno/esercizio-totale-3.html"
                  },
                  {
                    title: "🎢 Problema 96: Il Roller Coaster sui Due Giri della Morte con Attrito (Pag. 373)",
                    desc: "Treno da 2300 kg dal punto A (43 m, 20 m/s) al punto B (34 m, 17 m/s) attraverso il primo loop. Calcolo del lavoro resistente negativo compiuto dalle forze di attrito (W_attr = -3,3 · 10⁵ J).",
                    url: "/fisica/giordano-bruno/esercizio-totale-4.html"
                  }
                ]
              }
            ]

          }

        ]

      },

      {

        id: "iss-archimede",

        title: "ISS Archimede",

        icon: "🏛️",

        desc: "Attività sperimentali, simulazioni interattive e relazioni di laboratorio.",

        chapters: [

          {

            title: "LAB Fisica Seconda Elettronica",

            topics: [

              {

                title: "Laboratorio 1: moto rettilineo uniforme",

                desc: "Studio sperimentale del moto rettilineo su rotaia con andata e ritorno (punta a 1,80 m): carrello virtuale, tabelle dati, grafici s(t) e v(t) live e relazione PDF fronte/retro.",

                url: "/fisica/archimede/seconda-elettronica/moto-rettilineo-uniforme.html"

              }

            ]

          }

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

      },

      {

        id: "bozze",

        title: "Bozze",

        icon: "📦",

        desc: "Materiali didattici in bozza: C++, Office Excel, Sicurezza informatica e Vettori di Fisica.",

        subsections: [

          {

            id: "cpp",

            title: "Linguaggio C++",

            icon: "⚙️",

            desc: "Dalle basi alla programmazione ad oggetti in C++.",

            chapters: [

              {

                title: "Capitolo 0 — Introduzione Informatica",

                topics: [

                  {

                    title: "Slide Interattive: Hardware, Software e Società",

                    desc: "Presentazione multimediale completa: origini e architettura del computer, sistema operativo, software, dati e impatto digitale.",

                    url: "/informatica/introduzione-informatica.html"

                  }

                ]

              },

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

            title: "Office Excel & Fogli",

            icon: "📊",

            desc: "Dalle basi ai fogli di calcolo avanzati con Microsoft Excel e Google Workspace.",

            chapters: [

              {

                title: "Lezione 1 — Le Basi di Excel",

                topics: [

                  { title: "Tutorial Interattivo", desc: "Impara l'interfaccia, le celle, le formule e la formattazione con un simulatore animato passo-passo.", url: "/office-excel/Lezione_01_Basi/lezione.html" }

                ]

              },

              {

                title: "Lezione 2 — Grafici di Fisica con Google Fogli & Documenti",

                topics: [

                  {

                    title: "Tutorial Interattivo: Grafici s(t), v(t) e Relazione",

                    desc: "Guida passo-passo: dispersione scatter, retta di interpolazione lineare (andata/ritorno), formule di velocità, grafico v(t) e collegamento dinamico su Google Documenti.",

                    url: "/office-excel/Lezione_02_Grafici_Fisica/lezione.html"

                  }

                ]

              }

            ]

          },

          {

            id: "sicurezza-informatica",

            title: "Sicurezza informatica",

            icon: "🛡️",

            desc: "Principi di cybersecurity, crittografia, minacce digitali, protezione dei dati e reti sicure.",

            chapters: [

              {

                title: "Capitolo 1 — Fondamenti di Sicurezza",

                topics: [

                  {

                    title: "Slide Interattive: Fondamenti di Cybersecurity",

                    desc: "Presentazione multimediale completa: la Triade CIA, minacce digitali, malware, crittografia, sicurezza delle reti e buone pratiche.",

                    url: "/informatica/sicurezza-informatica.html"

                  },

                  { title: "La Triade CIA", desc: "I tre pilastri della sicurezza: Riservatezza (Confidentiality), Integrità (Integrity) e Disponibilità (Availability)." },

                  { title: "Principi di protezione", desc: "Privilegio minimo (Least Privilege), difesa in profondità (Defense in Depth) e fail-safe defaults." },

                  { title: "Vulnerabilità, minacce e rischio", desc: "Differenza tra minaccia, vulnerabilità ed exploit. Analisi della superficie di attacco." }

                ]

              },

              {

                title: "Capitolo 2 — Minacce e Malware",

                topics: [

                  { title: "Tipologie di Malware", desc: "Virus, worm, trojan, spyware, ransomware, rootkit e botnet: caratteristiche e modalità di diffusione." },

                  { title: "Ransomware ed Estorsione Digitale", desc: "Cifratura dei file, richiesta di riscatto, vettori di infezione e strategie di backup." },

                  { title: "Ingegneria Sociale e Phishing", desc: "Manipolazione psicologica: phishing, spear phishing, smishing, vishing e spoofing dell'identità." },

                  { title: "Attacchi DoS e DDoS", desc: "Denial of Service, reti botnet, attacchi volumetrici e tecniche di mitigazione." }

                ]

              },

              {

                title: "Capitolo 3 — Crittografia e Protezione Dati",

                topics: [

                  { title: "Crittografia Simmetrica e Asimmetrica", desc: "Cifrari a chiave segreta (AES) e a coppia di chiavi pubblica/privata (RSA, ECC)." },

                  { title: "Funzioni di Hash e Integrità", desc: "Algoritmi unidirezionali (SHA-256), checksum e garanzia di non alterazione dei file." },

                  { title: "Firma Digitale e Certificati X.509", desc: "Infrastruttura a chiave pubblica (PKI), Certification Authority (CA) e non ripudio." },

                  { title: "Protocolli Web Sicuri: HTTPS e TLS/SSL", desc: "Handshake crittografico, certificati SSL/TLS e navigazione web protetta." }

                ]

              },

              {

                title: "Capitolo 4 — Sicurezza delle Reti",

                topics: [

                  { title: "Firewall e Zonizzazione DMZ", desc: "Filtraggio dei pacchetti, stateful inspection, next-generation firewall e segmentazione di rete." },

                  { title: "Sistemi IDS e IPS", desc: "Intrusion Detection e Prevention: rilevamento basato su firme e su anomalie di traffico." },

                  { title: "Reti Private Virtuali (VPN)", desc: "Tunneling cifrato, protocolli IPsec e OpenVPN, protezione delle comunicazioni remote." },

                  { title: "Sicurezza Wi-Fi", desc: "Protocolli WPA2 e WPA3, crittografia radio, rischi degli hotspot pubblici e attacchi Evil Twin." }

                ]

              },

              {

                title: "Capitolo 5 — Autenticazione e Password",

                topics: [

                  { title: "Password Sicure ed Entropia", desc: "Criteri di robustezza, entropia, attacchi brute-force, dizionario e rainbow tables." },

                  { title: "Autenticazione a Più Fattori (MFA / 2FA)", desc: "Fattori di autenticazione: conoscenza, possesso, inerenza. Codici OTP e token hardware." },

                  { title: "Passkey e Standard FIDO2", desc: "Autenticazione biometrica e crittografia passwordless resistente al phishing." },

                  { title: "Password Manager", desc: "Gestione centralizzata e cifrata delle credenziali, generazione di chiavi casuali uniche." }

                ]

              },

              {

                title: "Capitolo 6 — Privacy, Normative e Buone Pratiche",

                topics: [

                  { title: "GDPR e Protezione dei Dati Personali", desc: "Principi fondamentali del regolamento europeo: privacy by design, consenso e diritti degli utenti." },

                  { title: "Strategia di Backup 3-2-1", desc: "Tre copie, due supporti diversi, una copia off-site o cloud per il disaster recovery." },

                  { title: "Hacking Etico e Penetration Testing", desc: "Figure hacker (White Hat, Black Hat), test di penetrazione e divulgazione responsabile delle falle." },

                  { title: "Igiene Digitale Quotidiana", desc: "Aggiornamenti continui, verifica dei link, gestione dei permessi delle app e backup periodici." }

                ]

              }

            ]

          },

          {

            id: "bozze-vettori",

            title: "I Vettori (Fisica)",

            icon: "📐",

            desc: "Lezione interattiva sui vettori nel piano cartesiano, componenti e somma grafica.",

            chapters: [

              {

                title: "I Vettori nel Piano",

                topics: [

                  {

                    title: "Lezione Interattiva — I Vettori nel Piano (1h)",

                    desc: "Piano cartesiano animato stile 3Blue1Brown: cos'è un vettore, componenti, somma punta-coda, parallelogramma, differenza, moltiplicazione per scalare e quiz finale.",

                    url: "/fisica/giordano-bruno/vettori.html"

                  }

                ]

              }

            ]

          }

        ]

      }

    ]

  },

];



// ══════════════════════════════════════════

// ── Helper per conteggio topic e sezioni ──

// ══════════════════════════════════════════

function getChapterTopicCount(chapter) {

  if (chapter.variants && chapter.variants.length > 0) {

    return chapter.variants.reduce((sum, v) => sum + v.topics.length, 0);

  }

  return chapter.topics ? chapter.topics.length : 0;

}



function getSectionChapterCount(sec) {

  if (sec.subsections) {

    return sec.subsections.reduce((sum, sub) => sum + sub.chapters.length, 0);

  }

  return sec.chapters ? sec.chapters.length : 0;

}



function getSectionTopicCount(sec) {

  if (sec.subsections) {

    return sec.subsections.reduce((sum, sub) =>

      sum + sub.chapters.reduce((s, ch) => s + getChapterTopicCount(ch), 0), 0);

  }

  return sec.chapters ? sec.chapters.reduce((s, ch) => s + getChapterTopicCount(ch), 0) : 0;

}



// ══════════════════════════════════════════

// ── State ──

// ══════════════════════════════════════════

let currentSection = 'home';

let currentView = 'materie'; // 'materie' | 'sections' | 'subsections' | 'chapters'

let selectedMateria = null;

let selectedSectionObj = null;

let selectedSubsectionObj = null;



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

    if (materia.id === rawHash) {

      selectedMateria = materia;

      selectedSectionObj = null;

      selectedSubsectionObj = null;

      currentView = 'sections';

      switchSection('risorse');

      renderRisorseView();

      return;

    }

    for (const sec of materia.sections) {

      if (sec.id === rawHash && !sec.hidden) {

        selectedMateria = materia;

        selectedSectionObj = sec;

        selectedSubsectionObj = null;

        currentView = (sec.subsections && sec.subsections.length > 0) ? 'subsections' : 'chapters';

        switchSection('risorse');

        renderRisorseView();

        return;

      }

      if (sec.subsections) {

        const sub = sec.subsections.find(s => s.id === rawHash);

        if (sub) {

          selectedMateria = materia;

          selectedSectionObj = sec;

          selectedSubsectionObj = sub;

          currentView = 'chapters';

          switchSection('risorse');

          renderRisorseView();

          return;

        }

      }

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

      s2 + getSectionTopicCount(sec), 0), 0);

  const totalSections = MATERIE.reduce((sum, m) =>

    sum + m.sections.filter(s => !s.hidden).reduce((s2, sec) =>

      s2 + (sec.subsections ? sec.subsections.length : 1), 0), 0);



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

    case 'subsections': renderSubsectionsView(); break;

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

  root.addEventListener('click', () => {

    currentView = 'materie';

    selectedMateria = null;

    selectedSectionObj = null;

    selectedSubsectionObj = null;

    renderRisorseView();

  });

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

    materiaBtn.addEventListener('click', () => {

      currentView = 'sections';

      selectedSectionObj = null;

      selectedSubsectionObj = null;

      renderRisorseView();

    });

    breadcrumbContainer.appendChild(materiaBtn);

  }



  if (selectedSectionObj) {

    const sep2 = document.createElement('span');

    sep2.className = 'breadcrumb__sep';

    sep2.textContent = '►';

    breadcrumbContainer.appendChild(sep2);



    const secBtn = document.createElement('button');

    secBtn.className = 'breadcrumb__item';

    secBtn.style.setProperty('--bc-color', selectedMateria.color);

    secBtn.innerHTML = `${selectedSectionObj.icon} ${selectedSectionObj.title.toUpperCase()}`;

    if (currentView === 'subsections' || (currentView === 'chapters' && !selectedSubsectionObj)) {

      secBtn.classList.add('breadcrumb__item--active');

    }

    secBtn.addEventListener('click', () => {

      if (selectedSectionObj.subsections && selectedSectionObj.subsections.length > 0) {

        currentView = 'subsections';

        selectedSubsectionObj = null;

      } else {

        currentView = 'chapters';

      }

      renderRisorseView();

    });

    breadcrumbContainer.appendChild(secBtn);

  }



  if (selectedSubsectionObj) {

    const sep3 = document.createElement('span');

    sep3.className = 'breadcrumb__sep';

    sep3.textContent = '►';

    breadcrumbContainer.appendChild(sep3);



    const subBtn = document.createElement('button');

    subBtn.className = 'breadcrumb__item breadcrumb__item--active';

    subBtn.style.setProperty('--bc-color', selectedMateria.color);

    subBtn.innerHTML = `${selectedSubsectionObj.icon} ${selectedSubsectionObj.title.toUpperCase()}`;

    breadcrumbContainer.appendChild(subBtn);

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

    const sectionCount = visibleSections.reduce((s, sec) =>

      s + (sec.subsections ? sec.subsections.length : 1), 0);

    const topicCount = visibleSections.reduce((s, sec) =>

      s + getSectionTopicCount(sec), 0);



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

    const chapterCount = getSectionChapterCount(sec);

    const topicCount = getSectionTopicCount(sec);

    const badgeLabel = sec.subsections

      ? `${sec.subsections.length} sezioni`

      : `${chapterCount} capitoli`;



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

        <span class="section-card__badge">${badgeLabel}</span>

        <span class="section-card__badge">${topicCount} risorse</span>

        <span class="section-card__arrow">►</span>

      </div>

    `;



    card.addEventListener('click', () => {

      selectedSectionObj = sec;

      selectedSubsectionObj = null;

      currentView = (sec.subsections && sec.subsections.length > 0) ? 'subsections' : 'chapters';

      history.replaceState(null, '', `#${sec.id}`);

      renderRisorseView();

    });



    grid.appendChild(card);

  });



  risorseContainer.appendChild(grid);

}



// ── View: Subsections inside a grouped section (es. Bozze) ──

function renderSubsectionsView() {

  if (!selectedMateria || !selectedSectionObj || !selectedSectionObj.subsections) return;

  risorseContainer.innerHTML = '';



  const header = document.createElement('div');

  header.className = 'chapters-header';

  header.innerHTML = `

    <div class="chapters-header__left">

      <span class="chapters-header__icon">${selectedSectionObj.icon}</span>

      <div>

        <h2 class="chapters-header__title pixel-text" style="color:${selectedMateria.color}">${selectedSectionObj.title}</h2>

        <p class="chapters-header__desc">${selectedSectionObj.desc}</p>

      </div>

    </div>

  `;

  risorseContainer.appendChild(header);



  const grid = document.createElement('div');

  grid.className = 'sections-grid';



  selectedSectionObj.subsections.forEach((subSec, i) => {

    const chapterCount = subSec.chapters.length;

    const topicCount = subSec.chapters.reduce((s, ch) => s + getChapterTopicCount(ch), 0);



    const card = document.createElement('button');

    card.className = 'section-card';

    card.style.setProperty('--card-color', selectedMateria.color);

    card.style.setProperty('--card-color-rgb', selectedMateria.colorRgb);

    card.style.animationDelay = `${i * 0.1}s`;



    card.innerHTML = `

      <div class="section-card__header">

        <span class="section-card__icon">${subSec.icon}</span>

        <div>

          <h3 class="section-card__title">${subSec.title}</h3>

          <p class="section-card__desc">${subSec.desc}</p>

        </div>

      </div>

      <div class="section-card__meta">

        <span class="section-card__badge">${chapterCount} capitoli</span>

        <span class="section-card__badge">${topicCount} risorse</span>

        <span class="section-card__arrow">►</span>

      </div>

    `;



    card.addEventListener('click', () => {

      selectedSubsectionObj = subSec;

      currentView = 'chapters';

      history.replaceState(null, '', `#${subSec.id}`);

      renderRisorseView();

    });



    grid.appendChild(card);

  });



  risorseContainer.appendChild(grid);

}



// ── Helper: Render Topics list ──

function renderTopicsInto(container, topics, color, colorRgb) {

  container.innerHTML = '';

  if (!topics || topics.length === 0) {

    const emptyNotice = document.createElement('div');

    emptyNotice.className = 'empty-topics-notice';

    emptyNotice.innerHTML = `

      <span style="font-size: 1.3rem;">📁</span>

      <p style="margin: 0.35rem 0 0.15rem; font-family: var(--font-pixel); font-size: 0.72rem; color: ${color}; letter-spacing: 0.5px;">IN FASE DI ALLESTIMENTO</p>

      <p style="margin: 0; font-size: 0.8rem; color: var(--color-text-muted);">I materiali didattici, le lezioni ed esercitazioni per questo modulo verranno pubblicati a breve.</p>

    `;

    emptyNotice.style.cssText = 'padding: 1.25rem 1rem; text-align: center; border: 1px dashed rgba(255,255,255,0.12); border-radius: 8px; margin: 0.5rem 0; background: rgba(0,0,0,0.25);';

    container.appendChild(emptyNotice);

    return;

  }



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

  const activeSection = selectedSubsectionObj || selectedSectionObj;

  risorseContainer.innerHTML = '';



  const bonusUrl = activeSection.bonusUrl || (selectedSectionObj && selectedSectionObj.bonusUrl);



  const header = document.createElement('div');

  header.className = 'chapters-header';

  header.innerHTML = `

    <div class="chapters-header__left">

      <span class="chapters-header__icon">${activeSection.icon}</span>

      <div>

        <h2 class="chapters-header__title pixel-text" style="color:${selectedMateria.color}">${activeSection.title}</h2>

        <p class="chapters-header__desc">${activeSection.desc}</p>

      </div>

    </div>

    ${bonusUrl ? `

      <div class="chapters-header__actions">

        <a href="${bonusUrl}" class="chapters-bonus-btn" title="Punti bonus delle lezioni validi per la 1ª verifica">

          <span class="chapters-bonus-btn__icon">⭐</span>

          <span class="chapters-bonus-btn__text pixel-text">PUNTI BONUS (+)</span>

          <span class="chapters-bonus-btn__badge">1ª VERIFICA</span>

        </a>

      </div>

    ` : ''}

  `;

  risorseContainer.appendChild(header);



  if (activeSection.chapters.length === 0) {

    const empty = document.createElement('div');

    empty.className = 'empty-state';

    empty.innerHTML = `

      <span class="empty-state__icon">📁</span>

      <p class="empty-state__text pixel-text">SEZIONE IN FASE DI ALLESTIMENTO</p>

      <p class="empty-state__sub">I materiali didattici, le lezioni e gli esercizi per questa classe verranno pubblicati a breve.</p>

    `;

    risorseContainer.appendChild(empty);

    return;

  }



  const chaptersWrapper = document.createElement('div');

  chaptersWrapper.className = 'chapters-list';



  activeSection.chapters.forEach((chapter, ci) => {

    const chapterEl = document.createElement('div');

    chapterEl.className = 'chapter';

    chapterEl.style.animationDelay = `${ci * 0.08}s`;



    const hasVariants = chapter.variants && chapter.variants.length > 0;

    const countLabel = hasVariants 

      ? `${chapter.variants.length} versioni`

      : chapter.topics.length === 0

        ? 'In allestimento'

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

        selectedSubsectionObj = null;

      }

      switchSection(btn.dataset.section);

    });

  });



  if (ctaBtn) {

    ctaBtn.addEventListener('click', () => {

      currentView = 'materie';

      selectedMateria = null;

      selectedSectionObj = null;

      selectedSubsectionObj = null;

      switchSection('risorse');

    });

  }

}



// ── Start ──

document.addEventListener('DOMContentLoaded', init);

