# HR System App

The app uses React version 18 and is written in Typescript.

## Setup

This project uses `yarn` for package management.
First, install all dependencies by running the following command in the project's directory.

```shell
$ yarn
```

### Local development: mock server

The data for this app is loaded from a mock json server.
Before running the app you need to start this server. You can do so running the following command in the project directory:

```shell
$ yarn mock:api
```

The server will be available at [http://localhost:3001](http://localhost:3001)

Then the app can be run in development mode:

```shell
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Tests

This project uses `jest` and [React Testing Library](https://github.com/testing-library/react-testing-library#readme).
To launch the test runner in watch mode you can run:

```shell
$ yarn test
```

### Build and deployment

To create a production build you can do:

```shell
$ yarn build
```

This will create/update the app bundle in the `build` folder.

### Linting

```shell
$ yarn lint
```

To fix lint errors:

```shell
$ yarn lint:fix
```

To run `prettier` format:

```shell
$ yarn format
```
