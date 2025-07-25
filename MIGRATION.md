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

