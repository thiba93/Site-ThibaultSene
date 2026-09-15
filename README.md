# Thibault Séné — Portfolio

Une sélection de neuf sites, en HTML, CSS et JavaScript natifs. Ouvrir `index.html` par double-clic : aucune installation, aucun build, aucune clé API.

## Portfolio en ligne

- **Site :** [thiba93.github.io/Site-ThibaultSene](https://thiba93.github.io/Site-ThibaultSene/)
- **Dépôt :** [thiba93/Site-ThibaultSene](https://github.com/thiba93/Site-ThibaultSene)
- **Publication :** GitHub Pages, branche `main`, dossier racine. Les modifications poussées sur `main` déclenchent la mise à jour du site.

## Fichiers

```text
index.html
styles.css
script.js
README.md
assets/
  favicon.svg
  fonts/
    manrope.woff2
    instrument-serif-italic.woff2
    Manrope-LICENSE.txt
    Instrument-Serif-LICENSE.txt
  projects/
    project-01.webp … project-09.webp
    project-01-small.webp
    project-02-small.webp
    project-03-small.webp
```

Les captures ont été prises sur les neuf sites GitHub Pages publiés le 15 septembre 2026. Ce sont des captures des interfaces réelles, sans retouche du contenu ni image générique de substitution. Les polices sont locales, avec leurs licences SIL Open Font License. Aucune requête vers Google Fonts ou Instagram n’est nécessaire pour afficher le portfolio.

## Personnaliser les neuf projets

Le tableau **`projects`**, au début de `script.js`, est la source de configuration de la galerie. Chaque objet comprend :

```javascript
{
  number: '01',
  title: 'Sève',
  category: 'Maison de beauté',
  description: 'Une maison de beauté, entre ombre et douceur.',
  image: 'assets/projects/project-01.webp',
  thumbnail: 'assets/projects/project-01-small.webp',
  alt: 'Accueil de Sève : grande typographie ivoire et portrait chaleureux sur fond encre.',
  width: 1440,
  height: 1000,
  background: '#e6e9e0',
  layout: 'wide',
  url: 'https://thiba93.github.io/seve-institut/',
}
```

- **Titres** : modifier `title`. Les légendes, indications de survol et noms accessibles suivent automatiquement.
- **Descriptions** : modifier `description`, en restant entre 5 et 12 mots.
- **Secteurs** : modifier `category`.
- **Adresses GitHub Pages** : modifier `url` avec l’adresse HTTPS complète, en respectant la casse du nom du dépôt. Les neuf liens réels sont déjà renseignés. Une valeur vide `url: ''` affiche « Lien à venir » sans créer de faux lien ; les autres protocoles sont refusés.
- **Ordre** : déplacer les objets et adapter leurs numéros et dispositions. La phrase de positionnement s’insère après le troisième projet.
- **Composition** : `wide` = pleine largeur ; `left` / `right` = paire asymétrique ; `left-small` / `right-large` = paire inversée ; `inset` = grande vue centrée. Les paires doivent rester dans cet ordre. `portrait: true` identifie une capture verticale. Sur mobile, toutes les dispositions reviennent à une seule colonne.
- **Couleur autour de la capture** : modifier `background` avec une couleur CSS.

### Correspondance des captures

| Image | Projet | Site publié | Dimensions |
| --- | --- | --- | --- |
| `project-01.webp` | Sève | https://thiba93.github.io/seve-institut/ | 1440 × 1000 |
| `project-02.webp` | pigment. | https://thiba93.github.io/Site7-Chaussure/ | 1440 × 1000 |
| `project-03.webp` | Étienne Morel | https://thiba93.github.io/Site9-Peintre/ | 1000 × 1220 |
| `project-04.webp` | LAQUE. | https://thiba93.github.io/laque-onglerie-93/ | 1440 × 1000 |
| `project-05.webp` | Maison Alma | https://thiba93.github.io/Site8-Lissage/ | 1440 × 1000 |
| `project-06.webp` | NAYA | https://thiba93.github.io/naya-studio-beaute/ | 1440 × 1000 |
| `project-07.webp` | jolie. | https://thiba93.github.io/jolie-beauty-bar/ | 900 × 1140 |
| `project-08.webp` | NUA | https://thiba93.github.io/site3-esthetisme/ | 1440 × 1000 |
| `project-09.webp` | Opale | https://thiba93.github.io/opale-institut-beaute/ | 1440 × 1000 |

### Remplacer les captures

1. Capturer le site à son chargement, avec ses polices et images visibles, sans interface du navigateur. Éviter les captures de toute une très longue page : le texte deviendrait illisible.
2. Exporter en WebP, idéalement entre 60 et 180 Ko pour une capture desktop. Les fichiers livrés utilisent une qualité de 88 ; les neuf captures principales totalisent environ 750 Ko.
3. Remplacer le fichier correspondant dans `assets/projects/`. Avec le même nom, aucun changement de chemin n’est nécessaire.
4. Reporter les véritables dimensions dans `width` et `height`. Elles réservent la bonne place avant le chargement et conservent les proportions : les grandes captures ne sont pas recadrées.
5. Adapter `alt` au contenu visible, sans se limiter à « image du projet ».
6. Pour les trois premières images, remplacer aussi les variantes `-small.webp` (480 pixels de large) utilisées dans le triptyque du hero. Leur champ `thumbnail` est modifiable. Mettre également à jour leurs chemins et dimensions dans le HTML pour conserver le même aperçu sans JavaScript.

Une image absente est remplacée par un panneau discret avec le nom et « Aperçu à venir ». Le lien vers le site reste utilisable. Les images de la galerie sont chargées à la demande, sauf la première ; la miniature principale du hero est également prioritaire.

## Nom, email et réseaux sociaux

Modifier l’objet **`portfolio`** au début de `script.js` :

```javascript
const portfolio = {
  name: 'Thibault Séné',
  firstName: 'Thibault.',
  email: 'thibaultsene4@gmail.com',
  instagram: 'https://www.instagram.com/thibaultsene/',
  subject: 'Projet de site web',
  emailBody: 'Bonjour Thibault,\n\nMon activité :\nMon idée :\nMon calendrier :',
};
```

- `email`, `subject` et `emailBody` mettent à jour tous les liens de contact et préremplissent le destinataire, l’objet et le message. Le visiteur envoie lui-même son email depuis sa messagerie ; aucune donnée n’est envoyée en arrière-plan. Une messagerie configurée sur l’appareil reste nécessaire.
- `instagram` met à jour les liens du pied de page et de la présentation. Une valeur vide les masque. Aucun flux Instagram, traceur ou appel d’API n’est utilisé.
- La signature se modifie avec `name`. Pour une autre identité, adapter aussi le monogramme `t.s` et le favicon SVG.
- L’année est mise à jour automatiquement.
- La courte présentation personnelle et les phrases du hero et du contact se modifient directement dans `index.html`.

**Version sans JavaScript et référencement** : après une personnalisation, reporter les changements dans les textes et liens de secours de `index.html` (notamment `<title>`, la description, les coordonnées et les neuf liens dans `<noscript>`). Le JavaScript ne peut pas mettre à jour une page lorsqu’il est désactivé. La galerie de secours utilise les mêmes images et reste navigable.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub public, par exemple `portfolio`. Ce nom est un exemple de configuration, pas une adresse déjà publiée.
2. Ajouter `index.html`, `styles.css`, `script.js`, `README.md` et le dossier `assets/` à la racine du dépôt, puis enregistrer les fichiers sur la branche `main`.
3. Ouvrir **Settings → Pages**.
4. Dans **Build and deployment**, choisir **Deploy from a branch**.
5. Sélectionner **main** et **/(root)**, puis **Save**.
6. Attendre la fin du déploiement et ouvrir l’adresse affichée par GitHub. Pour un dépôt nommé `portfolio` appartenant à `thiba93`, l’adresse attendue serait `https://thiba93.github.io/portfolio/`.

Aucun build applicatif ou installation npm n’est requis. GitHub assure son propre traitement de publication. Le dépôt de ce portfolio est déjà configuré ; ces étapes permettent de publier une copie sous un autre nom. Étapes vérifiées dans la [documentation officielle de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Vérifier les chemins relatifs dans un sous-dossier

1. Vérifier d’abord le double-clic sur `index.html` : les images, polices, liens et menus doivent fonctionner en `file://`.
2. Facultativement, lancer un serveur statique depuis le **dossier parent** du portfolio, avec Python si disponible :

   ```sh
   python -m http.server 4188 --bind 127.0.0.1
   ```

3. Ouvrir `http://127.0.0.1:4188/Site-ThibaultSene/` (adapter le nom si le dossier a été renommé).
4. Dans les outils du navigateur, vérifier que les ressources viennent toutes de ce sous-dossier, sans réponse 404. Naviguer vers Projets et À propos, ouvrir un site et vérifier le lien de contact.
5. Après publication, répéter le contrôle à l’adresse GitHub Pages affichée dans les paramètres du dépôt.

Les ressources utilisent `assets/…`, `styles.css` et `script.js`, jamais `/assets/…` ou un chemin Windows. Les ancres sont locales. Seuls les sites externes, le réseau social et les contacts emploient naturellement des URLs complètes ou `mailto:`.

## Accessibilité et fonctionnement

- Navigation native, lien d’évitement, focus visible et grandes zones cliquables.
- Menu mobile accessible : état `aria-expanded`, fermeture par Échap, clic extérieur et après navigation ; les liens masqués sortent du parcours clavier.
- Titres et liens toujours visibles sur mobile. Les indications de survol sont complémentaires.
- Ouverture externe avec `target="_blank"` et `rel="noopener noreferrer"`, également annoncée dans le nom accessible.
- Respect de `prefers-reduced-motion`, y compris si la préférence change pendant la consultation.
- Aucun scroll détourné, curseur spécial, vidéo, backend, cookie, stockage personnel ou secret.

## Direction artistique

### 1. Core concept
Une archive personnelle de sites : de grandes captures, une mise en page de catalogue, très peu de mots.

### 2. Emotional promise
Faire sentir la singularité de chaque univers et donner envie de l’explorer.

### 3. Visual identity
Blanc minéral, noir encre, cobalt ponctuel et bleu pâle. Manrope légère ; quelques mots en Instrument Serif italique. Une grille de douze colonnes, des filets fins, des légendes compactes.

### 4. Motion and scroll language
Défilement natif, apparitions courtes et déplacement discret des captures au survol. Pas de curseur personnalisé ni de son.

### 5. Media choreography
Trois fragments des sites dans l’introduction. Alternance de vues larges et verticales, provenant des véritables pages publiées.

### 6. Spectacle budget
Trois moments de composition : titre et triptyque, première grande capture, conclusion typographique. Aucun effet permanent ; seulement des transitions utiles.

### 7. Section flow
Navigation, introduction, trois premiers projets, phrase de positionnement, six autres projets, à propos, contact, pied de page.

### 8. Browser degradation strategy
Polices de secours, contenu visible sans animation, navigation native, images de remplacement et lecture verticale sur mobile. Respect de `prefers-reduced-motion`.

### 9. Risks and implementation notes
Les sites présentés sont des réalisations de démonstration ; le portfolio ne les présente pas comme des commandes de clients réels. Les captures doivent être renouvelées si ces pages évoluent.

### 10. Build checklist
Neuf liens réels, neuf images WebP, ressources locales, chemins relatifs, contact prérempli, navigation clavier et vérifications mobile / desktop / sous-dossier.

## Revue de livraison — 15 septembre 2026

**Résultat : Pass.** Livraison validée pour GitHub Pages. L’ambition éditoriale du brief est atteinte ; effets spectaculaires, vidéo et WebGL sont volontairement exclus conformément à la demande.

Contrôles effectués dans Chromium :

- Largeurs de 320, 390, 768, 1024, 1440 et 1920 pixels : neuf projets présents, aucun débordement horizontal.
- Captures visuelles desktop et mobile : galerie entière inspectée, première capture visible dès le premier écran.
- Neuf clics réels : neuf destinations attendues, ouvertes dans un nouvel onglet, avec `window.opener === null`.
- Descriptions de 7 à 10 mots, aucun visuel cassé en chargement normal.
- Menu mobile : ouverture, fermeture par Échap, retour du focus et navigation vers À propos.
- Contact : destinataire, objet et corps du message présents dans les URLs `mailto:` ; Instagram configuré.
- Double-clic en `file://` et accès HTTP sous `/Site-ThibaultSene/` : styles, images et neuf projets fonctionnels.
- JavaScript désactivé : neuf liens de secours et navigation disponibles.
- Image volontairement bloquée : panneau de remplacement visible et lien conservé.
- Réduction des animations et révélation immédiate d’un projet ciblé au clavier.
- Syntaxe JavaScript vérifiée avec `node --check` ; aucune erreur JavaScript pendant le parcours normal.

**Problèmes bloquants : aucun détecté.** Les retouches apportées pendant la revue concernent la préservation des proportions, la lisibilité mobile, le retour du focus, le repli des images et la composition du titre final.

**Pistes facultatives** : portrait personnel, biographie plus spécifique, aperçus mobiles supplémentaires, une étude de cas détaillée, renouvellement des captures à chaque refonte. Aucun de ces ajouts n’est nécessaire à la présente livraison. Fichiers à modifier selon le besoin : `index.html`, `script.js`, `assets/projects/`.

Ces contrôles ne constituent pas un audit exhaustif de tous les navigateurs ni une mesure Lighthouse chiffrée. L’envoi réel d’un email dépend du logiciel de messagerie du visiteur. L’adresse de publication figure en tête de ce document.
