# Consideraciones

- Al crear el proyecto, sino es angular 15 o menor, usar: ng new <nombre de la aplicación> --standalone false
- Cuando se descarga el proyecto de un repo, como no se suben los node_modules y otros paquetes, se debe ejecutar:
  npm install
  estando en la ruta raiz de la descarga
- Para crear componentes, se puede ejecutar: ng g c [path/name]
- Para crear un modulo, se ejecuta: ng g m [path/name]

# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
