import express from 'express'
import {
  getCollectionsByUserId,
  addArtworkToCollection,
  addNewCollection,
} from '../db/homepage'
import checkJwt from '../auth0'
import { JwtRequest } from '../auth0'

const router = express.Router()

router.get('/user/collections', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      return res.status(401).send('Unauthorized')
    }

    const collections = await getCollectionsByUserId(auth0Id)
    res.json(collections)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to get this users collections',
    })
  }
})

router.post('/user/collections', async (req, res) => {
  try {
    const { collectionId, artworkId } = req.body

    if (!req.body) {
      res.status(400).json({ error: 'New Art_Coll was invalid' })
    }

    const artColl = await addArtworkToCollection(collectionId, artworkId)
    if (artColl.length === 0) {
      return res.sendStatus(409)
    }

    res.json(artColl)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to add the artwork',
    })
  }
})

router.post('/user/add-collection', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      return res.status(401).send('Unauthorized')
    }

    let collection = req.body.newCollection
    if (!collection) {
      res.status(400).json({ error: 'New collection was invalid' })
    }
    if (!collection.coverImg) {
     collection = {...collection, coverImg: '/placeholder-image.png'}  
    }
    const [newCollection] = await addNewCollection(auth0Id, collection)
    res.json(newCollection)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to add a new collection',
    })
  }
})

export default router
