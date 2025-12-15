# Sudoku-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.
Updated to Angular 21.0.5.

## Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions:

- **Master branch**: Deployed to [https://louishamelers.github.io/sudoku/](https://louishamelers.github.io/sudoku/) on every push
- **Pull Requests**: Deployed to `https://louishamelers.github.io/sudoku/pr-<number>/` when a PR is opened or updated
  - Example: PR #42 will be deployed to `https://louishamelers.github.io/sudoku/pr-42/`
  - A comment with the preview URL will be automatically added to the PR

The deployment workflow preserves all PR preview deployments and the master deployment.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Github codespaces

Run `npm run start:codespaces` to run the app in Github Codespaces.

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
