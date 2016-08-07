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

// npm
const jheson = require('jheson')
// const got = require('got')
const nano = require('nano')

const xx = (sources, x, db) => {
  const now = Date.now()
  Promise.all(sources.map((q) => jheson.jsonFromUrl(q).then((a) => x.jheson(a))))
    .then((bunch) => new Promise((resolve, reject) => db.bulk({ docs: bunch.map((tt, n) => {
      return {
        data: tt,
        _id: `src:${n}:${now}`
      }
    }) }, (a, b) => a ? reject(a) : resolve(b))))
    .then((g) => console.log('g', now, g))
    .catch((e) => console.error('E0:', e))

/*
  jheson.jsonFromUrl('http://localhost:5984/_stats')
    .then((a) => x.jheson(a))
    .then((y) => new Promise((resolve, reject) =>
      db.insert({ data: y, _id: `src:0:${Date.now()}` }, (c, d) => c ? reject(c) : resolve(d))
    ))
    .then((g) => {
      console.log('g', g)
    })
    .catch((e) => console.error('E0:', e))
*/
}

module.exports = (dbUrl, moldFile, s, sources) => jheson.moldMethods(moldFile)
  .then((x) => setInterval(xx, s * 1000, sources, x, nano(dbUrl)))
