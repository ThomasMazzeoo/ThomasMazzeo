import os
import json

questions = []

# 10 True/False Questions (0-9)
tf_questions = [
    ("In C++, l'istruzione `int x = 5.5;` assegna il valore 5.5 alla variabile x.", False),
    ("Il ciclo `while` viene eseguito sempre almeno una volta, indipendentemente dalla condizione.", False),
    ("L'operatore `==` viene utilizzato per verificare l'uguaglianza tra due valori.", True),
    ("Il tipo di dato `bool` può assumere solo i valori `true` o `false`.", True),
    ("In C++, le istruzioni terminano sempre con il punto e virgola (`;`).", True),
    ("L'operatore `%` restituisce il risultato della divisione tra due numeri.", False),
    ("La funzione principale di un programma C++ deve sempre chiamarsi `main`.", True),
    ("Il blocco `else` è obbligatorio dopo ogni blocco `if`.", False),
    ("`std::cin` viene utilizzato per stampare testo sullo schermo.", False),
    ("I commenti su riga singola in C++ iniziano con i caratteri `//`.", True)
]

for q, ans in tf_questions:
    questions.append({
        "type": "tf",
        "question": q,
        "options": ["Vero", "Falso"],
        "correct": 0 if ans else 1
    })

# 30 Multiple Choice Questions (10-39)
mc_questions = [
    ("Quale delle seguenti librerie è necessaria per usare `cin` e `cout`?", ["<math.h>", "<iostream>", "<string>", "<stdlib.h>"], 1),
    ("Quale parola chiave si usa per dichiarare una variabile intera?", ["integer", "num", "int", "float"], 2),
    ("Cosa fa l'operatore `++`?", ["Aggiunge 2 alla variabile", "Sottrae 1 alla variabile", "Moltiplica per 2", "Incrementa la variabile di 1"], 3),
    ("Come si dichiara un carattere singolo in C++?", ["char c = 'a';", "string c = 'a';", "char c = \"a\";", "letter c = 'a';"], 0),
    ("Se `x = 10` e `y = 3`, quanto vale `x % y`?", ["3", "1", "0", "3.33"], 1),
    ("Qual è l'output di `cout << 5 / 2;` in C++?", ["2.5", "2", "3", "Errore"], 1),
    ("Quale costrutto esegue il blocco di codice almeno una volta prima di verificare la condizione?", ["while", "for", "if", "do-while"], 3),
    ("Come si scrive 'diverso' in un'espressione logica C++?", ["<>", "!==", "not=", "!="], 3),
    ("Che tipo di dato useresti per memorizzare un nome?", ["char", "int", "string", "bool"], 2),
    ("Qual è il valore di `true && false`?", ["true", "false", "1", "Dipende dal compilatore"], 1),
    ("Cosa stampa il seguente codice: `int a = 2; a += 3; cout << a;`?", ["23", "2", "3", "5"], 3),
    ("Se una condizione in un `if` è falsa, quale blocco viene eseguito (se presente)?", ["if", "else", "while", "Nessuno"], 1),
    ("In quale formato i numeri con la virgola vengono comunemente memorizzati?", ["int e long", "float e double", "char e string", "bool e int"], 1),
    ("Cosa significa l'operatore `||` in C++?", ["AND Logico", "NOT Logico", "OR Logico", "XOR Logico"], 2),
    ("Come si stampa a capo in C++?", ["std::endl", "\\n", "Entrambi i precedenti", "Nessuno dei precedenti"], 2),
    ("Qual è la sintassi corretta per un commento multilinea?", ["// commento //", "/* commento */", "<!-- commento -->", "# commento #"], 1),
    ("Quale di questi NON è un tipo di dato fondamentale in C++?", ["int", "float", "array", "bool"], 2),
    ("Se voglio ripetere un blocco di codice esattamente 10 volte, quale ciclo è più indicato?", ["while", "do-while", "for", "if-else"], 2),
    ("Quale operatore si usa per l'assegnazione di un valore a una variabile?", ["==", "===", "=>", "="], 3),
    ("Che valore assume una variabile booleana se gli si assegna il numero 0?", ["true", "false", "Errore di compilazione", "Null"], 1),
    ("In C++, da quale numero inizia a contare un ciclo standard (convenzione informatica)?", ["1", "0", "-1", "Dipende dall'utente"], 1),
    ("Qual è l'output di `cout << \"Ciao \" << \"Mondo\";`?", ["Ciao Mondo", "CiaoMondo", "Ciao_Mondo", "Errore"], 0),
    ("Quale costrutto è una valida alternativa a lunghi blocchi `if - else if` successivi?", ["while", "do-while", "switch", "for"], 2),
    ("A cosa serve l'istruzione `break` in un ciclo?", ["A mettere in pausa il programma", "Ad interrompere l'iterazione attuale e saltare alla successiva", "Ad uscire definitivamente dal ciclo", "A riavviare il ciclo da capo"], 2),
    ("Cosa fa `continue` all'interno di un ciclo?", ["Esce dal ciclo", "Passa direttamente alla prossima iterazione", "Ignora tutte le condizioni", "Chiude il programma"], 1),
    ("Una variabile dichiarata all'interno di un blocco `{}` è accessibile all'esterno?", ["Sì, sempre", "No, mai", "Sì, se dichiarata come global", "Dipende dal compilatore"], 1),
    ("Quale di questi nomi di variabile NON è valido in C++?", ["mia_variabile", "Variabile1", "1Variabile", "_variabile"], 2),
    ("Come si include una libreria standard in un file C++?", ["import <libreria>", "include \"libreria\"", "#include <libreria>", "using <libreria>"], 2),
    ("Se dichiaro `int x;` senza inizializzarla e poi la stampo, cosa ottengo?", ["0", "Errore di compilazione", "Il programma va in crash", "Un valore imprevedibile (spazzatura) in memoria"], 3),
    ("A quale spazio di nomi appartengono `cin` e `cout`?", ["standard", "io", "std", "cpp"], 2)
]

