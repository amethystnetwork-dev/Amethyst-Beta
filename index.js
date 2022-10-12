/*
Please use Replit's built in chat feature (It's the chat button in the left bar)

// This is ES6 not CommonJS, require() is imported also

(also remember to remove this comment in a github repo)
*/

import createBareServer from '@tomphttp/bare-server-node'
import http from 'node:http'
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const Corrosion = require('corrosion')
const config = require("./config.json")
const port = process.env.PORT || 8080

// The following message MAY NOT be removed
console.log("Amethyst\nThis program comes with ABSOLUTELY NO WARRANTY.\nThis is free software, and you are welcome to redistribute it\nunder the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nYou should have received a copy of the GNU General Public License\nalong with this program. If not, see <https://www.gnu.org/licenses/>.\n")

// Bare Server Stuff
const httpServer = http.createServer()
const bare = createBareServer('/bare/')

// Corrosion
const _corrosion = new Corrosion({
  codec: 'xor',
  prefix: "/corrosion/",
  title: config.branding
})

_corrosion.bundleScripts();

// Create the express server (frontend)
import express from 'express'
const app = express();

app.use(express.static("./public", {
  extensions: ["html"]
}));

app.get('/', (req, res) => {
  res.sendFile("index.html", { root: "./public" })
})

// Express randomly sends a 301 moved permanently leading to a 404 page. This should fix it (temp fix) 
// It happens randomly and should not happen again
app.get('/gs', (req, res) => {
  res.sendFile("gs.html", { root: "./public" })
})

app.use((req, res) => {
  res.status(404).sendFile("404.html", { root: "./public" })
})

// Create a HTTP server for bare server and Corrosion.
httpServer.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res)
  } else if (req.url.startsWith(_corrosion.prefix)) {
    _corrosion.request(req, res)
  } else {
    app(req, res)
  }
})

httpServer.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head)
  } else {
    socket.end()
  }
});

httpServer.on('listening', () => {
  console.log(`Amethyst is running at localhost:${port}`)
  console.log(`Timestamp ${new Date().toUTCString()}`)
});

httpServer.listen({ port: port })