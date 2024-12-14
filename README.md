# Mohammad Kawadri - Greenspark Technical Test

## Getting started:

Please clone this repository and run it locally on your own machine, and then run the following commands using your IDE or terminal.

###### Installing the project:

```bash
npm i
```

###### Run all unit tests:

```bash
npm run test
```

###### Run storybook:

```bash
npm run storybook
```

###### Run Vue application:

```bash
npm run dev
```

## Introduction:

Hi there,

I'm Mohammad Kawadri, and I really enjoyed working on this technical test.

As I’m currently working on multiple technical tests, my first step was to break this project into smaller, more manageable tasks. To stay organized, I created a todo file in the root directory of the project. This file outlines my thought process and details the steps I followed to complete the test.

The todo file highlights key parts of the project setup, including configuring Vue, setting up linting, adopting Test-Driven Development (TDD), and integrating Storybook. It also breaks down the design into individual components and features to make the development process smoother.

## Tech-stack

#### Building with Vue

I chose Vue for building the main application as it aligns with Greenspark's tech-stack, and is a framework I am highly proficient in.

Vue’s single-file component architecture and its seamless integration with TypeScript, particularly for generating prop information, made it an easy choice for this project.

> Note: I am using Vue 3.5, which allows us to destructure props without loosing reactivity.

#### Typescript

I chose TypeScript with Vue because it enhances the development process by adding static typing and improved tooling support.

Its integration with Vue is seamless, particularly when working with single-file components, as it provides clear type definitions for props, events, and component state.

Additionally, TypeScript improves the developer experience by offering auto-completion, better refactoring capabilities, and more robust IDE support, which helps speed up development while reducing potential bugs.

#### Styling with PostCSS

For styling, I used PostCSS due to its CSS purging capabilities, which are beneficial in production environments. Although Vite handles much of this optimization through esbuild, PostCSS adds another layer of flexibility.

#### Tailwind CSS Challenges

I originally wanted to add tailwind to this project, but it has problems with storybook, and it just didn't work out in the end unfortunately.
Tailwind would have brought some useful utility classes, and I would have added the project colours into tailwind and apply them through class names rather than through css using the var() keyword.

#### Pinia for state management

I chose Pinia over Vuex, as the Vuex website recommends it, stating:
`"The official state management library for Vue has changed to Pinia."`

I personally really enjoy using it and have used it professionally as well.

#### Vitest, test-utils, and happy-dom

- Vitest: A native Vite test runner than enables unit testing with similar syntax to Jest.

- test-utils: Recommended for Vue.

- happy-dom: It uses the Google v8 engine to work as a browser without the user interface, which is useful when testing the DOM in Vitest.
  It's sponsored by sentry.io and Microsoft, which hopefully means maintenance longevity.

#### Storybook

It's the industry standard for visually isolating and testing components, and it's auto docs feature is particularly useful with Vue 3.

When hosted onto a domain it can also also facilitate non-developer users to play with UI components and understand how the UI has been developed, and how it will behave.

## Conclusion:

Thank you for taking the time to review this project,

I look forward to hearing back from you regarding feedback and improvements,

Kind regards,

Mohammad Kawadri 2024
