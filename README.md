## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
cd client && yarn
```

## Start the app

```sh
yarn dev
```

This will do two things:

-   Start a Next.js app running in development on <http://localhost:3000>
-   Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the client directory.

```sh
cd client && yarn test
```

This should give you two failures:

```sh
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the basket
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

-   Reason through a programming problem
-   Implement a visual design
-   Implement some user interactions
-   Write code that is easy to understand and extend
-   Write tests that document and safeguard the program's behaviour
-   Use a version control system (e.g. git) to effectively convey intent
-   Write Typescript typings for the components you create, and also the typings for the GraphQL API response

Notes:

-   This has not been set up with any type of CSS-in-JS, but if that is something you would like to add, please feel free.

Best of luck!