for q, opts, correct in mc_questions:
    questions.append({
        "type": "mc",
        "question": q,
        "options": opts,
        "correct": correct
    })

# Convert questions to JSON string
json_questions = json.dumps(questions)

html_content = f"""<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Esercizio Domande Risposta Multipla</title>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600&family=Orbitron:wght@500;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
  :root {{
    --bg: #070b14;
    --panel: #0d1424;
    --cyan: #00d4ff;
    --green: #00ff88;
    --red: #ff4466;
    --orange: #ff8c00;
    --purple: #bb44ff;
    --yellow: #ffd700;
    --white: #e8f0ff;
    --font-title: 'Orbitron', sans-serif;
    --font-mono: 'Share Tech Mono', monospace;
    --font-body: 'IBM Plex Mono', monospace;
  }}
  
  body {{
    background-color: var(--bg);
    color: var(--white);
    font-family: var(--font-body);
    margin: 0;
    padding: 2rem;
    background-image: 
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
    background-size: 30px 30px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }}

  .container {{
    max-width: 900px;
    width: 100%;
    background-color: var(--panel);
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }}

  h1 {{
    font-family: var(--font-title);
    color: var(--cyan);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
    border-bottom: 2px solid rgba(0, 212, 255, 0.2);
    padding-bottom: 1rem;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
  }}

  .progress-container {{
    width: 100%;
    background-color: #04070d;
    border-radius: 8px;
    margin-bottom: 2rem;
    border: 1px solid rgba(0, 212, 255, 0.3);
    overflow: hidden;
  }}

  .progress-bar {{
    height: 10px;
    background-color: var(--cyan);
    width: 0%;
    transition: width 0.3s ease;
    box-shadow: 0 0 15px var(--cyan);
  }}

  .quiz-info {{
    display: flex;
    justify-content: space-between;
    font-family: var(--font-mono);
    color: var(--orange);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }}

  .question-container {{
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding: 2rem;
    border-left: 4px solid var(--purple);
    margin-bottom: 2rem;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }}

  .question-text {{
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: center;
  }}

  .options-grid {{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }}

  @media (min-width: 600px) {{
    .options-grid {{
      grid-template-columns: 1fr 1fr;
    }}
  }}

  .option-btn {{
    background-color: #05080f;
    border: 1px solid rgba(0, 255, 136, 0.2);
    color: var(--white);
    font-family: var(--font-body);
    font-size: 1.1rem;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }}

  .option-btn:hover:not(:disabled) {{
    background-color: rgba(0, 255, 136, 0.1);
    border-color: var(--green);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.2);
  }}

  .option-btn.correct {{
    background-color: rgba(0, 255, 136, 0.2);
    border-color: var(--green);
    box-shadow: 0 0 15px var(--green);
  }}

  .option-btn.wrong {{
    background-color: rgba(255, 68, 102, 0.2);
    border-color: var(--red);
    box-shadow: 0 0 15px var(--red);
  }}

  .option-btn:disabled {{
    cursor: default;
    opacity: 0.8;
  }}

  .btn-next {{
    display: none;
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: var(--cyan);
    color: #000;
    font-family: var(--font-title);
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }}

  .btn-next:hover {{
    background-color: var(--white);
    box-shadow: 0 0 20px var(--cyan);
  }}

  .result-screen {{
    display: none;
    text-align: center;
  }}

  .score-circle {{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-family: var(--font-title);
    color: var(--green);
    margin: 2rem auto;
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.4);
  }}

  .badge {{
    font-size: 1.5rem;
    color: var(--yellow);
    margin-bottom: 2rem;
    font-family: var(--font-title);
  }}

</style>
</head>
<body>

<div class="container">
  <h1>Esercizio Domande Risposta Multipla</h1>
  
  <div id="quiz-app">
    <div class="progress-container">
      <div class="progress-bar" id="progress-bar"></div>
    </div>
    
    <div class="quiz-info">
      <span id="question-counter">Domanda 1 / 40</span>
      <span id="score-counter">Punti: 0</span>
    </div>

    <div class="question-container">
      <div class="question-text" id="question-text">Caricamento in corso...</div>
      <div class="options-grid" id="options-grid">
        <!-- Opzioni inserite dinamicamente -->
      </div>
    </div>
    
    <button id="btn-next" class="btn-next" onclick="nextQuestion()">Avanti ▶</button>
  </div>

  <div id="result-screen" class="result-screen">
    <h2 style="color: var(--cyan); font-family: var(--font-title); font-size: 2rem;">Simulazione Completata!</h2>
    <div class="score-circle" id="final-score">0/40</div>
    <div class="badge" id="final-badge">Valutazione: Principiante</div>
    <p style="font-size: 1.2rem; color: #a0b0c0; line-height: 1.6;">Hai completato il test finale. Usa queste conoscenze per superare i livelli pratici di programmazione!</p>
    <button class="btn-next" style="display: block; width: fit-content; margin: 2rem auto;" onclick="location.reload()">Riprova il Test</button>
  </div>

</div>

<script>
  const questionsData = {json_questions};
  let currentQIndex = 0;
  let score = 0;
  
  const qText = document.getElementById('question-text');
  const optGrid = document.getElementById('options-grid');
  const btnNext = document.getElementById('btn-next');
  const progBar = document.getElementById('progress-bar');
  const qCounter = document.getElementById('question-counter');
  const sCounter = document.getElementById('score-counter');
  
  function loadQuestion() {{
    const q = questionsData[currentQIndex];
    qText.textContent = q.question;
    optGrid.innerHTML = '';
    btnNext.style.display = 'none';
    
    // Aggiorna info
    qCounter.innerText = `Domanda ${{currentQIndex + 1}} / ${{questionsData.length}}`;
    sCounter.innerText = `Punti: ${{score}}`;
    progBar.style.width = `${{(currentQIndex / questionsData.length) * 100}}%`;
    
    // Mostra opzioni
    q.options.forEach((optText, index) => {{
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      
      // Imposta lo stile della griglia in base al tipo di domanda (V/F vs 4 Opzioni)
      if (q.type === 'tf') {{
        optGrid.style.gridTemplateColumns = '1fr 1fr';
      }} else {{
        // CSS rules take care of responsiveness, ma per chiarezza
        optGrid.style.gridTemplateColumns = window.innerWidth > 600 ? '1fr 1fr' : '1fr';
      }}
      
      btn.textContent = optText;
      btn.onclick = () => selectOption(btn, index, q.correct);
      optGrid.appendChild(btn);
    }});
  }}
  
  function selectOption(btn, selectedIndex, correctIndex) {{
    const buttons = optGrid.querySelectorAll('.option-btn');
    // Disabilita tutti i bottoni
    buttons.forEach(b => b.disabled = true);
    
    if (selectedIndex === correctIndex) {{
      btn.classList.add('correct');
      score++;
      sCounter.innerText = `Punti: ${{score}}`;
    }} else {{
      btn.classList.add('wrong');
      // Evidenzia quella corretta
      buttons[correctIndex].classList.add('correct');
    }}
    
    btnNext.style.display = 'block';
  }}
  
  function nextQuestion() {{
    currentQIndex++;
    if (currentQIndex < questionsData.length) {{
      loadQuestion();
    }} else {{
      showResults();
    }}
  }}
  
  function showResults() {{
    document.getElementById('quiz-app').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score').innerText = `${{score}}/${{questionsData.length}}`;
    
    let badgeText = "Novellino";
    let badgeColor = "var(--red)";
    if (score >= 35) {{ badgeText = "Maestro del Codice 🏆"; badgeColor = "var(--cyan)"; }}
    else if (score >= 25) {{ badgeText = "Programmatore Esperto 🚀"; badgeColor = "var(--green)"; }}
    else if (score >= 15) {{ badgeText = "Apprendista Coder 🛠️"; badgeColor = "var(--orange)"; }}
    
    const badge = document.getElementById('final-badge');
    badge.innerText = `Valutazione: ${{badgeText}}`;
    badge.style.color = badgeColor;
    document.querySelector('.score-circle').style.borderColor = badgeColor;
    document.querySelector('.score-circle').style.color = badgeColor;
    document.querySelector('.score-circle').style.boxShadow = `0 0 30px ${{badgeColor}}`;
  }}
  
  // Inizializza
  window.onload = loadQuestion;
</script>

</body>
</html>
"""

dir_path = os.path.join(r"c:\Users\thoma\Documents\ThomasMazzeo\public\esercizi-cpp", "Livello_Quiz_Risposte")
if not os.path.exists(dir_path):
    os.makedirs(dir_path)

with open(os.path.join(dir_path, "consegna.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Quiz HTML file successfully generated at {dir_path}/consegna.html!")
