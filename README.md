# is-listening

Returns `true` if socket is open and listening.

## Install

```sh
yarn add is-listening
npm install -S is-listening
```

## Usage

```js
const isListening = require('is-listening')

// isListening(port[, host])
// isListening(socketPath)

// Assume Nginx is running
assert(isListening(80, 'localhost') === true)

assert(isListening(79) === false)

// Assume Docker is running
assert(isListening('/var/run/docker.sock') === true)
```

## Running tests

```sh
npm install
npm run build
npm test
npm run lint
```
