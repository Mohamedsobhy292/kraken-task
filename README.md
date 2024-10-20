## Demo Link

http://54.92.193.212:3000/product
#### PS: it's hosted on my AWS account so please don't DDOS it 😀

## Implementation notes

-   used sass modules for simplicity
-   added apollo client to work with graphql
-   added apollo server, the graphql library was not working on AWS properly
-   implemented the visual design as nearly as I can
-   implemented some interactions in addition to make the navbar available globally

## if I had more time

-   setup eslint properly for the project
-   handle more complex add to cart use cases
-   add more testing for scenarios I didn't add

## Getting started

```sh
cd client && yarn
cd server && yarn
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
