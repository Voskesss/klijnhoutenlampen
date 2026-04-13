# Klijnhoutenlampen — statische site voor GitHub Pages

Repository: [github.com/Voskesss/klijnhoutenlampen](https://github.com/Voskesss/klijnhoutenlampen)

**Preview-URL (na eerste push + Pages aan):** [voskesss.github.io/klijnhoutenlampen](https://voskesss.github.io/klijnhoutenlampen/)

## GitHub Pages aanzetten

1. Push deze map naar de branch `main` van bovenstaande repo (eerste keer: `git push -u origin main`).
2. Ga in GitHub naar **Settings → Pages** van de repo.
3. Bij **Build and deployment**: bron **Deploy from a branch**, branch **main**, map **/ (root)**.
4. Na een minuut of twee is de site bereikbaar op de preview-URL hierboven.

Het bestand **`.nojekyll`** zorgt dat GitHub je bestanden niet als Jekyll-project probeert te bouwen (handig voor statische HTML).

### Geen “build” in Actions?

Als bron **Deploy from a branch** is, draait er **geen** GitHub Actions-workflow voor de publicatie. Dat is normaal: GitHub kopieert je bestanden naar Pages. Een lege **Actions**-tab betekent dus niet dat het misgaat.

### Site opent niet / oneindig laden

Als je onder **Settings → Pages** een **Custom domain** hebt gezet (of ooit een **`CNAME`**-bestand in de repo had) terwijl **DNS voor dat domein nog niet** naar GitHub wijst, stuurt GitHub bezoekers door naar jouw domein — en dat kan nergens naartoe leiden. Oplossing: DNS eerst goed zetten (zie hieronder), óf tijdelijk het custom domain **wissen** in Pages en pas daarna weer instellen als DNS klaar is.

## Eigen domein (klijnhoutenlampen.nl)

Doe dit **pas als DNS bij je registrar klaarstaat** (anders lijkt de site “kapot”):

1. Voeg in de root van de repo een bestand **`CNAME`** toe met alleen deze regel: `klijnhoutenlampen.nl` (of gebruik het veld **Custom domain** in Pages; GitHub kan het bestand dan voor je aanmaken).
2. DNS-records zoals GitHub ze toont (vaak **A-records** naar GitHub’s IP’s en/of **CNAME** naar `voskesss.github.io`). Zie [Custom domain voor GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Wacht op DNS-propagatie. Daarna **Enforce HTTPS** aanzetten in de Pages-instellingen.

## Inhoud aanpassen

| Pagina | Bestand |
| --- | --- |
| Home | `index.html` |
| Over | `over.html` |
| Lampen (galerij) | `lampen.html` + `data/lampen.json` + `images/lampen/` |
| Ophalen | `ophalen.html` |
| Contact | `contact.html` |
| Privacy / cookies / voorwaarden | `privacy.html`, `cookies.html`, `voorwaarden.html` |
| Styling (alle pagina’s) | `css/style.css` |

Alles is statisch; er is geen server of database nodig.
