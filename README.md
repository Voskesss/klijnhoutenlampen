# Klijnhoutenlampen — statische site voor GitHub Pages

Repository: [github.com/Voskesss/klijnhoutenlampen](https://github.com/Voskesss/klijnhoutenlampen)

**Preview-URL (na eerste push + Pages aan):** [voskesss.github.io/klijnhoutenlampen](https://voskesss.github.io/klijnhoutenlampen/)

## GitHub Pages aanzetten

1. Push deze map naar de branch `main` van bovenstaande repo (eerste keer: `git push -u origin main`).
2. Ga in GitHub naar **Settings → Pages** van de repo.
3. Bij **Build and deployment**: bron **Deploy from a branch**, branch **main**, map **/ (root)**.
4. Na een minuut of twee is de site bereikbaar op de preview-URL hierboven. Met **Custom domain** `klijnhoutenlampen.nl` (en DNS goed gezet) wordt dat je echte domein.

Het bestand **`.nojekyll`** zorgt dat GitHub je bestanden niet als Jekyll-project probeert te bouwen (handig voor statische HTML).

## Eigen domein (klijnhoutenlampen.nl)

In de repository staat een **`CNAME`**-bestand met `klijnhoutenlampen.nl`.

1. Zet in GitHub Pages onder **Custom domain** hetzelfde domein.
2. Bij je domeinregistrar DNS-records toevoegen zoals GitHub aangeeft (meestal **A-records** naar GitHub’s IP-adressen en/of een **CNAME** naar `voskesss.github.io` voor `www`, afhankelijk van je keuze). Volg de [officiële GitHub-documentatie](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) voor de actuele waarden.
3. Wacht op DNS (soms tot 24 uur). **Enforce HTTPS** kan je daarna aanzetten in de Pages-instellingen.

## Inhoud aanpassen

- Teksten en structuur: `index.html`
- Lampen + bijschriften: `data/lampen.json` en afbeeldingen in `images/lampen/`
- Styling: `css/style.css`

Alles is statisch; er is geen server of database nodig.
