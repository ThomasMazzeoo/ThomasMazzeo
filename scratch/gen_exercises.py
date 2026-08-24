import os
import json

appunti_html = """
  <div class="appunti-section" style="background-color: #0d1424; border: 1px solid rgba(0, 255, 136, 0.3); border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
    <h2 style="color: var(--green); margin-top: 0; font-family: var(--font-title); border-bottom: 1px solid rgba(0, 255, 136, 0.2); padding-bottom: 0.5rem;">📚 Appunti: Costrutti fatti finora</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; font-size: 0.95rem;">
      <div>
        <h3 style="color: var(--cyan); font-size: 1rem; margin-bottom: 0.5rem;">Variabili</h3>
        <ul style="list-style-type: none; padding-left: 0; margin: 0; color: #a0b0c0;">
          <li><code style="color: var(--white);">int</code> - Numeri interi</li>
          <li><code style="color: var(--white);">float, double</code> - Decimali</li>
          <li><code style="color: var(--white);">char</code> - Singolo carattere</li>
          <li><code style="color: var(--white);">string</code> - Testo (inclusa string)</li>
          <li><code style="color: var(--white);">bool</code> - Vero/Falso (true/false)</li>
        </ul>
      </div>
      <div>
        <h3 style="color: var(--yellow); font-size: 1rem; margin-bottom: 0.5rem;">Input / Output</h3>
        <ul style="list-style-type: none; padding-left: 0; margin: 0; color: #a0b0c0;">
          <li><code style="color: var(--white);">cout << ...</code> - Stampa a schermo</li>
          <li><code style="color: var(--white);">cin >> ...</code> - Legge da tastiera</li>
        </ul>
      </div>
      <div>
        <h3 style="color: var(--orange); font-size: 1rem; margin-bottom: 0.5rem;">Matematica</h3>
        <ul style="list-style-type: none; padding-left: 0; margin: 0; color: #a0b0c0;">
          <li><code style="color: var(--white);">+, -, *, /</code> - Operazioni base</li>
          <li><code style="color: var(--white);">%</code> - Resto della divisione</li>
        </ul>
      </div>
      <div>
        <h3 style="color: var(--purple); font-size: 1rem; margin-bottom: 0.5rem;">Condizioni</h3>
        <ul style="list-style-type: none; padding-left: 0; margin: 0; color: #a0b0c0;">
          <li><code style="color: var(--white);">if (cond) { ... }</code></li>
          <li><code style="color: var(--white);">else if (cond) { ... }</code></li>
          <li><code style="color: var(--white);">else { ... }</code></li>
          <li><code style="color: var(--white);">switch(var) { case ... }</code></li>
        </ul>
      </div>
      <div>
        <h3 style="color: var(--red); font-size: 1rem; margin-bottom: 0.5rem;">Cicli</h3>
        <ul style="list-style-type: none; padding-left: 0; margin: 0; color: #a0b0c0;">
          <li><code style="color: var(--white);">while (cond) { ... }</code></li>
          <li><code style="color: var(--white);">do { ... } while (cond);</code></li>
          <li><code style="color: var(--white);">for (int i=0; i<N; i++) { ... }</code></li>
        </ul>
      </div>
    </div>
  </div>
"""

consegna_template = """<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} - Consegna</title>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600&family=Orbitron:wght@500;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
  :root {{ --bg: #070b14; --panel: #0d1424; --cyan: #00d4ff; --green: #00ff88; --red: #ff4466; --orange: #ff8c00; --purple: #bb44ff; --yellow: #ffd700; --white: #e8f0ff; --font-title: 'Orbitron', sans-serif; --font-mono: 'Share Tech Mono', monospace; --font-body: 'IBM Plex Mono', monospace; }}
  body {{ background-color: var(--bg); color: var(--white); font-family: var(--font-body); margin: 0; padding: 2rem; background-image: linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px); background-size: 30px 30px; display: flex; justify-content: center; }}
  .container {{ max-width: 900px; background-color: var(--panel); border: 1px solid rgba(0, 212, 255, 0.2); border-radius: 12px; padding: 2.5rem; box-shadow: 0 0 30px rgba(0, 0, 0, 0.5); }}
  h1 {{ font-family: var(--font-title); color: var(--cyan); text-align: center; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; border-bottom: 2px solid rgba(0, 212, 255, 0.2); padding-bottom: 1rem; text-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }}
  h2 {{ font-family: var(--font-title); color: var(--orange); font-size: 1.2rem; margin-top: 2rem; }}
  p, li {{ line-height: 1.6; font-size: 1.05rem; }}
  .code-block {{ background-color: #05080f; border: 1px solid rgba(0, 255, 136, 0.2); border-left: 4px solid var(--green); padding: 1rem; font-family: var(--font-mono); color: var(--green); border-radius: 4px; margin: 1.5rem 0; }}
  .button-link {{ display: block; width: fit-content; padding: 1rem 2rem; background-color: transparent; border: 2px solid var(--cyan); color: var(--cyan); font-family: var(--font-title); text-decoration: none; text-transform: uppercase; font-weight: bold; border-radius: 6px; transition: all 0.3s ease; cursor: pointer; }}
  .button-link:hover {{ background-color: rgba(0, 212, 255, 0.1); box-shadow: 0 0 15px rgba(0, 212, 255, 0.4); text-shadow: 0 0 5px var(--cyan); }}

  .page-wrapper {{
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    align-items: flex-start;
  }}
  
  .docs-panel {{
    flex: 0 0 350px;
    background-color: var(--panel);
    border: 1px solid rgba(0, 255, 136, 0.2);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }}

  .docs-panel h2 {{
    color: var(--green);
    margin-top: 0;
    border-bottom: 1px solid rgba(0, 255, 136, 0.2);
    padding-bottom: 0.5rem;
  }}
  
  .docs-panel h3 {{
    color: var(--yellow);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }}

  .docs-panel code {{
    background-color: #05080f;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    color: var(--cyan);
    font-family: var(--font-mono);
  }}

  .docs-panel ul {{
    list-style-type: none;
    padding-left: 0;
  }}
  
  .docs-panel li {{
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }}

  @media (max-width: 900px) {{
    .page-wrapper {{
      flex-direction: column;
      align-items: center;
    }}
    .docs-panel {{
      flex: 1;
      width: 100%;
      max-width: 800px;
      box-sizing: border-box;
    }}
    .container {{
      width: 100%;
      box-sizing: border-box;
    }}
  }}
</style>

</head>
<body>

<div class="page-wrapper">
<div class="container">
{appunti}
  <h1>{title}</h1>
  
  <h2>🎯 L'Obiettivo</h2>
  <p>{obiettivo}</p>

  <h2>📝 Le Regole (Logica da applicare)</h2>
  <ul>
{regole}
  </ul>

  <h2>🔄 Il Ciclo e le Statistiche Finali</h2>
  <p>{ciclo}</p>
  <ul>
{statistiche}
  </ul>

  <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
    <a href="soluzione.html" class="button-link" style="margin: 0;">▶ Vai alla Soluzione</a>
  </div>
</div>


    <div class="docs-panel">
      <h2>📖 Suggerimenti</h2>
      <ul>
        <li>
          <h3>Struttura Ideale</h3>
          <span style="color:#aaa;">{suggerimento1}</span>
        </li>
        <li>
          <h3>Scelte Multiple (Switch o If)</h3>
          <span style="color:#aaa;">{suggerimento2}</span>
        </li>
        <li>
          <h3>Statistiche</h3>
          <span style="color:#aaa;">{suggerimento3}</span>
        </li>
      </ul>
    </div>
  
</div>

</body>
</html>"""

