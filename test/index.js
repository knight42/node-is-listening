#!/usr/bin/node

'use strict'

import test from 'ava'
import { createServer } from 'net'
import isListening from '../lib'

const PORT = 29834
const SOCKET = '/tmp/__local_socket__.sock'
const servers = {
  unix: null,
  tcp: null
}

test.before((t) => {
  const end = (sock) => sock.end()
  servers.unix = createServer(end).listen(SOCKET)
  servers.tcp = createServer(end).listen(PORT)
})

test('Check UNIX local socket', t => {
  t.true(isListening(SOCKET))
})

test('Check TCP socket', t => {
  t.true(isListening(PORT))
  t.true(isListening(PORT, '127.0.0.1'))
})

test.after(() => {
  servers.tcp.close()
  servers.unix.close()
})
