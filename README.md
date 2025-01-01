# chainkeeping

Welcome to the chainkeeping! This project is designed to provide a scalable and maintainable architecture for building modern web applications. It is structured to support efficient development and deployment of features such as a customer portal, utilizing technologies like Next.js, Tailwind CSS, and Turborepo.

## Table of Contents

- [Installation](#installation)
- [Commands](#commands)
  - [Clean the Project](#clean-the-project)
  - [Run Storybook](#run-storybook)
  - [Lint the Code](#lint-the-code)
  - [Build UI Package](#build-ui-package)
  - [Run landing app](#run-landing-app)
  - [Run saas app](#run-saas-app)
  - [Run customer portal app](#run-customer-portal-app)
  - [install all packages](#install-all-packages)
  - [install into single workspace](#install-all-packages)
- [Project workspaces](#project-workspaces)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)

## Installation

 1. To get started with the project, clone the repository and install the dependencies using [pnpm](https://pnpm.io/)
 2. Run install command [install all packages](#install-all-packages)
 3. Build UI package [Build UI Package](#build-ui-package)

```

## Commands

Here are some useful commands you can run in this project:

### Clean the Project

Delete all `node_modules` directories and `pnpm-lock.yaml` files:

```bash
pnpm run cleanup
```

### Run Storybook

Start the Storybook server to view and develop UI components:

```bash
turbo run dev --filter storybook
```

### Lint the Code

Run ESLint to check for code quality issues:

```bash
turbo run lint
```

### Build UI Package

You can build the UI package using Tsup:

```bash
turbo run build --filter @chainkeeping/ui
```

### Run landing app

You can spin up the landing application dev server by running:

```bash
turbo run dev --filter landing
```

### install all packages

You can install all project packages by running:

```bash
pnpm install
```

### install into single workspace

You can install a package into a single workspace by running:

```bash
pnpm add [package-name] --filter [workspace-name]
```

or for dev dependencies

```bash
pnpm add -D [package-name] --filter [workspace-name]
```

## Project workspaces

The project is made up of the following workspaces:

- **`apps`:** where all of our applications live
  - **`landing`:** Oloom landing application
  - **`saas`:** Oloom saas application
  - **`storybook`:** storybook documentation for oloom design system
  - **`customer-portal`:** chainkeeping customer portal application

- **`packages`:** Contains Configuration files/folders, project's design system and components
  - **`@chainkeeping/ui`:** project's design system and components are all found here
  - **`@chainkeeping/typescript-config`:** contains typescript configuration settings
  - **`@chainkeeping/tailwind-config`:** contains project's tailwind configuration settings
  - **`@chainkeeping/eslint-config`:** contains project's eslint configuration settings


## Project Architecture

The project is organized into the following main directories:

- **`apps/storybook`:** Contains the Storybook setup and stories for UI components.
  - **`src/stories/atoms`:** Contains Storybook stories for atomic UI components, such as `Avatar.stories.tsx`.
  - **`src/stories/molecules`:** Contains Storybook stories for atomic UI components.
  - **`src/stories/organisms`:** Contains Storybook stories for atomic UI components.
  - **`src/stories/templates`:** Contains Storybook stories for atomic UI components.
  - **`src/data`:** Contains mock data used in stories, such as `payments.ts` and `invoices.ts`.
  - **`.storybook`:** Configuration files for Storybook, including:
    - **`style.css`:** Custom styles for Storybook.
    - **`preview.ts`:** Configuration for Storybook previews.
    - **`preview-head.html`:** HTML head configuration for Storybook.
    - **`main.ts`:** Main configuration file for Storybook.

- **`scripts`:** Contains utility scripts for project maintenance.
  - **`clean-project.mjs`:** Script to delete all `node_modules` directories and `pnpm-lock.yaml` files.

- **`packages/ui`:** Contains the UI components and related code.
  - **`src`:** Source code for UI components.
  - **`dist`:** Compiled output of the UI components.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.