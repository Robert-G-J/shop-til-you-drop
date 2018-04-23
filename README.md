# Shop til you drop

A simple clientside React app that has a shopping basket that can be updated with quantities of four different products, can calculate the subtotal and total value of the basket and on the next iteration will convert the total into other currencies.

Tablet/Desktop:

![RicksKitCartDesktop](https://s31.postimg.cc/qrjo8epkr/Ricks_Kit_Cart_Desk_Top.png)

Mobile:

<img src="https://s31.postimg.cc/xi05htxaz/Ricks_Kit_Cart_Mobile.png" width="50%">

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

### Quantity `<input type="number" />`

The input element felt like a good choice for a first iteration. However, they are generally considered to require a more serious form of (server-side) validation for security. I'd refactor this to use an increment and decrement button either side of the displayed quantity.

### Redux

Redux is a bit heavy weight (and slow to code) for such a miniscule app. It's used here more as a proof of skill/usage: to demonstrate how I might test action-creators and reducers, and to show how I might structure a larger app.

#### Architecture

~~Because the app is small, I have _not_ separated the concerns of the reducers, although this would be sensible (and normal) as the app grows.~~
The reducers and their state have been separated to improve the namespacing within the app. However, this introduced an interesting issue when calculating the 'grand total'. This is calculated in within the reducers concerned with the shopping basket, but also requires knowledge of the state related to products. The products were injected with the action-creator for updating the cart to overcome this.

### CSS

I went for straight up vanilla CSS with no preprocessors as the style sheet is small. Ideally, I'd invest in using [styled-components](https://www.styled-components.com/), to ensure all styles are closely associated with their (reusable)components.

### Reusable Components

You'll notice there aren't any (currently). This is a consequence of using TDD, and only coding what is necessary. There are not yet duplicate components that need to be abstracted to a more general form. Currently potential candidates for abstraction would be a quantity component and a table-row component.

### UI Testing

Cypress.io is a fantastic UI testing framework, that I have only just begun to scratch the surface of. I included it to ensure I had a simple UI test in place to drive development at the start of the app. I tinkered with the tests continually through development. It's an excellent, quick to configure and fast to implement tool that adds a welcome layer of safety on a project

### No CI

Normally I'd use Travis.CI and configure it at the beginning of the project. I pushed this project to Github some time after first starting it, so setting up Travis.CI has become a TODO.

### Adaptive UI

The style sheet has a single media query to detect the width of the viewport. Currently on mobile, the images and description are hidden. When tablet or bigger, these are revealed. One improvement might be to include a smaller image on mobile.

## TODOs:

Where to start? Over the next few iterations I would:

* Re-skin with a more interesting design

* Store the product data with something like Firebase.
* Audit and improve accessibility and validation.
* Refactor the `<input type="number"/>` to a couple of `<Button />`s that change quantity.
* Currency conversion: call an external API to convert the 'grand total' between `£`, `$` and `€`.
* Use React-Router and create a `<ProductList />` component with `add to basket` buttons for each product. This would populate the current Kit Cart.
