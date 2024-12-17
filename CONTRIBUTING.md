# chainkeeping Frontend Project Development Guidelines

Welcome to the chainkeeping Frontend Project! This document outlines the development guidelines for our monorepo project, focusing on best practices for development, version control, and code reviews. By following these guidelines, the team ensures a consistent and high-quality development process.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Version Control](#version-control)
  - [Branching Strategy](#branching-strategy)
  - [Workflow](#workflow)
- [Development Cycle](#development-cycle)
- [Frontend Methodology: Atomic Design](#frontend-methodology-atomic-design)
- [Coding Guidelines](#coding-guidelines)
- [Pre-commit Hooks](#pre-commit-hooks)
- [Code Review Guidelines](#code-review-guidelines)
- [Additional Guidelines](#additional-guidelines)
- [Final Notes](#final-notes)

## Tech Stack

- **TypeScript:** Strongly-typed JavaScript for better code maintainability and error reduction.
- **React / Next.js (App Router):** Core framework for building modern, performant web applications.
- **Turborepo:** Manages our monorepo structure, allowing us to handle multiple packages/apps efficiently.
- **Shad CN (Radix headless components):** Headless UI components for consistency and accessibility.
- **Tailwind CSS:** Utility-first CSS framework to accelerate UI development.
- **@ebay/nice-modal-react:** Modal management library for handling modal behavior across our application.
- **Package manager:** PNPM

## Version Control

Our project follows a structured branching and version control strategy to streamline development, testing, and deployment. Git will be used for version control, with Husky configured for pre-commit hooks to enforce code standards before commits.

### Branching Strategy

- **Development Branch:** `restructure`
  - Main development branch for ongoing restructuring and core development tasks.
- **Staging Branch:** `staging`
  - Used for merging completed tasks and features from feature branches. The branch where code is thoroughly reviewed before moving to production.
- **Feature Branches:**
  - Created for each task or feature. The branch is named in a way that describes the feature/task and includes a ticket/issue identifier where possible.
  - Naming convention: `feat/{ticketID}-{feature-description}`, e.g., `feat/1234-navbar-update`

### Workflow

1. **Task/Feature Branch Creation:**
   - When starting a task, create a feature branch from the restructuring branch.
2. **Development on Feature Branch:**
   - Code and test on the feature branch.
   - Ensure consistent styling and code quality, adhering to the linting and pre-commit hooks in place.
3. **Pull Request (PR):**
   - Once the task is complete, open a PR to merge your feature branch into staging.
4. **Code Review:**
   - Two randomly selected team members are assigned to review the PR.
   - Reviewers must approve the PR for it to be eligible for merging.
5. **Merging:**
   - After PR approval, merge the feature branch into staging.

## Development Cycle

- **Feature Branch Development:**
  - Developers should maintain small, manageable PRs to make code review easier and faster.
  - Write modular and reusable code based on the Atomic Design methodology.
- **Testing:**
  - Ensure all new components and features are thoroughly tested.
- **Code Review and Approval:**
  - Each PR must be reviewed by two team members.
  - Reviewers are responsible for ensuring that code quality, structure, and functionality meet project standards.
- **Merge to Staging:**
  - Once approved, the PR is merged into the staging branch.
  - All conflicts with the staging branch should be resolved before merging.

## Frontend Methodology: Atomic Design

We will adopt the Atomic Design methodology to structure components within our project. This methodology breaks down the interface into a hierarchy of components:

- **Atoms:** Basic UI elements that serve as the foundation of our design, such as buttons, inputs, and labels.
- **Molecules:** Small components that combine atoms, like a search bar that includes an input and a button.
- **Organisms:** Larger, more complex components composed of groups of molecules and atoms.
- **Templates:** Page-level arrangements of organisms, setting layouts but without specific content.
- **Pages:** Final level, where content is applied to templates to deliver a complete view.

This approach improves the modularity, reusability, and scalability of our UI components.

## Coding Guidelines

- **TypeScript Best Practices:** Use strict typing wherever possible to reduce runtime errors and improve code quality.
- **Shad CN and Radix Headless Components:** Leverage these components for accessible, consistent UI elements. Customize them as per the project’s branding and UX requirements.
- **@ebay/nice-modal-react:** Use this library for modals. Manage modals through NiceModal for state consistency and avoid custom modal implementations unless necessary. [NiceModal Documentation](https://www.npmjs.com/package/@ebay/nice-modal-react)

## Pre-commit Hooks

To maintain code quality, Husky is configured with the following pre-commit hooks:

- **Linting:** Checks for consistent code formatting and common errors.
- **Testing:** Runs relevant tests to ensure new code doesn't break existing functionality.
- **Type Checking:** Validates TypeScript types across the project.

These checks must pass before any code is committed to the repository.

## Code Review Guidelines

Reviewers are encouraged to follow these guidelines:

- **Code Quality:** Check for adherence to TypeScript standards, syntax consistency, and reusable patterns.
- **Component Structure:** Confirm adherence to the Atomic Design methodology.
- **Functionality:** Ensure the code performs as expected, with no obvious bugs.
- **Consistency:** Enforce styling and component usage consistency across the project.
- **Documentation:** Verify that complex components or functions are well-documented within the code. Check out [TSDoc](https://tsdoc.org/) for writing code documentation.

## Additional Guidelines

- **Tailwind CSS Styling Order Guideline:**
  - To ensure consistency and readability in Tailwind CSS styling, please follow this order when applying classes:
    - Positioning: `absolute`, `relative`, `fixed`, `sticky`, etc.
    - Width and Height: `w-`, `h-`, `min-w-`, `max-h-`, etc.
    - Layout: `flex`, `grid`, `flex-row`, `grid-cols-`, etc.
    - Text Styles: `text-`, `text-lg`, `text-gray-500`, etc.
    - Font Styles: `font-bold`, `italic`, `uppercase`, etc.
    - Padding: `p-`, `px-`, `py-`, etc.
    - Margin: `m-`, `mx-`, `my-`, etc.
    - Outline, Focus, hover Styles: `focus:outline-none`, `focus:ring-`, etc.
    - Border Styles: `border-`, `border-gray-200`, `rounded`, etc.
    - Shadow Styles: `shadow`, `shadow-lg`, `drop-shadow`, etc.
    - Z-index: `z-10`, `z-20`, etc.

- **Form Validation:**
  - We will use Yup and react-hook-form for form validation. Yup provides a powerful schema-based validation, while react-hook-form ensures efficient form handling and validation management.

- **Component Naming Convention:**
  - All component file names should be in kebab-case for consistency and readability. This naming style makes it easier to locate and identify components within the project structure.
  - Example:
    - Instead of naming a component `MyComponent.tsx`, name it `my-component.tsx`.
    - Instead of naming a form component `ContactForm.tsx`, name it `contact-form.tsx`.

By following this order, we maintain clean, readable, and consistently organized styles across the project.

## Final Notes

Following these guidelines will help us maintain high-quality code across our monorepo, facilitate smooth collaboration among team members, and ensure scalability and maintainability in our project as it grows. 