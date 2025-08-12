# Olympic Games Statistics

| Auteur | Version |   Commentaire    |
|:------:|:-------:|:----------------:|
| MERLY  |   1.0   | Première version |

## Présentation

Ce projet permet de visualiser les statistiques des Jeux olympiques par pays à travers une interface utilisateur intuitive.

## Prérequis

- **Node.js** : Version 22.18.0 ou supérieure.

Pour vérifier la version de Node.js installée, exécutez la commande suivante dans votre terminal :

```bash
node --version
```

## Installation

Pour installer les dépendances du projet, accédez au dossier du projet via votre terminal et exécutez :

```bash
npm install
```

## Exécution

Pour lancer le projet, accédez au dossier du projet via votre terminal et exécutez :

```bash
npm start
```

## Documentation

Ce projet est développé avec **Angular 19**. Pour plus d'informations, consultez la documentation officielle sur [Angular.io](https://angular.io/).

Les graphiques sont générés à l'aide de la bibliothèque [ngx-charts](https://swimlane.github.io/ngx-charts/).

### Architecture du projet

L'arborescence du projet est organisée comme suit :

```
src/
├── core/
│   ├── components/       # Composants réutilisables partagés entre les pages
│   ├── services/         # Services pour la logique métier
│   ├── interceptors/     # Intercepteurs HTTP pour la gestion des requêtes
│   ├── models/           # Types et interfaces utilisés dans le projet
├── dashboard/
│   ├── components/       # Composants principaux utilisés par les pages
├── pages/                # Pages du projet, alignées sur la structure des routes (voir app.routes.ts)
└── variables.scss        # Variables SCSS pour la gestion des styles
```

### Spécificités techniques

- **Composants standalone** : Le projet utilise des composants autonomes pour une meilleure modularité.
- **Injection de services** : Les services sont injectés via la fonction `inject` plutôt que par l'injection classique dans le constructeur.
- **ESLint** : Activé pour garantir la qualité du code et le respect des bonnes pratiques.
- **Styling** :
  - Les styles sont basés sur une palette de couleurs définie dans les maquettes, centralisée dans `/src/variables.scss`.
  - Utilisation de **CSS Flexbox** pour le positionnement des éléments.
- **Tests unitaires** : Les tests unitaires ne sont pas implémentés dans ce projet.

## Design

Le design du projet repose sur une palette de couleurs cohérente, définie dans le fichier `/src/variables.scss`. L'utilisation de CSS Flexbox assure un placement précis et responsive des éléments à travers l'application.
