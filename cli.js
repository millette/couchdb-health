#!/usr/bin/env node

/*
...

Copyright 2016 Robin Millette <robin@millette.info> (<http://robin.millette.info>)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'

// self
const health = require('./')

// npm
const meow = require('meow')

const cli = meow([
  'Usage',
  '  $ jheson [input]',
  '',
  'Options',
  '  --mold Defaults to ./mold.json',
  '',
  '  --pretty Pretty print',
  '',
  '  --file Force file, autodetect if url otherwise (begin with http)',
  '',
  '  --cast Cast jheson using mold; otherwise make jheson version (lighter)'
], {
  boolean: ['pretty', 'cast', 'file'],
  default: { mold: './mold.json' }
})

health('http://localhost:5984/health', './mold.json')
  .then((x) => {
    console.log('timer:', Object.keys(x))
    setTimeout(() => {
      console.log('clear!')
      clearInterval(x)
    }, 100000)
  })
  .catch((e) => console.error('E1:', e))
