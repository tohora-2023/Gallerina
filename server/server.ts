import express from 'express'
import { join } from 'node:path'

import user from './routes/user'
import home from './routes/homepage'
import external from './routes/external'
import profile from './routes/profile'

import collectionItems from './routes/collectionItems'

// use this when implementing addToCollection button functionality
// import artworkInfo from './routes/artworkInfo'

// use this when implementing addToCollection button functionality
// import artworkInfo from './routes/artworkInfo'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use('/api/v1/user', user)
server.use('/api/v1/profile', profile)
server.use('/api/v1/collections', collectionItems)
server.use('/api/v1/home', home)
server.use('/api/v1', external)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
