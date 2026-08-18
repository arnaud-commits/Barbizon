# Le Barbizon — nouveau site : ce qui a été fait et ce qu'il reste à faire

## Ce que contiennent ces fichiers
- `index.html` — page d'accueil (avant : vide, juste 2 liens)
- `evenementiel.html` — page phare, optimisée SEO + SEA, avec formulaire de devis intégré
- `restaurant.html` — page restaurant (menus, horaires, réservation)
- `style.css` / `script.js` — design et comportements partagés
- `robots.txt` / `sitemap.xml` — pour que Google explore le site correctement

**Important :** le site actuel tourne sous WordPress/Elementor. Ces fichiers sont un site statique HTML — une base complète et fonctionnelle, mais qui suppose soit (a) un hébergement statique séparé, soit (b) une intégration du design/contenu dans WordPress par votre développeur (Thibault Horny). Je peux préparer l'un ou l'autre selon votre préférence.

## Ce qui a été corrigé par rapport à l'ancien site
- Page d'accueil désormais remplie (avant : quasi vide)
- Titres et meta descriptions uniques par page, orientés mots-clés locaux ("salle de réception Overijse", "restaurant Overijse")
- Données structurées (schema.org) : `Restaurant`, `EventVenue`, `FAQPage` — aide Google à afficher des résultats enrichis (étoiles, FAQ dépliable, horaires)
- Formulaire de demande de devis (au lieu d'un simple lien mailto) avec champs qualifiants : type d'événement, date, nombre de couverts
- FAQ ciblée sur les questions que tapent réellement vos prospects événementiel
- `robots.txt` + `sitemap.xml` pour l'indexation
- Emplacement prêt pour le suivi de conversion Google Ads (`gtag`) dans `script.js` — à connecter à votre compte

## Ce qu'il reste à faire pour que ce soit une vraie "machine de guerre"

### SEO (gratuit, effet en 2–4 mois)
1. **Remplacer les photos placeholder** par de vraies photos du lieu, du jardin, d'événements passés — le plus gros levier de conversion sur ce type de page
2. **Google Business Profile** : vérifier/optimiser la fiche, catégorie "Salle de réception" + "Restaurant", collecter des avis après chaque événement
3. **Backlinks locaux** : annuaires mariage (Zankyou, Mariages.net), office du tourisme du Brabant flamand, partenaires (traiteurs, fleuristes, DJ) qui renvoient vers le site
4. Remplacer `AW-XXXXXXX/XXXXXXXXX` dans `script.js` par votre identifiant de conversion Google Ads une fois le compte créé

### SEA (payant, effet immédiat)
1. Campagne Google Ads Search **dédiée événementiel**, séparée d'une éventuelle campagne "restaurant", pointant vers `evenementiel.html#devis`
2. Mots-clés prioritaires : "salle de réception Overijse", "salle mariage Brabant flamand", "salle séminaire entreprise Overijse"
3. Budget test suggéré : 300–500 €/mois pour évaluer le coût par lead avant de scaler
4. Envisager Meta Ads (Instagram/Facebook) en complément — très visuel, efficace pour l'événementiel

### Technique (avant de mettre du budget pub)
1. **Connecter le formulaire à un vrai backend** (Formspree, CRM, ou formulaire WordPress natif) pour tracker les leads et les conversions Google Ads — actuellement il ouvre un email pré-rempli, ce qui fonctionne mais ne se trace pas
2. Ajouter Google Analytics 4 pour mesurer le trafic et le comportement
3. Vérifier la vitesse de chargement une fois les vraies photos intégrées (les compresser en WebP)