soluzione_template = """<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Soluzione - {title}</title>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600&family=Orbitron:wght@500;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
  :root {{ --bg: #070b14; --panel: #0d1424; --cyan: #00d4ff; --green: #00ff88; --red: #ff4466; --orange: #ff8c00; --purple: #bb44ff; --yellow: #ffd700; --white: #e8f0ff; --font-title: 'Orbitron', sans-serif; --font-mono: 'Share Tech Mono', monospace; --font-body: 'IBM Plex Mono', monospace; }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; padding: 0; background-color: var(--bg); color: var(--white); font-family: var(--font-body); height: 100vh; height: 100dvh; display: flex; flex-direction: column; overflow: hidden; background-image: linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px); background-size: 30px 30px; }}
  header {{ background-color: #04070d; border-bottom: 1px solid rgba(0, 212, 255, 0.2); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 15px rgba(0,0,0,0.5); z-index: 10; }}
  header h1 {{ font-family: var(--font-title); color: var(--cyan); margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px rgba(0, 212, 255, 0.4); }}
  .step-counter {{ font-family: var(--font-mono); color: var(--orange); font-size: 1.2rem; background: rgba(255, 140, 0, 0.1); padding: 0.3rem 0.8rem; border-radius: 4px; border: 1px solid rgba(255, 140, 0, 0.3); }}
  .phase-bar {{ background-color: var(--panel); border-bottom: 1px solid rgba(0, 212, 255, 0.1); padding: 0.5rem 2rem; display: flex; gap: 2rem; font-family: var(--font-mono); font-size: 0.9rem; z-index: 9; }}
  .phase-name {{ color: var(--purple); font-weight: bold; }} .phase-state {{ color: var(--yellow); }} .phase-action {{ color: var(--green); }}
  main {{ flex: 1; display: flex; overflow: hidden; }}
  .vis-panel {{ flex: 1; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; overflow-y: auto; border-right: 1px solid rgba(0, 212, 255, 0.1); }}
  .code-container {{ background-color: #03050a; border: 1px solid rgba(0, 212, 255, 0.2); border-radius: 8px; padding: 1rem; font-family: var(--font-mono); font-size: 1rem; line-height: 1.5; }}
  .code-line {{ display: flex; padding: 0.1rem 0.5rem; border-radius: 4px; transition: all 0.3s; border-left: 3px solid transparent; }}
  .code-line .line-num {{ color: #445577; width: 30px; user-select: none; }}
  .code-line .line-content {{ color: #a0b0c0; transition: color 0.3s; }}
  .code-line.active {{ background-color: rgba(0, 212, 255, 0.1); border-left: 3px solid var(--cyan); box-shadow: inset 0 0 15px rgba(0, 212, 255, 0.05); }}
  .code-line.active .line-content {{ color: var(--white); text-shadow: 0 0 5px rgba(255,255,255,0.5); }}
  .code-line.ignored {{ opacity: 0.3; }}
  
  .ram-container {{ background-color: #000; border: 1px solid rgba(187, 68, 255, 0.3); border-radius: 8px; padding: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem; position: relative; box-shadow: 0 0 15px rgba(0,0,0,0.8) inset; }}
  .ram-container::before {{ content: "RAM (STATO)"; position: absolute; top: -10px; left: 20px; background-color: var(--bg); padding: 0 10px; font-size: 0.8rem; color: var(--purple); font-family: var(--font-mono); }}
  .ram-cell {{ border: 1px solid var(--cyan); border-radius: 4px; width: 130px; background-color: #0a0d16; display: flex; flex-direction: column; align-items: center; transition: all 0.3s ease; }}
  .ram-cell.just-written {{ border-color: var(--green); box-shadow: 0 0 15px var(--green); }}
  .ram-name {{ font-family: var(--font-mono); color: var(--cyan); padding: 2px 0; font-size: 0.75rem; border-bottom: 1px solid #334; width: 100%; text-align: center; }}
  .ram-value {{ font-family: var(--font-mono); color: var(--green); padding: 5px 0; font-size: 1rem; font-weight: bold; }}

  .terminal-container {{ background-color: #000; border: 1px solid rgba(0, 255, 136, 0.3); border-radius: 8px; min-height: 100px; padding: 1rem; font-family: var(--font-mono); color: var(--green); position: relative; box-shadow: 0 0 20px rgba(0,0,0,0.8) inset; white-space: pre-wrap; font-size:0.9rem; }}
  .terminal-container::before {{ content: "TERMINALE"; position: absolute; top: -10px; left: 20px; background-color: var(--bg); padding: 0 10px; font-size: 0.8rem; color: var(--green); }}
  
  .exp-panel {{ width: 380px; background-color: var(--panel); padding: 2rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }}
  @keyframes fadeSlide {{ from {{ opacity: 0; transform: translateX(20px); }} to {{ opacity: 1; transform: translateX(0); }} }}
  .exp-card {{ background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 1rem; animation: fadeSlide 0.4s ease-out forwards; }}
  .exp-card.card-what {{ border-top: 3px solid var(--cyan); }} .exp-card.card-why {{ border-top: 3px solid var(--yellow); }} .exp-card.card-logic {{ border-top: 3px solid var(--purple); }}
  .exp-card-header {{ display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-title); font-size: 0.9rem; margin-bottom: 0.8rem; }}
  .card-what .exp-card-header {{ color: var(--cyan); }} .card-why .exp-card-header {{ color: var(--yellow); }} .card-logic .exp-card-header {{ color: var(--purple); }}
  .exp-card-body {{ font-size: 0.9rem; line-height: 1.5; color: #ccd6f6; }}
  
  .controls {{ background-color: #04070d; border-top: 1px solid rgba(0, 212, 255, 0.2); padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; z-index: 10; }}
  .btn {{ background: transparent; border: 1px solid var(--cyan); color: var(--cyan); font-family: var(--font-title); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; text-transform: uppercase; font-size: 0.9rem; }}
  .btn:hover:not(:disabled) {{ background: rgba(0, 212, 255, 0.1); box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }} .btn:disabled {{ border-color: #334; color: #556; cursor: not-allowed; }}
  .progress-container {{ display: flex; gap: 8px; flex-wrap:wrap; max-width: 300px; justify-content:center;}} .pip {{ width: 10px; height: 10px; border-radius: 50%; background: #334; cursor: pointer; margin-bottom:2px;}} .pip.done {{ background: rgba(0, 255, 136, 0.4); }} .pip.active {{ background: var(--cyan); box-shadow: 0 0 10px var(--cyan); }}
</style>
</head>
<body>

  <header>
    <h1>&lt; SIMULATORE /&gt; {title_short}</h1>
    <div class="step-counter" id="step-counter">STEP 0</div>
  </header>

  <div class="phase-bar">
    <div class="phase-name" id="phase-name">INTRO</div>
    <div class="phase-state" id="phase-state">Pronto</div>
    <div class="phase-action" id="phase-action">...</div>
  </div>

  <main>
    <div class="vis-panel">
      <!-- Vis Codice -->
      <div class="code-container" id="code-container"></div>
      
      <!-- Vis RAM -->
      <div class="ram-container" id="ram-container">
        <!-- Generato via JS -->
      </div>
      
      <!-- Vis Terminale -->
      <div class="terminal-container" id="terminal-container">
        <span id="terminal-output"></span>
        <span class="cursor" style="color: var(--green);">_</span>
      </div>
    </div>

    <div class="exp-panel" id="exp-panel"></div>
  </main>

  <div class="controls">
    <button class="btn" id="btn-prev" onclick="changeStep(-1)">◀ INDIETRO</button>
    <button class="btn" id="btn-reset" onclick="goToStep(0)">↺ RESET</button>
    <div class="progress-container" id="progress-container"></div>
    <button class="btn" id="btn-next" onclick="changeStep(1)">AVANTI ▶</button>
  </div>

<script>
const codeLines = {code_json};

const steps = {steps_json};

function renderStep(idx) {{
  const step = steps[idx];
  document.getElementById('step-counter').innerText = `STEP ${{idx}}`;
  document.getElementById('phase-name').innerText = step.phase;
  document.getElementById('phase-state').innerText = step.state;
  document.getElementById('phase-action').innerText = step.action;
  
  const cCont = document.getElementById('code-container');
  cCont.innerHTML = '';
  codeLines.forEach((line, i) => {{
    const div = document.createElement('div');
    div.className = `code-line ${{i === step.codeLine ? 'active' : ''}} ${{(step.ignoredLines||[]).includes(i) ? 'ignored' : ''}}`;
    div.innerHTML = `<span class="line-num">${{i + 1}}</span><span class="line-content">${{line}}</span>`;
    cCont.appendChild(div);
  }});
  
  const rCont = document.getElementById('ram-container');
  rCont.innerHTML = '';
  Object.keys(step.ram).forEach(k => {{
    const div = document.createElement('div');
    div.className = `ram-cell ${{step.justWritten === k ? 'just-written' : ''}}`;
    div.innerHTML = `<div class="ram-name">${{k}}</div><div class="ram-value">${{step.ram[k]}}</div>`;
    rCont.appendChild(div);
  }});
  
  document.getElementById('terminal-output').innerText = step.terminal;
  
  const pnl = document.getElementById('exp-panel');
  pnl.innerHTML = '';
  step.explain.forEach((c, i) => {{
    const div = document.createElement('div');
    div.className = `exp-card card-${{c.type}}`;
    div.style.animationDelay = `${{i * 0.1}}s`;
    div.innerHTML = `<div class="exp-card-header"><span>${{c.icon}}</span> ${{c.label}}</div><div class="exp-card-body">${{c.html}}</div>`;
    pnl.appendChild(div);
  }});
  
  document.getElementById('btn-prev').disabled = idx === 0;
  document.getElementById('btn-next').disabled = idx === steps.length - 1;
  
  const pc = document.getElementById('progress-container');
  pc.innerHTML = '';
  steps.forEach((_, i) => {{
    const p = document.createElement('div');
    p.className = `pip ${{i < idx ? 'done' : ''}} ${{i === idx ? 'active' : ''}}`;
    p.onclick = () => goToStep(i);
    pc.appendChild(p);
  }});
}}

let currentStep = 0;
function changeStep(delta) {{ goToStep(currentStep + delta); }}
function goToStep(idx) {{
  if(idx < 0 || idx >= steps.length) return;
  currentStep = idx;
  renderStep(currentStep);
}}
window.onload = () => renderStep(0);
window.addEventListener('keydown', (e) => {{
  if (e.key === 'ArrowRight') changeStep(1); else if (e.key === 'ArrowLeft') changeStep(-1);
}});
</script>
</body>
</html>"""

