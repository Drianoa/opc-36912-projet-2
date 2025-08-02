# Etapes pour la réalisation

## Mise à jour du framework

La première réalisation sur ce projet et la mise à jour du framework en Angular 19 qui est une version LTS

Pour cela, nous utilisons la commande `ng update`.
Plus précisément, nous allons passer cette commande pour chaque version majeure, de cette facon nous nous assurons de la bonne migration des fichiers de configuration.

```
ng update @angular/core@15 @angular/cli@15
...
ng update @angular/core@19 @angular/cli@19
```

Une fois la partie automatisée terminée, il faut suivre le guide de migration

[exemple](https://v19.angular.dev/update-guide?v=14.0-15.0&l=1)

### Migration de NgModules à Standalone

Documentation angular :
[Migration standalone](https://angular.dev/reference/migrations/standalone)

Après avoir appliqué les modifications automatiques, le routeur, l'app.config ont été adaptés manuellement.

### Migration vers inject au lieu de l'injection par constructeur

Assure la consistance entre le type qui reçoit le service injecté et le service

[Migration inject](https://v19.angular.dev/reference/migrations/inject-function)


