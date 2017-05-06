import { join } from 'path'
const D = require(join('..', 'build', 'Release', 'detect.node'))
const detect = D.isListening

// Usage:
// isListening(port[, host])
// isListening(socketPath)

export = function isListening(f: string|number, addr: string = 'localhost'): boolean {
    switch (typeof f) {
        case 'string':
            return detect(f)
        case 'number':
            return detect(f, addr)
    }
    return false
}
