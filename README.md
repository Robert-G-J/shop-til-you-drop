# Shop til you drop

A simple clientside React app that has a shopping basket that can be updated with quantities of four different products, can calculate the subtotal and total value of the basket and can convert the total into other currencies.

## Installation

Clone it down:

```
$ git clone path/to/repo
```

Head to the directory:

```
$ cd shop-til-you-drop
```

Install dependencies with:

```
$ yarn
```

or

```
$ npm install
```

Start the (webpack) server, courtesy of Create-React-App (CRA):

```
$ yarn start
```

Run tests with Jest by:

```
$ yarn test
```

Tests with coverage can be run with:

```
$ npm run test:coverage
```

Run the E2E tests with:

```
$ npm run e2e-test
```

And enjoy Cypress clicking around.

Now build the project and serve it to check the production version with service worker caching of the app shell:

```
yarn build
```

Then install `serve` and serve the app:

```
$ yarn global add serve
$ serve -s build
```

## User stories

These user stories were written at the start to guide design direction and to give acceptance criteria:

```
As a shopper
So that I can purchase a product
I want to add a product to a shopping basket

As a shopper
So that I can see how much I'm spending
I want to see a sub-total for each product

As a shopper
I want to see a total for my basket
So I can decide upon purchasing

As a shopper
I want to see the cost in another currency
So that I can pay in another currency

As a shopper
I want to remove items from my order
So that I can order the correct quantity
```

## Stack decisions

### React + Redux

The React library is well suited to this particular design and especially if it were destined for production, although is likely to be considered a little heavy duty for the size of the app.

## Design Decisions

### Quantity <input type="number />

This field is suited to user input of a quantity they desire and fulfils most the requirements of a basket. However, it requires a more serious form of (preferably server-side) validation (as I'm concerned it's a vulnerability), so finds itself on the list for refactoring and improvement.

### Redux

Clearly Redux is a bit heavy weight (and slow) for such a miniscule app. It's used here more as a proof of skill/usage: to demonstrate how I might test action-creators and reducers, and to show how I might structure the architecture it requires.

#### Architecture

Because the app is small, I have _not_ separated the concerns of the reducers, although this would be sensible (and normal) as the app grows.

### CSS

Gosh, I went for straight up vanilla CSS with no preprocessors. Since I came across Sass on a work project, I've been sold on its approach. I've used vanilla here as the style sheet is small and because I need the practice. Ideally, I'd invest in using [styled-components](https://www.styled-components.com/), to ensure all styles are closely associated with their components.

### Reusable Components

You'll notice there aren't any. This is intentional. Since I only code what is necessary by using TDD, and refactor after to remove duplication, there is yet to be a need for a component to be abstract to a more general reusuable form. When one arises, the abstraction will happen.

### UI Testing

Cypress.io is a fantastic UI testing framework, that I have only just begun to scratch the surface of. I included it to ensure I had a simple UI test in place to drive development at the start of the app. I tinkered with the tests continually through development. It's an excellent, quick to configure and fast to implement tool that adds a welcome layer of safety on a project

### No CI

Normally I'd use Travis.CI and configure it at the beginning of the project. I pushed this project to Github some time after first starting it, so setting up Travis.CI has become a TODO.

### Adaptive UI

The UI is currently not adaptive, so requires media-queries to modify the layout for smaller screens. I would limit the size of the description box, and use `vw` and `vh` for relative text sizing (if it doesn't raise bugs).

## TODOs:

Oh, where to start? Over the next few iterations I would:

* Reskin with a less dull design

* Call the RickAndMorty wikia API to populate the app with data, rather than use a local file
* Store the product data with something like Firebase.
* Audit accessibility and validation. That hasn't had anywhere near the precedence.
* Refactor the `<input type="number"/>` to a couple of `<Button />`s that change quantity.
