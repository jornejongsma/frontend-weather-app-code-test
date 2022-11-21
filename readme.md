# Weather Widget

## Motivation

The weather app is build with Lit, and Storybook. It has the option to end-to-end test it with Playwright.

Lit enambles you to create web-components that can be easily be implemented in any kind of framework, or without, it's *framwork agnostic*.

Storybook gives a nice way to develop, present and document a library of componets. In this example I've create a web-component, that has a few attributes to play with.

## Installation

* Clone this project.
* `yarn install`

## Running Storybook in development.

* `yarn serve`, will run the backend server;
* In a second terminal run `yarn storybook`, to start Storybook in dev-mode.

### Frontend build

* To create a static Storybook build: `yarn build-storybook`
* Now to run this, use `yarn serve`, to start the server.
* In the browser go to `localhost:3000`, this should present you with Storybook.

Great!

### Runnig a simple example

* Firts build the frontend with lollup: `yarn dist`, this creats a buidl in a **dist** folder.
* Than again run `yarn serve`
* When you go to `http://localhost:3000/example/`, this should show a simple example.

## Storybook

In the **Weather Widgets** map you can play with different settings of the web-component

* color;
* background color;
* weather location;
* show location;

> When you swith the view from **Canvas** to **Docs**, there's a button that will show you the code to implement the web-component with current settings.

Pritty cool, don't you think?!


