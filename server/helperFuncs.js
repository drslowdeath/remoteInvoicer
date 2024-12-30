// import { Router, json } from 'express'
// const router = Router()
// import { existsSync, readdirSync, lstatSync, readFileSync } from 'fs'
// import { join, basename } from 'path'
// import getDb from '../database.js'
// const db = getDb()

// router.use(json())

// // Get all SVG's from a dir using Node
// function fromDir(startPath, filter) {
//   if (!existsSync(startPath)) {
//     console.log('No such directory')
//     return []
//   }
//   let svgCache = []
//   function findSVGs(directory) {
//     const files = readdirSync(directory)
//     for (const file of files) {
//       const filename = join(directory, file)
//       const stat = lstatSync(filename)
//       if (stat.isDirectory()) {
//         svgCache = svgCache.concat(findSVGs(filename))
//       } else if (filename.endsWith(filter)) {
//         const svgContent = readFileSync(filename, 'utf8') // Read SVG content
//         svgCache.push({
//           name: basename(filename),
//           content: svgContent, // Store SVG markup content
//         })
//       }
//     }
//     return svgCache
//   }
//   return findSVGs(startPath)
// }

// // Call it here:
// // fromDir('/public/images/', '.svg')

// // MARK: GET All SVGS ROUTE
// router.get('/getSvg', (req, res) => {
//   try {
//     const svgCache = fromDir('public/images', '.svg')
//     if (!svgCache.length) {
//       console.error('No SVG files found in public/images.')
//       return res.status(404).send('No SVG files found.')
//     }
//     return res.json(svgCache)
//   } catch (error) {
//     console.error('Error getting SVGs:', error)
//     return res.status(500).send('Server Error')
//   }
// })

// // Get all clients and their information
// router.get('/allClients', (req, res) => {
//   // SQLite query to fetch all clients
//   db.all('SELECT * FROM clients', [], (error, results) => {
//     if (error) {
//       return res.status(500).send(error)
//     }
//     res.json(results)
//   })
// })

// export default router
