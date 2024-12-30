import 'dotenv/config'
import express from 'express'
import ViteExpress from 'vite-express'
import { createServer as createViteServer } from 'vite'
import path from 'path'
import cors from 'cors'
import * as url from 'url'

// Db import
import getDb from './database.js'
// Routes import
import clientRoutes from './routes/clientRoutes.js'
import itemRoutes from './routes/styleRoutes.js'
import invoicingRoutes from './routes/invoicingRoutes.js'
import editorRoutes from './routes/editorRoutes.js'
import globalRoutes from './routes/globalRoutes.js'

// ENV
const PORT = parseInt(process.env.PORT, 10)
console.log(PORT)
const __filename = url.fileURLToPath(import.meta.url)

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()
app.use(express.json())
app.use(cors())

// Add backend API routes
app.use(globalRoutes)
app.use(clientRoutes)
app.use(itemRoutes)
app.use(invoicingRoutes)
app.use(editorRoutes)

// let serverOn = false
// let icons = []
// if (serverOn === true) {
//   icons.push(feather.icons.x)
//   console.log(icons)
// } else {
//   console.log('pooopooo')
// }
// Development Mode: Use Vite's Dev Middleware
if (process.env.NODE_ENV !== 'production') {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    root: path.resolve(__dirname, '../'),
  })

  app.use(vite.middlewares)
} else {
  // Production Mode: Serve built files
  const distPath = path.join(__dirname, '../dist')
  app.use(express.static(distPath))
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

// Start the server
ViteExpress.listen(app, PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
