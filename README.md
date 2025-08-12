# OlympicGamesStarter

| Auteur | Version |   Commentaire    |
|:------:|:-------:|:----------------:|
| MERLY  |   1.0   | Première version |

Ce projet permet de visualiser les statistiques des jeux olympiques depuis par pays

## Prérequis

- Avoir installé node 22.18.0 et supérieur.

Pour verifier votre version de node, entrez la commande suivante dans votre terminal :

```
node --version
```

## Installation

Pour installer ce projet entrez la commande suivante dans votre terminal dans le dossier du projet :

```
npm install
```

## Execution

Pour executer ce projet entrez la commande suivante dans votre terminal dans le dossier du projet :

```
npm start
```

## Documentation

Ce projet utilise Angular 19, pour plus d'information sur Angular, rendez-vous sur [Angular.io](https://angular.io/).

Il utilise également [ngx-charts](https://swimlane.github.io/ngx-charts/) pour les graphiques.

### Architecture

Arborescence du projet :

```
core
  components      # Les composants communs aux pages
  services        # Contient les services
  interceptors    # Les intercepteurs Http
  models          # Les differents types/interfaces utilisé par le projet
dashboard
  components      # Les composants principaux appelé par les pages 
pages             # Les pages du projet qui suit la strucutre des urls en concordance avec app.routes.ts

```

### Spécificités

Le projet a été retravaillé de facon à fonctionner avec des composants standalone.

Les services sont injecté avec inject au lieu de l'injection par constructeur.

Eslint a été activé sur ce projet afin de garantir une certaine qualité du code et le respect des bonnes pratiques.