levels = [
    {
        "folder": "Livello_A1_Negozio",
        "title": "Livello A1: Gestione Negozio",
        "title_short": "Livello A1 (Logica Negozio)",
        "obiettivo": "Un livello avanzato in cui gestirai gli acquisti di un negozio! Devi inserire i prodotti acquistati da un cliente, calcolare gli sconti e le tasse a seconda della categoria e stampare lo scontrino finale con le statistiche.",
        "regole": '''
    <li>Chiedi <strong>prezzo dell'oggetto</strong>, <strong>quantità</strong> e <strong>categoria</strong> (1=Alimentari, 2=Elettronica, 3=Abbigliamento).</li>
    <li>Il <strong>costo base</strong> è uguale al prezzo moltiplicato per la quantità.</li>
    <li>Se la quantità è maggiore di 10 -> applica uno sconto del 5% sul costo base.</li>
    <li>Se la categoria è 1 (Alimentari) -> aggiungi 0% di tasse.</li>
    <li>Se la categoria è 2 (Elettronica) -> aggiungi il 20% di tasse al costo (dopo lo sconto).</li>
    <li>Se la categoria è 3 (Abbigliamento) -> aggiungi il 10% di tasse.</li>
    <li>Se il totale dell'oggetto supera 100 euro -> la spedizione è gratuita, altrimenti costa 5 euro.</li>''',
        "ciclo": "Dopo aver analizzato un oggetto, chiedi all'utente se vuole <strong>inserire un altro oggetto</strong> (1 per sì, 0 per no). Usa un ciclo <code>do-while</code>.",
        "statistiche": '''
    <li>Numero totale di articoli acquistati (somma delle quantità).</li>
    <li>Costo totale speso dal cliente (incluso tasse e spedizione).</li>
    <li>Quanti articoli erano della categoria Elettronica.</li>
    <li>Quante volte è stata pagata la spedizione (non gratuita).</li>''',
        "suggerimento1": "Usa un ciclo <code>do-while</code> per l'inserimento. Inizializza i totali a zero fuori dal ciclo.",
        "suggerimento2": "Usa uno <code>switch(categoria)</code> per calcolare le tasse in modo pulito.",
        "suggerimento3": "Fai attenzione a usare variabili di tipo <code>float</code> o <code>double</code> per i costi, altrimenti perderai i decimali!",
        "code_json": json.dumps([
            "float prezzo = 50.0; int qta = 3; int cat = 2;",
            "float costo = prezzo * qta;",
            "",
            "if (qta > 10) {",
            "    costo = costo - (costo * 0.05); // Sconto 5%",
            "}",
            "",
            "if (cat == 2) {",
            "    costo += costo * 0.20; // 20% Tasse Elettronica",
            "} else if (cat == 3) {",
            "    costo += costo * 0.10; // 10% Tasse Abbigliamento",
            "}",
            "",
            "if (costo <= 100) {",
            "    costo += 5.0; // Spedizione 5 euro",
            "    spedizioniPagate++;",
            "}",
            "",
            "totaleSpeso += costo;",
            "totaleArticoli += qta;"
        ]),
        "steps_json": json.dumps([
            {
                "phase": "INIT", "state": "Dati Oggetto", "action": "Assegno variabili",
                "codeLine": 0, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": "?", "totaleSpeso": 20.5, "totaleArticoli": 1 }, "justWritten": 'prezzo',
                "terminal": "Inserimento Oggetto: Tastiera\nPrezzo: 50.0 | Quantità: 3 | Categoria: 2 (Elettronica)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "DATI", "html": "Simuliamo l'acquisto di 3 tastiere a 50 euro l'una (categoria 2)." } ]
            },
            {
                "phase": "BASE", "state": "Calcolo base", "action": "Costo = prezzo * qta",
                "codeLine": 1, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 150, "totaleSpeso": 20.5, "totaleArticoli": 1 }, "justWritten": 'costo',
                "terminal": "Costo base = 150\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "MOLTIPLICAZIONE", "html": "Il costo base è 50 * 3 = 150 euro." } ]
            },
            {
                "phase": "SCONTO", "state": "If Quantità", "action": "Controllo Qta > 10",
                "codeLine": 3, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 150, "totaleSpeso": 20.5, "totaleArticoli": 1 }, "justWritten": '',
                "terminal": "Costo base = 150\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "La quantità (3) è > 10? FALSO. Nessuno sconto." } ]
            },
            {
                "phase": "TASSE", "state": "If Categoria", "action": "Controllo Tasse",
                "codeLine": 7, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 150, "totaleSpeso": 20.5, "totaleArticoli": 1 }, "justWritten": '',
                "terminal": "Costo base = 150\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "La categoria è 2? SÌ. Si applicano le tasse dell'elettronica (20%)." } ]
            },
            {
                "phase": "TASSE", "state": "Applico Tasse", "action": "+20%",
                "codeLine": 8, "ignoredLines": [9,10], "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 180, "totaleSpeso": 20.5, "totaleArticoli": 1 }, "justWritten": 'costo',
                "terminal": "Costo base = 150\n+30 euro di Tasse (20%)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "ADDIZIONE", "html": "Il 20% di 150 è 30. Nuovo costo: 180 euro." } ]
            },
            {
                "phase": "SPEDIZIONE", "state": "If Costo", "action": "Controllo Costo <= 100",
                "codeLine": 13, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 180, "totaleSpeso": 20.5, "totaleArticoli": 1 }, "justWritten": '',
                "terminal": "Costo base = 150\n+30 euro di Tasse (20%)\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Il costo (180) è <= 100? FALSO. Spedizione gratuita!" } ]
            },
            {
                "phase": "AGGIORNAMENTO TOTALI", "state": "Accumulatore Spesa", "action": "Aggiorno Totale",
                "codeLine": 18, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 180, "totaleSpeso": 200.5, "totaleArticoli": 1 }, "justWritten": 'totaleSpeso',
                "terminal": "Costo base = 150\n+30 euro di Tasse (20%)\nSpedizione: GRATUITA\nSalvataggio statistiche...",
                "explain": [ { "type": "what", "icon": "🔍", "label": "SOMMA", "html": "Aggiungiamo 180 al 'totaleSpeso' globale." } ]
            },
            {
                "phase": "AGGIORNAMENTO TOTALI", "state": "Accumulatore Articoli", "action": "Aggiorno Quantità",
                "codeLine": 19, "ram": { "prezzo": 50, "qta": 3, "cat": 2, "costo": 180, "totaleSpeso": 200.5, "totaleArticoli": 4 }, "justWritten": 'totaleArticoli',
                "terminal": "Statistiche aggiornate.\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "SOMMA", "html": "Aggiungiamo 3 (quantità) al 'totaleArticoli' globale. Fine!" } ]
            }
        ])
    },
    {
        "folder": "Livello_A2_Flotta",
        "title": "Livello A2: Flotta Spaziale",
        "title_short": "Livello A2 (Logica Flotta)",
        "obiettivo": "Devi gestire il carburante delle navicelle di una flotta spaziale prima della partenza per varie missioni. Calcola il consumo totale in base al tipo di nave e all'equipaggio.",
        "regole": '''
    <li>Chiedi <strong>carburante base</strong>, <strong>tipo di missione</strong> (1=Esplorazione, 2=Combattimento, 3=Trasporto) e <strong>numero di membri dell'equipaggio</strong>.</li>
    <li>Se l'equipaggio è > 50 -> aggiungi 10 unità di carburante (peso extra).</li>
    <li>Se la missione è 1 (Esplorazione) -> sottrai 5 unità (veicoli leggeri).</li>
    <li>Se la missione è 2 (Combattimento) -> aggiungi 20 unità (scudi energetici).</li>
    <li>Se il carburante stimato fin qui supera le 100 unità -> applica una penalità del 10% al carburante stimato (inefficienza dei grandi reattori).</li>''',
        "ciclo": "Dopo aver analizzato una navicella, chiedi all'utente se vuole <strong>inserirne un'altra</strong> (1 per sì, 0 per no). Usa un ciclo <code>do-while</code> o <code>while</code>.",
        "statistiche": '''
    <li>Numero totale di navicelle registrate.</li>
    <li>Quantità totale di carburante necessario per l'intera flotta.</li>
    <li>Quante navi partiranno per missioni di Combattimento (tipo 2).</li>
    <li>La media del carburante per navicella.</li>''',
        "suggerimento1": "Come sempre, totali e contatori vanno inizializzati a 0 fuori dal ciclo. Il carburante potrebbe non essere un numero intero.",
        "suggerimento2": "La penalità del 10% si applica moltiplicando il totale parziale per `1.10`.",
        "suggerimento3": "Attenzione alla divisione per calcolare la media: controlla di non dividere per zero se non vengono inserite navi!",
        "code_json": json.dumps([
            "float carb = 95.0; int tipo = 2; int equi = 60;",
            "float carbStimato = carb;",
            "",
            "if (equi > 50) {",
            "    carbStimato += 10.0; // Extra peso",
            "}",
            "",
            "if (tipo == 1) {",
            "    carbStimato -= 5.0; // Esplorazione",
            "} else if (tipo == 2) {",
            "    carbStimato += 20.0; // Combattimento",
            "}",
            "",
            "if (carbStimato > 100.0) {",
            "    carbStimato += carbStimato * 0.10; // Penalità 10%",
            "}",
            "",
            "totaleCarburante += carbStimato;",
            "totaleNavi++;"
        ]),
        "steps_json": json.dumps([
            {
                "phase": "INIT", "state": "Dati Nave", "action": "Assegno variabili",
                "codeLine": 0, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": "?", "totaleCarburante": 0, "totNavi": 0 }, "justWritten": 'carb',
                "terminal": "Inserimento Nave: Apollo-X\nCarb Base: 95.0 | Tipo: 2 | Equipaggio: 60\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "DATI", "html": "Simuliamo una nave da combattimento con equipaggio numeroso." } ]
            },
            {
                "phase": "BASE", "state": "Assegnazione", "action": "CarbStimato = Carb",
                "codeLine": 1, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 95, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": 'carbStimato',
                "terminal": "Carburante base = 95.0\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "BASE", "html": "Partiamo con le 95 unità inserite." } ]
            },
            {
                "phase": "REGOLE", "state": "If Equipaggio", "action": "Controllo equi > 50",
                "codeLine": 3, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 95, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": '',
                "terminal": "Carburante base = 95.0\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Equipaggio (60) > 50? SÌ." } ]
            },
            {
                "phase": "REGOLE", "state": "Applico Peso", "action": "+10 Carb",
                "codeLine": 4, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 105, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": 'carbStimato',
                "terminal": "Carburante base = 95.0\n+10 Extra Peso\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "ADDIZIONE", "html": "Il carburante stimato sale a 105." } ]
            },
            {
                "phase": "REGOLE", "state": "If Tipo", "action": "Controllo Tipo == 2",
                "codeLine": 9, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 105, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": '',
                "terminal": "Carburante base = 95.0\n+10 Extra Peso\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Tipo missione è 2? SÌ. Si entra nell'else-if." } ]
            },
            {
                "phase": "REGOLE", "state": "Applico Combattimento", "action": "+20 Carb",
                "codeLine": 10, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 125, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": 'carbStimato',
                "terminal": "Carburante base = 95.0\n+10 Extra Peso\n+20 Scudi Combattimento\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "ADDIZIONE", "html": "Aggiunte 20 unità per gli scudi. Totale parziale: 125." } ]
            },
            {
                "phase": "PENALITA", "state": "If Carb", "action": "Controllo Carb > 100",
                "codeLine": 13, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 125, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": '',
                "terminal": "Carburante base = 95.0\n+10 Extra Peso\n+20 Scudi Combattimento\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Il carburante (125) supera 100? SÌ." } ]
            },
            {
                "phase": "PENALITA", "state": "Applico Penalità", "action": "+10%",
                "codeLine": 14, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 137.5, "totaleCarburante": 0, "totNavi": 0 }, "justWritten": 'carbStimato',
                "terminal": "Carburante base = 95.0\n+10 Extra Peso\n+20 Scudi Combattimento\n+12.5 Penalità inefficienza (10%)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "PERCENTUALE", "html": "Aggiungiamo il 10% di 125, ovvero 12.5. Totale: 137.5" } ]
            },
            {
                "phase": "TOTALI", "state": "Aggiorno Globali", "action": "+carb, +navi",
                "codeLine": 17, "ram": { "carb": 95, "tipo": 2, "equi": 60, "carbStimato": 137.5, "totaleCarburante": 137.5, "totNavi": 1 }, "justWritten": 'totaleCarburante',
                "terminal": "Statistiche globali aggiornate con 137.5 unità.\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "SALVATAGGIO", "html": "La navicella è stata processata. I totali vengono aggiornati!" } ]
            }
        ])
    },
    {
        "folder": "Livello_A3_Ospedale",
        "title": "Livello A3: Pronto Soccorso",
        "title_short": "Livello A3 (Logica Ospedale)",
        "obiettivo": "Sei l'architetto software del triage di un pronto soccorso. Devi assegnare un punteggio di priorità a ciascun paziente basato su età e codice colore.",
        "regole": '''
    <li>Chiedi <strong>età del paziente</strong> e il <strong>codice triage</strong> (1=Rosso, 2=Giallo, 3=Verde).</li>
    <li>La <strong>priorità base</strong> per tutti parte da 10.</li>
    <li>Se il codice è 1 (Rosso) -> aggiungi 50 punti priorità.</li>
    <li>Se il codice è 2 (Giallo) -> aggiungi 20 punti priorità.</li>
    <li>Se il codice è 3 (Verde) -> aggiungi 5 punti priorità.</li>
    <li>Se l'età è superiore a 75 anni -> aggiungi 15 punti priorità extra.</li>
    <li>Se l'età è inferiore a 10 anni (bambini) -> aggiungi 10 punti priorità extra.</li>''',
        "ciclo": "Dopo aver analizzato un paziente, chiedi all'utente se c'è <strong>un altro paziente in coda</strong> (1 per sì, 0 per no). Ripeti le operazioni usando un ciclo.",
        "statistiche": '''
    <li>Numero totale di pazienti registrati.</li>
    <li>Numero di pazienti con Codice Rosso.</li>
    <li>Numero di pazienti con priorità maggiore di 50.</li>
    <li>L'età media di tutti i pazienti.</li>''',
        "suggerimento1": "Per la priorità base, crea una variabile `int priorita = 10;` all'interno del ciclo per ogni nuovo paziente.",
        "suggerimento2": "Codice rosso, giallo e verde sono mutuamente esclusivi, quindi un costrutto `if / else if / else if` è perfetto. Anche lo switch va bene.",
        "suggerimento3": "Per l'età, un paziente non può avere contemporaneamente > 75 anni e < 10 anni, quindi usa `if / else if`.",
        "code_json": json.dumps([
            "int eta = 80; int codice = 2;",
            "int priorita = 10;",
            "",
            "if (codice == 1) {",
            "    priorita += 50;",
            "} else if (codice == 2) {",
            "    priorita += 20;",
            "} else if (codice == 3) {",
            "    priorita += 5;",
            "}",
            "",
            "if (eta > 75) {",
            "    priorita += 15;",
            "} else if (eta < 10) {",
            "    priorita += 10;",
            "}",
            "",
            "if (priorita > 50) {",
            "    pazientiPrioritaAlta++;",
            "}",
            "totalePazienti++;"
        ]),
        "steps_json": json.dumps([
            {
                "phase": "INIT", "state": "Dati Paziente", "action": "Assegno variabili",
                "codeLine": 0, "ram": { "eta": 80, "codice": 2, "priorita": "?", "altaPriorita": 0, "totPazienti": 0 }, "justWritten": 'eta',
                "terminal": "Nuovo Paziente\nEtà: 80 | Codice: 2 (Giallo)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "DATI", "html": "Analizziamo un paziente anziano di 80 anni arrivato con codice Giallo." } ]
            },
            {
                "phase": "BASE", "state": "Assegnazione", "action": "Priorita = 10",
                "codeLine": 1, "ram": { "eta": 80, "codice": 2, "priorita": 10, "altaPriorita": 0, "totPazienti": 0 }, "justWritten": 'priorita',
                "terminal": "Priorità Base: 10\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "BASE", "html": "Tutti i pazienti partono con priorità base 10." } ]
            },
            {
                "phase": "CODICE", "state": "If Codice == 2", "action": "Controllo Giallo",
                "codeLine": 5, "ram": { "eta": 80, "codice": 2, "priorita": 10, "altaPriorita": 0, "totPazienti": 0 }, "justWritten": '',
                "terminal": "Priorità Base: 10\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Il codice è 2? SÌ. Entriamo nell'else-if." } ]
            },
            {
                "phase": "CODICE", "state": "Applico Giallo", "action": "+20",
                "codeLine": 6, "ram": { "eta": 80, "codice": 2, "priorita": 30, "altaPriorita": 0, "totPazienti": 0 }, "justWritten": 'priorita',
                "terminal": "Priorità Base: 10\n+20 Codice Giallo\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "ADDIZIONE", "html": "La priorità sale a 30 (10 + 20)." } ]
            },
            {
                "phase": "ETA", "state": "If Eta > 75", "action": "Controllo Anziano",
                "codeLine": 11, "ram": { "eta": 80, "codice": 2, "priorita": 30, "altaPriorita": 0, "totPazienti": 0 }, "justWritten": '',
                "terminal": "Priorità Base: 10\n+20 Codice Giallo\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Età (80) > 75? SÌ." } ]
            },
            {
                "phase": "ETA", "state": "Applico Anziano", "action": "+15",
                "codeLine": 12, "ram": { "eta": 80, "codice": 2, "priorita": 45, "altaPriorita": 0, "totPazienti": 0 }, "justWritten": 'priorita',
                "terminal": "Priorità Base: 10\n+20 Codice Giallo\n+15 Priorità Età (>75)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "ADDIZIONE", "html": "Priorità totale per il paziente: 45." } ]
            },
            {
                "phase": "STATISTICHE", "state": "If Priorita > 50", "action": "Controllo Alta",
                "codeLine": 17, "ram": { "eta": 80, "codice": 2, "priorita": 45, "altaPriorita": 0, "totPazienti": 0 }, "justWritten": '',
                "terminal": "Priorità totale: 45\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Priorità (45) > 50? FALSO. Non è considerato urgenza massima." } ]
            },
            {
                "phase": "STATISTICHE", "state": "TotPazienti", "action": "+1",
                "codeLine": 20, "ram": { "eta": 80, "codice": 2, "priorita": 45, "altaPriorita": 0, "totPazienti": 1 }, "justWritten": 'totPazienti',
                "terminal": "Paziente elaborato. Avanti il prossimo!\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "INCREMENTO", "html": "Incrementiamo il contatore dei pazienti totali processati." } ]
            }
        ])
    },
    {
        "folder": "Livello_A4_Citta",
        "title": "Livello A4: Smart City",
        "title_short": "Livello A4 (Logica Smart City)",
        "obiettivo": "Il sindaco ti ha chiesto di creare un simulatore del consumo energetico della città. Calcola l'energia richiesta in base al tipo di edificio e alla presenza di pannelli solari.",
        "regole": '''
    <li>Chiedi l'<strong>area in mq</strong> dell'edificio, il <strong>tipo</strong> (1=Residenziale, 2=Commerciale, 3=Industriale) e se possiede <strong>pannelli solari</strong> (1=Sì, 0=No).</li>
    <li>L'<strong>energia base</strong> è calcolata moltiplicando l'area per 2.</li>
    <li>Se è Commerciale (tipo 2) -> aggiungi 50 kW per le illuminazioni.</li>
    <li>Se è Industriale (tipo 3) -> aggiungi 100 kW per i macchinari.</li>
    <li>Se ha i pannelli solari (valore 1) -> sottrai 30 kW di energia consumata.</li>
    <li>Se l'energia finale dovesse risultare <strong>minore di 0</strong>, impostala esattamente a 0 (un edificio non può consumare energia negativa in questo simulatore base).</li>''',
        "ciclo": "Terminata la valutazione di un edificio, chiedi all'utente se vuole <strong>inserirne un altro</strong> (1 per continuare, 0 per finire). Usa un ciclo per la ripetizione.",
        "statistiche": '''
    <li>Numero totale di edifici censiti.</li>
    <li>Consumo energetico totale di tutti gli edifici.</li>
    <li>Quanti edifici possiedono i pannelli solari.</li>
    <li>Quanti edifici hanno consumo pari a 0 kW (totalmente auto-sufficienti).</li>''',
        "suggerimento1": "Il controllo `energia < 0` va fatto alla fine, *dopo* aver sottratto il bonus dei pannelli solari.",
        "suggerimento2": "La variabile per i pannelli solari può essere un `int` dove controlli `if(pannelli == 1)` oppure una variabile `bool`.",
        "suggerimento3": "Per l'energia usa `float` o `double` per evitare che la media e altri calcoli perdano decimali (anche se in questo caso i calcoli base sono interi).",
        "code_json": json.dumps([
            "float area = 10.0; int tipo = 1; int pannelli = 1;",
            "float energia = area * 2.0;",
            "",
            "if (tipo == 2) {",
            "    energia += 50.0;",
            "} else if (tipo == 3) {",
            "    energia += 100.0;",
            "}",
            "",
            "if (pannelli == 1) {",
            "    energia -= 30.0;",
            "}",
            "",
            "if (energia < 0.0) {",
            "    energia = 0.0;",
            "    edificiZero++;",
            "}",
            "",
            "totaleEnergia += energia;",
            "totaleEdifici++;"
        ]),
        "steps_json": json.dumps([
            {
                "phase": "INIT", "state": "Dati Edificio", "action": "Assegno variabili",
                "codeLine": 0, "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": "?", "totEnergia": 500, "edifZero": 0 }, "justWritten": 'area',
                "terminal": "Edificio: Piccola Casa\nArea: 10mq | Tipo: 1 (Res) | Pannelli: 1 (SI)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "DATI", "html": "Una piccola casa molto ecologica da 10 mq." } ]
            },
            {
                "phase": "BASE", "state": "Calcolo Base", "action": "Energia = area * 2",
                "codeLine": 1, "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": 20, "totEnergia": 500, "edifZero": 0 }, "justWritten": 'energia',
                "terminal": "Energia base = 20.0 kW\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "MOLTIPLICAZIONE", "html": "Consumo base 10 * 2 = 20 kW." } ]
            },
            {
                "phase": "TIPO", "state": "If Tipo > 1", "action": "Controllo Tipo",
                "codeLine": 3, "ignoredLines": [4,5,6], "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": 20, "totEnergia": 500, "edifZero": 0 }, "justWritten": '',
                "terminal": "Energia base = 20.0 kW\nNessun bonus tipo (Residenziale).\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "TEST", "html": "Tipo 2? NO. Tipo 3? NO. Il consumo rimane a 20 kW." } ]
            },
            {
                "phase": "PANNELLI", "state": "If Pannelli", "action": "Sottraggo 30",
                "codeLine": 10, "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": -10, "totEnergia": 500, "edifZero": 0 }, "justWritten": 'energia',
                "terminal": "Energia = 20.0 kW\n-30 kW (Pannelli Solari)\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "SOTTRAZIONE", "html": "20 - 30 = -10 kW. Aspetta, l'energia è andata sotto zero!" } ]
            },
            {
                "phase": "CONTROLLO ZERO", "state": "If Energia < 0", "action": "Limitatore a 0",
                "codeLine": 14, "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": 0, "totEnergia": 500, "edifZero": 0 }, "justWritten": 'energia',
                "terminal": "Energia = -10.0 kW\nLimito consumo a 0!\n",
                "explain": [ { "type": "logic", "icon": "⚙️", "label": "CORREZIONE", "html": "Poiché -10 < 0, forziamo l'energia a 0." } ]
            },
            {
                "phase": "CONTROLLO ZERO", "state": "Statistica Zero", "action": "edificiZero++",
                "codeLine": 15, "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": 0, "totEnergia": 500, "edifZero": 1 }, "justWritten": 'edifZero',
                "terminal": "Edificio auto-sufficiente registrato.\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "INCREMENTO", "html": "Aggiungiamo 1 al contatore degli edifici a zero emissioni." } ]
            },
            {
                "phase": "TOTALI", "state": "Aggiorno Globali", "action": "+0 Energia",
                "codeLine": 18, "ram": { "area": 10, "tipo": 1, "pannelli": 1, "energia": 0, "totEnergia": 500, "edifZero": 1 }, "justWritten": 'totEnergia',
                "terminal": "Salvataggio completato.\n",
                "explain": [ { "type": "what", "icon": "🔍", "label": "SALVATAGGIO", "html": "L'edificio non aggiunge consumo energetico (0 kW). Fine!" } ]
            }
        ])
    }
]

import os

base_path = r"c:/Users/thoma/Documents/ThomasMazzeo/public/esercizi-cpp"

for lvl in levels:
    dir_path = os.path.join(base_path, lvl['folder'])
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
    
    consegna_content = consegna_template.format(
        appunti=appunti_html,
        title=lvl['title'],
        obiettivo=lvl['obiettivo'],
        regole=lvl['regole'],
        ciclo=lvl['ciclo'],
        statistiche=lvl['statistiche'],
        suggerimento1=lvl['suggerimento1'],
        suggerimento2=lvl['suggerimento2'],
        suggerimento3=lvl['suggerimento3']
    )
    
    soluzione_content = soluzione_template.format(
        title=lvl['title'],
        title_short=lvl['title_short'],
        code_json=lvl['code_json'],
        steps_json=lvl['steps_json']
    )
    
    with open(os.path.join(dir_path, "consegna.html"), "w", encoding="utf-8") as f:
        f.write(consegna_content)
        
    with open(os.path.join(dir_path, "soluzione.html"), "w", encoding="utf-8") as f:
        f.write(soluzione_content)

print("HTML files generated successfully.")
