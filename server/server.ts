import express from 'express'
import { join } from 'node:path'

import home from './routes/homepage'
import external from './routes/external'
import profile from './routes/profile'
import collectionItems from './routes/collectionItems'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use('/api/v1/profile/', profile)
server.use('/api/v1/profile/collections/', collectionItems)
server.use('/api/v1/home', home)
server.use('/api/v1/artworks', external)
server.use('/api/v1/', external)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
