# Weather Widget

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



