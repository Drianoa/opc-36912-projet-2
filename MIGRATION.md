# Migration Log

## Migration 14.1 -> 15.2.10

### ** Executing migrations of package '@angular/cli' **

> Remove Browserslist configuration files that matches the Angular CLI default configuration.
DELETE .browserslistrc
Migration completed (1 file modified).

> Remove exported `@angular/platform-server` `renderModule` method.
The `renderModule` method is now exported by the Angular CLI.
Migration completed (No changes made).

> Remove no longer needed require calls in Karma builder main file.
UPDATE src/test.ts (473 bytes)
Migration completed (1 file modified).

> Update TypeScript compiler `target` and set `useDefineForClassFields`.
These changes are for IDE purposes as TypeScript compiler options `target` and `useDefineForClassFields` are set to `ES2022` and `false` respectively by the Angular CLI.
To control ECMA version and features use the Browerslist configuration.
UPDATE tsconfig.json (934 bytes)
Migration completed (1 file modified).

> Remove options from 'angular.json' that are no longer supported by the official builders.
Migration completed (No changes made).

### ** Executing migrations of package '@angular/core' **

> In Angular version 15, the deprecated `relativeLinkResolution` config parameter of the Router is removed.
This migration removes all `relativeLinkResolution` fields from the Router config objects.
Migration completed (No changes made).

> Since Angular v15, the `RouterLink` contains the logic of the `RouterLinkWithHref` directive.
This migration replaces all `RouterLinkWithHref` references with `RouterLink`.
Migration completed (No changes made).

## Migration Angular 15.2.10 -> 16.2.12
### ** Executing migrations of package '@angular/cli' **

> Remove 'defaultProject' option from workspace configuration.
The project to use will be determined from the current working directory.
Migration completed (No changes made).

> Replace removed 'defaultCollection' option in workspace configuration with 'schematicCollections'.
Migration completed (No changes made).

> Update the '@angular-devkit/build-angular:server' builder configuration to disable 'buildOptimizer' for non optimized builds.
Migration completed (No changes made).

### ** Executing migrations of package '@angular/core' **

> In Angular version 15.2, the guard and resolver interfaces (CanActivate, Resolve, etc) were deprecated.
This migration removes imports and 'implements' clauses that contain them.
Migration completed (No changes made).

> As of Angular v16, the `moduleId` property of `@Component` is deprecated as it no longer has any effect.
Migration completed (No changes made).

## Migration Angular 16.2.12 -> 17.3.12

### ** Executing migrations of package '@angular/cli' **

> Replace usages of '@nguniversal/builders' with '@angular-devkit/build-angular'.
Migration completed (No changes made).

> Replace usages of '@nguniversal/' packages with '@angular/ssr'.
Migration completed (No changes made).

> Replace deprecated options in 'angular.json'.
UPDATE angular.json (3272 bytes)
Migration completed (1 file modified).

> Add 'browser-sync' as dev dependency when '@angular-devkit/build-angular:ssr-dev-server' is used, as it is no longer a direct dependency of '@angular-devkit/build-angular'.
Migration completed (No changes made).

### ** Executing migrations of package '@angular/core' **

> Angular v17 introduces a new control flow syntax that uses the @ and } characters.
This migration replaces the existing usages with their corresponding HTML entities.
Migration completed (No changes made).

> Updates `TransferState`, `makeStateKey`, `StateKey` imports from `@angular/platform-browser` to `@angular/core`.
Migration completed (No changes made).

> CompilerOption.useJit and CompilerOption.missingTranslation are unused under Ivy.
This migration removes their usage
Migration completed (No changes made).

> Updates two-way bindings that have an invalid expression to use the longform expression instead.
Migration completed (No changes made).


## Migration Angular 17.3.12 -> 18.2.13

### ** Optional migrations of package '@angular/cli' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run [use-application-builder] Migrate application projects to the new build system. (https://angular.dev/tools/cli/build-system-migration)

> Migrate application projects to the new build system.
Application projects that are using the '@angular-devkit/build-angular' package's 'browser' and/or 'browser-esbuild' builders will be migrated to use the new 'application' builder.
You can read more about this, including known issues and limitations, here: https://angular.dev/tools/cli/build-system-migration
The output location of the browser build has been updated from "dist/olympic-games-starter" to "dist/olympic-games-starter/browser". You might need to adjust your deployment pipeline or, as an alternative, set outputPath.browser to "" in order to maintain the previous functionality.
UPDATE angular.json (3275 bytes)
UPDATE tsconfig.json (931 bytes)
Migration completed (2 files modified).

### ** Executing migrations of package '@angular/core' **

> Updates two-way bindings that have an invalid expression to use the longform expression instead.
Migration completed (No changes made).

> Replace deprecated HTTP related modules with provider functions.
UPDATE src/app/app.module.ts (672 bytes)
Migration completed (1 file modified).

> Updates calls to afterRender with an explicit phase to the new API.
Migration completed (No changes made).

## Migration Angular 18.2.13 -> 19.2.14

### ** Executing migrations of package '@angular/cli' **

> Update '@angular/ssr' import paths to use the new '/node' entry point when 'CommonEngine' is detected.
Migration completed (No changes made).

> Update the workspace configuration by replacing deprecated options in 'angular.json' for compatibility with the latest Angular CLI changes.
Migration completed (No changes made).

### ** Optional migrations of package '@angular/cli' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run [use-application-builder] Migrate application projects to the new build system. (https://angular.dev/tools/cli/build-system-migration)

> Migrate application projects to the new build system.
Application projects that are using the '@angular-devkit/build-angular' package's 'browser' and/or 'browser-esbuild' builders will be migrated to use the new 'application' builder.
You can read more about this, including known issues and limitations, here: https://angular.dev/tools/cli/build-system-migration
UPDATE tsconfig.json (931 bytes)
Migration completed (1 file modified).

### ** Executing migrations of package '@angular/core' **

> Updates non-standalone Directives, Component and Pipes to 'standalone:false' and removes 'standalone:true' from those who are standalone.
UPDATE src/app/pages/home/home.component.ts (562 bytes)
UPDATE src/app/pages/not-found/not-found.component.ts (327 bytes)
UPDATE src/app/app.component.ts (505 bytes)
Migration completed (3 files modified).

> Updates ExperimentalPendingTasks to PendingTasks.
Migration completed (No changes made).

### ** Optional migrations of package '@angular/core' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run [provide-initializer] Replaces `APP_INITIALIZER`, `ENVIRONMENT_INITIALIZER` & `PLATFORM_INITIALIZER` respectively with `provideAppInitializer`,    
`provideEnvironmentInitializer` & `providePlatformInitializer`.

> Replaces `APP_INITIALIZER`, `ENVIRONMENT_INITIALIZER` & `PLATFORM_INITIALIZER` respectively with `provideAppInitializer`, `provideEnvironmentInitializer` & `providePlatformInitializer`.      
Migration completed (No changes made).
