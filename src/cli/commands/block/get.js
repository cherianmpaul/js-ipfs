'use strict'

const print = require('../../utils').print

module.exports = {
  command: 'get <key>',

  describe: 'Get a raw IPFS block',

  builder: {},

  handler ({ ipfs, key, resolve }) {
    resolve((async () => {
      const block = await ipfs.block.get(key)
      if (block) {
        print(block.data, false)
      } else {
        print('Block was unwanted before it could be remotely retrieved')
      }
    })())
  }
}
