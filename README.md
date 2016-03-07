#Stakapp

## About
A pptx presentation in the blink of an eye!

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

## Building and Running Production Server

```bash
npm run build
npm run start
```

## Documentation

* [Original Readme](docs/ORIGINAL_README.md) A lot of information is available in this project original readme.


#### Unit Tests

The project uses [Mocha](https://mochajs.org/) to run your unit tests, it uses [Karma](http://karma-runner.github.io/0.13/index.html) as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.), which means you are able to use the [Test Utilities](http://facebook.github.io/react/docs/test-utils.html) from Facebook api like `renderIntoDocument()`.

To run the tests in the project, just simply run `npm test` if you have `Chrome` installed, it will be automatically launched as a test service for you.

To keep watching your test suites that you are working on, just set `singleRun: false` in the `karma.conf.js` file. Please be sure set it to `true` if you are running `npm test` on a continuous integration server (travis-ci, etc).

## Deployment on Heroku

To get this project to work on Heroku, you need to:

1. Remove the `"PORT": 8080` line from the `betterScripts` / `start-prod` section of `package.json`.
2. `heroku config:set NODE_ENV=production`
3. `heroku config:set NODE_PATH=./src`
4. `heroku config:set NPM_CONFIG_PRODUCTION=false`
  * This is to enable webpack to run the build on deploy.

The first deploy might take a while, but after that your `node_modules` dir should be cached.
