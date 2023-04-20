import express from 'express'

import {
  deleteCollectionItemById,
  addNote,
  deleteNote,
  getArtCollectionDBAndNotesById,
} from '../db/collectionItems'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const collection = await getArtCollectionDBAndNotesById(id)
    res.json(collection)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/:id/:artId', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const artId = req.params.artId
    const collection = await deleteCollectionItemById(id, artId)
    res.json(collection)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/:collectionId/:artId', async (req, res) => {
  try {
    const collectionId = Number(req.params.collectionId)
    const artId = req.params.artId
    const note = req.body

    const newNote = await addNote(collectionId, note, artId)
    res.json(newNote)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/:collectionId/notes/:noteId', async (req, res) => {
  try {
    const collectionId = Number(req.params.collectionId)
    const noteId = Number(req.params.noteId)
    await deleteNote(noteId)
    const collection = await getArtCollectionDBAndNotesById(collectionId)
    res.json(collection)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

export default router
