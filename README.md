# Angular-frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

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

## Project overview

This repository contains a standard Angular application. The most important folders and files are listed below to help new contributors find code quickly.

Top-level overview:

- `e2e/` — end-to-end tests.
- `scripts/` — utility scripts for builds, migrations or local tasks.
- `src/` — main application source.
- `package.json` — npm scripts and dependencies.
- `angular.json` — Angular CLI workspace configuration.
- `tsconfig.*.json` — TypeScript configs.
- `tailwind.config.js` — Tailwind CSS configuration (if used).

Inside `src/`:

- `index.html`, `main.ts`, `styles.css` — application entry and global styles.
- `assets/` — static files (images, fonts, icons, i18n resources).
- `environments/` — environment-specific variables and file replacements.

Inside `src/app/` (key folders):

- `account/` — authentication flows (login, signup, password reset).
- `core/` — core utilities and services (guards, interceptors, models, services, mocks, store).
- `layouts/` — layout components (header, footer, sidebar, navbar, chatbot, bottom-navigation).
- `pages/` — top-level pages (sign-in, sign-up, forgot-password, new-password, user-management, preview).
- `shared/` — reusable UI components, pipes, directives, constants, and utilities.

Files and directories to edit with care:

- `src/environments/*` — environment settings used at build time.
- `src/app/core/services/*` — contains API clients; coordinate changes with backend API changes.
- `src/app/layouts/*` — global UI; style/layout changes affect all pages.
- `assets/` — static assets used throughout the app.

## Folder Structure

📦angular-frontend
 ┣ 📂e2e
 ┃ ┗ 📂src
 ┣ 📂scripts
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┗ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┗ 📂passwordreset
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┣ 📂handlers
 ┃ ┃ ┃ ┣ 📂helpers
 ┃ ┃ ┃ ┣ 📂loads
 ┃ ┃ ┃ ┣ 📂mock
 ┃ ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┗ 📂store
 ┃ ┃ ┣ 📂layouts
 ┃ ┃ ┃ ┣ 📂bottom-navbar
 ┃ ┃ ┃ ┣ 📂chatbot
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📂main-content
 ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📂sidebar
 ┃ ┃ ┃ ┣ 📜layout.component.css
 ┃ ┃ ┃ ┣ 📜layout.component.html
 ┃ ┃ ┃ ┗ 📜layout.component.ts
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂forgot-password
 ┃ ┃ ┃ ┣ 📂new-password
 ┃ ┃ ┃ ┣ 📂sign-in
 ┃ ┃ ┃ ┣ 📂sign-up
 ┃ ┃ ┣ 📂shared
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂constant
 ┃ ┃ ┃ ┣ 📂directives
 ┃ ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┃ ┣ 📂ui
 ┃ ┃ ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜app.component.css
 ┃ ┃ ┣ 📜app.component.html
 ┃ ┃ ┣ 📜app.component.spec.ts
 ┃ ┃ ┣ 📜app.component.ts
 ┃ ┃ ┣ 📜app.config.ts
 ┃ ┃ ┗ 📜app.routes.ts
 ┃ ┣ 📂assets
 ┃ ┣ 📂environments
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜main.ts
 ┃ ┗ 📜styles.css
 ┣ 📜.editorconfig
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜angular.json
 ┣ 📜karma.conf.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.app.json
 ┣ 📜tsconfig.json
 ┗ 📜tsconfig.spec.json