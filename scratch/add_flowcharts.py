import os
import re

base_path = r'c:\Users\thoma\Documents\ThomasMazzeo\public\esercizi-cpp'

mermaid_map = {
    "Livello_00_Basi": """
graph TD
    A([Inizio]) --> B[Stampa messaggio di benvenuto]
    B --> C([Fine])
""",
    "Livello_01_Variabili": """
graph TD
    A([Inizio]) --> B[Dichiara variabili intere]
    B --> C[Assegna valori alle variabili]
    C --> D[Calcola somma]
    D --> E[Stampa risultato]
    E --> F([Fine])
""",
    "Livello_01_1_Variabili": """
graph TD
    A([Inizio]) --> B[Dichiara variabili intere per il Drone]
    B --> C[Assegna valori base e bonus]
    C --> D[Calcola potenza totale]
    D --> E[Stampa risultato]
    E --> F([Fine])
""",
    "Livello_02_Input_Math": """
graph TD
    A([Inizio]) --> B[Dichiara variabili]
    B --> C[/Leggi input utente/]
    C --> D[Calcola operazione matematica]
    D --> E[/Stampa risultato/]
    E --> F([Fine])
""",
    "Livello_02_1_Input_Math": """
graph TD
    A([Inizio]) --> B[Dichiara variabili propulsione]
    B --> C[/Leggi valori da tastiera/]
    C --> D[Somma i valori]
    D --> E[/Stampa risultato finale/]
    E --> F([Fine])
""",
    "Livello_03_Condizioni": """
graph TD
    A([Inizio]) --> B[/Leggi HP/]
    B --> C{HP <= 0?}
    C -- Sì --> D[/Stampa GAME OVER/]
    C -- No --> E[/Stampa Sei ancora vivo/]
    D --> F([Fine])
    E --> F
""",
    "Livello_03_1_Condizioni": """
graph TD
    A([Inizio]) --> B[/Leggi Temperatura/]
    B --> C{Temp > 100?}
    C -- Sì --> D[/Stampa Allarme/]
    C -- No --> E{Temp < 20?}
    E -- Sì --> F[/Stampa Temp insufficiente/]
    E -- No --> G[/Stampa Stato Normale/]
    D --> H([Fine])
    F --> H
    G --> H
""",
    "Livello_04_Cicli_While": """
graph TD
    A([Inizio]) --> B[conto = 3]
    B --> C{conto > 0?}
    C -- Sì --> D[/Stampa conto/]
    D --> E[conto = conto - 1]
    E --> C
    C -- No --> F[/Stampa PARTENZA!/]
    F --> G([Fine])
""",
    "Livello_04_1_Cicli_While": """
graph TD
    A([Inizio]) --> B[scudo = 20]
    B --> C{scudo <= 100?}
    C -- Sì --> D[/Stampa scudo %/]
    D --> E[scudo = scudo + 20]
    E --> C
    C -- No --> F[/Stampa SCUDI AL 100%/]
    F --> G([Fine])
""",
    "Livello_05_Statistiche": """
graph TD
    A([Inizio]) --> B[Inizializza contatori e totali]
    B --> C[/Leggi input/]
    C --> D{input != 0?}
    D -- Sì --> E[Aggiungi a totale e incrementa contatore]
    E --> C
    D -- No --> F[/Stampa Statistiche/]
    F --> G([Fine])
""",
    "Livello_05_1_Statistiche": """
graph TD
    A([Inizio]) --> B[totaleCristalli = 0, numeroDepositi = 0]
    B --> C[/Leggi cristalli/]
    C --> D{cristalli != 0?}
    D -- Sì --> E{cristalli > 0?}
    E -- Sì --> F[Somma cristalli, incrementa numeroDepositi]
    E -- No --> C
    F --> C
    D -- No --> G[/Stampa Statistiche/]
    G --> H([Fine])
""",
    "Livello_A1_Negozio": """
graph TD
    A([Inizio]) --> B[/Leggi prezzo, qta, cat/]
    B --> C[costo = prezzo * qta]
    C --> D{qta > 10?}
    D -- Sì --> E[Sconto 5%]
    D -- No --> F{Categoria?}
    E --> F
    F -- 1 --> G[+0% Tasse]
    F -- 2 --> H[+20% Tasse]
    F -- 3 --> I[+10% Tasse]
    G --> J{costo <= 100?}
    H --> J
    I --> J
    J -- Sì --> K[+5 Spedizione]
    J -- No --> L[Spedizione gratuita]
    K --> M[Aggiorna Totali]
    L --> M
    M --> N([Fine])
""",
    "Livello_A2_Flotta": """
graph TD
    A([Inizio]) --> B[/Leggi carb, tipo, equi/]
    B --> C{equi > 50?}
    C -- Sì --> D[carb += 10]
    C -- No --> E{Tipo?}
    D --> E
    E -- 1 --> F[carb -= 5]
    E -- 2 --> G[carb += 20]
    E -- 3 --> H[Nessuna mod]
    F --> I{carb > 100?}
    G --> I
    H --> I
    I -- Sì --> J[Penalità 10%]
    I -- No --> K[Aggiorna Totali]
    J --> K
    K --> L([Fine])
""",
    "Livello_A3_Ospedale": """
graph TD
    A([Inizio]) --> B[/Leggi età, codice/]
    B --> C[priorità = 10]
    C --> D{Codice?}
    D -- 1 --> E[+50]
    D -- 2 --> F[+20]
    D -- 3 --> G[+5]
    E --> H{Età > 75?}
    F --> H
    G --> H
    H -- Sì --> I[+15]
    H -- No --> J{Età < 10?}
    I --> K[Aggiorna Statistiche]
    J -- Sì --> L[+10]
    J -- No --> K
    L --> K
    K --> M([Fine])
""",
    "Livello_A4_Citta": """
graph TD
    A([Inizio]) --> B[/Leggi area, tipo, pannelli/]
    B --> C[energia = area * 2]
    C --> D{Tipo?}
    D -- 2 --> E[energia += 50]
    D -- 3 --> F[energia += 100]
    D -- 1 --> G{Pannelli == 1?}
    E --> G
    F --> G
    G -- Sì --> H[energia -= 30]
    G -- No --> I{energia < 0?}
    H --> I
    I -- Sì --> J[energia = 0]
    I -- No --> K[Aggiorna Totali]
    J --> K
    K --> L([Fine])
""",
    "Livello_A_Torneo": """
graph TD
    A([Inizio]) --> B[/Leggi punti, falli, tipo partita/]
    B --> C[Applica modificatori base]
    C --> D[Calcola punteggio torneo]
    D --> E[Aggiorna Statistiche globali]
    E --> F([Fine])
"""
}

mermaid_head = """<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true, theme: 'dark' });
</script>"""

for root, dirs, files in os.walk(base_path):
    if 'consegna.html' in files:
        folder_name = os.path.basename(root)
        file_path = os.path.join(root, 'consegna.html')
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Add Mermaid JS
        if 'mermaid.esm.min.mjs' not in content:
            content = content.replace('</head>', f'{mermaid_head}\n</head>')
            
        # Add Mermaid block
        if 'class="mermaid"' not in content:
            graph = mermaid_map.get(folder_name, "graph TD\n    A([Inizio]) --> B([Fine])")
            mermaid_html = f'''
  <h2 style="color: var(--cyan); margin-top: 2rem;">📊 Diagramma di Flusso</h2>
  <div class="mermaid" style="background-color: #05080f; border: 1px solid rgba(0, 212, 255, 0.2); border-radius: 8px; padding: 1rem; margin: 1.5rem 0; text-align: center;">
{graph}
  </div>
'''
            # insert before the button link container
            target = '<div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">'
            if target in content:
                content = content.replace(target, mermaid_html + '\n  ' + target)
            else:
                # Fallback if target not found
                target2 = '</div>\n\n<div class="docs-panel">'
                if target2 in content:
                    content = content.replace(target2, mermaid_html + '\n' + target2)
                    
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Flowcharts successfully added to all files!")
